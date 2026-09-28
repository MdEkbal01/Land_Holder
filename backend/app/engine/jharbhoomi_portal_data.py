from typing import Dict, Any, List

"""
Official Data Directory & Portal Links copied from Jharbhoomi (https://jharbhoomi.jharkhand.gov.in/newhome2)
and National DILRMP Pan-India State Portals.
"""

JHARBHOOMI_OFFICIAL_SERVICES: List[Dict[str, Any]] = [
    {
        "id": "apna-khata",
        "title_hi": "अपना खाता देखें (Record of Rights / RoR)",
        "title_en": "View Apna Khata / Khatian Record",
        "category": "Land Records",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/MISROR/DistrictMap",
        "description": "View district-wise and anchal-wise Khatian, tenant details, plot numbers, and tenant shares."
    },
    {
        "id": "register-2",
        "title_hi": "रजिस्टर-II देखें (Tenancy Ledger)",
        "title_en": "View Register-II (Mutation & Revenue Ledger)",
        "category": "Land Records",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/MISRegister2/DistrictMap",
        "description": "Inspect live Jamabandi Register-II records, annual rent demands, and current mutation status."
    },
    {
        "id": "khata-reg2-combined",
        "title_hi": "खाता एवं रजिस्टर-II देखें",
        "title_en": "Combined Khata & Register-II Verification",
        "category": "Land Records",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/MISROR_REG2/MISROR_REG2",
        "description": "Cross-verify Khatian entries against Jamabandi Register-II for inconsistency check."
    },
    {
        "id": "panji-2-plot-history",
        "title_hi": "पंजी -II - खेसरा वार विवरण",
        "title_en": "Plot Transaction & Khesra Transfer History",
        "category": "Land Records",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/MISROR_REG2/Plot_Tran_Hist",
        "description": "Track parcel-level alienation history, historical land transactions, and mutation logs."
    },
    {
        "id": "complete-khesra-details",
        "title_hi": "खेसरा का सम्पूर्ण विवरण देखें",
        "title_en": "Complete Khesra Master Dossier",
        "category": "Land Records",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/MISKhatianRegister2/DistrictMap",
        "description": "Comprehensive master profile of plot, including area, owner chain, and survey boundaries."
    },
    {
        "id": "land-bank",
        "title_hi": "भूमि बैंक (Government Land Bank)",
        "title_en": "State Government Land Bank Portal",
        "category": "Government Assets",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/NewlandBank",
        "description": "Directory of government, public, industrial, and unencumbered state-owned land parcels."
    },
    {
        "id": "online-mutation-apply",
        "title_hi": "ऑनलाइन दाख़िल-खारिज आवेदन (Online Mutation)",
        "title_en": "Online Mutation Filing Portal",
        "category": "Citizen Services",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/Operater/UserLogin",
        "description": "File statutory online mutation applications under Section 34/35 of Revenue Act."
    },
    {
        "id": "mutation-application-status",
        "title_hi": "दाखिल-खारिज आवेदन स्थिति",
        "title_en": "Track Mutation Application SLA Status",
        "category": "Citizen Services",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/ApplicationStatus/DistrictMap",
        "description": "Real-time SLA status tracker for filed mutation applications across all circle offices."
    },
    {
        "id": "jharbhunaksha",
        "title_hi": "भू-नक्शा (JharBhuNaksha Cadastral Maps)",
        "title_en": "JharBhuNaksha GIS Cadastral Maps",
        "category": "GIS Mapping",
        "official_url": "https://jharbhunaksha.jharkhand.gov.in/",
        "description": "Vectorized GIS Geo-referenced cadastral map overlays and spatial plot boundaries."
    },
    {
        "id": "parishodhan",
        "title_hi": "पार्षद सुधार / रिकार्ड सुधार पोर्टल (Parishodhan)",
        "title_en": "Parishodhan Record Correction Portal",
        "category": "Grievance & Rectification",
        "official_url": "https://parishodhan.jharkhand.gov.in",
        "description": "Rectify errors, spelling mistakes, area mismatches, or missing entries in digitised Jamabandi."
    },
    {
        "id": "online-lagan",
        "title_hi": "ऑनलाइन लगान एवं रसीद भुगतान (Online Lagan)",
        "title_en": "Online Land Revenue Tax & Receipt Payment",
        "category": "Tax & Fees",
        "official_url": "https://jharbhulagan.jharkhand.gov.in/",
        "description": "Pay annual land revenue tax (Lagan) online and generate instant e-Receipts."
    },
    {
        "id": "ercms",
        "title_hi": "राजस्व न्यायालय प्रबंधन प्रणाली (e-Revenue Court)",
        "title_en": "e-Revenue Court Management System (eRCMS)",
        "category": "Legal & Dispute",
        "official_url": "https://erevenuecourt.jharkhand.gov.in/",
        "description": "Track revenue court cases, stay orders, dispute cause lists, and Tahsildar/SDM rulings."
    },
    {
        "id": "jharnibandhan",
        "title_hi": "निबंधन - संपत्ति पंजीकरण (JharNibandhan)",
        "title_en": "JharNibandhan Property Registration Portal",
        "category": "Registration",
        "official_url": "http://jharnibandhan.gov.in",
        "description": "Schedule slot booking for deed registration, e-Stamp purchase, and valuation calculation."
    },
    {
        "id": "complain-monitoring",
        "title_hi": "शिकायत अनुश्रवण प्रणाली (Grievance Portal)",
        "title_en": "Revenue Grievance Complaint Monitoring",
        "category": "Grievance & Rectification",
        "official_url": "https://164.100.191.9",
        "description": "Lodge formal complaints against administrative SLA delays or fraudulent land alienation."
    },
    {
        "id": "kaithi-book",
        "title_hi": "📄 कैथी लिपि पाठ्य पुस्तिका (Kaithi Script Primer)",
        "title_en": "Kaithi Script Text Book & Reader (PDF)",
        "category": "Documentation",
        "official_url": "https://jharbhoomi.jharkhand.gov.in/User_Manual/KaithiBook_0001.pdf",
        "description": "Official reference guidebook for translating historical Kaithi script land records."
    }
]

