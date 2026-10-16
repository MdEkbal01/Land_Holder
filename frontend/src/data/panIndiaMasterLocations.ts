export interface StateLocationInfo {
  term_anchal: string;
  term_record: string;
  term_plot: string;
  term_holding: string;
  districts: Record<string, Record<string, string[]>>;
}

export const ALL_INDIA_STATES: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi (NCT)",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

export const PAN_INDIA_MASTER_TREE: Record<string, StateLocationInfo> = {
  "Andhra Pradesh": {
    "term_anchal": "Mandal / Revenue Division",
    "term_record": "Adangal / Pahani & RoR-1B",
    "term_plot": "Survey / Sub-Division No",
    "term_holding": "Khata / Pattadar Passbook No",
    "districts": {
      "Alluri Sitharama Raju": {
        "Alluri Sitharama Raju Sadar": [
          "Alluri Sitharama Raju Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Alluri Sitharama Raju Rural": [
          "Gram Alluri Sitharama Raju",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Anakapalli": {
        "Anakapalli Sadar": [
          "Anakapalli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Anakapalli Rural": [
          "Gram Anakapalli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ananthapuramu": {
        "Ananthapuramu Sadar": [
          "Ananthapuramu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ananthapuramu Rural": [
          "Gram Ananthapuramu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Annamayya": {
        "Annamayya Sadar": [
          "Annamayya Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Annamayya Rural": [
          "Gram Annamayya",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bapatla": {
        "Bapatla Sadar": [
          "Bapatla Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bapatla Rural": [
          "Gram Bapatla",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chittoor": {
        "Chittoor Sadar": [
          "Chittoor Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chittoor Rural": [
          "Gram Chittoor",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dr. B.R. Ambedkar Konaseema": {
        "Dr. B.R. Ambedkar Konaseema Sadar": [
          "Dr. B.R. Ambedkar Konaseema Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dr. B.R. Ambedkar Konaseema Rural": [
          "Gram Dr. B.R. Ambedkar Konaseema",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "East Godavari": {
        "East Godavari Sadar": [
          "East Godavari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Godavari Rural": [
          "Gram East Godavari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Eluru": {
        "Eluru Sadar": [
          "Eluru Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Eluru Rural": [
          "Gram Eluru",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Guntur": {
        "Guntur Sadar": [
          "Guntur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Guntur Rural": [
          "Gram Guntur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Mangalagiri": [
          "Amaravati Core",
          "Nidamarru",
          "Nowlur"
        ],
        "Guntur Urban": [
          "Kothapet",
          "Arundelpet",
          "Brodipet"
        ]
      },
      "Kakinada": {
        "Kakinada Sadar": [
          "Kakinada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kakinada Rural": [
          "Gram Kakinada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Krishna": {
        "Krishna Sadar": [
          "Krishna Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Krishna Rural": [
          "Gram Krishna",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kurnool": {
        "Kurnool Sadar": [
          "Kurnool Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kurnool Rural": [
          "Gram Kurnool",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nandyal": {
        "Nandyal Sadar": [
          "Nandyal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nandyal Rural": [
          "Gram Nandyal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "NTR": {
        "NTR Sadar": [
          "NTR Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "NTR Rural": [
          "Gram NTR",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Vijayawada Urban": [
          "Governorpet",
          "Benz Circle",
          "Patamata"
        ],
        "Gannavaram": [
          "Kesarapalle",
          "Atkur",
          "Gannavaram Airport"
        ]
      },
      "Palnadu": {
        "Palnadu Sadar": [
          "Palnadu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Palnadu Rural": [
          "Gram Palnadu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Parvathipuram Manyam": {
        "Parvathipuram Manyam Sadar": [
          "Parvathipuram Manyam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Parvathipuram Manyam Rural": [
          "Gram Parvathipuram Manyam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Prakasam": {
        "Prakasam Sadar": [
          "Prakasam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Prakasam Rural": [
          "Gram Prakasam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Srikakulam": {
        "Srikakulam Sadar": [
          "Srikakulam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Srikakulam Rural": [
          "Gram Srikakulam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sri Potti Sriramulu Nellore": {
        "Sri Potti Sriramulu Nellore Sadar": [
          "Sri Potti Sriramulu Nellore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sri Potti Sriramulu Nellore Rural": [
          "Gram Sri Potti Sriramulu Nellore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sri Sathya Sai": {
        "Sri Sathya Sai Sadar": [
          "Sri Sathya Sai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sri Sathya Sai Rural": [
          "Gram Sri Sathya Sai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tirupati": {
        "Tirupati Sadar": [
          "Tirupati Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tirupati Rural": [
          "Gram Tirupati",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Visakhapatnam": {
        "Visakhapatnam Sadar": [
          "Visakhapatnam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Visakhapatnam Rural": [
          "Gram Visakhapatnam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Gajuwaka": [
          "Sheelanagar",
          "Duvvada",
          "Kurmannapalem"
        ],
        "Visakhapatnam Urban": [
          "MVP Colony",
          "Siripuram",
          "Madhurawada"
        ]
      },
      "Vizianagaram": {
        "Vizianagaram Sadar": [
          "Vizianagaram Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Vizianagaram Rural": [
          "Gram Vizianagaram",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Godavari": {
        "West Godavari Sadar": [
          "West Godavari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Godavari Rural": [
          "Gram West Godavari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "YSR Kadapa": {
        "YSR Kadapa Sadar": [
          "YSR Kadapa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "YSR Kadapa Rural": [
          "Gram YSR Kadapa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Arunachal Pradesh": {
    "term_anchal": "Circle / Sub-Division",
    "term_record": "Land Possession Certificate (LPC)",
    "term_plot": "Plot / Dag No",
    "term_holding": "Holding No",
    "districts": {
      "Anjaw": {
        "Anjaw Sadar": [
          "Anjaw Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Anjaw Rural": [
          "Gram Anjaw",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Changlang": {
        "Changlang Sadar": [
          "Changlang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Changlang Rural": [
          "Gram Changlang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dibang Valley": {
        "Dibang Valley Sadar": [
          "Dibang Valley Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dibang Valley Rural": [
          "Gram Dibang Valley",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "East Kameng": {
        "East Kameng Sadar": [
          "East Kameng Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Kameng Rural": [
          "Gram East Kameng",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "East Siang": {
        "East Siang Sadar": [
          "East Siang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Siang Rural": [
          "Gram East Siang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kamle": {
        "Kamle Sadar": [
          "Kamle Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kamle Rural": [
          "Gram Kamle",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kra Daadi": {
        "Kra Daadi Sadar": [
          "Kra Daadi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kra Daadi Rural": [
          "Gram Kra Daadi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kurung Kumey": {
        "Kurung Kumey Sadar": [
          "Kurung Kumey Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kurung Kumey Rural": [
          "Gram Kurung Kumey",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lepa Rada": {
        "Lepa Rada Sadar": [
          "Lepa Rada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lepa Rada Rural": [
          "Gram Lepa Rada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lohit": {
        "Lohit Sadar": [
          "Lohit Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lohit Rural": [
          "Gram Lohit",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Longding": {
        "Longding Sadar": [
          "Longding Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Longding Rural": [
          "Gram Longding",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lower Dibang Valley": {
        "Lower Dibang Valley Sadar": [
          "Lower Dibang Valley Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lower Dibang Valley Rural": [
          "Gram Lower Dibang Valley",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lower Siang": {
        "Lower Siang Sadar": [
          "Lower Siang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lower Siang Rural": [
          "Gram Lower Siang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lower Subansiri": {
        "Lower Subansiri Sadar": [
          "Lower Subansiri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lower Subansiri Rural": [
          "Gram Lower Subansiri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Namsai": {
        "Namsai Sadar": [
          "Namsai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Namsai Rural": [
          "Gram Namsai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pakke Kessang": {
        "Pakke Kessang Sadar": [
          "Pakke Kessang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pakke Kessang Rural": [
          "Gram Pakke Kessang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Papum Pare": {
        "Papum Pare Sadar": [
          "Papum Pare Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Papum Pare Rural": [
          "Gram Papum Pare",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shi Yomi": {
        "Shi Yomi Sadar": [
          "Shi Yomi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shi Yomi Rural": [
          "Gram Shi Yomi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Siang": {
        "Siang Sadar": [
          "Siang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Siang Rural": [
          "Gram Siang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tawang": {
        "Tawang Sadar": [
          "Tawang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tawang Rural": [
          "Gram Tawang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tirap": {
        "Tirap Sadar": [
          "Tirap Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tirap Rural": [
          "Gram Tirap",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Upper Siang": {
        "Upper Siang Sadar": [
          "Upper Siang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Upper Siang Rural": [
          "Gram Upper Siang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Upper Subansiri": {
        "Upper Subansiri Sadar": [
          "Upper Subansiri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Upper Subansiri Rural": [
          "Gram Upper Subansiri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Kameng": {
        "West Kameng Sadar": [
          "West Kameng Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Kameng Rural": [
          "Gram West Kameng",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Siang": {
        "West Siang Sadar": [
          "West Siang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Siang Rural": [
          "Gram West Siang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Itanagar Capital Complex": {
        "Itanagar Capital Complex Sadar": [
          "Itanagar Capital Complex Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Itanagar Capital Complex Rural": [
          "Gram Itanagar Capital Complex",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Assam": {
    "term_anchal": "Revenue Circle",
    "term_record": "Chitha / Jamabandi RoR",
    "term_plot": "Dag No",
    "term_holding": "Patta No",
    "districts": {
      "Baksa": {
        "Baksa Sadar": [
          "Baksa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Baksa Rural": [
          "Gram Baksa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Barpeta": {
        "Barpeta Sadar": [
          "Barpeta Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Barpeta Rural": [
          "Gram Barpeta",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Biswanath": {
        "Biswanath Sadar": [
          "Biswanath Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Biswanath Rural": [
          "Gram Biswanath",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bongaigaon": {
        "Bongaigaon Sadar": [
          "Bongaigaon Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bongaigaon Rural": [
          "Gram Bongaigaon",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Cachar": {
        "Cachar Sadar": [
          "Cachar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Cachar Rural": [
          "Gram Cachar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sonai": [
          "Sonai Khas",
          "Dholai"
        ],
        "Silchar": [
          "Tarapur",
          "Meherpur",
          "Rangirkhari"
        ]
      },
      "Charaideo": {
        "Charaideo Sadar": [
          "Charaideo Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Charaideo Rural": [
          "Gram Charaideo",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chirang": {
        "Chirang Sadar": [
          "Chirang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chirang Rural": [
          "Gram Chirang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Darrang": {
        "Darrang Sadar": [
          "Darrang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Darrang Rural": [
          "Gram Darrang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dhemaji": {
        "Dhemaji Sadar": [
          "Dhemaji Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dhemaji Rural": [
          "Gram Dhemaji",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dhubri": {
        "Dhubri Sadar": [
          "Dhubri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dhubri Rural": [
          "Gram Dhubri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dibrugarh": {
        "Dibrugarh Sadar": [
          "Dibrugarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dibrugarh Rural": [
          "Gram Dibrugarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dima Hasao": {
        "Dima Hasao Sadar": [
          "Dima Hasao Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dima Hasao Rural": [
          "Gram Dima Hasao",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Goalpara": {
        "Goalpara Sadar": [
          "Goalpara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Goalpara Rural": [
          "Gram Goalpara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Golaghat": {
        "Golaghat Sadar": [
          "Golaghat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Golaghat Rural": [
          "Gram Golaghat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hailakandi": {
        "Hailakandi Sadar": [
          "Hailakandi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hailakandi Rural": [
          "Gram Hailakandi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hojai": {
        "Hojai Sadar": [
          "Hojai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hojai Rural": [
          "Gram Hojai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jorhat": {
        "Jorhat Sadar": [
          "Jorhat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jorhat Rural": [
          "Gram Jorhat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kamrup": {
        "Kamrup Sadar": [
          "Kamrup Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kamrup Rural": [
          "Gram Kamrup",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kamrup Metropolitan": {
        "Kamrup Metropolitan Sadar": [
          "Kamrup Metropolitan Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kamrup Metropolitan Rural": [
          "Gram Kamrup Metropolitan",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Dispur": [
          "Khanapara",
          "GS Road",
          "Beltola",
          "Six Mile"
        ],
        "Guwahati": [
          "Ulubari",
          "Chandmari",
          "Paltan Bazar"
        ]
      },
      "Karbi Anglong": {
        "Karbi Anglong Sadar": [
          "Karbi Anglong Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Karbi Anglong Rural": [
          "Gram Karbi Anglong",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Karimganj": {
        "Karimganj Sadar": [
          "Karimganj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Karimganj Rural": [
          "Gram Karimganj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kokrajhar": {
        "Kokrajhar Sadar": [
          "Kokrajhar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kokrajhar Rural": [
          "Gram Kokrajhar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lakhimpur": {
        "Lakhimpur Sadar": [
          "Lakhimpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lakhimpur Rural": [
          "Gram Lakhimpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Majuli": {
        "Majuli Sadar": [
          "Majuli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Majuli Rural": [
          "Gram Majuli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Morigaon": {
        "Morigaon Sadar": [
          "Morigaon Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Morigaon Rural": [
          "Gram Morigaon",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nagaon": {
        "Nagaon Sadar": [
          "Nagaon Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nagaon Rural": [
          "Gram Nagaon",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nalbari": {
        "Nalbari Sadar": [
          "Nalbari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nalbari Rural": [
          "Gram Nalbari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sivasagar": {
        "Sivasagar Sadar": [
          "Sivasagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sivasagar Rural": [
          "Gram Sivasagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sonitpur": {
        "Sonitpur Sadar": [
          "Sonitpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sonitpur Rural": [
          "Gram Sonitpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South Salmara-Mankachar": {
        "South Salmara-Mankachar Sadar": [
          "South Salmara-Mankachar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South Salmara-Mankachar Rural": [
          "Gram South Salmara-Mankachar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tamulpur": {
        "Tamulpur Sadar": [
          "Tamulpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tamulpur Rural": [
          "Gram Tamulpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tinsukia": {
        "Tinsukia Sadar": [
          "Tinsukia Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tinsukia Rural": [
          "Gram Tinsukia",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Udalguri": {
        "Udalguri Sadar": [
          "Udalguri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Udalguri Rural": [
          "Gram Udalguri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Karbi Anglong": {
        "West Karbi Anglong Sadar": [
          "West Karbi Anglong Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Karbi Anglong Rural": [
          "Gram West Karbi Anglong",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bajali": {
        "Bajali Sadar": [
          "Bajali Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bajali Rural": [
          "Gram Bajali",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Bihar": {
    "term_anchal": "Anchal / Block",
    "term_record": "Khatian & Jamabandi (Dakhil-Kharij)",
    "term_plot": "Khesra No",
    "term_holding": "Khata Number",
    "districts": {
      "Araria": {
        "Araria Sadar": [
          "Araria Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Araria Rural": [
          "Gram Araria",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Arwal": {
        "Arwal Sadar": [
          "Arwal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Arwal Rural": [
          "Gram Arwal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Aurangabad": {
        "Aurangabad Sadar": [
          "Aurangabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Aurangabad Rural": [
          "Gram Aurangabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Banka": {
        "Banka Sadar": [
          "Banka Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Banka Rural": [
          "Gram Banka",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Begusarai": {
        "Begusarai Sadar": [
          "Begusarai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Begusarai Rural": [
          "Gram Begusarai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhagalpur": {
        "Bhagalpur Sadar": [
          "Bhagalpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhagalpur Rural": [
          "Gram Bhagalpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sultanganj": [
          "Sultanganj Khas",
          "Shahkund"
        ],
        "Jagdishpur": [
          "Naugachia",
          "Sabour",
          "Nathnagar",
          "Kahalgon"
        ]
      },
      "Bhojpur": {
        "Bhojpur Sadar": [
          "Bhojpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhojpur Rural": [
          "Gram Bhojpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Buxar": {
        "Buxar Sadar": [
          "Buxar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Buxar Rural": [
          "Gram Buxar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Darbhanga": {
        "Darbhanga Sadar": [
          "Darbhanga Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Benipur",
          "Baheri",
          "Laheriasarai"
        ],
        "Darbhanga Rural": [
          "Gram Darbhanga",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Hayaghat": [
          "Keoti",
          "Hayaghat Khas",
          "Singhwara"
        ]
      },
      "East Champaran": {
        "East Champaran Sadar": [
          "East Champaran Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Champaran Rural": [
          "Gram East Champaran",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gaya": {
        "Gaya Sadar": [
          "Gaya Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gaya Rural": [
          "Gram Gaya",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sherghati": [
          "Dobhi",
          "Sherghati Khas",
          "Barachatti"
        ],
        "Gaya Town": [
          "Tekari",
          "Manpur",
          "Bodh Gaya",
          "Belaganj"
        ]
      },
      "Gopalganj": {
        "Gopalganj Sadar": [
          "Gopalganj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gopalganj Rural": [
          "Gram Gopalganj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jamui": {
        "Jamui Sadar": [
          "Jamui Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jamui Rural": [
          "Gram Jamui",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jehanabad": {
        "Jehanabad Sadar": [
          "Jehanabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jehanabad Rural": [
          "Gram Jehanabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kaimur": {
        "Kaimur Sadar": [
          "Kaimur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kaimur Rural": [
          "Gram Kaimur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Katihar": {
        "Katihar Sadar": [
          "Katihar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Katihar Rural": [
          "Gram Katihar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khagaria": {
        "Khagaria Sadar": [
          "Khagaria Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khagaria Rural": [
          "Gram Khagaria",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kishanganj": {
        "Kishanganj Sadar": [
          "Kishanganj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kishanganj Rural": [
          "Gram Kishanganj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lakhisarai": {
        "Lakhisarai Sadar": [
          "Lakhisarai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lakhisarai Rural": [
          "Gram Lakhisarai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Madhepura": {
        "Madhepura Sadar": [
          "Madhepura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Madhepura Rural": [
          "Gram Madhepura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Madhubani": {
        "Madhubani Sadar": [
          "Madhubani Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Madhubani Rural": [
          "Gram Madhubani",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Munger": {
        "Munger Sadar": [
          "Munger Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Munger Rural": [
          "Gram Munger",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Muzaffarpur": {
        "Muzaffarpur Sadar": [
          "Muzaffarpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Muzaffarpur Rural": [
          "Gram Muzaffarpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Mushahari": [
          "Ahiyapur",
          "Motipur",
          "Kanti",
          "Brahmpura"
        ],
        "Sakra": [
          "Dholi",
          "Muraul",
          "Sakra Khas"
        ]
      },
      "Nalanda": {
        "Nalanda Sadar": [
          "Nalanda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nalanda Rural": [
          "Gram Nalanda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nawada": {
        "Nawada Sadar": [
          "Nawada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nawada Rural": [
          "Gram Nawada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Patna": {
        "Patna Sadar": [
          "Patna Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Rajendra Nagar",
          "Phulwari Sharif",
          "Kankarbagh"
        ],
        "Patna Rural": [
          "Gram Patna",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Danapur": [
          "Khagaul",
          "Maner",
          "Digha",
          "Saguna"
        ],
        "Barh": [
          "Mokama",
          "Barh Khas",
          "Bakhtiyarpur"
        ]
      },
      "Purnia": {
        "Purnia Sadar": [
          "Purnia Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Purnia Rural": [
          "Gram Purnia",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rohtas": {
        "Rohtas Sadar": [
          "Rohtas Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rohtas Rural": [
          "Gram Rohtas",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Saharsa": {
        "Saharsa Sadar": [
          "Saharsa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Saharsa Rural": [
          "Gram Saharsa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Samastipur": {
        "Samastipur Sadar": [
          "Samastipur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Samastipur Rural": [
          "Gram Samastipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Saran": {
        "Saran Sadar": [
          "Saran Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Saran Rural": [
          "Gram Saran",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sheikhpura": {
        "Sheikhpura Sadar": [
          "Sheikhpura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sheikhpura Rural": [
          "Gram Sheikhpura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sheohar": {
        "Sheohar Sadar": [
          "Sheohar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sheohar Rural": [
          "Gram Sheohar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sitamarhi": {
        "Sitamarhi Sadar": [
          "Sitamarhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sitamarhi Rural": [
          "Gram Sitamarhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Siwan": {
        "Siwan Sadar": [
          "Siwan Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Siwan Rural": [
          "Gram Siwan",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Supaul": {
        "Supaul Sadar": [
          "Supaul Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Supaul Rural": [
          "Gram Supaul",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Vaishali": {
        "Vaishali Sadar": [
          "Vaishali Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Vaishali Rural": [
          "Gram Vaishali",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Champaran": {
        "West Champaran Sadar": [
          "West Champaran Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Champaran Rural": [
          "Gram West Champaran",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Chhattisgarh": {
    "term_anchal": "Tehsil",
    "term_record": "B-1 Khasra & P-II Khatauni",
    "term_plot": "Khasra No",
    "term_holding": "Khatauni Number",
    "districts": {
      "Balod": {
        "Balod Sadar": [
          "Balod Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Balod Rural": [
          "Gram Balod",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Baloda Bazar": {
        "Baloda Bazar Sadar": [
          "Baloda Bazar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Baloda Bazar Rural": [
          "Gram Baloda Bazar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Balrampur": {
        "Balrampur Sadar": [
          "Balrampur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Balrampur Rural": [
          "Gram Balrampur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bastar": {
        "Bastar Sadar": [
          "Bastar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bastar Rural": [
          "Gram Bastar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bemetara": {
        "Bemetara Sadar": [
          "Bemetara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bemetara Rural": [
          "Gram Bemetara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bijapur": {
        "Bijapur Sadar": [
          "Bijapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bijapur Rural": [
          "Gram Bijapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bilaspur": {
        "Bilaspur Sadar": [
          "Bilaspur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bilaspur Rural": [
          "Gram Bilaspur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dantewada": {
        "Dantewada Sadar": [
          "Dantewada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dantewada Rural": [
          "Gram Dantewada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dhamtari": {
        "Dhamtari Sadar": [
          "Dhamtari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dhamtari Rural": [
          "Gram Dhamtari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Durg": {
        "Durg Sadar": [
          "Durg Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Durg Rural": [
          "Gram Durg",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gariaband": {
        "Gariaband Sadar": [
          "Gariaband Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gariaband Rural": [
          "Gram Gariaband",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gaurela-Pendra-Marwahi": {
        "Gaurela-Pendra-Marwahi Sadar": [
          "Gaurela-Pendra-Marwahi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gaurela-Pendra-Marwahi Rural": [
          "Gram Gaurela-Pendra-Marwahi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Janjgir-Champa": {
        "Janjgir-Champa Sadar": [
          "Janjgir-Champa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Janjgir-Champa Rural": [
          "Gram Janjgir-Champa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jashpur": {
        "Jashpur Sadar": [
          "Jashpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jashpur Rural": [
          "Gram Jashpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kabirdham": {
        "Kabirdham Sadar": [
          "Kabirdham Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kabirdham Rural": [
          "Gram Kabirdham",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kanker": {
        "Kanker Sadar": [
          "Kanker Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kanker Rural": [
          "Gram Kanker",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kondagaon": {
        "Kondagaon Sadar": [
          "Kondagaon Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kondagaon Rural": [
          "Gram Kondagaon",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Korba": {
        "Korba Sadar": [
          "Korba Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Korba Rural": [
          "Gram Korba",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Koriya": {
        "Koriya Sadar": [
          "Koriya Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Koriya Rural": [
          "Gram Koriya",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mahasamund": {
        "Mahasamund Sadar": [
          "Mahasamund Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mahasamund Rural": [
          "Gram Mahasamund",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Manendragarh-Chirmiri-Bharatpur": {
        "Manendragarh-Chirmiri-Bharatpur Sadar": [
          "Manendragarh-Chirmiri-Bharatpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Manendragarh-Chirmiri-Bharatpur Rural": [
          "Gram Manendragarh-Chirmiri-Bharatpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mohla-Manpur-Ambagarh Chowki": {
        "Mohla-Manpur-Ambagarh Chowki Sadar": [
          "Mohla-Manpur-Ambagarh Chowki Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mohla-Manpur-Ambagarh Chowki Rural": [
          "Gram Mohla-Manpur-Ambagarh Chowki",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mungeli": {
        "Mungeli Sadar": [
          "Mungeli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mungeli Rural": [
          "Gram Mungeli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Narayanpur": {
        "Narayanpur Sadar": [
          "Narayanpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Narayanpur Rural": [
          "Gram Narayanpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Raigarh": {
        "Raigarh Sadar": [
          "Raigarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Raigarh Rural": [
          "Gram Raigarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Raipur": {
        "Raipur Sadar": [
          "Raipur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Raipur Rural": [
          "Gram Raipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rajnandgaon": {
        "Rajnandgaon Sadar": [
          "Rajnandgaon Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rajnandgaon Rural": [
          "Gram Rajnandgaon",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sakti": {
        "Sakti Sadar": [
          "Sakti Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sakti Rural": [
          "Gram Sakti",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sarangarh-Bilaigarh": {
        "Sarangarh-Bilaigarh Sadar": [
          "Sarangarh-Bilaigarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sarangarh-Bilaigarh Rural": [
          "Gram Sarangarh-Bilaigarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sukma": {
        "Sukma Sadar": [
          "Sukma Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sukma Rural": [
          "Gram Sukma",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Surajpur": {
        "Surajpur Sadar": [
          "Surajpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Surajpur Rural": [
          "Gram Surajpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Surguja": {
        "Surguja Sadar": [
          "Surguja Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Surguja Rural": [
          "Gram Surguja",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khairagarh-Chhuikhadan-Gandai": {
        "Khairagarh-Chhuikhadan-Gandai Sadar": [
          "Khairagarh-Chhuikhadan-Gandai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khairagarh-Chhuikhadan-Gandai Rural": [
          "Gram Khairagarh-Chhuikhadan-Gandai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Goa": {
    "term_anchal": "Taluka",
    "term_record": "Form I & XIV (Record of Rights)",
    "term_plot": "Survey / Sub-Division No",
    "term_holding": "Property Card No",
    "districts": {
      "North Goa": {
        "North Goa Sadar": [
          "North Goa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "North Goa Rural": [
          "Gram North Goa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Tiswadi (Panaji)": [
          "Ribandar",
          "Dona Paula",
          "Miramar",
          "Caranzalem"
        ],
        "Bardez (Mapusa)": [
          "Porvorim",
          "Candolim",
          "Anjuna",
          "Calangute"
        ]
      },
      "South Goa": {
        "South Goa Sadar": [
          "South Goa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South Goa Rural": [
          "Gram South Goa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Salcete (Margao)": [
          "Fatorda",
          "Colva",
          "Navelim",
          "Benaulim"
        ],
        "Mormugao (Vasco)": [
          "Bogmalo",
          "Chicalim",
          "Dabolim"
        ]
      }
    }
  },
  "Gujarat": {
    "term_anchal": "Taluka",
    "term_record": "AnyRoR VF 7/12 & 8-A",
    "term_plot": "Survey / Block / FP No",
    "term_holding": "Khata Number",
    "districts": {
      "Ahmedabad": {
        "Ahmedabad Sadar": [
          "Ahmedabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ahmedabad Rural": [
          "Gram Ahmedabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Daskroi": [
          "Sanand",
          "Bavla",
          "Ghatlodia",
          "Bopal"
        ],
        "Dholka": [
          "Chaloda",
          "Dholka Khas",
          "Koth"
        ]
      },
      "Amreli": {
        "Amreli Sadar": [
          "Amreli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Amreli Rural": [
          "Gram Amreli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Anand": {
        "Anand Sadar": [
          "Anand Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Anand Rural": [
          "Gram Anand",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Aravalli": {
        "Aravalli Sadar": [
          "Aravalli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Aravalli Rural": [
          "Gram Aravalli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Banaskantha": {
        "Banaskantha Sadar": [
          "Banaskantha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Banaskantha Rural": [
          "Gram Banaskantha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bharuch": {
        "Bharuch Sadar": [
          "Bharuch Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bharuch Rural": [
          "Gram Bharuch",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhavnagar": {
        "Bhavnagar Sadar": [
          "Bhavnagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhavnagar Rural": [
          "Gram Bhavnagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Botad": {
        "Botad Sadar": [
          "Botad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Botad Rural": [
          "Gram Botad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chhota Udaipur": {
        "Chhota Udaipur Sadar": [
          "Chhota Udaipur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chhota Udaipur Rural": [
          "Gram Chhota Udaipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dahod": {
        "Dahod Sadar": [
          "Dahod Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dahod Rural": [
          "Gram Dahod",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dang": {
        "Dang Sadar": [
          "Dang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dang Rural": [
          "Gram Dang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Devbhumi Dwarka": {
        "Devbhumi Dwarka Sadar": [
          "Devbhumi Dwarka Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Devbhumi Dwarka Rural": [
          "Gram Devbhumi Dwarka",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gandhinagar": {
        "Gandhinagar Sadar": [
          "Gandhinagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gandhinagar Rural": [
          "Gram Gandhinagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gir Somnath": {
        "Gir Somnath Sadar": [
          "Gir Somnath Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gir Somnath Rural": [
          "Gram Gir Somnath",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jamnagar": {
        "Jamnagar Sadar": [
          "Jamnagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jamnagar Rural": [
          "Gram Jamnagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Junagadh": {
        "Junagadh Sadar": [
          "Junagadh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Junagadh Rural": [
          "Gram Junagadh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kheda": {
        "Kheda Sadar": [
          "Kheda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kheda Rural": [
          "Gram Kheda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kutch": {
        "Kutch Sadar": [
          "Kutch Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kutch Rural": [
          "Gram Kutch",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mahisagar": {
        "Mahisagar Sadar": [
          "Mahisagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mahisagar Rural": [
          "Gram Mahisagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mehsana": {
        "Mehsana Sadar": [
          "Mehsana Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mehsana Rural": [
          "Gram Mehsana",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Morbi": {
        "Morbi Sadar": [
          "Morbi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Morbi Rural": [
          "Gram Morbi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Narmada": {
        "Narmada Sadar": [
          "Narmada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Narmada Rural": [
          "Gram Narmada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Navsari": {
        "Navsari Sadar": [
          "Navsari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Navsari Rural": [
          "Gram Navsari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Panchmahal": {
        "Panchmahal Sadar": [
          "Panchmahal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Panchmahal Rural": [
          "Gram Panchmahal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Patan": {
        "Patan Sadar": [
          "Patan Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Patan Rural": [
          "Gram Patan",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Porbandar": {
        "Porbandar Sadar": [
          "Porbandar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Porbandar Rural": [
          "Gram Porbandar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rajkot": {
        "Rajkot Sadar": [
          "Rajkot Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rajkot Rural": [
          "Gram Rajkot",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Rajkot Taluka": [
          "Kuvadva",
          "Shapar",
          "Metoda GIDC",
          "Kalawad Road"
        ],
        "Gondal": [
          "Gomta",
          "Bhadla",
          "Gondal Town"
        ]
      },
      "Sabarkantha": {
        "Sabarkantha Sadar": [
          "Sabarkantha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sabarkantha Rural": [
          "Gram Sabarkantha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Surat": {
        "Surat Sadar": [
          "Surat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Surat Rural": [
          "Gram Surat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Olpad": [
          "Olpad Khas",
          "Sayan",
          "Karanj"
        ],
        "Chorasi": [
          "Varachha",
          "Adajan",
          "Vesu",
          "Katargam"
        ]
      },
      "Surendranagar": {
        "Surendranagar Sadar": [
          "Surendranagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Surendranagar Rural": [
          "Gram Surendranagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tapi": {
        "Tapi Sadar": [
          "Tapi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tapi Rural": [
          "Gram Tapi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Vadodara": {
        "Vadodara Sadar": [
          "Vadodara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Vadodara Rural": [
          "Gram Vadodara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur",
          "Gotri",
          "Manjalpur",
          "Makarpura",
          "Alkapuri"
        ],
        "Padra": [
          "Mobha",
          "Padra Khas",
          "Chokari"
        ]
      },
      "Valsad": {
        "Valsad Sadar": [
          "Valsad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Valsad Rural": [
          "Gram Valsad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Haryana": {
    "term_anchal": "Tehsil / Sub-Tehsil",
    "term_record": "Jamabandi Nakal",
    "term_plot": "Khasra / Kila No",
    "term_holding": "Khewat / Khatauni No",
    "districts": {
      "Ambala": {
        "Ambala Sadar": [
          "Ambala Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ambala Rural": [
          "Gram Ambala",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhiwani": {
        "Bhiwani Sadar": [
          "Bhiwani Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhiwani Rural": [
          "Gram Bhiwani",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Charkhi Dadri": {
        "Charkhi Dadri Sadar": [
          "Charkhi Dadri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Charkhi Dadri Rural": [
          "Gram Charkhi Dadri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Faridabad": {
        "Faridabad Sadar": [
          "Faridabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Sector 16",
          "NIT Faridabad",
          "Sector 15"
        ],
        "Faridabad Rural": [
          "Gram Faridabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Ballabgarh": [
          "Sector 58",
          "Chhainsa",
          "Prithla"
        ]
      },
      "Fatehabad": {
        "Fatehabad Sadar": [
          "Fatehabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Fatehabad Rural": [
          "Gram Fatehabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gurugram": {
        "Gurugram Sadar": [
          "Gurugram Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Golf Course Road",
          "Cyber City",
          "DLF Phase 1-5"
        ],
        "Gurugram Rural": [
          "Gram Gurugram",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Manesar": [
          "Kasan",
          "IMT Manesar",
          "Naharpur"
        ],
        "Wazirabad": [
          "Sushant Lok",
          "Sector 57",
          "Sector 56"
        ]
      },
      "Hisar": {
        "Hisar Sadar": [
          "Hisar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hisar Rural": [
          "Gram Hisar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jhajjar": {
        "Jhajjar Sadar": [
          "Jhajjar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jhajjar Rural": [
          "Gram Jhajjar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jind": {
        "Jind Sadar": [
          "Jind Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jind Rural": [
          "Gram Jind",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kaithal": {
        "Kaithal Sadar": [
          "Kaithal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kaithal Rural": [
          "Gram Kaithal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Karnal": {
        "Karnal Sadar": [
          "Karnal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Model Town",
          "Kunjpura",
          "Sector 6"
        ],
        "Karnal Rural": [
          "Gram Karnal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Gharaunda": [
          "Kohand",
          "Bastara",
          "Gharaunda Khas"
        ]
      },
      "Kurukshetra": {
        "Kurukshetra Sadar": [
          "Kurukshetra Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kurukshetra Rural": [
          "Gram Kurukshetra",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mahendragarh": {
        "Mahendragarh Sadar": [
          "Mahendragarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mahendragarh Rural": [
          "Gram Mahendragarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nuh": {
        "Nuh Sadar": [
          "Nuh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nuh Rural": [
          "Gram Nuh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Palwal": {
        "Palwal Sadar": [
          "Palwal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Palwal Rural": [
          "Gram Palwal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Panchkula": {
        "Panchkula Sadar": [
          "Panchkula Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Panchkula Rural": [
          "Gram Panchkula",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Panipat": {
        "Panipat Sadar": [
          "Panipat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Panipat Rural": [
          "Gram Panipat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rewari": {
        "Rewari Sadar": [
          "Rewari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rewari Rural": [
          "Gram Rewari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rohtak": {
        "Rohtak Sadar": [
          "Rohtak Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rohtak Rural": [
          "Gram Rohtak",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sirsa": {
        "Sirsa Sadar": [
          "Sirsa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sirsa Rural": [
          "Gram Sirsa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sonipat": {
        "Sonipat Sadar": [
          "Sonipat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sonipat Rural": [
          "Gram Sonipat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Yamunanagar": {
        "Yamunanagar Sadar": [
          "Yamunanagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Yamunanagar Rural": [
          "Gram Yamunanagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Himachal Pradesh": {
    "term_anchal": "Tehsil",
    "term_record": "Jamabandi RoR",
    "term_plot": "Khasra No",
    "term_holding": "Khewat / Khatauni",
    "districts": {
      "Bilaspur": {
        "Bilaspur Sadar": [
          "Bilaspur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bilaspur Rural": [
          "Gram Bilaspur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chamba": {
        "Chamba Sadar": [
          "Chamba Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chamba Rural": [
          "Gram Chamba",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hamirpur": {
        "Hamirpur Sadar": [
          "Hamirpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hamirpur Rural": [
          "Gram Hamirpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kangra": {
        "Kangra Sadar": [
          "Kangra Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Nagrota Bagwan",
          "Gaggal",
          "Kangra Town"
        ],
        "Kangra Rural": [
          "Gram Kangra",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Dharamshala": [
          "Kotwali",
          "Dari",
          "McLeod Ganj"
        ]
      },
      "Kinnaur": {
        "Kinnaur Sadar": [
          "Kinnaur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kinnaur Rural": [
          "Gram Kinnaur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kullu": {
        "Kullu Sadar": [
          "Kullu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kullu Rural": [
          "Gram Kullu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lahaul and Spiti": {
        "Lahaul and Spiti Sadar": [
          "Lahaul and Spiti Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lahaul and Spiti Rural": [
          "Gram Lahaul and Spiti",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mandi": {
        "Mandi Sadar": [
          "Mandi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mandi Rural": [
          "Gram Mandi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shimla": {
        "Shimla Sadar": [
          "Shimla Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shimla Rural": [
          "Gram Shimla",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur",
          "Kasumpti",
          "Dhalli",
          "Totu"
        ],
        "Shimla Urban": [
          "Chotta Shimla",
          "The Mall",
          "Sanjauli"
        ]
      },
      "Sirmaur": {
        "Sirmaur Sadar": [
          "Sirmaur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sirmaur Rural": [
          "Gram Sirmaur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Solan": {
        "Solan Sadar": [
          "Solan Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Solan Rural": [
          "Gram Solan",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Una": {
        "Una Sadar": [
          "Una Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Una Rural": [
          "Gram Una",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Jharkhand": {
    "term_anchal": "Anchal / Circle",
    "term_record": "Khatian & Register-II",
    "term_plot": "Khesra / Plot No",
    "term_holding": "Khata Number",
    "districts": {
      "Bokaro": {
        "Bokaro Sadar": [
          "Bokaro Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bokaro Rural": [
          "Gram Bokaro",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Chas": [
          "Kura",
          "Bandhdih",
          "Tupkadih",
          "Pundru",
          "Kamas"
        ],
        "Bermo": [
          "Durgapur",
          "Jarangdih",
          "Bermo Khas",
          "Phusro"
        ]
      },
      "Chatra": {
        "Chatra Sadar": [
          "Chatra Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chatra Rural": [
          "Gram Chatra",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Deoghar": {
        "Deoghar Sadar": [
          "Deoghar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Jasidih",
          "Kunda",
          "Rohini",
          "Baidyanathpur"
        ],
        "Deoghar Rural": [
          "Gram Deoghar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Madhupur": [
          "Paharipur",
          "Madhupur Khas",
          "Bhedwa"
        ]
      },
      "Dhanbad": {
        "Dhanbad Sadar": [
          "Dhanbad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dhanbad Rural": [
          "Gram Dhanbad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Govindpur": [
          "Khartanga",
          "Asanboni",
          "Govindpur Khas"
        ],
        "Jharia": [
          "Bhaga",
          "Jharia Khas",
          "Tisra",
          "Lodna"
        ]
      },
      "Dumka": {
        "Dumka Sadar": [
          "Dumka Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dumka Rural": [
          "Gram Dumka",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "East Singhbhum": {
        "East Singhbhum Sadar": [
          "East Singhbhum Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Singhbhum Rural": [
          "Gram East Singhbhum",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Jamshedpur": [
          "Sonari",
          "Kadma",
          "Mango",
          "Jugsalai"
        ],
        "Ghatshila": [
          "Mouhanda",
          "Dhalbhumgarh",
          "Ghatshila Khas"
        ]
      },
      "Garhwa": {
        "Garhwa Sadar": [
          "Garhwa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Garhwa Rural": [
          "Gram Garhwa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Giridih": {
        "Giridih Sadar": [
          "Giridih Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Sirsiya",
          "Makatpur",
          "Bhandaridih"
        ],
        "Giridih Rural": [
          "Gram Giridih",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Dumri": [
          "Dumri Khas",
          "Nimiaghat",
          "Isri"
        ]
      },
      "Godda": {
        "Godda Sadar": [
          "Godda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Godda Rural": [
          "Gram Godda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gumla": {
        "Gumla Sadar": [
          "Gumla Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gumla Rural": [
          "Gram Gumla",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hazaribagh": {
        "Hazaribagh Sadar": [
          "Hazaribagh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hazaribagh Rural": [
          "Gram Hazaribagh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sadar": [
          "Pelawal",
          "Matwari",
          "Demotand",
          "Korrah"
        ],
        "Ichak": [
          "Ichak Khas",
          "Kura",
          "Gobardar"
        ]
      },
      "Jamtara": {
        "Jamtara Sadar": [
          "Jamtara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jamtara Rural": [
          "Gram Jamtara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khunti": {
        "Khunti Sadar": [
          "Khunti Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khunti Rural": [
          "Gram Khunti",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Koderma": {
        "Koderma Sadar": [
          "Koderma Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Koderma Rural": [
          "Gram Koderma",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Latehar": {
        "Latehar Sadar": [
          "Latehar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Latehar Rural": [
          "Gram Latehar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lohardaga": {
        "Lohardaga Sadar": [
          "Lohardaga Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lohardaga Rural": [
          "Gram Lohardaga",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pakur": {
        "Pakur Sadar": [
          "Pakur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pakur Rural": [
          "Gram Pakur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Palamu": {
        "Palamu Sadar": [
          "Palamu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Palamu Rural": [
          "Gram Palamu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Medininagar": [
          "Chianki",
          "Daltonganj",
          "Shahpur",
          "Singra"
        ],
        "Hussainabad": [
          "Japla",
          "Deori",
          "Kusumha"
        ]
      },
      "Ramgarh": {
        "Ramgarh Sadar": [
          "Ramgarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ramgarh Rural": [
          "Gram Ramgarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ranchi": {
        "Ranchi Sadar": [
          "Ranchi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ranchi Rural": [
          "Gram Ranchi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Ormanjhi": [
          "Dudri",
          "Anandi",
          "Gagari",
          "Irba"
        ],
        "Kanke": [
          "Arsande",
          "Pithoria",
          "Sangkura",
          "Boreya"
        ]
      },
      "Sahibganj": {
        "Sahibganj Sadar": [
          "Sahibganj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sahibganj Rural": [
          "Gram Sahibganj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Seraikela Kharsawan": {
        "Seraikela Kharsawan Sadar": [
          "Seraikela Kharsawan Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Seraikela Kharsawan Rural": [
          "Gram Seraikela Kharsawan",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Simdega": {
        "Simdega Sadar": [
          "Simdega Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Simdega Rural": [
          "Gram Simdega",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Singhbhum": {
        "West Singhbhum Sadar": [
          "West Singhbhum Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Singhbhum Rural": [
          "Gram West Singhbhum",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Karnataka": {
    "term_anchal": "Taluk / Hobli",
    "term_record": "Bhoomi RTC (Pahani)",
    "term_plot": "Survey / Hissa No",
    "term_holding": "Khata Number",
    "districts": {
      "Bagalkote": {
        "Bagalkote Sadar": [
          "Bagalkote Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bagalkote Rural": [
          "Gram Bagalkote",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ballari": {
        "Ballari Sadar": [
          "Ballari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ballari Rural": [
          "Gram Ballari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Belagavi": {
        "Belagavi Sadar": [
          "Belagavi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Belagavi Rural": [
          "Gram Belagavi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Gokak": [
          "Konnur",
          "Gokak Falls",
          "Ghataprabha"
        ],
        "Belagavi Taluk": [
          "Udyambag",
          "Peeranwadi",
          "Tilakwadi"
        ]
      },
      "Bengaluru Rural": {
        "Bengaluru Rural Sadar": [
          "Bengaluru Rural Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bengaluru Rural Rural": [
          "Gram Bengaluru Rural",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bengaluru Urban": {
        "Bengaluru Urban Sadar": [
          "Bengaluru Urban Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bengaluru Urban Rural": [
          "Gram Bengaluru Urban",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Bengaluru East": [
          "Whitefield",
          "Bellandur",
          "Marathahalli",
          "Varthur"
        ],
        "Bengaluru South": [
          "Jigani",
          "Begur",
          "Bannerghatta",
          "Electronic City"
        ],
        "Bengaluru North": [
          "Jalahalli",
          "Hebbal",
          "Yelahanka"
        ]
      },
      "Bidar": {
        "Bidar Sadar": [
          "Bidar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bidar Rural": [
          "Gram Bidar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chamarajanagara": {
        "Chamarajanagara Sadar": [
          "Chamarajanagara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chamarajanagara Rural": [
          "Gram Chamarajanagara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chikkaballapura": {
        "Chikkaballapura Sadar": [
          "Chikkaballapura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chikkaballapura Rural": [
          "Gram Chikkaballapura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chikkamagaluru": {
        "Chikkamagaluru Sadar": [
          "Chikkamagaluru Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chikkamagaluru Rural": [
          "Gram Chikkamagaluru",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chitradurga": {
        "Chitradurga Sadar": [
          "Chitradurga Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chitradurga Rural": [
          "Gram Chitradurga",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dakshina Kannada": {
        "Dakshina Kannada Sadar": [
          "Dakshina Kannada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dakshina Kannada Rural": [
          "Gram Dakshina Kannada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Bantwal": [
          "Vittal",
          "B.C. Road",
          "Panemangalore"
        ],
        "Mangaluru": [
          "Kadri",
          "Kavoor",
          "Panambur",
          "Surathkal"
        ]
      },
      "Davanagere": {
        "Davanagere Sadar": [
          "Davanagere Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Davanagere Rural": [
          "Gram Davanagere",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dharwad": {
        "Dharwad Sadar": [
          "Dharwad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dharwad Rural": [
          "Gram Dharwad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Dharwad": [
          "Kelgerim",
          "Malamaddi",
          "Saptapur"
        ],
        "Hubballi Urban": [
          "Vidyanagar",
          "Gokul Road",
          "Navanagar"
        ]
      },
      "Gadag": {
        "Gadag Sadar": [
          "Gadag Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gadag Rural": [
          "Gram Gadag",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hassan": {
        "Hassan Sadar": [
          "Hassan Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hassan Rural": [
          "Gram Hassan",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Haveri": {
        "Haveri Sadar": [
          "Haveri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Haveri Rural": [
          "Gram Haveri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kalaburagi": {
        "Kalaburagi Sadar": [
          "Kalaburagi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kalaburagi Rural": [
          "Gram Kalaburagi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kodagu": {
        "Kodagu Sadar": [
          "Kodagu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kodagu Rural": [
          "Gram Kodagu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kolar": {
        "Kolar Sadar": [
          "Kolar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kolar Rural": [
          "Gram Kolar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Koppal": {
        "Koppal Sadar": [
          "Koppal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Koppal Rural": [
          "Gram Koppal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mandya": {
        "Mandya Sadar": [
          "Mandya Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mandya Rural": [
          "Gram Mandya",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mysuru": {
        "Mysuru Sadar": [
          "Mysuru Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mysuru Rural": [
          "Gram Mysuru",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Mysuru Taluk": [
          "Vijayanagar",
          "Hebbal Industrial",
          "Jayalakshmipuram",
          "Gokulam"
        ],
        "Hunsur": [
          "Hanagod",
          "Bilikere",
          "Hunsur Town"
        ]
      },
      "Raichur": {
        "Raichur Sadar": [
          "Raichur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Raichur Rural": [
          "Gram Raichur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ramanagara": {
        "Ramanagara Sadar": [
          "Ramanagara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ramanagara Rural": [
          "Gram Ramanagara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shivamogga": {
        "Shivamogga Sadar": [
          "Shivamogga Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shivamogga Rural": [
          "Gram Shivamogga",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tumakuru": {
        "Tumakuru Sadar": [
          "Tumakuru Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tumakuru Rural": [
          "Gram Tumakuru",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Udupi": {
        "Udupi Sadar": [
          "Udupi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Udupi Rural": [
          "Gram Udupi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Uttara Kannada": {
        "Uttara Kannada Sadar": [
          "Uttara Kannada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Uttara Kannada Rural": [
          "Gram Uttara Kannada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Vijayanagara": {
        "Vijayanagara Sadar": [
          "Vijayanagara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Vijayanagara Rural": [
          "Gram Vijayanagara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Vijayapura": {
        "Vijayapura Sadar": [
          "Vijayapura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Vijayapura Rural": [
          "Gram Vijayapura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Yadgir": {
        "Yadgir Sadar": [
          "Yadgir Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Yadgir Rural": [
          "Gram Yadgir",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Kerala": {
    "term_anchal": "Taluk / Village Office",
    "term_record": "E-Rekha / Thandaper RoR",
    "term_plot": "Survey / Re-survey No",
    "term_holding": "Thandaper Number",
    "districts": {
      "Alappuzha": {
        "Alappuzha Sadar": [
          "Alappuzha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Alappuzha Rural": [
          "Gram Alappuzha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ernakulam": {
        "Ernakulam Sadar": [
          "Ernakulam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ernakulam Rural": [
          "Gram Ernakulam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Kanayannur": [
          "Edappally",
          "Kakkanad InfoPark",
          "Kaloor",
          "Marine Drive"
        ],
        "Aluva": [
          "Nedumbassery Airport",
          "Angamaly",
          "Aluva Town"
        ]
      },
      "Idukki": {
        "Idukki Sadar": [
          "Idukki Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Idukki Rural": [
          "Gram Idukki",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kannur": {
        "Kannur Sadar": [
          "Kannur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kannur Rural": [
          "Gram Kannur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kasaragod": {
        "Kasaragod Sadar": [
          "Kasaragod Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kasaragod Rural": [
          "Gram Kasaragod",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kollam": {
        "Kollam Sadar": [
          "Kollam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kollam Rural": [
          "Gram Kollam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kottayam": {
        "Kottayam Sadar": [
          "Kottayam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kottayam Rural": [
          "Gram Kottayam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kozhikode": {
        "Kozhikode Sadar": [
          "Kozhikode Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kozhikode Rural": [
          "Gram Kozhikode",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Malappuram": {
        "Malappuram Sadar": [
          "Malappuram Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Malappuram Rural": [
          "Gram Malappuram",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Palakkad": {
        "Palakkad Sadar": [
          "Palakkad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Palakkad Rural": [
          "Gram Palakkad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pathanamthitta": {
        "Pathanamthitta Sadar": [
          "Pathanamthitta Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pathanamthitta Rural": [
          "Gram Pathanamthitta",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Thiruvananthapuram": {
        "Thiruvananthapuram Sadar": [
          "Thiruvananthapuram Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Thiruvananthapuram Rural": [
          "Gram Thiruvananthapuram",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Neyyattinkara": [
          "Vizhinjam Port",
          "Balaramapuram",
          "Neyyattinkara Town"
        ],
        "Thiruvananthapuram": [
          "Kazhakoottam",
          "Kowdiar",
          "Pattom",
          "Technopark"
        ]
      },
      "Thrissur": {
        "Thrissur Sadar": [
          "Thrissur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Thrissur Rural": [
          "Gram Thrissur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Wayanad": {
        "Wayanad Sadar": [
          "Wayanad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Wayanad Rural": [
          "Gram Wayanad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Madhya Pradesh": {
    "term_anchal": "Tehsil",
    "term_record": "MP Bhulekh Khasra / Khatauni",
    "term_plot": "Khasra No",
    "term_holding": "Khata Number",
    "districts": {
      "Agar Malwa": {
        "Agar Malwa Sadar": [
          "Agar Malwa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Agar Malwa Rural": [
          "Gram Agar Malwa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Alirajpur": {
        "Alirajpur Sadar": [
          "Alirajpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Alirajpur Rural": [
          "Gram Alirajpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Anuppur": {
        "Anuppur Sadar": [
          "Anuppur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Anuppur Rural": [
          "Gram Anuppur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ashoknagar": {
        "Ashoknagar Sadar": [
          "Ashoknagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ashoknagar Rural": [
          "Gram Ashoknagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Balaghat": {
        "Balaghat Sadar": [
          "Balaghat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Balaghat Rural": [
          "Gram Balaghat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Barwani": {
        "Barwani Sadar": [
          "Barwani Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Barwani Rural": [
          "Gram Barwani",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Betul": {
        "Betul Sadar": [
          "Betul Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Betul Rural": [
          "Gram Betul",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhind": {
        "Bhind Sadar": [
          "Bhind Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhind Rural": [
          "Gram Bhind",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhopal": {
        "Bhopal Sadar": [
          "Bhopal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhopal Rural": [
          "Gram Bhopal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Berasia": [
          "Narsinghgarh Road",
          "Berasia Khas"
        ],
        "Huzur": [
          "MP Nagar",
          "Arera Colony",
          "Kolar Road",
          "Bairagarh"
        ]
      },
      "Burhanpur": {
        "Burhanpur Sadar": [
          "Burhanpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Burhanpur Rural": [
          "Gram Burhanpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chhatarpur": {
        "Chhatarpur Sadar": [
          "Chhatarpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chhatarpur Rural": [
          "Gram Chhatarpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chhindwara": {
        "Chhindwara Sadar": [
          "Chhindwara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chhindwara Rural": [
          "Gram Chhindwara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Damoh": {
        "Damoh Sadar": [
          "Damoh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Damoh Rural": [
          "Gram Damoh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Datia": {
        "Datia Sadar": [
          "Datia Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Datia Rural": [
          "Gram Datia",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dewas": {
        "Dewas Sadar": [
          "Dewas Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dewas Rural": [
          "Gram Dewas",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dhar": {
        "Dhar Sadar": [
          "Dhar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dhar Rural": [
          "Gram Dhar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dindori": {
        "Dindori Sadar": [
          "Dindori Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dindori Rural": [
          "Gram Dindori",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Guna": {
        "Guna Sadar": [
          "Guna Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Guna Rural": [
          "Gram Guna",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gwalior": {
        "Gwalior Sadar": [
          "Gwalior Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gwalior Rural": [
          "Gram Gwalior",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Dabra": [
          "Dabra Khas",
          "Bhitarwar"
        ],
        "Gwalior City": [
          "Thatipur",
          "City Centre",
          "Lashkar",
          "Morar"
        ]
      },
      "Harda": {
        "Harda Sadar": [
          "Harda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Harda Rural": [
          "Gram Harda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hoshangabad (Narmadapuram)": {
        "Hoshangabad (Narmadapuram) Sadar": [
          "Hoshangabad (Narmadapuram) Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hoshangabad (Narmadapuram) Rural": [
          "Gram Hoshangabad (Narmadapuram)",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Indore": {
        "Indore Sadar": [
          "Indore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Palasia",
          "Vijay Nagar",
          "Bhawarkua",
          "Rau"
        ],
        "Indore Rural": [
          "Gram Indore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sanwer": [
          "Manglia",
          "Sanwer Khas",
          "Dharampuri"
        ]
      },
      "Jabalpur": {
        "Jabalpur Sadar": [
          "Jabalpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Wright Town",
          "Gorakhpur",
          "Adhartal"
        ],
        "Jabalpur Rural": [
          "Gram Jabalpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sihora": [
          "Sihora Khas",
          "Majholi"
        ]
      },
      "Jhabua": {
        "Jhabua Sadar": [
          "Jhabua Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jhabua Rural": [
          "Gram Jhabua",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Katni": {
        "Katni Sadar": [
          "Katni Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Katni Rural": [
          "Gram Katni",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khandwa": {
        "Khandwa Sadar": [
          "Khandwa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khandwa Rural": [
          "Gram Khandwa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khargone": {
        "Khargone Sadar": [
          "Khargone Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khargone Rural": [
          "Gram Khargone",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Maihar": {
        "Maihar Sadar": [
          "Maihar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Maihar Rural": [
          "Gram Maihar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mandla": {
        "Mandla Sadar": [
          "Mandla Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mandla Rural": [
          "Gram Mandla",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mandsaur": {
        "Mandsaur Sadar": [
          "Mandsaur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mandsaur Rural": [
          "Gram Mandsaur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mauganj": {
        "Mauganj Sadar": [
          "Mauganj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mauganj Rural": [
          "Gram Mauganj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Morena": {
        "Morena Sadar": [
          "Morena Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Morena Rural": [
          "Gram Morena",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Narsinghpur": {
        "Narsinghpur Sadar": [
          "Narsinghpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Narsinghpur Rural": [
          "Gram Narsinghpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Neemuch": {
        "Neemuch Sadar": [
          "Neemuch Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Neemuch Rural": [
          "Gram Neemuch",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Niwari": {
        "Niwari Sadar": [
          "Niwari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Niwari Rural": [
          "Gram Niwari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Panna": {
        "Panna Sadar": [
          "Panna Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Panna Rural": [
          "Gram Panna",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pandhurna": {
        "Pandhurna Sadar": [
          "Pandhurna Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pandhurna Rural": [
          "Gram Pandhurna",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Raisen": {
        "Raisen Sadar": [
          "Raisen Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Raisen Rural": [
          "Gram Raisen",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rajgarh": {
        "Rajgarh Sadar": [
          "Rajgarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rajgarh Rural": [
          "Gram Rajgarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ratlam": {
        "Ratlam Sadar": [
          "Ratlam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ratlam Rural": [
          "Gram Ratlam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rewa": {
        "Rewa Sadar": [
          "Rewa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rewa Rural": [
          "Gram Rewa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sagar": {
        "Sagar Sadar": [
          "Sagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sagar Rural": [
          "Gram Sagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Satna": {
        "Satna Sadar": [
          "Satna Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Satna Rural": [
          "Gram Satna",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sehore": {
        "Sehore Sadar": [
          "Sehore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sehore Rural": [
          "Gram Sehore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Seoni": {
        "Seoni Sadar": [
          "Seoni Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Seoni Rural": [
          "Gram Seoni",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shahdol": {
        "Shahdol Sadar": [
          "Shahdol Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shahdol Rural": [
          "Gram Shahdol",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shajapur": {
        "Shajapur Sadar": [
          "Shajapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shajapur Rural": [
          "Gram Shajapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sheopur": {
        "Sheopur Sadar": [
          "Sheopur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sheopur Rural": [
          "Gram Sheopur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shivpuri": {
        "Shivpuri Sadar": [
          "Shivpuri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shivpuri Rural": [
          "Gram Shivpuri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sidhi": {
        "Sidhi Sadar": [
          "Sidhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sidhi Rural": [
          "Gram Sidhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Singrauli": {
        "Singrauli Sadar": [
          "Singrauli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Singrauli Rural": [
          "Gram Singrauli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tikamgarh": {
        "Tikamgarh Sadar": [
          "Tikamgarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tikamgarh Rural": [
          "Gram Tikamgarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ujjain": {
        "Ujjain Sadar": [
          "Ujjain Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ujjain Rural": [
          "Gram Ujjain",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Umaria": {
        "Umaria Sadar": [
          "Umaria Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Umaria Rural": [
          "Gram Umaria",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Vidisha": {
        "Vidisha Sadar": [
          "Vidisha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Vidisha Rural": [
          "Gram Vidisha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Maharashtra": {
    "term_anchal": "Taluka",
    "term_record": "MahaBhulekh 7/12 & 8-A",
    "term_plot": "Gat / Survey / Hissa No",
    "term_holding": "Khata Number",
    "districts": {
      "Ahmednagar": {
        "Ahmednagar Sadar": [
          "Ahmednagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ahmednagar Rural": [
          "Gram Ahmednagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Akola": {
        "Akola Sadar": [
          "Akola Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Akola Rural": [
          "Gram Akola",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Amravati": {
        "Amravati Sadar": [
          "Amravati Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Amravati Rural": [
          "Gram Amravati",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chhatrapati Sambhajinagar": {
        "Chhatrapati Sambhajinagar Sadar": [
          "Chhatrapati Sambhajinagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chhatrapati Sambhajinagar Rural": [
          "Gram Chhatrapati Sambhajinagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Paithan": [
          "Paithan Khas",
          "Bidkin",
          "Pachod"
        ],
        "Aurangabad": [
          "Chikalthana",
          "CIDCO",
          "Waluj",
          "Shendra"
        ]
      },
      "Bhandara": {
        "Bhandara Sadar": [
          "Bhandara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhandara Rural": [
          "Gram Bhandara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Beed": {
        "Beed Sadar": [
          "Beed Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Beed Rural": [
          "Gram Beed",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Buldhana": {
        "Buldhana Sadar": [
          "Buldhana Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Buldhana Rural": [
          "Gram Buldhana",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chandrapur": {
        "Chandrapur Sadar": [
          "Chandrapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chandrapur Rural": [
          "Gram Chandrapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dhule": {
        "Dhule Sadar": [
          "Dhule Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dhule Rural": [
          "Gram Dhule",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gadchiroli": {
        "Gadchiroli Sadar": [
          "Gadchiroli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gadchiroli Rural": [
          "Gram Gadchiroli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gondia": {
        "Gondia Sadar": [
          "Gondia Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gondia Rural": [
          "Gram Gondia",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hingoli": {
        "Hingoli Sadar": [
          "Hingoli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hingoli Rural": [
          "Gram Hingoli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jalgaon": {
        "Jalgaon Sadar": [
          "Jalgaon Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jalgaon Rural": [
          "Gram Jalgaon",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jalna": {
        "Jalna Sadar": [
          "Jalna Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jalna Rural": [
          "Gram Jalna",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kolhapur": {
        "Kolhapur Sadar": [
          "Kolhapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kolhapur Rural": [
          "Gram Kolhapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Hatkanangale": [
          "Hupari",
          "Peth Vadgaon",
          "Ichalkaranji"
        ],
        "Karveer": [
          "Rajarampuri",
          "Shiroli",
          "Tarabai Park"
        ]
      },
      "Latur": {
        "Latur Sadar": [
          "Latur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Latur Rural": [
          "Gram Latur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mumbai City": {
        "Mumbai City Sadar": [
          "Mumbai City Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mumbai City Rural": [
          "Gram Mumbai City",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mumbai Suburban": {
        "Mumbai Suburban Sadar": [
          "Mumbai Suburban Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mumbai Suburban Rural": [
          "Gram Mumbai Suburban",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Borivali": [
          "Kandivali",
          "Malad",
          "Dahisar"
        ],
        "Kurla": [
          "Trombay",
          "Chembur",
          "Ghatkopar"
        ],
        "Andheri": [
          "Vile Parle",
          "Juhu",
          "Versova",
          "Marol"
        ]
      },
      "Nagpur": {
        "Nagpur Sadar": [
          "Nagpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nagpur Rural": [
          "Gram Nagpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur",
          "Hingna",
          "Kamptee",
          "Wadi"
        ],
        "Nagpur Urban": [
          "Dharampeth",
          "Wardha Road",
          "Sitabuldi",
          "Manewada"
        ]
      },
      "Nanded": {
        "Nanded Sadar": [
          "Nanded Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nanded Rural": [
          "Gram Nanded",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nandurbar": {
        "Nandurbar Sadar": [
          "Nandurbar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nandurbar Rural": [
          "Gram Nandurbar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nashik": {
        "Nashik Sadar": [
          "Nashik Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nashik Rural": [
          "Gram Nashik",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Nashik": [
          "Indira Nagar",
          "Satpur",
          "Panchavati",
          "Ambad"
        ],
        "Niphad": [
          "Niphad Khas",
          "Pimpalgaon",
          "Lasalgaon"
        ]
      },
      "Dharashiv": {
        "Dharashiv Sadar": [
          "Dharashiv Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dharashiv Rural": [
          "Gram Dharashiv",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Palghar": {
        "Palghar Sadar": [
          "Palghar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Palghar Rural": [
          "Gram Palghar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Parbhani": {
        "Parbhani Sadar": [
          "Parbhani Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Parbhani Rural": [
          "Gram Parbhani",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pune": {
        "Pune Sadar": [
          "Pune Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pune Rural": [
          "Gram Pune",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Haveli": [
          "Hinjawadi",
          "Hadapsar",
          "Kharadi",
          "Wakad",
          "Baner"
        ],
        "Mulshi": [
          "Paud",
          "Bhugaon",
          "Pirangut",
          "Lavale"
        ],
        "Khed": [
          "Alandi",
          "Chakan",
          "Rajgurunagar"
        ]
      },
      "Raigad": {
        "Raigad Sadar": [
          "Raigad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Raigad Rural": [
          "Gram Raigad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ratnagiri": {
        "Ratnagiri Sadar": [
          "Ratnagiri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ratnagiri Rural": [
          "Gram Ratnagiri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sangli": {
        "Sangli Sadar": [
          "Sangli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sangli Rural": [
          "Gram Sangli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Satara": {
        "Satara Sadar": [
          "Satara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Satara Rural": [
          "Gram Satara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sindhudurg": {
        "Sindhudurg Sadar": [
          "Sindhudurg Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sindhudurg Rural": [
          "Gram Sindhudurg",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Solapur": {
        "Solapur Sadar": [
          "Solapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Solapur Rural": [
          "Gram Solapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Thane": {
        "Thane Sadar": [
          "Thane Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Thane Rural": [
          "Gram Thane",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Thane": [
          "Kopri",
          "Ghodbunder",
          "Naupada",
          "Majiwada"
        ],
        "Kalyan": [
          "Dombivli",
          "Titwala",
          "Kalyan West"
        ],
        "Mira Bhayandar": [
          "Uttan",
          "Bhayandar East",
          "Mira Road"
        ]
      },
      "Wardha": {
        "Wardha Sadar": [
          "Wardha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Wardha Rural": [
          "Gram Wardha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Washim": {
        "Washim Sadar": [
          "Washim Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Washim Rural": [
          "Gram Washim",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Yavatmal": {
        "Yavatmal Sadar": [
          "Yavatmal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Yavatmal Rural": [
          "Gram Yavatmal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Manipur": {
    "term_anchal": "Sub-Division / SDC Circle",
    "term_record": "Loucha Pathap Jamabandi",
    "term_plot": "Dag No",
    "term_holding": "Patta No",
    "districts": {
      "Bishnupur": {
        "Bishnupur Sadar": [
          "Bishnupur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bishnupur Rural": [
          "Gram Bishnupur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chandel": {
        "Chandel Sadar": [
          "Chandel Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chandel Rural": [
          "Gram Chandel",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Churachandpur": {
        "Churachandpur Sadar": [
          "Churachandpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Churachandpur Rural": [
          "Gram Churachandpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Imphal East": {
        "Imphal East Sadar": [
          "Imphal East Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Imphal East Rural": [
          "Gram Imphal East",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Imphal West": {
        "Imphal West Sadar": [
          "Imphal West Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Imphal West Rural": [
          "Gram Imphal West",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jiribam": {
        "Jiribam Sadar": [
          "Jiribam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jiribam Rural": [
          "Gram Jiribam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kakching": {
        "Kakching Sadar": [
          "Kakching Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kakching Rural": [
          "Gram Kakching",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kamjong": {
        "Kamjong Sadar": [
          "Kamjong Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kamjong Rural": [
          "Gram Kamjong",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kangpokpi": {
        "Kangpokpi Sadar": [
          "Kangpokpi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kangpokpi Rural": [
          "Gram Kangpokpi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Noney": {
        "Noney Sadar": [
          "Noney Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Noney Rural": [
          "Gram Noney",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pherzawl": {
        "Pherzawl Sadar": [
          "Pherzawl Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pherzawl Rural": [
          "Gram Pherzawl",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Senapati": {
        "Senapati Sadar": [
          "Senapati Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Senapati Rural": [
          "Gram Senapati",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tamenglong": {
        "Tamenglong Sadar": [
          "Tamenglong Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tamenglong Rural": [
          "Gram Tamenglong",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tengnoupal": {
        "Tengnoupal Sadar": [
          "Tengnoupal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tengnoupal Rural": [
          "Gram Tengnoupal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Thoubal": {
        "Thoubal Sadar": [
          "Thoubal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Thoubal Rural": [
          "Gram Thoubal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ukhrul": {
        "Ukhrul Sadar": [
          "Ukhrul Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ukhrul Rural": [
          "Gram Ukhrul",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Meghalaya": {
    "term_anchal": "Sub-Division / Block",
    "term_record": "Land Holding Certificate (LHC)",
    "term_plot": "Plot / Boundary Survey No",
    "term_holding": "Pattadar No",
    "districts": {
      "East Garo Hills": {
        "East Garo Hills Sadar": [
          "East Garo Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Garo Hills Rural": [
          "Gram East Garo Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "East Jaintia Hills": {
        "East Jaintia Hills Sadar": [
          "East Jaintia Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Jaintia Hills Rural": [
          "Gram East Jaintia Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "East Khasi Hills": {
        "East Khasi Hills Sadar": [
          "East Khasi Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Khasi Hills Rural": [
          "Gram East Khasi Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Eastern West Khasi Hills": {
        "Eastern West Khasi Hills Sadar": [
          "Eastern West Khasi Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Eastern West Khasi Hills Rural": [
          "Gram Eastern West Khasi Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "North Garo Hills": {
        "North Garo Hills Sadar": [
          "North Garo Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "North Garo Hills Rural": [
          "Gram North Garo Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ri Bhoi": {
        "Ri Bhoi Sadar": [
          "Ri Bhoi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ri Bhoi Rural": [
          "Gram Ri Bhoi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South Garo Hills": {
        "South Garo Hills Sadar": [
          "South Garo Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South Garo Hills Rural": [
          "Gram South Garo Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South West Garo Hills": {
        "South West Garo Hills Sadar": [
          "South West Garo Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South West Garo Hills Rural": [
          "Gram South West Garo Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South West Khasi Hills": {
        "South West Khasi Hills Sadar": [
          "South West Khasi Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South West Khasi Hills Rural": [
          "Gram South West Khasi Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Garo Hills": {
        "West Garo Hills Sadar": [
          "West Garo Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Garo Hills Rural": [
          "Gram West Garo Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Jaintia Hills": {
        "West Jaintia Hills Sadar": [
          "West Jaintia Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Jaintia Hills Rural": [
          "Gram West Jaintia Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Khasi Hills": {
        "West Khasi Hills Sadar": [
          "West Khasi Hills Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Khasi Hills Rural": [
          "Gram West Khasi Hills",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Mizoram": {
    "term_anchal": "Sub-Division",
    "term_record": "Land Settlement Certificate (LSC)",
    "term_plot": "Pass / Plot No",
    "term_holding": "LSC Number",
    "districts": {
      "Aizawl": {
        "Aizawl Sadar": [
          "Aizawl Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Aizawl Rural": [
          "Gram Aizawl",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Champhai": {
        "Champhai Sadar": [
          "Champhai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Champhai Rural": [
          "Gram Champhai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hnahthial": {
        "Hnahthial Sadar": [
          "Hnahthial Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hnahthial Rural": [
          "Gram Hnahthial",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khawzawl": {
        "Khawzawl Sadar": [
          "Khawzawl Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khawzawl Rural": [
          "Gram Khawzawl",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kolasib": {
        "Kolasib Sadar": [
          "Kolasib Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kolasib Rural": [
          "Gram Kolasib",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lawngtlai": {
        "Lawngtlai Sadar": [
          "Lawngtlai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lawngtlai Rural": [
          "Gram Lawngtlai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lunglei": {
        "Lunglei Sadar": [
          "Lunglei Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lunglei Rural": [
          "Gram Lunglei",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mamit": {
        "Mamit Sadar": [
          "Mamit Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mamit Rural": [
          "Gram Mamit",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Saitual": {
        "Saitual Sadar": [
          "Saitual Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Saitual Rural": [
          "Gram Saitual",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Serchhip": {
        "Serchhip Sadar": [
          "Serchhip Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Serchhip Rural": [
          "Gram Serchhip",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Siaha": {
        "Siaha Sadar": [
          "Siaha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Siaha Rural": [
          "Gram Siaha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Nagaland": {
    "term_anchal": "Sub-Division / Circle",
    "term_record": "Land Holding / Patta Certificate",
    "term_plot": "Plot Survey No",
    "term_holding": "Holding No",
    "districts": {
      "Chümoukedima": {
        "Chümoukedima Sadar": [
          "Chümoukedima Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chümoukedima Rural": [
          "Gram Chümoukedima",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dimapur": {
        "Dimapur Sadar": [
          "Dimapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dimapur Rural": [
          "Gram Dimapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kiphire": {
        "Kiphire Sadar": [
          "Kiphire Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kiphire Rural": [
          "Gram Kiphire",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kohima": {
        "Kohima Sadar": [
          "Kohima Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kohima Rural": [
          "Gram Kohima",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Longleng": {
        "Longleng Sadar": [
          "Longleng Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Longleng Rural": [
          "Gram Longleng",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mokokchung": {
        "Mokokchung Sadar": [
          "Mokokchung Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mokokchung Rural": [
          "Gram Mokokchung",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mon": {
        "Mon Sadar": [
          "Mon Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mon Rural": [
          "Gram Mon",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Niuland": {
        "Niuland Sadar": [
          "Niuland Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Niuland Rural": [
          "Gram Niuland",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Noklak": {
        "Noklak Sadar": [
          "Noklak Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Noklak Rural": [
          "Gram Noklak",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Peren": {
        "Peren Sadar": [
          "Peren Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Peren Rural": [
          "Gram Peren",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Phek": {
        "Phek Sadar": [
          "Phek Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Phek Rural": [
          "Gram Phek",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shamator": {
        "Shamator Sadar": [
          "Shamator Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shamator Rural": [
          "Gram Shamator",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tseminyü": {
        "Tseminyü Sadar": [
          "Tseminyü Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tseminyü Rural": [
          "Gram Tseminyü",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tuensang": {
        "Tuensang Sadar": [
          "Tuensang Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tuensang Rural": [
          "Gram Tuensang",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Wokha": {
        "Wokha Sadar": [
          "Wokha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Wokha Rural": [
          "Gram Wokha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Zünheboto": {
        "Zünheboto Sadar": [
          "Zünheboto Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Zünheboto Rural": [
          "Gram Zünheboto",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Odisha": {
    "term_anchal": "Tahasil",
    "term_record": "Bhulekh Odisha RoR",
    "term_plot": "Plot / Chaka No",
    "term_holding": "Khata Number",
    "districts": {
      "Angul": {
        "Angul Sadar": [
          "Angul Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Angul Rural": [
          "Gram Angul",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Balangir": {
        "Balangir Sadar": [
          "Balangir Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Balangir Rural": [
          "Gram Balangir",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Balasore": {
        "Balasore Sadar": [
          "Balasore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Balasore Rural": [
          "Gram Balasore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bargarh": {
        "Bargarh Sadar": [
          "Bargarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bargarh Rural": [
          "Gram Bargarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhadrak": {
        "Bhadrak Sadar": [
          "Bhadrak Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhadrak Rural": [
          "Gram Bhadrak",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Boudh": {
        "Boudh Sadar": [
          "Boudh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Boudh Rural": [
          "Gram Boudh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Cuttack": {
        "Cuttack Sadar": [
          "Cuttack Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "CDA Sector 9",
          "Badambadi",
          "Choudwar"
        ],
        "Cuttack Rural": [
          "Gram Cuttack",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Salipur": [
          "Nischintakoili",
          "Salipur Khas"
        ]
      },
      "Deogarh": {
        "Deogarh Sadar": [
          "Deogarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Deogarh Rural": [
          "Gram Deogarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dhenkanal": {
        "Dhenkanal Sadar": [
          "Dhenkanal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dhenkanal Rural": [
          "Gram Dhenkanal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gajapati": {
        "Gajapati Sadar": [
          "Gajapati Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gajapati Rural": [
          "Gram Gajapati",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ganjam": {
        "Ganjam Sadar": [
          "Ganjam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ganjam Rural": [
          "Gram Ganjam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jagatsinghpur": {
        "Jagatsinghpur Sadar": [
          "Jagatsinghpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jagatsinghpur Rural": [
          "Gram Jagatsinghpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jajpur": {
        "Jajpur Sadar": [
          "Jajpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jajpur Rural": [
          "Gram Jajpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jharsuguda": {
        "Jharsuguda Sadar": [
          "Jharsuguda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jharsuguda Rural": [
          "Gram Jharsuguda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kalahandi": {
        "Kalahandi Sadar": [
          "Kalahandi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kalahandi Rural": [
          "Gram Kalahandi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kandhamal": {
        "Kandhamal Sadar": [
          "Kandhamal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kandhamal Rural": [
          "Gram Kandhamal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kendrapara": {
        "Kendrapara Sadar": [
          "Kendrapara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kendrapara Rural": [
          "Gram Kendrapara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kendujhar": {
        "Kendujhar Sadar": [
          "Kendujhar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kendujhar Rural": [
          "Gram Kendujhar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khordha": {
        "Khordha Sadar": [
          "Khordha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khordha Rural": [
          "Gram Khordha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Jatni": [
          "Khurda Road",
          "IIT Area",
          "Jatni Town"
        ],
        "Bhubaneswar": [
          "Saheed Nagar",
          "Patia",
          "Chandrasekharpur",
          "Khandagiri"
        ]
      },
      "Koraput": {
        "Koraput Sadar": [
          "Koraput Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Koraput Rural": [
          "Gram Koraput",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Malkangiri": {
        "Malkangiri Sadar": [
          "Malkangiri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Malkangiri Rural": [
          "Gram Malkangiri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mayurbhanj": {
        "Mayurbhanj Sadar": [
          "Mayurbhanj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mayurbhanj Rural": [
          "Gram Mayurbhanj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nabarangpur": {
        "Nabarangpur Sadar": [
          "Nabarangpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nabarangpur Rural": [
          "Gram Nabarangpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nayagarh": {
        "Nayagarh Sadar": [
          "Nayagarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nayagarh Rural": [
          "Gram Nayagarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nuapada": {
        "Nuapada Sadar": [
          "Nuapada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nuapada Rural": [
          "Gram Nuapada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Puri": {
        "Puri Sadar": [
          "Puri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Puri Rural": [
          "Gram Puri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rayagada": {
        "Rayagada Sadar": [
          "Rayagada Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rayagada Rural": [
          "Gram Rayagada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sambalpur": {
        "Sambalpur Sadar": [
          "Sambalpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sambalpur Rural": [
          "Gram Sambalpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Subarnapur": {
        "Subarnapur Sadar": [
          "Subarnapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Subarnapur Rural": [
          "Gram Subarnapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sundargarh": {
        "Sundargarh Sadar": [
          "Sundargarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sundargarh Rural": [
          "Gram Sundargarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Punjab": {
    "term_anchal": "Tehsil / Sub-Tehsil",
    "term_record": "PLRS Jamabandi",
    "term_plot": "Khasra No",
    "term_holding": "Khewat / Khatauni",
    "districts": {
      "Amritsar": {
        "Amritsar Sadar": [
          "Amritsar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Amritsar Rural": [
          "Gram Amritsar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Amritsar-I": [
          "Ranjit Avenue",
          "Mall Road",
          "Civil Lines"
        ],
        "Amritsar-II": [
          "Majitha",
          "Chheharta",
          "Verka"
        ]
      },
      "Barnala": {
        "Barnala Sadar": [
          "Barnala Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Barnala Rural": [
          "Gram Barnala",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bathinda": {
        "Bathinda Sadar": [
          "Bathinda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bathinda Rural": [
          "Gram Bathinda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Faridkot": {
        "Faridkot Sadar": [
          "Faridkot Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Faridkot Rural": [
          "Gram Faridkot",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Fatehgarh Sahib": {
        "Fatehgarh Sahib Sadar": [
          "Fatehgarh Sahib Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Fatehgarh Sahib Rural": [
          "Gram Fatehgarh Sahib",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Fazilka": {
        "Fazilka Sadar": [
          "Fazilka Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Fazilka Rural": [
          "Gram Fazilka",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ferozepur": {
        "Ferozepur Sadar": [
          "Ferozepur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ferozepur Rural": [
          "Gram Ferozepur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gurdaspur": {
        "Gurdaspur Sadar": [
          "Gurdaspur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gurdaspur Rural": [
          "Gram Gurdaspur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hoshiarpur": {
        "Hoshiarpur Sadar": [
          "Hoshiarpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hoshiarpur Rural": [
          "Gram Hoshiarpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jalandhar": {
        "Jalandhar Sadar": [
          "Jalandhar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jalandhar Rural": [
          "Gram Jalandhar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kapurthala": {
        "Kapurthala Sadar": [
          "Kapurthala Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kapurthala Rural": [
          "Gram Kapurthala",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ludhiana": {
        "Ludhiana Sadar": [
          "Ludhiana Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ludhiana Rural": [
          "Gram Ludhiana",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Ludhiana West": [
          "Pakhowal",
          "Ferozepur Road",
          "BRS Nagar"
        ],
        "Ludhiana East": [
          "Sarabha Nagar",
          "Civil Lines",
          "Model Town"
        ]
      },
      "Malerkotla": {
        "Malerkotla Sadar": [
          "Malerkotla Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Malerkotla Rural": [
          "Gram Malerkotla",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mansa": {
        "Mansa Sadar": [
          "Mansa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mansa Rural": [
          "Gram Mansa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Moga": {
        "Moga Sadar": [
          "Moga Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Moga Rural": [
          "Gram Moga",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Muktsar": {
        "Muktsar Sadar": [
          "Muktsar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Muktsar Rural": [
          "Gram Muktsar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pathankot": {
        "Pathankot Sadar": [
          "Pathankot Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pathankot Rural": [
          "Gram Pathankot",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Patiala": {
        "Patiala Sadar": [
          "Patiala Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Patiala Rural": [
          "Gram Patiala",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rupnagar": {
        "Rupnagar Sadar": [
          "Rupnagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rupnagar Rural": [
          "Gram Rupnagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sahibzada Ajit Singh Nagar": {
        "Sahibzada Ajit Singh Nagar Sadar": [
          "Sahibzada Ajit Singh Nagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sahibzada Ajit Singh Nagar Rural": [
          "Gram Sahibzada Ajit Singh Nagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Mohali": [
          "Sector 68",
          "Sector 82 IT City",
          "Aerocity"
        ],
        "Kharar": [
          "Sunny Enclave",
          "Kharar Town",
          "Kurali"
        ]
      },
      "Sangrur": {
        "Sangrur Sadar": [
          "Sangrur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sangrur Rural": [
          "Gram Sangrur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shahid Bhagat Singh Nagar": {
        "Shahid Bhagat Singh Nagar Sadar": [
          "Shahid Bhagat Singh Nagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shahid Bhagat Singh Nagar Rural": [
          "Gram Shahid Bhagat Singh Nagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tarn Taran": {
        "Tarn Taran Sadar": [
          "Tarn Taran Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tarn Taran Rural": [
          "Gram Tarn Taran",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Rajasthan": {
    "term_anchal": "Tehsil",
    "term_record": "Apna Khata / Jamabandi RoR",
    "term_plot": "Khasra No",
    "term_holding": "Khata Number",
    "districts": {
      "Ajmer": {
        "Ajmer Sadar": [
          "Ajmer Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ajmer Rural": [
          "Gram Ajmer",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Alwar": {
        "Alwar Sadar": [
          "Alwar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Alwar Rural": [
          "Gram Alwar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Anupgarh": {
        "Anupgarh Sadar": [
          "Anupgarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Anupgarh Rural": [
          "Gram Anupgarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Balotra": {
        "Balotra Sadar": [
          "Balotra Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Balotra Rural": [
          "Gram Balotra",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Banswara": {
        "Banswara Sadar": [
          "Banswara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Banswara Rural": [
          "Gram Banswara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Baran": {
        "Baran Sadar": [
          "Baran Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Baran Rural": [
          "Gram Baran",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Barmer": {
        "Barmer Sadar": [
          "Barmer Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Barmer Rural": [
          "Gram Barmer",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Beawar": {
        "Beawar Sadar": [
          "Beawar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Beawar Rural": [
          "Gram Beawar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bharatpur": {
        "Bharatpur Sadar": [
          "Bharatpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bharatpur Rural": [
          "Gram Bharatpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhilwara": {
        "Bhilwara Sadar": [
          "Bhilwara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhilwara Rural": [
          "Gram Bhilwara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bikaner": {
        "Bikaner Sadar": [
          "Bikaner Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bikaner Rural": [
          "Gram Bikaner",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bundi": {
        "Bundi Sadar": [
          "Bundi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bundi Rural": [
          "Gram Bundi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chittorgarh": {
        "Chittorgarh Sadar": [
          "Chittorgarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chittorgarh Rural": [
          "Gram Chittorgarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Churu": {
        "Churu Sadar": [
          "Churu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Churu Rural": [
          "Gram Churu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dausa": {
        "Dausa Sadar": [
          "Dausa Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dausa Rural": [
          "Gram Dausa",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Deeg": {
        "Deeg Sadar": [
          "Deeg Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Deeg Rural": [
          "Gram Deeg",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Didwana-Kuchaman": {
        "Didwana-Kuchaman Sadar": [
          "Didwana-Kuchaman Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Didwana-Kuchaman Rural": [
          "Gram Didwana-Kuchaman",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dholpur": {
        "Dholpur Sadar": [
          "Dholpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dholpur Rural": [
          "Gram Dholpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dudu": {
        "Dudu Sadar": [
          "Dudu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dudu Rural": [
          "Gram Dudu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dungarpur": {
        "Dungarpur Sadar": [
          "Dungarpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dungarpur Rural": [
          "Gram Dungarpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ganganagar": {
        "Ganganagar Sadar": [
          "Ganganagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ganganagar Rural": [
          "Gram Ganganagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gangapur City": {
        "Gangapur City Sadar": [
          "Gangapur City Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gangapur City Rural": [
          "Gram Gangapur City",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hanumangarh": {
        "Hanumangarh Sadar": [
          "Hanumangarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hanumangarh Rural": [
          "Gram Hanumangarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hindaun": {
        "Hindaun Sadar": [
          "Hindaun Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hindaun Rural": [
          "Gram Hindaun",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jaipur": {
        "Jaipur Sadar": [
          "Jaipur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Jagatpura",
          "Malviya Nagar",
          "Vaishali Nagar"
        ],
        "Jaipur Rural": [
          "Gram Jaipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sanganer": [
          "Muhana",
          "Sitapura",
          "Mansarovar",
          "Pratap Nagar"
        ],
        "Amer": [
          "Amer Khas",
          "Jal Mahal",
          "Kukas"
        ]
      },
      "Jaipur Rural": {
        "Jaipur Rural Sadar": [
          "Jaipur Rural Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jaipur Rural Rural": [
          "Gram Jaipur Rural",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jaisalmer": {
        "Jaisalmer Sadar": [
          "Jaisalmer Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jaisalmer Rural": [
          "Gram Jaisalmer",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jalore": {
        "Jalore Sadar": [
          "Jalore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jalore Rural": [
          "Gram Jalore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jhalawar": {
        "Jhalawar Sadar": [
          "Jhalawar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jhalawar Rural": [
          "Gram Jhalawar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jhunjhunu": {
        "Jhunjhunu Sadar": [
          "Jhunjhunu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jhunjhunu Rural": [
          "Gram Jhunjhunu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jodhpur": {
        "Jodhpur Sadar": [
          "Jodhpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Shastri Nagar",
          "Mandore",
          "Ratanada",
          "Pal"
        ],
        "Jodhpur Rural": [
          "Gram Jodhpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Luni": [
          "Kudi",
          "Boronada",
          "Luni Khas"
        ]
      },
      "Jodhpur Rural": {
        "Jodhpur Rural Sadar": [
          "Jodhpur Rural Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jodhpur Rural Rural": [
          "Gram Jodhpur Rural",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Karauli": {
        "Karauli Sadar": [
          "Karauli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Karauli Rural": [
          "Gram Karauli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kekri": {
        "Kekri Sadar": [
          "Kekri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kekri Rural": [
          "Gram Kekri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khairthal-Tijara": {
        "Khairthal-Tijara Sadar": [
          "Khairthal-Tijara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khairthal-Tijara Rural": [
          "Gram Khairthal-Tijara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kota": {
        "Kota Sadar": [
          "Kota Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kota Rural": [
          "Gram Kota",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Digod": [
          "Sultanpur",
          "Digod Khas"
        ],
        "Kota Ladpura": [
          "Vigyan Nagar",
          "Talwandi",
          "Mahaveer Nagar"
        ]
      },
      "Kotputli-Behror": {
        "Kotputli-Behror Sadar": [
          "Kotputli-Behror Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kotputli-Behror Rural": [
          "Gram Kotputli-Behror",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nagaur": {
        "Nagaur Sadar": [
          "Nagaur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nagaur Rural": [
          "Gram Nagaur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Neem Ka Thana": {
        "Neem Ka Thana Sadar": [
          "Neem Ka Thana Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Neem Ka Thana Rural": [
          "Gram Neem Ka Thana",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pali": {
        "Pali Sadar": [
          "Pali Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pali Rural": [
          "Gram Pali",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Phalodi": {
        "Phalodi Sadar": [
          "Phalodi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Phalodi Rural": [
          "Gram Phalodi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pratapgarh": {
        "Pratapgarh Sadar": [
          "Pratapgarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pratapgarh Rural": [
          "Gram Pratapgarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rajsamand": {
        "Rajsamand Sadar": [
          "Rajsamand Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rajsamand Rural": [
          "Gram Rajsamand",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Salumbar": {
        "Salumbar Sadar": [
          "Salumbar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Salumbar Rural": [
          "Gram Salumbar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sanchore": {
        "Sanchore Sadar": [
          "Sanchore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sanchore Rural": [
          "Gram Sanchore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sawai Madhopur": {
        "Sawai Madhopur Sadar": [
          "Sawai Madhopur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sawai Madhopur Rural": [
          "Gram Sawai Madhopur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shahpura": {
        "Shahpura Sadar": [
          "Shahpura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shahpura Rural": [
          "Gram Shahpura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sikar": {
        "Sikar Sadar": [
          "Sikar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sikar Rural": [
          "Gram Sikar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sirohi": {
        "Sirohi Sadar": [
          "Sirohi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sirohi Rural": [
          "Gram Sirohi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tonk": {
        "Tonk Sadar": [
          "Tonk Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tonk Rural": [
          "Gram Tonk",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Udaipur": {
        "Udaipur Sadar": [
          "Udaipur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Udaipur Rural": [
          "Gram Udaipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Girwa": [
          "Bhuwana",
          "Sukher",
          "Hiran Magri",
          "Fatehpura"
        ],
        "Vallabhnagar": [
          "Bhindar",
          "Kanoor"
        ]
      }
    }
  },
  "Sikkim": {
    "term_anchal": "Sub-Division",
    "term_record": "Parcha RoR",
    "term_plot": "Plot / Khasra No",
    "term_holding": "Khatiyan No",
    "districts": {
      "Gangtok": {
        "Gangtok Sadar": [
          "Gangtok Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gangtok Rural": [
          "Gram Gangtok",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gyalshing": {
        "Gyalshing Sadar": [
          "Gyalshing Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gyalshing Rural": [
          "Gram Gyalshing",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mangan": {
        "Mangan Sadar": [
          "Mangan Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mangan Rural": [
          "Gram Mangan",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Namchi": {
        "Namchi Sadar": [
          "Namchi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Namchi Rural": [
          "Gram Namchi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pakyong": {
        "Pakyong Sadar": [
          "Pakyong Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pakyong Rural": [
          "Gram Pakyong",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Soreng": {
        "Soreng Sadar": [
          "Soreng Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Soreng Rural": [
          "Gram Soreng",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Tamil Nadu": {
    "term_anchal": "Taluk",
    "term_record": "AnyTamil Patta / Chitta RoR",
    "term_plot": "Survey / Sub-Division No",
    "term_holding": "Patta Number",
    "districts": {
      "Ariyalur": {
        "Ariyalur Sadar": [
          "Ariyalur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ariyalur Rural": [
          "Gram Ariyalur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chengalpattu": {
        "Chengalpattu Sadar": [
          "Chengalpattu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chengalpattu Rural": [
          "Gram Chengalpattu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Chengalpattu": [
          "Maraimalai Nagar",
          "Kelambakkam",
          "Mahabalipuram"
        ],
        "Tambaram": [
          "Chromepet",
          "Medavakkam",
          "Guduvanchery",
          "Pallavaram"
        ]
      },
      "Chennai": {
        "Chennai Sadar": [
          "Chennai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chennai Rural": [
          "Gram Chennai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Velachery": [
          "Guindy",
          "Taramani",
          "Adyar",
          "Besant Nagar"
        ],
        "Egmore": [
          "Chetpet",
          "Kilpauk",
          "Nungambakkam"
        ],
        "Mylapore": [
          "Alwarpet",
          "Triplicane",
          "Royapettah"
        ]
      },
      "Coimbatore": {
        "Coimbatore Sadar": [
          "Coimbatore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Coimbatore Rural": [
          "Gram Coimbatore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Coimbatore North": [
          "Gandhipuram",
          "Saravanampatti",
          "Ganapathy",
          "Peelamedu"
        ],
        "Coimbatore South": [
          "Kuniyamuthur",
          "Singanallur",
          "Sundarapuram"
        ]
      },
      "Cuddalore": {
        "Cuddalore Sadar": [
          "Cuddalore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Cuddalore Rural": [
          "Gram Cuddalore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dharmapuri": {
        "Dharmapuri Sadar": [
          "Dharmapuri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dharmapuri Rural": [
          "Gram Dharmapuri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dindigul": {
        "Dindigul Sadar": [
          "Dindigul Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dindigul Rural": [
          "Gram Dindigul",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Erode": {
        "Erode Sadar": [
          "Erode Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Erode Rural": [
          "Gram Erode",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kallakurichi": {
        "Kallakurichi Sadar": [
          "Kallakurichi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kallakurichi Rural": [
          "Gram Kallakurichi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kancheepuram": {
        "Kancheepuram Sadar": [
          "Kancheepuram Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kancheepuram Rural": [
          "Gram Kancheepuram",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Karur": {
        "Karur Sadar": [
          "Karur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Karur Rural": [
          "Gram Karur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Krishnagiri": {
        "Krishnagiri Sadar": [
          "Krishnagiri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Krishnagiri Rural": [
          "Gram Krishnagiri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Madurai": {
        "Madurai Sadar": [
          "Madurai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Madurai Rural": [
          "Gram Madurai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Madurai North": [
          "Othakadai",
          "Thallakulam",
          "Anna Nagar",
          "K.K. Nagar"
        ],
        "Madurai South": [
          "Villapuram",
          "Avaniyapuram",
          "Tirupparankundram"
        ]
      },
      "Mayiladuthurai": {
        "Mayiladuthurai Sadar": [
          "Mayiladuthurai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mayiladuthurai Rural": [
          "Gram Mayiladuthurai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nagapattinam": {
        "Nagapattinam Sadar": [
          "Nagapattinam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nagapattinam Rural": [
          "Gram Nagapattinam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kanniyakumari": {
        "Kanniyakumari Sadar": [
          "Kanniyakumari Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kanniyakumari Rural": [
          "Gram Kanniyakumari",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Namakkal": {
        "Namakkal Sadar": [
          "Namakkal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Namakkal Rural": [
          "Gram Namakkal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Perambalur": {
        "Perambalur Sadar": [
          "Perambalur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Perambalur Rural": [
          "Gram Perambalur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pudukkottai": {
        "Pudukkottai Sadar": [
          "Pudukkottai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pudukkottai Rural": [
          "Gram Pudukkottai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ramanathapuram": {
        "Ramanathapuram Sadar": [
          "Ramanathapuram Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ramanathapuram Rural": [
          "Gram Ramanathapuram",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ranipet": {
        "Ranipet Sadar": [
          "Ranipet Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ranipet Rural": [
          "Gram Ranipet",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Salem": {
        "Salem Sadar": [
          "Salem Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Salem Rural": [
          "Gram Salem",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sivaganga": {
        "Sivaganga Sadar": [
          "Sivaganga Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sivaganga Rural": [
          "Gram Sivaganga",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tenkasi": {
        "Tenkasi Sadar": [
          "Tenkasi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tenkasi Rural": [
          "Gram Tenkasi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Thanjavur": {
        "Thanjavur Sadar": [
          "Thanjavur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Thanjavur Rural": [
          "Gram Thanjavur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Theni": {
        "Theni Sadar": [
          "Theni Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Theni Rural": [
          "Gram Theni",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Thoothukudi": {
        "Thoothukudi Sadar": [
          "Thoothukudi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Thoothukudi Rural": [
          "Gram Thoothukudi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tiruchirappalli": {
        "Tiruchirappalli Sadar": [
          "Tiruchirappalli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tiruchirappalli Rural": [
          "Gram Tiruchirappalli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tirunelveli": {
        "Tirunelveli Sadar": [
          "Tirunelveli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tirunelveli Rural": [
          "Gram Tirunelveli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tirupathur": {
        "Tirupathur Sadar": [
          "Tirupathur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tirupathur Rural": [
          "Gram Tirupathur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tiruppur": {
        "Tiruppur Sadar": [
          "Tiruppur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tiruppur Rural": [
          "Gram Tiruppur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tiruvallur": {
        "Tiruvallur Sadar": [
          "Tiruvallur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tiruvallur Rural": [
          "Gram Tiruvallur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tiruvannamalai": {
        "Tiruvannamalai Sadar": [
          "Tiruvannamalai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tiruvannamalai Rural": [
          "Gram Tiruvannamalai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tiruvarur": {
        "Tiruvarur Sadar": [
          "Tiruvarur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tiruvarur Rural": [
          "Gram Tiruvarur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Vellore": {
        "Vellore Sadar": [
          "Vellore Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Vellore Rural": [
          "Gram Vellore",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Viluppuram": {
        "Viluppuram Sadar": [
          "Viluppuram Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Viluppuram Rural": [
          "Gram Viluppuram",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Virudhunagar": {
        "Virudhunagar Sadar": [
          "Virudhunagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Virudhunagar Rural": [
          "Gram Virudhunagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Telangana": {
    "term_anchal": "Mandal",
    "term_record": "Dharani Pahani & ROR-1B",
    "term_plot": "Survey / Sub-Division No",
    "term_holding": "Khata / Pattadar Passbook No",
    "districts": {
      "Adilabad": {
        "Adilabad Sadar": [
          "Adilabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Adilabad Rural": [
          "Gram Adilabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhadradri Kothagudem": {
        "Bhadradri Kothagudem Sadar": [
          "Bhadradri Kothagudem Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhadradri Kothagudem Rural": [
          "Gram Bhadradri Kothagudem",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hanumakonda": {
        "Hanumakonda Sadar": [
          "Hanumakonda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hanumakonda Rural": [
          "Gram Hanumakonda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hyderabad": {
        "Hyderabad Sadar": [
          "Hyderabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hyderabad Rural": [
          "Gram Hyderabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Serilingampally": [
          "HITEC City",
          "Madhapur",
          "Gachibowli",
          "Kondapur"
        ],
        "Secunderabad": [
          "Tarnaka",
          "Begumpet",
          "Marredpally"
        ],
        "Shaikpet": [
          "Tolichowki",
          "Banjara Hills",
          "Jubilee Hills"
        ]
      },
      "Jagtial": {
        "Jagtial Sadar": [
          "Jagtial Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jagtial Rural": [
          "Gram Jagtial",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jangaon": {
        "Jangaon Sadar": [
          "Jangaon Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jangaon Rural": [
          "Gram Jangaon",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jayashankar Bhupalpally": {
        "Jayashankar Bhupalpally Sadar": [
          "Jayashankar Bhupalpally Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jayashankar Bhupalpally Rural": [
          "Gram Jayashankar Bhupalpally",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jogulamba Gadwal": {
        "Jogulamba Gadwal Sadar": [
          "Jogulamba Gadwal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jogulamba Gadwal Rural": [
          "Gram Jogulamba Gadwal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kamareddy": {
        "Kamareddy Sadar": [
          "Kamareddy Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kamareddy Rural": [
          "Gram Kamareddy",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Karimnagar": {
        "Karimnagar Sadar": [
          "Karimnagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Karimnagar Rural": [
          "Gram Karimnagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khammam": {
        "Khammam Sadar": [
          "Khammam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khammam Rural": [
          "Gram Khammam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kumuram Bheem Asifabad": {
        "Kumuram Bheem Asifabad Sadar": [
          "Kumuram Bheem Asifabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kumuram Bheem Asifabad Rural": [
          "Gram Kumuram Bheem Asifabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mahabubabad": {
        "Mahabubabad Sadar": [
          "Mahabubabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mahabubabad Rural": [
          "Gram Mahabubabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mahabubnagar": {
        "Mahabubnagar Sadar": [
          "Mahabubnagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mahabubnagar Rural": [
          "Gram Mahabubnagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mancherial": {
        "Mancherial Sadar": [
          "Mancherial Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mancherial Rural": [
          "Gram Mancherial",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Medak": {
        "Medak Sadar": [
          "Medak Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Medak Rural": [
          "Gram Medak",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Medchal-Malkajgiri": {
        "Medchal-Malkajgiri Sadar": [
          "Medchal-Malkajgiri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Medchal-Malkajgiri Rural": [
          "Gram Medchal-Malkajgiri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Kukatpally": [
          "KPHB Colony",
          "Moosapet",
          "Nizampet"
        ],
        "Uppal": [
          "Nacharam",
          "Mallapur",
          "Uppal Khas"
        ]
      },
      "Mulugu": {
        "Mulugu Sadar": [
          "Mulugu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mulugu Rural": [
          "Gram Mulugu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nagarkurnool": {
        "Nagarkurnool Sadar": [
          "Nagarkurnool Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nagarkurnool Rural": [
          "Gram Nagarkurnool",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nalgonda": {
        "Nalgonda Sadar": [
          "Nalgonda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nalgonda Rural": [
          "Gram Nalgonda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Narayanpet": {
        "Narayanpet Sadar": [
          "Narayanpet Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Narayanpet Rural": [
          "Gram Narayanpet",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nirmal": {
        "Nirmal Sadar": [
          "Nirmal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nirmal Rural": [
          "Gram Nirmal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nizamabad": {
        "Nizamabad Sadar": [
          "Nizamabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nizamabad Rural": [
          "Gram Nizamabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Peddapalli": {
        "Peddapalli Sadar": [
          "Peddapalli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Peddapalli Rural": [
          "Gram Peddapalli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rajanna Sircilla": {
        "Rajanna Sircilla Sadar": [
          "Rajanna Sircilla Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rajanna Sircilla Rural": [
          "Gram Rajanna Sircilla",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ranga Reddy": {
        "Ranga Reddy Sadar": [
          "Ranga Reddy Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ranga Reddy Rural": [
          "Gram Ranga Reddy",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Rajendranagar": [
          "Budvel",
          "Shamshabad",
          "Attapur"
        ],
        "Maheshwaram": [
          "Mansanpally",
          "Thummalur"
        ]
      },
      "Sangareddy": {
        "Sangareddy Sadar": [
          "Sangareddy Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sangareddy Rural": [
          "Gram Sangareddy",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Siddipet": {
        "Siddipet Sadar": [
          "Siddipet Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Siddipet Rural": [
          "Gram Siddipet",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Suryapet": {
        "Suryapet Sadar": [
          "Suryapet Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Suryapet Rural": [
          "Gram Suryapet",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Vikarabad": {
        "Vikarabad Sadar": [
          "Vikarabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Vikarabad Rural": [
          "Gram Vikarabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Wanaparthy": {
        "Wanaparthy Sadar": [
          "Wanaparthy Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Wanaparthy Rural": [
          "Gram Wanaparthy",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Warangal": {
        "Warangal Sadar": [
          "Warangal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Warangal Rural": [
          "Gram Warangal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Yadadri Bhuvanagiri": {
        "Yadadri Bhuvanagiri Sadar": [
          "Yadadri Bhuvanagiri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Yadadri Bhuvanagiri Rural": [
          "Gram Yadadri Bhuvanagiri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Tripura": {
    "term_anchal": "Revenue Circle / Tehsil",
    "term_record": "Jami Khatian RoR",
    "term_plot": "Dag / Plot No",
    "term_holding": "Khatian Number",
    "districts": {
      "Dhalai": {
        "Dhalai Sadar": [
          "Dhalai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dhalai Rural": [
          "Gram Dhalai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gomati": {
        "Gomati Sadar": [
          "Gomati Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gomati Rural": [
          "Gram Gomati",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Khowai": {
        "Khowai Sadar": [
          "Khowai Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Khowai Rural": [
          "Gram Khowai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "North Tripura": {
        "North Tripura Sadar": [
          "North Tripura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "North Tripura Rural": [
          "Gram North Tripura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sepahijala": {
        "Sepahijala Sadar": [
          "Sepahijala Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sepahijala Rural": [
          "Gram Sepahijala",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South Tripura": {
        "South Tripura Sadar": [
          "South Tripura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South Tripura Rural": [
          "Gram South Tripura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Unakoti": {
        "Unakoti Sadar": [
          "Unakoti Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Unakoti Rural": [
          "Gram Unakoti",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "West Tripura": {
        "West Tripura Sadar": [
          "West Tripura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Tripura Rural": [
          "Gram West Tripura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Uttar Pradesh": {
    "term_anchal": "Tehsil",
    "term_record": "UP Bhulekh Real-time Khatauni",
    "term_plot": "Gata / Khasra No",
    "term_holding": "Khata Number",
    "districts": {
      "Agra": {
        "Agra Sadar": [
          "Agra Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Dayalbagh",
          "Kamla Nagar",
          "Bodla",
          "Tajganj"
        ],
        "Agra Rural": [
          "Gram Agra",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Fatehabad": [
          "Doki",
          "Fatehabad Khas",
          "Shamshabad"
        ]
      },
      "Aligarh": {
        "Aligarh Sadar": [
          "Aligarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Aligarh Rural": [
          "Gram Aligarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ambedkar Nagar": {
        "Ambedkar Nagar Sadar": [
          "Ambedkar Nagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ambedkar Nagar Rural": [
          "Gram Ambedkar Nagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Amethi": {
        "Amethi Sadar": [
          "Amethi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Amethi Rural": [
          "Gram Amethi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Amroha": {
        "Amroha Sadar": [
          "Amroha Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Amroha Rural": [
          "Gram Amroha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Auraiya": {
        "Auraiya Sadar": [
          "Auraiya Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Auraiya Rural": [
          "Gram Auraiya",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ayodhya": {
        "Ayodhya Sadar": [
          "Ayodhya Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ayodhya Rural": [
          "Gram Ayodhya",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Azamgarh": {
        "Azamgarh Sadar": [
          "Azamgarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Azamgarh Rural": [
          "Gram Azamgarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Baghpat": {
        "Baghpat Sadar": [
          "Baghpat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Baghpat Rural": [
          "Gram Baghpat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bahraich": {
        "Bahraich Sadar": [
          "Bahraich Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bahraich Rural": [
          "Gram Bahraich",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ballia": {
        "Ballia Sadar": [
          "Ballia Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ballia Rural": [
          "Gram Ballia",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Balrampur": {
        "Balrampur Sadar": [
          "Balrampur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Balrampur Rural": [
          "Gram Balrampur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Banda": {
        "Banda Sadar": [
          "Banda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Banda Rural": [
          "Gram Banda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Barabanki": {
        "Barabanki Sadar": [
          "Barabanki Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Barabanki Rural": [
          "Gram Barabanki",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bareilly": {
        "Bareilly Sadar": [
          "Bareilly Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Izzatnagar",
          "Rithora",
          "CB Ganj"
        ],
        "Bareilly Rural": [
          "Gram Bareilly",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Aonla": [
          "Ramnagar",
          "Aonla Khas",
          "Sirauli"
        ]
      },
      "Basti": {
        "Basti Sadar": [
          "Basti Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Basti Rural": [
          "Gram Basti",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhadohi": {
        "Bhadohi Sadar": [
          "Bhadohi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bhadohi Rural": [
          "Gram Bhadohi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bijnor": {
        "Bijnor Sadar": [
          "Bijnor Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bijnor Rural": [
          "Gram Bijnor",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Budaun": {
        "Budaun Sadar": [
          "Budaun Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Budaun Rural": [
          "Gram Budaun",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bulandshahr": {
        "Bulandshahr Sadar": [
          "Bulandshahr Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bulandshahr Rural": [
          "Gram Bulandshahr",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chandauli": {
        "Chandauli Sadar": [
          "Chandauli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chandauli Rural": [
          "Gram Chandauli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chitrakoot": {
        "Chitrakoot Sadar": [
          "Chitrakoot Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chitrakoot Rural": [
          "Gram Chitrakoot",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Deoria": {
        "Deoria Sadar": [
          "Deoria Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Deoria Rural": [
          "Gram Deoria",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Etah": {
        "Etah Sadar": [
          "Etah Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Etah Rural": [
          "Gram Etah",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Etawah": {
        "Etawah Sadar": [
          "Etawah Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Etawah Rural": [
          "Gram Etawah",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Farrukhabad": {
        "Farrukhabad Sadar": [
          "Farrukhabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Farrukhabad Rural": [
          "Gram Farrukhabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Fatehpur": {
        "Fatehpur Sadar": [
          "Fatehpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Fatehpur Rural": [
          "Gram Fatehpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Firozabad": {
        "Firozabad Sadar": [
          "Firozabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Firozabad Rural": [
          "Gram Firozabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gautam Buddha Nagar": {
        "Gautam Buddha Nagar Sadar": [
          "Gautam Buddha Nagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gautam Buddha Nagar Rural": [
          "Gram Gautam Buddha Nagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Dadri": [
          "Bhangel",
          "Tilapta",
          "Surajpur"
        ],
        "Jewar": [
          "Rohi",
          "Jewar Bangar",
          "Dayanatpur"
        ],
        "Sadar Noida": [
          "Mamura",
          "Barola",
          "Atta",
          "Sector 62"
        ]
      },
      "Ghaziabad": {
        "Ghaziabad Sadar": [
          "Ghaziabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Sahibabad",
          "Raj Nagar",
          "Muradnagar"
        ],
        "Ghaziabad Rural": [
          "Gram Ghaziabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Modinagar": [
          "Bhojpur",
          "Modinagar Khas",
          "Niwari"
        ]
      },
      "Ghazipur": {
        "Ghazipur Sadar": [
          "Ghazipur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ghazipur Rural": [
          "Gram Ghazipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gonda": {
        "Gonda Sadar": [
          "Gonda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Gonda Rural": [
          "Gram Gonda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gorakhpur": {
        "Gorakhpur Sadar": [
          "Gorakhpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Medical College",
          "Pipraich",
          "Bargadwa"
        ],
        "Gorakhpur Rural": [
          "Gram Gorakhpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sahjanwa": [
          "Ghaghar",
          "Sahjanwa Khas",
          "Rithia"
        ]
      },
      "Hamirpur": {
        "Hamirpur Sadar": [
          "Hamirpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hamirpur Rural": [
          "Gram Hamirpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hapur": {
        "Hapur Sadar": [
          "Hapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hapur Rural": [
          "Gram Hapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hardoi": {
        "Hardoi Sadar": [
          "Hardoi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hardoi Rural": [
          "Gram Hardoi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hathras": {
        "Hathras Sadar": [
          "Hathras Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hathras Rural": [
          "Gram Hathras",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jalaun": {
        "Jalaun Sadar": [
          "Jalaun Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jalaun Rural": [
          "Gram Jalaun",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jaunpur": {
        "Jaunpur Sadar": [
          "Jaunpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jaunpur Rural": [
          "Gram Jaunpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jhansi": {
        "Jhansi Sadar": [
          "Jhansi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jhansi Rural": [
          "Gram Jhansi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kannauj": {
        "Kannauj Sadar": [
          "Kannauj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kannauj Rural": [
          "Gram Kannauj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kanpur Dehat": {
        "Kanpur Dehat Sadar": [
          "Kanpur Dehat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kanpur Dehat Rural": [
          "Gram Kanpur Dehat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kanpur Nagar": {
        "Kanpur Nagar Sadar": [
          "Kanpur Nagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kanpur Nagar Rural": [
          "Gram Kanpur Nagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Ghatampur": [
          "Bhitargaon",
          "Sajeti",
          "Ghatampur Khas"
        ],
        "Kanpur Sadar": [
          "Rawatpur",
          "Kalyanpur",
          "Panki",
          "Govind Nagar"
        ]
      },
      "Kasganj": {
        "Kasganj Sadar": [
          "Kasganj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kasganj Rural": [
          "Gram Kasganj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kaushambi": {
        "Kaushambi Sadar": [
          "Kaushambi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kaushambi Rural": [
          "Gram Kaushambi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kheri": {
        "Kheri Sadar": [
          "Kheri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kheri Rural": [
          "Gram Kheri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kushinagar": {
        "Kushinagar Sadar": [
          "Kushinagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kushinagar Rural": [
          "Gram Kushinagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lalitpur": {
        "Lalitpur Sadar": [
          "Lalitpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lalitpur Rural": [
          "Gram Lalitpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Lucknow": {
        "Lucknow Sadar": [
          "Lucknow Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Alambagh",
          "Mahanagar",
          "Gomti Nagar"
        ],
        "Lucknow Rural": [
          "Gram Lucknow",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sarojini Nagar": [
          "Hindnagar",
          "Amausi",
          "Transport Nagar",
          "Banthra"
        ],
        "Bakshi Ka Talab": [
          "Asta",
          "Bhaisamau",
          "Itaunja"
        ]
      },
      "Maharajganj": {
        "Maharajganj Sadar": [
          "Maharajganj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Maharajganj Rural": [
          "Gram Maharajganj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mahoba": {
        "Mahoba Sadar": [
          "Mahoba Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mahoba Rural": [
          "Gram Mahoba",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mainpuri": {
        "Mainpuri Sadar": [
          "Mainpuri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mainpuri Rural": [
          "Gram Mainpuri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mathura": {
        "Mathura Sadar": [
          "Mathura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mathura Rural": [
          "Gram Mathura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mau": {
        "Mau Sadar": [
          "Mau Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mau Rural": [
          "Gram Mau",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Meerut": {
        "Meerut Sadar": [
          "Meerut Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Partapur",
          "Daurala",
          "Kankerkhera"
        ],
        "Meerut Rural": [
          "Gram Meerut",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Mawana": [
          "Hastinapur",
          "Parikshitgarh",
          "Mawana Khas"
        ]
      },
      "Mirzapur": {
        "Mirzapur Sadar": [
          "Mirzapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mirzapur Rural": [
          "Gram Mirzapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Moradabad": {
        "Moradabad Sadar": [
          "Moradabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Moradabad Rural": [
          "Gram Moradabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Muzaffarnagar": {
        "Muzaffarnagar Sadar": [
          "Muzaffarnagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Muzaffarnagar Rural": [
          "Gram Muzaffarnagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pilibhit": {
        "Pilibhit Sadar": [
          "Pilibhit Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pilibhit Rural": [
          "Gram Pilibhit",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pratapgarh": {
        "Pratapgarh Sadar": [
          "Pratapgarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pratapgarh Rural": [
          "Gram Pratapgarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Prayagraj": {
        "Prayagraj Sadar": [
          "Prayagraj Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Prayagraj Rural": [
          "Gram Prayagraj",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Sadar": [
          "Naini",
          "Phaphamau",
          "Jhunsi",
          "Civil Lines"
        ],
        "Phulpur": [
          "Phulpur Khas",
          "Andawa",
          "Sahson"
        ]
      },
      "Raebareli": {
        "Raebareli Sadar": [
          "Raebareli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Raebareli Rural": [
          "Gram Raebareli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rampur": {
        "Rampur Sadar": [
          "Rampur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rampur Rural": [
          "Gram Rampur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Saharanpur": {
        "Saharanpur Sadar": [
          "Saharanpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Saharanpur Rural": [
          "Gram Saharanpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sambhal": {
        "Sambhal Sadar": [
          "Sambhal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sambhal Rural": [
          "Gram Sambhal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sant Kabir Nagar": {
        "Sant Kabir Nagar Sadar": [
          "Sant Kabir Nagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sant Kabir Nagar Rural": [
          "Gram Sant Kabir Nagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shahjahanpur": {
        "Shahjahanpur Sadar": [
          "Shahjahanpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shahjahanpur Rural": [
          "Gram Shahjahanpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shamli": {
        "Shamli Sadar": [
          "Shamli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shamli Rural": [
          "Gram Shamli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shrawasti": {
        "Shrawasti Sadar": [
          "Shrawasti Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shrawasti Rural": [
          "Gram Shrawasti",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Siddharthnagar": {
        "Siddharthnagar Sadar": [
          "Siddharthnagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Siddharthnagar Rural": [
          "Gram Siddharthnagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sitapur": {
        "Sitapur Sadar": [
          "Sitapur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sitapur Rural": [
          "Gram Sitapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sonbhadra": {
        "Sonbhadra Sadar": [
          "Sonbhadra Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sonbhadra Rural": [
          "Gram Sonbhadra",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sultanpur": {
        "Sultanpur Sadar": [
          "Sultanpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Sultanpur Rural": [
          "Gram Sultanpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Unnao": {
        "Unnao Sadar": [
          "Unnao Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Unnao Rural": [
          "Gram Unnao",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Varanasi": {
        "Varanasi Sadar": [
          "Varanasi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Pandeypur",
          "Ramnagar",
          "Shivpur",
          "Sarnath"
        ],
        "Varanasi Rural": [
          "Gram Varanasi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Pindra": [
          "Pindra Khas",
          "Sindhora",
          "Phoolpur"
        ]
      }
    }
  },
  "Uttarakhand": {
    "term_anchal": "Tehsil",
    "term_record": "Devbhoomi Bhulekh Khatauni",
    "term_plot": "Khasra No",
    "term_holding": "Khata Number",
    "districts": {
      "Almora": {
        "Almora Sadar": [
          "Almora Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Almora Rural": [
          "Gram Almora",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bageshwar": {
        "Bageshwar Sadar": [
          "Bageshwar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bageshwar Rural": [
          "Gram Bageshwar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chamoli": {
        "Chamoli Sadar": [
          "Chamoli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chamoli Rural": [
          "Gram Chamoli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Champawat": {
        "Champawat Sadar": [
          "Champawat Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Champawat Rural": [
          "Gram Champawat",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dehradun": {
        "Dehradun Sadar": [
          "Dehradun Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Clement Town",
          "Sahastradhara",
          "Rajpur Road"
        ],
        "Dehradun Rural": [
          "Gram Dehradun",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Rishikesh": [
          "Tapovan",
          "Raiwala",
          "Rishikesh Town"
        ]
      },
      "Haridwar": {
        "Haridwar Sadar": [
          "Haridwar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "SIDCUL",
          "Jwalapur",
          "Kankhal"
        ],
        "Haridwar Rural": [
          "Gram Haridwar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Roorkee": [
          "Bhagwanpur",
          "IIT Area",
          "Roorkee Cantt"
        ]
      },
      "Nainital": {
        "Nainital Sadar": [
          "Nainital Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nainital Rural": [
          "Gram Nainital",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pauri Garhwal": {
        "Pauri Garhwal Sadar": [
          "Pauri Garhwal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pauri Garhwal Rural": [
          "Gram Pauri Garhwal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pithoragarh": {
        "Pithoragarh Sadar": [
          "Pithoragarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pithoragarh Rural": [
          "Gram Pithoragarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rudraprayag": {
        "Rudraprayag Sadar": [
          "Rudraprayag Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rudraprayag Rural": [
          "Gram Rudraprayag",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Tehri Garhwal": {
        "Tehri Garhwal Sadar": [
          "Tehri Garhwal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Tehri Garhwal Rural": [
          "Gram Tehri Garhwal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Udham Singh Nagar": {
        "Udham Singh Nagar Sadar": [
          "Udham Singh Nagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Udham Singh Nagar Rural": [
          "Gram Udham Singh Nagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Uttarkashi": {
        "Uttarkashi Sadar": [
          "Uttarkashi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Uttarkashi Rural": [
          "Gram Uttarkashi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "West Bengal": {
    "term_anchal": "Block / BL&LRO Circle",
    "term_record": "Banglarbhumi Khatian RoR",
    "term_plot": "Dag / Plot No",
    "term_holding": "Khatian Number",
    "districts": {
      "Alipurduar": {
        "Alipurduar Sadar": [
          "Alipurduar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Alipurduar Rural": [
          "Gram Alipurduar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bankura": {
        "Bankura Sadar": [
          "Bankura Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bankura Rural": [
          "Gram Bankura",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Birbhum": {
        "Birbhum Sadar": [
          "Birbhum Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Birbhum Rural": [
          "Gram Birbhum",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Cooch Behar": {
        "Cooch Behar Sadar": [
          "Cooch Behar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Cooch Behar Rural": [
          "Gram Cooch Behar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Dakshin Dinajpur": {
        "Dakshin Dinajpur Sadar": [
          "Dakshin Dinajpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dakshin Dinajpur Rural": [
          "Gram Dakshin Dinajpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Darjeeling": {
        "Darjeeling Sadar": [
          "Darjeeling Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Kurseong",
          "Ghoom",
          "Mirik"
        ],
        "Darjeeling Rural": [
          "Gram Darjeeling",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Siliguri": [
          "Matigara",
          "Phansidewa",
          "Naxalbari"
        ]
      },
      "Hooghly": {
        "Hooghly Sadar": [
          "Hooghly Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Hooghly Rural": [
          "Gram Hooghly",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Howrah": {
        "Howrah Sadar": [
          "Howrah Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony",
          "Shibpur",
          "Liluah",
          "Santragachi",
          "Bally"
        ],
        "Howrah Rural": [
          "Gram Howrah",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Uluberia": [
          "Uluberia Khas",
          "Bagnan",
          "Amta"
        ]
      },
      "Jalpaiguri": {
        "Jalpaiguri Sadar": [
          "Jalpaiguri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jalpaiguri Rural": [
          "Gram Jalpaiguri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jhargram": {
        "Jhargram Sadar": [
          "Jhargram Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jhargram Rural": [
          "Gram Jhargram",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kalimpong": {
        "Kalimpong Sadar": [
          "Kalimpong Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kalimpong Rural": [
          "Gram Kalimpong",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kolkata": {
        "Kolkata Sadar": [
          "Kolkata Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kolkata Rural": [
          "Gram Kolkata",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Malda": {
        "Malda Sadar": [
          "Malda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Malda Rural": [
          "Gram Malda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Murshidabad": {
        "Murshidabad Sadar": [
          "Murshidabad Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Murshidabad Rural": [
          "Gram Murshidabad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Nadia": {
        "Nadia Sadar": [
          "Nadia Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nadia Rural": [
          "Gram Nadia",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "North 24 Parganas": {
        "North 24 Parganas Sadar": [
          "North 24 Parganas Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "North 24 Parganas Rural": [
          "Gram North 24 Parganas",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Barasat": [
          "Madhyamgram",
          "Rajarhat / Newtown",
          "Salt Lake",
          "Dum Dum"
        ],
        "Barrackpore": [
          "Khardaha",
          "Titagarh",
          "Naihati"
        ]
      },
      "Paschim Bardhaman": {
        "Paschim Bardhaman Sadar": [
          "Paschim Bardhaman Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Paschim Bardhaman Rural": [
          "Gram Paschim Bardhaman",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Paschim Medinipur": {
        "Paschim Medinipur Sadar": [
          "Paschim Medinipur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Paschim Medinipur Rural": [
          "Gram Paschim Medinipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Purba Bardhaman": {
        "Purba Bardhaman Sadar": [
          "Purba Bardhaman Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Purba Bardhaman Rural": [
          "Gram Purba Bardhaman",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Purba Medinipur": {
        "Purba Medinipur Sadar": [
          "Purba Medinipur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Purba Medinipur Rural": [
          "Gram Purba Medinipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Purulia": {
        "Purulia Sadar": [
          "Purulia Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Purulia Rural": [
          "Gram Purulia",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South 24 Parganas": {
        "South 24 Parganas Sadar": [
          "South 24 Parganas Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South 24 Parganas Rural": [
          "Gram South 24 Parganas",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Baruipur": [
          "Rajpur",
          "Sonarpur",
          "Baruipur Khas"
        ],
        "Alipore": [
          "Ballygunge",
          "Behala",
          "Garia",
          "Jadavpur"
        ]
      },
      "Uttar Dinajpur": {
        "Uttar Dinajpur Sadar": [
          "Uttar Dinajpur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Uttar Dinajpur Rural": [
          "Gram Uttar Dinajpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Andaman & Nicobar Islands": {
    "term_anchal": "Tehsil",
    "term_record": "Record of Rights",
    "term_plot": "Survey / Plot No",
    "term_holding": "Holding No",
    "districts": {
      "Nicobar": {
        "Nicobar Sadar": [
          "Nicobar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Nicobar Rural": [
          "Gram Nicobar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "North and Middle Andaman": {
        "North and Middle Andaman Sadar": [
          "North and Middle Andaman Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "North and Middle Andaman Rural": [
          "Gram North and Middle Andaman",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South Andaman": {
        "South Andaman Sadar": [
          "South Andaman Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South Andaman Rural": [
          "Gram South Andaman",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Chandigarh": {
    "term_anchal": "Sub-Division",
    "term_record": "Property Card / Jamabandi",
    "term_plot": "Sector / Plot No",
    "term_holding": "Property File No",
    "districts": {
      "Chandigarh": {
        "Chandigarh Sadar": [
          "Chandigarh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Chandigarh Rural": [
          "Gram Chandigarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Chandigarh South": [
          "Sector 44",
          "Sector 43",
          "Manimajra"
        ],
        "Chandigarh Central": [
          "Sector 35",
          "Sector 17",
          "Sector 8"
        ]
      }
    }
  },
  "Dadra & Nagar Haveli and Daman & Diu": {
    "term_anchal": "Taluka",
    "term_record": "Form I & XIV / Property Card",
    "term_plot": "Survey No",
    "term_holding": "Khata No",
    "districts": {
      "Dadra and Nagar Haveli": {
        "Dadra and Nagar Haveli Sadar": [
          "Dadra and Nagar Haveli Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Dadra and Nagar Haveli Rural": [
          "Gram Dadra and Nagar Haveli",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Daman": {
        "Daman Sadar": [
          "Daman Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Daman Rural": [
          "Gram Daman",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Diu": {
        "Diu Sadar": [
          "Diu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Diu Rural": [
          "Gram Diu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Delhi (NCT)": {
    "term_anchal": "Tehsil / Sub-Division",
    "term_record": "DLRC Khasra Khatauni",
    "term_plot": "Khasra No",
    "term_holding": "Khata Number",
    "districts": {
      "Central Delhi": {
        "Central Delhi Sadar": [
          "Central Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Central Delhi Rural": [
          "Gram Central Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "East Delhi": {
        "East Delhi Sadar": [
          "East Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "East Delhi Rural": [
          "Gram East Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Preet Vihar": [
          "Patparganj",
          "Shakarpur",
          "Mayur Vihar"
        ],
        "Gandhi Nagar": [
          "Krishna Nagar",
          "Geeta Colony",
          "Kanti Nagar"
        ]
      },
      "New Delhi": {
        "New Delhi Sadar": [
          "New Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "New Delhi Rural": [
          "Gram New Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "North Delhi": {
        "North Delhi Sadar": [
          "North Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "North Delhi Rural": [
          "Gram North Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "North East Delhi": {
        "North East Delhi Sadar": [
          "North East Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "North East Delhi Rural": [
          "Gram North East Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "North West Delhi": {
        "North West Delhi Sadar": [
          "North West Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "North West Delhi Rural": [
          "Gram North West Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Rohini": [
          "Begumpur",
          "Budh Vihar",
          "Rithala"
        ],
        "Kanjhawala": [
          "Holambi Kalan",
          "Bawana",
          "Narela",
          "Alipur"
        ]
      },
      "Shahdara": {
        "Shahdara Sadar": [
          "Shahdara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shahdara Rural": [
          "Gram Shahdara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South Delhi": {
        "South Delhi Sadar": [
          "South Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South Delhi Rural": [
          "Gram South Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Hauz Khas": [
          "Mehrauli",
          "Sainik Farm",
          "Neb Sarai",
          "Chattarpur"
        ],
        "Saket": [
          "Khanpur",
          "Tigri",
          "Saidulajab"
        ]
      },
      "South East Delhi": {
        "South East Delhi Sadar": [
          "South East Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South East Delhi Rural": [
          "Gram South East Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "South West Delhi": {
        "South West Delhi Sadar": [
          "South West Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "South West Delhi Rural": [
          "Gram South West Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Dwarka": [
          "Najafgarh",
          "Matiala",
          "Bijwasan",
          "Kakrola"
        ],
        "Vasant Vihar": [
          "Kapashera",
          "Mahipalpur",
          "Rangpuri"
        ]
      },
      "West Delhi": {
        "West Delhi Sadar": [
          "West Delhi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "West Delhi Rural": [
          "Gram West Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Jammu & Kashmir": {
    "term_anchal": "Tehsil",
    "term_record": "Aapki Zameen Aapki Nigrani Jamabandi",
    "term_plot": "Khasra No",
    "term_holding": "Khewat / Khatauni",
    "districts": {
      "Anantnag": {
        "Anantnag Sadar": [
          "Anantnag Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Anantnag Rural": [
          "Gram Anantnag",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bandipora": {
        "Bandipora Sadar": [
          "Bandipora Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Bandipora Rural": [
          "Gram Bandipora",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Baramulla": {
        "Baramulla Sadar": [
          "Baramulla Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Baramulla Rural": [
          "Gram Baramulla",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Budgam": {
        "Budgam Sadar": [
          "Budgam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Budgam Rural": [
          "Gram Budgam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Doda": {
        "Doda Sadar": [
          "Doda Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Doda Rural": [
          "Gram Doda",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ganderbal": {
        "Ganderbal Sadar": [
          "Ganderbal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ganderbal Rural": [
          "Gram Ganderbal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jammu": {
        "Jammu Sadar": [
          "Jammu Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Jammu Rural": [
          "Gram Jammu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Jammu South": [
          "Bahu Fort",
          "Trikuta Nagar",
          "Gandhi Nagar"
        ],
        "Jammu North": [
          "Bantalab",
          "Janipur",
          "Roop Nagar"
        ]
      },
      "Kathua": {
        "Kathua Sadar": [
          "Kathua Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kathua Rural": [
          "Gram Kathua",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kishtwar": {
        "Kishtwar Sadar": [
          "Kishtwar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kishtwar Rural": [
          "Gram Kishtwar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kulgam": {
        "Kulgam Sadar": [
          "Kulgam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kulgam Rural": [
          "Gram Kulgam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kupwara": {
        "Kupwara Sadar": [
          "Kupwara Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kupwara Rural": [
          "Gram Kupwara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Poonch": {
        "Poonch Sadar": [
          "Poonch Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Poonch Rural": [
          "Gram Poonch",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Pulwama": {
        "Pulwama Sadar": [
          "Pulwama Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Pulwama Rural": [
          "Gram Pulwama",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Rajouri": {
        "Rajouri Sadar": [
          "Rajouri Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Rajouri Rural": [
          "Gram Rajouri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Ramban": {
        "Ramban Sadar": [
          "Ramban Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Ramban Rural": [
          "Gram Ramban",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Reasi": {
        "Reasi Sadar": [
          "Reasi Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Reasi Rural": [
          "Gram Reasi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Samba": {
        "Samba Sadar": [
          "Samba Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Samba Rural": [
          "Gram Samba",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Shopian": {
        "Shopian Sadar": [
          "Shopian Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Shopian Rural": [
          "Gram Shopian",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Srinagar": {
        "Srinagar Sadar": [
          "Srinagar Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Srinagar Rural": [
          "Gram Srinagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Srinagar South": [
          "Rajbagh",
          "Lal Chowk",
          "Jawahar Nagar"
        ],
        "Srinagar North": [
          "Soura",
          "Zadibal",
          "Hazratbal"
        ]
      },
      "Udhampur": {
        "Udhampur Sadar": [
          "Udhampur Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Udhampur Rural": [
          "Gram Udhampur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Ladakh": {
    "term_anchal": "Tehsil / Sub-Division",
    "term_record": "Jamabandi RoR",
    "term_plot": "Khasra No",
    "term_holding": "Holding No",
    "districts": {
      "Kargil": {
        "Kargil Sadar": [
          "Kargil Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Kargil Rural": [
          "Gram Kargil",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Leh": {
        "Leh Sadar": [
          "Leh Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Leh Rural": [
          "Gram Leh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Lakshadweep": {
    "term_anchal": "Island Sub-Division",
    "term_record": "Pandaram Land Registry",
    "term_plot": "Survey / Plot No",
    "term_holding": "Registration No",
    "districts": {
      "Lakshadweep": {
        "Lakshadweep Sadar": [
          "Lakshadweep Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Lakshadweep Rural": [
          "Gram Lakshadweep",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  },
  "Puducherry": {
    "term_anchal": "Taluk",
    "term_record": "Nilamagal Patta RoR",
    "term_plot": "Cadastre / Survey No",
    "term_holding": "Patta No",
    "districts": {
      "Karaikal": {
        "Karaikal Sadar": [
          "Karaikal Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Karaikal Rural": [
          "Gram Karaikal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mahe": {
        "Mahe Sadar": [
          "Mahe Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Mahe Rural": [
          "Gram Mahe",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Puducherry": {
        "Puducherry Sadar": [
          "Puducherry Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Puducherry Rural": [
          "Gram Puducherry",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ],
        "Puducherry": [
          "Ariyankuppam",
          "White Town",
          "Lawspet"
        ],
        "Villianur": [
          "Koodapakkam",
          "Villianur Khas"
        ]
      },
      "Yanam": {
        "Yanam Sadar": [
          "Yanam Khas",
          "Civil Lines",
          "Main Market",
          "Sector 1",
          "Revenue Colony"
        ],
        "Yanam Rural": [
          "Gram Yanam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      }
    }
  }
};

export const getMasterStateInfo = (stateName: string): StateLocationInfo => {
  if (PAN_INDIA_MASTER_TREE[stateName]) {
    return PAN_INDIA_MASTER_TREE[stateName];
  }
  // Handle common aliases
  if (stateName === "Delhi" && PAN_INDIA_MASTER_TREE["Delhi (NCT)"]) return PAN_INDIA_MASTER_TREE["Delhi (NCT)"];
  if (stateName === "Jammu and Kashmir" && PAN_INDIA_MASTER_TREE["Jammu & Kashmir"]) return PAN_INDIA_MASTER_TREE["Jammu & Kashmir"];
  
  return PAN_INDIA_MASTER_TREE["Jharkhand"];
};

export const getAllDistrictsForState = (stateName: string): string[] => {
  const info = getMasterStateInfo(stateName);
  return Object.keys(info.districts);
};
