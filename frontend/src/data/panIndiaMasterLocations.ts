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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Guntur Rural": [
          "Gram Guntur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kakinada": {
        "Kakinada Sadar": [
          "Kakinada Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "NTR Rural": [
          "Gram NTR",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Palnadu": {
        "Palnadu Sadar": [
          "Palnadu Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Visakhapatnam Urban": [
          "MVP Colony",
          "Gajuwaka",
          "Madhurawada",
          "Rushikonda",
          "Seethammadhara"
        ],
        "Anandapuram": [
          "Anandapuram Town",
          "Gambheeram",
          "Vemulavalasa"
        ]
      },
      "Vizianagaram": {
        "Vizianagaram Sadar": [
          "Vizianagaram Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Cachar Rural": [
          "Gram Cachar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Charaideo": {
        "Charaideo Sadar": [
          "Charaideo Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Kamrup Metropolitan Rural": [
          "Gram Kamrup Metropolitan",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Karbi Anglong": {
        "Karbi Anglong Sadar": [
          "Karbi Anglong Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Bhagalpur Rural": [
          "Gram Bhagalpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhojpur": {
        "Bhojpur Sadar": [
          "Bhojpur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Darbhanga Rural": [
          "Gram Darbhanga",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "East Champaran": {
        "East Champaran Sadar": [
          "East Champaran Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Bodhgaya",
          "Manpur",
          "Civil Lines",
          "Delha",
          "Rampur"
        ],
        "Sherghati": [
          "Sherghati Khas",
          "Dobhi",
          "Barachatti",
          "Hunterganj"
        ],
        "Tekari": [
          "Tekari Khas",
          "Konch",
          "Guraru",
          "Belaganj"
        ]
      },
      "Gopalganj": {
        "Gopalganj Sadar": [
          "Gopalganj Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Musahari": [
          "Muzaffarpur Town",
          "Kanti",
          "Brahampura",
          "Mithanpura",
          "Damodarpur"
        ],
        "Sakra": [
          "Sakra Khas",
          "Dholi",
          "Piar",
          "Machhahi"
        ],
        "Motipur": [
          "Motipur Khas",
          "Baruraj",
          "Sahebganj"
        ]
      },
      "Nalanda": {
        "Nalanda Sadar": [
          "Nalanda Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Kankarbagh",
          "Boring Road",
          "Bailey Road",
          "Patliputra Colony",
          "Rajendra Nagar",
          "Digha"
        ],
        "Danapur": [
          "Danapur Cantt",
          "Khagaul",
          "Saguna More",
          "Mustafapur",
          "Maner"
        ],
        "Phulwari Sharif": [
          "Phulwari Khas",
          "Janipur",
          "Walmi",
          "Bhikha Chak",
          "Sampatchak"
        ],
        "Fatwah": [
          "Fatwah Khas",
          "Daniawan",
          "Surungpur",
          "Bakhtiarpur"
        ]
      },
      "Purnia": {
        "Purnia Sadar": [
          "Purnia Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Durg": [
          "Bhilai Sector 6",
          "Nehru Nagar",
          "Supela",
          "Kumhari"
        ]
      },
      "Gariaband": {
        "Gariaband Sadar": [
          "Gariaband Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Raipur": [
          "Pandri",
          "Telibandha",
          "Shankar Nagar",
          "VIP Road",
          "Naya Raipur Atal Nagar"
        ],
        "Arang": [
          "Arang Town",
          "Mandir Hasaud",
          "Gullu"
        ]
      },
      "Rajnandgaon": {
        "Rajnandgaon Sadar": [
          "Rajnandgaon Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Tiswadi (Panaji)": [
          "Panaji City",
          "Miramar",
          "Dona Paula",
          "Old Goa",
          "Ribandar"
        ],
        "Bardez": [
          "Mapusa",
          "Calangute",
          "Candolim",
          "Porvorim",
          "Anjuna"
        ]
      },
      "South Goa": {
        "Salcete (Margao)": [
          "Margao Town",
          "Colva",
          "Benaulim",
          "Fatorda",
          "Navelim"
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
        "Daskroi": [
          "Bopal",
          "Sanand Road",
          "Ghatlodia",
          "Chandlodia",
          "Vastrapur",
          "Thaltej"
        ],
        "Ahmedabad City": [
          "Navrangpura",
          "Satellite",
          "Paldi",
          "Ellisbridge",
          "Maninagar"
        ],
        "Sanand": [
          "Sanand GIDC",
          "Shela",
          "Telav",
          "Chekhla",
          "Nidhrad"
        ]
      },
      "Amreli": {
        "Amreli Sadar": [
          "Amreli Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Rajkot Rural": [
          "Gram Rajkot",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sabarkantha": {
        "Sabarkantha Sadar": [
          "Sabarkantha Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Chorasi": [
          "Adajan",
          "Vesu",
          "Piplod",
          "Althan",
          "Dumas",
          "Bhimrad"
        ],
        "Majura": [
          "Ghod Dod Road",
          "City Light",
          "Athwa Lines",
          "Nanpura"
        ],
        "Kamrej": [
          "Kamrej Town",
          "Kholwad",
          "Pasodara",
          "Vav"
        ]
      },
      "Surendranagar": {
        "Surendranagar Sadar": [
          "Surendranagar Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Vadodara Rural": [
          "Gram Vadodara",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Valsad": {
        "Valsad Sadar": [
          "Valsad Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Faridabad": [
          "Sector 15",
          "Sector 16",
          "NIT Faridabad",
          "Greenfield",
          "Surajkund"
        ],
        "Ballabgarh": [
          "Ballabgarh Town",
          "Chhainsa",
          "Tigaon",
          "Prithla"
        ]
      },
      "Fatehabad": {
        "Fatehabad Sadar": [
          "Fatehabad Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Gurugram": [
          "DLF Cyber City",
          "Golf Course Road",
          "Sohna Road",
          "Sector 29",
          "Sushant Lok"
        ],
        "Wazirabad": [
          "Sector 56",
          "Sector 57",
          "Wazirabad Village",
          "Tigra"
        ],
        "Manesar": [
          "IMT Manesar",
          "Kasan",
          "Naurangpur",
          "Pachgaon"
        ]
      },
      "Hisar": {
        "Hisar Sadar": [
          "Hisar Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Karnal Rural": [
          "Gram Karnal",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kurukshetra": {
        "Kurukshetra Sadar": [
          "Kurukshetra Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Dharamshala": [
          "McLeod Ganj",
          "Kotwali Bazar",
          "Dari",
          "Sidhpur"
        ],
        "Kangra": [
          "Kangra Town",
          "Gaggal",
          "Nagrota Bagwan"
        ]
      },
      "Kinnaur": {
        "Kinnaur Sadar": [
          "Kinnaur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Shimla Urban": [
          "The Mall",
          "Chhota Shimla",
          "Sanjauli",
          "Kasumpti",
          "Jakhu"
        ],
        "Shimla Rural": [
          "Dhalli",
          "Mashobra",
          "Kufri",
          "Totu"
        ]
      },
      "Sirmaur": {
        "Sirmaur Sadar": [
          "Sirmaur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Chas": [
          "Kura",
          "Bhandaridih",
          "Bandhdih",
          "Tupkadih",
          "Sultandih",
          "Chas Khas",
          "Kalamati",
          "Pandra",
          "Kailash Nagar"
        ],
        "Bermo": [
          "Phusro",
          "Bermo Khas",
          "Jarangdih",
          "Dhori",
          "Baidkaro",
          "Govindpur",
          "Kargali"
        ],
        "Chandan Kiyari": [
          "Silfor",
          "Amlabad",
          "Bhojudih",
          "Mahal",
          "Batbinor",
          "Chandan Kiyari Khas"
        ],
        "Gomia": [
          "Gomia Khas",
          "Saram",
          "Kathara",
          "Swang",
          "Hatia",
          "Lalpania"
        ],
        "Jaridih": [
          "Jainamore",
          "Tantri",
          "Jaridih Khas",
          "Gura"
        ],
        "Kasmar": [
          "Kasmar Khas",
          "Khairachatar",
          "Durgapur",
          "Manjhadadih"
        ],
        "Nawadih": [
          "Nawadih Khas",
          "Tarami",
          "Bhandaro",
          "Kanjkiro"
        ],
        "Peterbar": [
          "Peterbar Khas",
          "Angwali",
          "Tenughat",
          "Chalka"
        ],
        "Chandankiyari": [
          "Chas Kura",
          "Kumardaga",
          "Pindrajora"
        ]
      },
      "Chatra": {
        "Chatra Sadar": [
          "Chatra Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Deoghar": [
          "Deoghar Sadar",
          "Jasidih",
          "Kunda",
          "Baidyanathdham",
          "Rikhia"
        ],
        "Madhupur": [
          "Madhupur Khas",
          "Bhedwa",
          "Sapatta",
          "Pathrol"
        ],
        "Sarath": [
          "Sarath Khas",
          "Chitra",
          "Borio",
          "Palandaha"
        ]
      },
      "Dhanbad": {
        "Dhanbad": [
          "Jharia",
          "Saraidhela",
          "Hirapur",
          "Bank More",
          "Dhansar",
          "Kusunda"
        ],
        "Nirsa": [
          "Nirsa Khas",
          "Chirkunda",
          "Barakar",
          "Mugma",
          "Kumardhubi"
        ],
        "Baghmara": [
          "Baghmara Khas",
          "Katras",
          "Mahuda",
          "Malkera",
          "Sijua"
        ],
        "Govindpur": [
          "Govindpur Khas",
          "Karmatand",
          "Morabadi",
          "Barwadda"
        ],
        "Baliapur": [
          "Baliapur Khas",
          "Pradhankhanta",
          "Sindri",
          "Alakdiha"
        ],
        "Tundi": [
          "Tundi Khas",
          "Manpur",
          "Kamalpur",
          "Rupaban"
        ],
        "Topchanchi": [
          "Topchanchi Khas",
          "Gomoh",
          "Matari",
          "Chalkari"
        ],
        "Jharia": [
          "Jharia Khas",
          "Bhaga",
          "Lodna",
          "Bhowra",
          "Tisra"
        ]
      },
      "Dumka": {
        "Dumka Sadar": [
          "Dumka Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Golmuri-cum-Jugsalai": [
          "Sakchi",
          "Bistupur",
          "Kadma",
          "Sonari",
          "Telco",
          "Baridih",
          "Mango",
          "Jugsalai"
        ],
        "Ghatshila": [
          "Ghatshila Khas",
          "Moubanda",
          "Kashida",
          "Dhalbhumgarh"
        ],
        "Potka": [
          "Potka Khas",
          "Haldipokhar",
          "Kowali",
          "Hata"
        ],
        "Patamda": [
          "Patamda Khas",
          "Kumir",
          "Boro",
          "Jabar"
        ],
        "Baharagora": [
          "Baharagora Khas",
          "Barasol",
          "Khandamouda"
        ],
        "Chakulia": [
          "Chakulia Khas",
          "Kalyanchak",
          "Digha"
        ],
        "Musabani": [
          "Musabani Khas",
          "Surda",
          "Badia",
          "Pathargora"
        ]
      },
      "Garhwa": {
        "Garhwa Sadar": [
          "Garhwa Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Giridih": [
          "Giridih Sadar",
          "Pachamba",
          "Baniyadih",
          "Sirsiya"
        ],
        "Dumri": [
          "Isri",
          "Dumri Khas",
          "Parasnath",
          "Madhuban"
        ],
        "Bagodar": [
          "Bagodar Khas",
          "Atka",
          "Donlo",
          "Hesla"
        ],
        "Gandey": [
          "Gandey Khas",
          "Ahilyapur",
          "Jhalakdiha"
        ]
      },
      "Godda": {
        "Godda Sadar": [
          "Godda Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Hazaribagh": [
          "Sadar",
          "Matwari",
          "Korrah",
          "Okni",
          "Nawabganj"
        ],
        "Barhi": [
          "Barhi Khas",
          "Koliwada",
          "Rasoia Dhamna",
          "Konra"
        ],
        "Ichak": [
          "Ichak Khas",
          "Barkagaon",
          "Kariatu",
          "Dadh"
        ],
        "Barkagaon": [
          "Barkagaon Khas",
          "Harli",
          "Sikri",
          "Gonda"
        ],
        "Chauparan": [
          "Chauparan Khas",
          "Danua",
          "Padma",
          "Tajpur"
        ]
      },
      "Jamtara": {
        "Jamtara Sadar": [
          "Jamtara Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Medininagar": [
          "Sadar",
          "Chainpur",
          "Shahpur",
          "Redma",
          "Kandandu"
        ],
        "Hussainabad": [
          "Japla",
          "Hussainabad Khas",
          "Mohammadganj"
        ],
        "Chattarpur": [
          "Chattarpur Khas",
          "Kewaldag",
          "Mahuawan"
        ]
      },
      "Ramgarh": {
        "Ramgarh": [
          "Ramgarh Cantonment",
          "Kuju",
          "Sirka",
          "Marar"
        ],
        "Patratu": [
          "Patratu Khas",
          "Bhurkunda",
          "Balkudra",
          "Sayal"
        ],
        "Gola": [
          "Gola Khas",
          "Barlanga",
          "Chitarpur",
          "Rajrappa"
        ]
      },
      "Ranchi": {
        "Kanke": [
          "Kanke Khas",
          "Boreya",
          "Arsande",
          "Chiraudi",
          "Gonda",
          "Sukhurhutu"
        ],
        "Namkum": [
          "Tati Silwai",
          "Sidrol",
          "Lalpur",
          "Rajaulatu",
          "Samlong",
          "Dungri"
        ],
        "Ratu": [
          "Ratu Chawk",
          "Kathitand",
          "Kamre",
          "Bajra",
          "Pandra",
          "Simaliya"
        ],
        "Nagri": [
          "Nagri Khas",
          "Tupudana",
          "Daladili",
          "Hulhundu",
          "Baram"
        ],
        "Ormanjhi": [
          "Ormanjhi Khas",
          "Dudhmati",
          "Gagari",
          "Kuchu",
          "Hundru"
        ],
        "Bundu": [
          "Bundu Town",
          "Humta",
          "Taubandh",
          "Kanchi",
          "Edal"
        ],
        "Angara": [
          "Jonha",
          "Getalsud",
          "Sita Falls",
          "Angara Khas"
        ],
        "Mandar": [
          "Mandar Khas",
          "Bisrampur",
          "Brambe",
          "Karge"
        ],
        "Silli": [
          "Silli Town",
          "Lota",
          "Muri",
          "Banta"
        ],
        "Sonahatu": [
          "Sonahatu Khas",
          "Jamuda",
          "Churgi",
          "Pandadih"
        ],
        "Tamar": [
          "Tamar Khas",
          "Deori",
          "Sarjamdih",
          "Salgaradih"
        ],
        "Bero": [
          "Bero Khas",
          "Itki",
          "Karanj",
          "Tuko"
        ],
        "Lapung": [
          "Lapung Khas",
          "Karanjoli",
          "Purnadih"
        ],
        "Chanho": [
          "Chanho Khas",
          "Ragho",
          "Choreya",
          "Patratu"
        ],
        "Burmu": [
          "Burmu Khas",
          "Chakme",
          "Gonda",
          "Umedanda"
        ],
        "Khelari": [
          "Khelari Khas",
          "Ray",
          "Dakra",
          "Lapra"
        ],
        "Itki": [
          "Itki Thakurgaon",
          "Chachkopi",
          "Ranchi Road"
        ]
      },
      "Sahibganj": {
        "Sahibganj Sadar": [
          "Sahibganj Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Belagavi Rural": [
          "Gram Belagavi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bengaluru Rural": {
        "Devanahalli": [
          "Kempegowda Airport Area",
          "Devanahalli Town",
          "Vijayapura",
          "Kundana"
        ],
        "Doddaballapura": [
          "Doddaballapura Town",
          "Tubagere",
          "Kasaba",
          "Sasalu"
        ],
        "Nelamangala": [
          "Nelamangala Town",
          "Sompur",
          "Doddabele",
          "Thyamagondlu"
        ]
      },
      "Bengaluru Urban": {
        "Bengaluru South": [
          "Electronic City",
          "Begur",
          "HSR Layout",
          "Koramangala",
          "JP Nagar",
          "Banashankari",
          "Uttarahalli"
        ],
        "Bengaluru East": [
          "Whitefield",
          "KR Puram",
          "Marathahalli",
          "Varthur",
          "Mahadevapura",
          "Bellandur",
          "Kadugodi"
        ],
        "Bengaluru North": [
          "Yelahanka",
          "Hebbal",
          "Manyata Tech Park",
          "Jakkur",
          "Sahakara Nagar",
          "Vidyaranyapura"
        ],
        "Anekal": [
          "Anekal Town",
          "Attibele",
          "Chandapura",
          "Sarjapura",
          "Jigani"
        ]
      },
      "Bidar": {
        "Bidar Sadar": [
          "Bidar Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Dakshina Kannada Rural": [
          "Gram Dakshina Kannada",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Davanagere": {
        "Davanagere Sadar": [
          "Davanagere Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Dharwad Rural": [
          "Gram Dharwad",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Gadag": {
        "Gadag Sadar": [
          "Gadag Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Mysuru": [
          "Gokulam",
          "Vijayanagar",
          "Jayalakshmipuram",
          "Kuvempunagar",
          "Saraswathipuram"
        ],
        "Nanjangud": [
          "Nanjangud Town",
          "Kowlande",
          "Hullahalli",
          "Bilikere"
        ],
        "Hunsur": [
          "Hunsur Town",
          "Bilikere",
          "Hanagod",
          "Gavadagere"
        ]
      },
      "Raichur": {
        "Raichur Sadar": [
          "Raichur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Ernakulam Rural": [
          "Gram Ernakulam",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Idukki": {
        "Idukki Sadar": [
          "Idukki Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Thiruvananthapuram": [
          "Kowdiar",
          "Pattom",
          "Technopark Kazhakkoottam",
          "Vellayambalam",
          "Varkala"
        ],
        "Neyyattinkara": [
          "Neyyattinkara Town",
          "Vizhinjam Port Area",
          "Poovar"
        ]
      },
      "Thrissur": {
        "Thrissur Sadar": [
          "Thrissur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Huzur": [
          "Arera Colony",
          "MP Nagar",
          "Kolar Road",
          "Bairagarh",
          "Hoshangabad Road"
        ],
        "Berasia": [
          "Berasia Town",
          "Runaha",
          "Damkheda",
          "Lalariya"
        ]
      },
      "Burhanpur": {
        "Burhanpur Sadar": [
          "Burhanpur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Gwalior Rural": [
          "Gram Gwalior",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Harda": {
        "Harda Sadar": [
          "Harda Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Indore": [
          "Vijay Nagar",
          "Palasia",
          "MG Road",
          "Rau",
          "Bicholi Mardana",
          "Super Corridor"
        ],
        "Sanwer": [
          "Sanwer Town",
          "Kshipra",
          "Dharampuri",
          "Ajnod"
        ]
      },
      "Jabalpur": {
        "Jabalpur Sadar": [
          "Jabalpur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Jabalpur Rural": [
          "Gram Jabalpur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jhabua": {
        "Jhabua Sadar": [
          "Jhabua Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Chhatrapati Sambhajinagar Rural": [
          "Gram Chhatrapati Sambhajinagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Bhandara": {
        "Bhandara Sadar": [
          "Bhandara Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Kolhapur Rural": [
          "Gram Kolhapur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Latur": {
        "Latur Sadar": [
          "Latur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Andheri": [
          "Andheri East",
          "Andheri West",
          "Juhu",
          "Versova",
          "Vile Parle",
          "Lokhandwala"
        ],
        "Borivali": [
          "Borivali West",
          "Kandivali",
          "Dahisar",
          "Gorai",
          "Charkop"
        ],
        "Kurla": [
          "Powai",
          "Chembur",
          "Ghatkopar",
          "Vidyavihar",
          "Kurla West"
        ]
      },
      "Nagpur": {
        "Nagpur Urban": [
          "Civil Lines",
          "Dharampeth",
          "Ramdaspeth",
          "Sadar",
          "Sitabuldi"
        ],
        "Nagpur Rural": [
          "Hingna",
          "Wadi",
          "Kamptee",
          "Besa",
          "Beltarodi"
        ],
        "Katol": [
          "Katol Khas",
          "Narkhed",
          "Kondhali",
          "Sawargaon"
        ]
      },
      "Nanded": {
        "Nanded Sadar": [
          "Nanded Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Nashik": [
          "Panchavati",
          "Satpur",
          "CIDCO",
          "Indira Nagar",
          "Ambad"
        ],
        "Niphad": [
          "Pimpalgaon Baswant",
          "Ozar",
          "Niphad Town",
          "Lasalgaon"
        ],
        "Malegaon": [
          "Malegaon Camp",
          "Dabhad",
          "Ravalgad",
          "Zodga"
        ]
      },
      "Dharashiv": {
        "Dharashiv Sadar": [
          "Dharashiv Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Haveli": [
          "Hinjawadi",
          "Wakad",
          "Baner",
          "Kharadi",
          "Hadapsar",
          "Wagholi",
          "Kothrud",
          "Bavdhan"
        ],
        "Pune City": [
          "Shivajinagar",
          "Kothrud",
          "Deccan Gymkhana",
          "Camp",
          "Swargate"
        ],
        "Mawal": [
          "Lonavala",
          "Khandala",
          "Taleghar",
          "Kamshet",
          "Talegaon Dabhade"
        ],
        "Shirur": [
          "Ranjangaon",
          "Sanaswadi",
          "Koregaon Bhima",
          "Shikrapur"
        ],
        "Mulshi": [
          "Pirangut",
          "Lavasa",
          "Paud",
          "Bhugaon",
          "Kolwan"
        ],
        "Baramati": [
          "Baramati Khas",
          "Malegaon",
          "Supi",
          "Someshwar"
        ]
      },
      "Raigad": {
        "Raigad Sadar": [
          "Raigad Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Thane": [
          "Thane West",
          "Naupada",
          "Ghodbunder Road",
          "Majiwada",
          "Kopri"
        ],
        "Kalyan": [
          "Kalyan West",
          "Dombivli East",
          "Kalyan East",
          "Thakurli"
        ],
        "Mira-Bhayandar": [
          "Mira Road",
          "Bhayandar East",
          "Bhayandar West",
          "Kashimira"
        ]
      },
      "Wardha": {
        "Wardha Sadar": [
          "Wardha Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Lamphelpat": [
          "Imphal City",
          "Lamphel",
          "Thangmeiband",
          "Uripok",
          "Keishamthong"
        ]
      },
      "Jiribam": {
        "Jiribam Sadar": [
          "Jiribam Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Badambadi",
          "CDA Sector 9",
          "Choudwar",
          "Bidanasi"
        ]
      },
      "Deogarh": {
        "Deogarh Sadar": [
          "Deogarh Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Khordha Rural": [
          "Gram Khordha",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Koraput": {
        "Koraput Sadar": [
          "Koraput Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Amritsar Rural": [
          "Gram Amritsar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Barnala": {
        "Barnala Sadar": [
          "Barnala Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Ludhiana East": [
          "Model Town",
          "Civil Lines",
          "Sarabha Nagar",
          "BRS Nagar"
        ],
        "Ludhiana West": [
          "Ferozepur Road",
          "South City",
          "Ayali Kalan"
        ]
      },
      "Malerkotla": {
        "Malerkotla Sadar": [
          "Malerkotla Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Sahibzada Ajit Singh Nagar Rural": [
          "Gram Sahibzada Ajit Singh Nagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sangrur": {
        "Sangrur Sadar": [
          "Sangrur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Jaipur": [
          "Vaishali Nagar",
          "Malviya Nagar",
          "Mansarovar",
          "C-Scheme",
          "Bani Park",
          "Jagatpura"
        ],
        "Sanganer": [
          "Sanganer Town",
          "Sitapura Industrial Area",
          "Pratap Nagar",
          "Muhana"
        ],
        "Amer": [
          "Amer Town",
          "Kukas",
          "Chandwaji",
          "Achrol"
        ]
      },
      "Jaipur Rural": {
        "Jaipur Rural Sadar": [
          "Jaipur Rural Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Jodhpur": [
          "Ratanada",
          "Shastri Nagar",
          "Paota",
          "Sardarpura"
        ],
        "Luni": [
          "Luni Khas",
          "Salawas",
          "Rohat",
          "Mogra"
        ]
      },
      "Jodhpur Rural": {
        "Jodhpur Rural Sadar": [
          "Jodhpur Rural Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Kota Rural": [
          "Gram Kota",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kotputli-Behror": {
        "Kotputli-Behror Sadar": [
          "Kotputli-Behror Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Udaipur Rural": [
          "Gram Udaipur",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Chengalpattu Rural": [
          "Gram Chengalpattu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Chennai": {
        "Egmore": [
          "Egmore",
          "Nungambakkam",
          "Chetpet",
          "Kilpauk"
        ],
        "Mylapore": [
          "Mylapore",
          "Mandaveli",
          "Alwarpet",
          "RA Puram",
          "Santhome"
        ],
        "Guindy": [
          "Adyar",
          "Velachery",
          "Saidapet",
          "Thiruvanmiyur",
          "Besant Nagar"
        ],
        "Ambattur": [
          "Ambattur OT",
          "Padi",
          "Mogappair",
          "Korattur",
          "Mannurpet"
        ],
        "Sholinganallur": [
          "Sholinganallur",
          "OMR IT Corridor",
          "Perungudi",
          "Thoraipakkam",
          "Karapakkam"
        ]
      },
      "Coimbatore": {
        "Coimbatore North": [
          "RS Puram",
          "Gandhipuram",
          "Saibaba Colony",
          "Ganapathy",
          "Saravanampatti"
        ],
        "Coimbatore South": [
          "Singanallur",
          "Peelamedu",
          "Ramanathapuram",
          "Kuniyamuthur"
        ],
        "Pollachi": [
          "Pollachi Town",
          "Kinathukadavu",
          "Anaimalai",
          "Kottur"
        ]
      },
      "Cuddalore": {
        "Cuddalore Sadar": [
          "Cuddalore Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Madurai Rural": [
          "Gram Madurai",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mayiladuthurai": {
        "Mayiladuthurai Sadar": [
          "Mayiladuthurai Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Shaikpet": [
          "Jubilee Hills",
          "Banjara Hills",
          "Madhapur",
          "Film Nagar"
        ],
        "Secunderabad": [
          "Begumpet",
          "Marredpally",
          "Bowenpally",
          "Tarnaka"
        ]
      },
      "Jagtial": {
        "Jagtial Sadar": [
          "Jagtial Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Medchal-Malkajgiri Rural": [
          "Gram Medchal-Malkajgiri",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Mulugu": {
        "Mulugu Sadar": [
          "Mulugu Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Ranga Reddy Rural": [
          "Gram Ranga Reddy",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Sangareddy": {
        "Sangareddy Sadar": [
          "Sangareddy Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Sadar": [
          "Tajganj",
          "Dayalbagh",
          "Kamla Nagar",
          "Sanjay Place"
        ],
        "Fatehabad": [
          "Fatehabad Khas",
          "Doki",
          "Shamsabad"
        ],
        "Kiraoli": [
          "Fatehpur Sikri",
          "Kiraoli Khas",
          "Achhnera"
        ]
      },
      "Aligarh": {
        "Aligarh Sadar": [
          "Aligarh Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Bareilly Rural": [
          "Gram Bareilly",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Basti": {
        "Basti Sadar": [
          "Basti Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Dadri": [
          "Bhangel",
          "Surajpur",
          "Tilapta",
          "Greater Noida West",
          "Bisrakh",
          "Chhapraula",
          "Dujana"
        ],
        "Sadar": [
          "Noida Sector 62",
          "Barola",
          "Atta",
          "Chhalera",
          "Nithari",
          "Sorkha",
          "Salarpur"
        ],
        "Jewar": [
          "Jewar Khas",
          "Rabupura",
          "Jahangirpur",
          "Rohi",
          "Kishorepur",
          "Dayanatpur"
        ]
      },
      "Ghaziabad": {
        "Ghaziabad": [
          "Indirapuram",
          "Vaishali",
          "Raj Nagar",
          "Kavi Nagar",
          "Sanjay Nagar",
          "Sahibabad"
        ],
        "Modinagar": [
          "Modinagar Khas",
          "Bhojpur",
          "Niwari",
          "Patla",
          "Begumabad"
        ],
        "Loni": [
          "Loni Khas",
          "Banthla",
          "Tronica City",
          "Mandoli",
          "Pavi Sadakpur"
        ]
      },
      "Ghazipur": {
        "Ghazipur Sadar": [
          "Ghazipur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Sadar": [
          "Gorakhpur Sadar",
          "Shahpur",
          "Basharatpur",
          "Taramandal"
        ],
        "Sahjanwa": [
          "Sahjanwa Khas",
          "Ghaghar",
          "Bhilora"
        ],
        "Chauri Chaura": [
          "Mundera Bazar",
          "Bhopatpur",
          "Sardarnagar"
        ]
      },
      "Hamirpur": {
        "Hamirpur Sadar": [
          "Hamirpur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Sadar": [
          "Civil Lines",
          "Swaroop Nagar",
          "Kakadeo",
          "Kalyanpur",
          "Govind Nagar"
        ],
        "Ghatampur": [
          "Ghatampur Khas",
          "Patara",
          "Bhitargaon",
          "Sadh"
        ],
        "Bilhaur": [
          "Bilhaur Khas",
          "Shivrajpur",
          "Araul",
          "Chaubepur"
        ]
      },
      "Kasganj": {
        "Kasganj Sadar": [
          "Kasganj Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Sadar": [
          "Hazratganj",
          "Gomti Nagar",
          "Aliganj",
          "Mahanagar",
          "Indira Nagar",
          "Charbagh"
        ],
        "Sarojini Nagar": [
          "Amausi",
          "Banthra",
          "Gauri",
          "Natkur",
          "Piparsand"
        ],
        "Bakshi Ka Talab": [
          "BKT Khas",
          "Itaunja",
          "Mandiaon",
          "Asthi",
          "Bhitauli"
        ],
        "Malihabad": [
          "Malihabad Khas",
          "Rahimabad",
          "Kakori",
          "Gosainganj"
        ],
        "Mohanlalganj": [
          "Mohanlalganj Khas",
          "Kalli Pashchim",
          "Khujauli",
          "Nagram"
        ]
      },
      "Maharajganj": {
        "Maharajganj Sadar": [
          "Maharajganj Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Mathura": [
          "Mathura Sadar",
          "Vrindavan",
          "Goverdhan",
          "Radha Kund"
        ],
        "Chhata": [
          "Barsana",
          "Kosi Kalan",
          "Nandgaon",
          "Chaumuhan"
        ]
      },
      "Mau": {
        "Mau Sadar": [
          "Mau Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Meerut": [
          "Meerut Sadar",
          "Kankerkhera",
          "Shastri Nagar",
          "Pallavpuram"
        ],
        "Mawana": [
          "Mawana Khas",
          "Hastinapur",
          "Parikshitgarh"
        ],
        "Sardhana": [
          "Sardhana Khas",
          "Daurala",
          "Lawar"
        ]
      },
      "Mirzapur": {
        "Mirzapur Sadar": [
          "Mirzapur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Sadar": [
          "Civil Lines",
          "Daraganj",
          "Katra",
          "Allahpur",
          "George Town"
        ],
        "Phulpur": [
          "Phulpur Khas",
          "Jhunsi",
          "Andawa",
          "Sahson"
        ],
        "Naini": [
          "Naini Khas",
          "Chaka",
          "Dandi",
          "Jasra",
          "Shankargarh"
        ]
      },
      "Raebareli": {
        "Raebareli Sadar": [
          "Raebareli Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Sadar": [
          "Lanka",
          "Shivpur",
          "Cantonment",
          "Assi",
          "Dashashwamedh",
          "Pandeypur"
        ],
        "Pindra": [
          "Pindra Khas",
          "Babatpur",
          "Phulpur",
          "Mangari",
          "Sindhora"
        ],
        "Raja Talab": [
          "Raja Talab Khas",
          "Kachhwa",
          "Rohania",
          "Jakhini"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Dehradun": [
          "Rajpur Road",
          "Clement Town",
          "Sahastradhara Road",
          "Vasant Vihar",
          "Mussoorie"
        ],
        "Rishikesh": [
          "Rishikesh Town",
          "Tapovan",
          "Raiwala",
          "Shyampur"
        ],
        "Vikasnagar": [
          "Vikasnagar Town",
          "Herbertpur",
          "Dakpathar"
        ]
      },
      "Haridwar": {
        "Haridwar": [
          "Kankhal",
          "Jwalapur",
          "BHEL Township",
          "Shivalik Nagar",
          "Roorkee"
        ]
      },
      "Nainital": {
        "Nainital Sadar": [
          "Nainital Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Darjeeling Rural": [
          "Gram Darjeeling",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Hooghly": {
        "Hooghly Sadar": [
          "Hooghly Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Howrah Rural": [
          "Gram Howrah",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Jalpaiguri": {
        "Jalpaiguri Sadar": [
          "Jalpaiguri Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Alipore",
          "Ballygunge",
          "Salt Lake City",
          "New Town",
          "Park Street",
          "Behala"
        ]
      },
      "Malda": {
        "Malda Sadar": [
          "Malda Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Bidhannagar": [
          "Sector V IT Hub",
          "Rajarhat Action Area",
          "Baguiati",
          "Kestopur"
        ],
        "Barasat": [
          "Barasat Sadar",
          "Madhyamgram",
          "Hridaypur"
        ]
      },
      "Paschim Bardhaman": {
        "Paschim Bardhaman Sadar": [
          "Paschim Bardhaman Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "South 24 Parganas Rural": [
          "Gram South 24 Parganas",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Uttar Dinajpur": {
        "Uttar Dinajpur Sadar": [
          "Uttar Dinajpur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Chandigarh Rural": [
          "Gram Chandigarh",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "East Delhi Rural": [
          "Gram East Delhi",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "New Delhi": {
        "Chanakyapuri": [
          "Diplomatic Enclave",
          "Jor Bagh",
          "Lodhi Colony"
        ],
        "Connaught Place": [
          "CP Inner Circle",
          "Barakhamba",
          "Janpath"
        ]
      },
      "North Delhi": {
        "North Delhi Sadar": [
          "North Delhi Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Rohini": [
          "Sector 3",
          "Sector 8",
          "Sector 15",
          "Sector 24",
          "Rithala"
        ],
        "Kanjhawala": [
          "Kanjhawala Village",
          "Bawana",
          "Narela",
          "Alipur"
        ]
      },
      "Shahdara": {
        "Shahdara Sadar": [
          "Shahdara Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Hauz Khas": [
          "Green Park",
          "Safdarjung Enclave",
          "IIT Delhi Area",
          "Malviya Nagar"
        ],
        "Mehrauli": [
          "Qutub Area",
          "Sultanpur",
          "Chattarpur",
          "Gadaipur"
        ]
      },
      "South East Delhi": {
        "South East Delhi Sadar": [
          "South East Delhi Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
        "Dwarka": [
          "Sector 6",
          "Sector 10",
          "Sector 12",
          "Sector 21",
          "Kakrola",
          "Bijwasan"
        ],
        "Najafgarh": [
          "Najafgarh Town",
          "Dhansa",
          "Mitraon",
          "Kanganheri"
        ]
      },
      "West Delhi": {
        "West Delhi Sadar": [
          "West Delhi Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Jammu Rural": [
          "Gram Jammu",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Kathua": {
        "Kathua Sadar": [
          "Kathua Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Srinagar Rural": [
          "Gram Srinagar",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Udhampur": {
        "Udhampur Sadar": [
          "Udhampur Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
          "Sector 1",
          "Main Market",
          "Revenue Block A"
        ],
        "Puducherry Rural": [
          "Gram Puducherry",
          "Mauza Rampur",
          "Kalyanpur",
          "Govindpur",
          "Shripur"
        ]
      },
      "Yanam": {
        "Yanam Sadar": [
          "Yanam Khas",
          "Civil Lines",
          "Sector 1",
          "Main Market",
          "Revenue Block A"
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
  // Default to Jharkhand if not found
  return PAN_INDIA_MASTER_TREE["Jharkhand"];
};

export const getAllDistrictsForState = (stateName: string): string[] => {
  const info = getMasterStateInfo(stateName);
  return Object.keys(info.districts);
};