JHARBHOOMI_OFFICIAL_SOPS: List[Dict[str, str]] = [
    {
        "title": "SOP 102 - Property & Deed Registration Procedure",
        "url": "https://jharbhoomi.jharkhand.gov.in/UserImages/SOP/102_registration.pdf",
        "type": "PDF SOP"
    },
    {
        "title": "SOP 103 - Land Records Digitization & Mutation Protocols",
        "url": "https://jharbhoomi.jharkhand.gov.in/UserImages/SOP/103_Land_Records.pdf",
        "type": "PDF SOP"
    },
    {
        "title": "SOP 104 - RTI & CPGRAM Grievance Handling Directives",
        "url": "https://jharbhoomi.jharkhand.gov.in/UserImages/SOP/104_RTI_CPGRAM.pdf",
        "type": "PDF SOP"
    },
    {
        "title": "SOP Right to Service Guarantee Notification (Adhisuchna 1000)",
        "url": "https://jharbhoomi.jharkhand.gov.in/UserImages/SOP/Adhisuchna_No_1000.pdf",
        "type": "Gazette SOP"
    },
    {
        "title": "Land Revenue eCompendium Compilation (2000 - 2019)",
        "url": "https://jharbhoomi.jharkhand.gov.in/UserImages/Compendium/ATR.pdf",
        "type": "eCompendium PDF"
    },
    {
        "title": "All Levies & Revenue Fee Declaration (Except GST)",
        "url": "https://jharbhoomi.jharkhand.gov.in/images/decleration.pdf",
        "type": "PDF Notice"
    }
]

JHARBHOOMI_CIRCULARS_AND_NOTIFICATIONS: List[Dict[str, str]] = [
    {
        "title": "Re-designation of Sarwar Alam, Lower Division Clerk to Higher Division Clerk Pay Matrix",
        "circular_no": "744",
        "date": "07/12/2022",
        "url": "https://jharbhoomi.jharkhand.gov.in/View?notify=3273"
    },
    {
        "title": "Free Government Land Transfer & NOC Issuance to Jharkhand Urja Vikas Nigam Ltd (JUVNL)",
        "circular_no": "3764",
        "date": "02/11/2022",
        "url": "https://jharbhoomi.jharkhand.gov.in/View?notify=3272"
    },
    {
        "title": "Nomination of NISG for IT Advisory & Consultancy Services in Land Record Modernization",
        "circular_no": "3274",
        "date": "2022",
        "url": "https://jharbhoomi.jharkhand.gov.in/View?notify=3274"
    },
    {
        "title": "Minimum Unsalable Agricultural Land Rate Fixation in Santhal Pargana Division",
        "circular_no": "3270",
        "date": "2022",
        "url": "https://jharbhoomi.jharkhand.gov.in/View?notify=3270"
    },
    {
        "title": "Formation of High-Level Committee Restricting Land Sale/Purchase Post-Land Acquisition Notification",
        "circular_no": "3249",
        "date": "2022",
        "url": "https://jharbhoomi.jharkhand.gov.in/View?notify=3249"
    },
    {
        "title": "The Jharkhand Mineral Bearing Lands (Covid-19 Pandemic) Act, 2020 & Cess Rules",
        "circular_no": "3269",
        "date": "2020",
        "url": "https://jharbhoomi.jharkhand.gov.in/View?notify=3269"
    },
    {
        "title": "Standard Operating Procedure (SOP) Formulation for Protection of State Government Lands",
        "circular_no": "3266",
        "date": "2020",
        "url": "https://jharbhoomi.jharkhand.gov.in/View?notify=3266"
    }
]

def get_jharbhoomi_directory_data() -> Dict[str, Any]:
    """Returns all copied structured data from Jharbhoomi official portal."""
    return {
        "portal_name": "Jharbhoomi - Government of Jharkhand Land Records Portal",
        "portal_url": "https://jharbhoomi.jharkhand.gov.in/newhome2",
        "core_services": JHARBHOOMI_OFFICIAL_SERVICES,
        "sops": JHARBHOOMI_OFFICIAL_SOPS,
        "circulars": JHARBHOOMI_CIRCULARS_AND_NOTIFICATIONS
    }
