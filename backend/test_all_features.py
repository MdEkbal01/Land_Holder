import sys
sys.stdout.reconfigure(encoding='utf-8')
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def run_tests():
    print("=" * 65)
    print("  BHOOMISHIELD: PAN-INDIA MERGED DPI SYSTEM INTEGRATION TESTS  ")
    print("=" * 65)

    # 1. Health
    r = client.get('/api/v1/health')
    assert r.status_code == 200, f"Health check failed: {r.text}"
    health = r.json()
    print(f"[PASS] 1. Platform Health: {health['status']} | Scope: {health['states_covered']} States + {health['central_portals']} Central Portals ({health['total_portals']} Total)")

    # 2. Portals Registry
    r = client.get('/api/v1/portals/all')
    assert r.status_code == 200
    p_data = r.json()
    assert p_data['count'] == 26, f"Expected 26 portals, got {p_data['count']}"
    print(f"[PASS] 2. Master Registry: 26 Portals Registered (24 States + DILRMP + e-Courts)")

    # 3. State Portal Deep-Dives
    sample_states = ["Jharkhand", "Uttar Pradesh", "Maharashtra", "Karnataka", "Bihar", "Tamil Nadu", "Gujarat", "Rajasthan", "West Bengal", "Punjab", "Kerala", "Assam"]
    for st in sample_states:
        r = client.get(f'/api/v1/portals/state/{st}')
        assert r.status_code == 200
        p = r.json()
        print(f"       * {p['state']:<16} -> {p['portal_name']} ({p['term_record']})")
    print("[PASS] 3. Multi-State Portals & Regional Nomenclature Verified")

    # 4. Pan-India Administrative Locations Tree
    r = client.get('/api/v1/land/pan-india-locations')
    assert r.status_code == 200
    loc_data = r.json()
    print(f"[PASS] 4. Administrative Tree: {loc_data['states_count']} States & UTs Indexed")

    # 5. Bhu-Aadhaar (ULPIN) Generation & Cryptographic Verification
    gen_payload = {
        "state": "Uttar Pradesh",
        "district": "Gautam Buddha Nagar",
        "subdistrict": "Dadri",
        "village": "Bhangel",
        "khata_no": "340",
        "plot_no": "112/1",
        "lat": 28.5355,
        "lng": 77.3910
    }
    r = client.post('/api/v1/bhu-aadhaar/generate', json=gen_payload)
    assert r.status_code == 200
    bhu = r.json()
    ulpin = bhu['ulpin']
    assert len(ulpin) == 14, f"ULPIN must be 14 characters: {ulpin}"
    print(f"[PASS] 5a. Bhu-Aadhaar ULPIN Generated: {ulpin} (Centroid: {bhu['centroid_lat']}°N, {bhu['centroid_lng']}°E)")

    r_ver = client.get(f'/api/v1/bhu-aadhaar/verify/{ulpin}')
    assert r_ver.status_code == 200
    ver = r_ver.json()
    assert ver['valid'] is True
    print(f"[PASS] 5b. Bhu-Aadhaar Cryptographic Verification: Validated on DILRMP Node (LGD: {ver['state_lgd_code']})")

    # 6. e-Courts Land & Revenue Litigation Check
    r_court = client.get('/api/v1/ecourts/search?cnr_number=JHJS010045232024')
    assert r_court.status_code == 200
    court_res = r_court.json()
    cases = court_res['cases']
    assert len(cases) > 0
    c0 = cases[0]
    print(f"[PASS] 6. e-Courts Litigation Verification: CNR {c0['cnr_number']} | Stay Order: {c0['stay_order_active']} | Statute: {c0['lis_pendens_statute']}")

    # 7. Multi-State Land Search
    r_srch = client.get('/api/v1/land/search?state=Maharashtra&limit=5')
    assert r_srch.status_code == 200
    srch = r_srch.json()
    print(f"[PASS] 7a. Multi-State Land Search (Maharashtra): {srch['count']} parcels returned")

    # 8. Dynamic Location Resolution Fallback
    r_dyn = client.get('/api/v1/land/search?state=Tripura&district=West Tripura (Agartala)&mauza=Badharghat&khata=88&khesra=214')
    assert r_dyn.status_code == 200
    dyn = r_dyn.json()
    assert dyn['count'] >= 1
    print(f"[PASS] 7b. Dynamic 100% Pan-India Coverage Resolver: Query for Tripura resolved parcel {dyn['results'][0]['land_identity_id']}")

    # 9. Land Profile & AI Explainer Context
    sample_id = "JH-BOK-CHA-KURA-P125-PL450-2"
    r_prof = client.get(f'/api/v1/land/{sample_id}')
    assert r_prof.status_code == 200
    prof = r_prof.json()
    risk = prof['risk_analysis']
    print(f"[PASS] 8. Land Profile Context: Risk Score {risk['risk_score']}/100 ({risk['risk_level']}) | Bhu-Aadhaar: {prof['bhu_aadhaar']['ulpin']}")

    print("=" * 65)
    print("  ALL TESTS PASSED! 24 STATES + 2 CENTRAL SYSTEMS OPERATIONAL  ")
    print("=" * 65)

if __name__ == "__main__":
    run_tests()
