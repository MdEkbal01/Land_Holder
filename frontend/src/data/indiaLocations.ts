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
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

export interface StateLocationInfo {
  term_anchal: string;
  term_record: string;
  districts: Record<string, Record<string, string[]>>;
}

export const INITIAL_LOCATION_TREE: Record<string, StateLocationInfo> = {
  "Jharkhand": {
    term_anchal: "Anchal",
    term_record: "Khatian & Register-II",
    districts: {
      "Bokaro": {
        "Chas": ["Kura", "Bhandaridih", "Bandhdih", "Tupkadih"],
        "Bermo": ["Phusro", "Bermo Khas", "Jarangdih"],
        "Chandan Kiyari": ["Silfor", "Amlabad"]
      },
      "Ranchi": {
        "Kanke": ["Kanke Khas", "Boreya", "Arsande"],
        "Namkum": ["Tati Silwai", "Sidrol"],
        "Ratu": ["Ratu Chawk", "Kathitand"]
      },
      "Dhanbad": {
        "Dhanbad": ["Jharia", "Saraidhela", "Hirapur"],
        "Nirsa": ["Nirsa Khas", "Chirkunda"]
      },
      "East Singhbhum": {
        "Golmuri-cum-Jugsalai": ["Sakchi", "Bistupur", "Kadma"],
        "Ghatshila": ["Ghatshila Khas", "Moubanda"]
      },
      "Hazaribagh": {
        "Hazaribagh": ["Sadar", "Matwari", "Korrah"],
        "Barhi": ["Barhi Khas", "Koliwada"]
      },
      "Giridih": {
        "Giridih": ["Giridih Sadar", "Pachamba"],
        "Dumri": ["Isri", "Dumri Khas"]
      },
      "Deoghar": {
        "Deoghar": ["Deoghar Sadar", "Jasidih"],
        "Madhupur": ["Madhupur Khas"]
      },
      "Palamu": {
        "Medininagar": ["Sadar", "Chainpur"],
        "Hussainabad": ["Japla", "Hussainabad Khas"]
      },
      "Ramgarh": {
        "Ramgarh": ["Ramgarh Cantonment", "Kuju"],
        "Patratu": ["Patratu Khas", "Bhurkunda"]
      }
    }
  },
  "Uttar Pradesh": {
    term_anchal: "Tehsil",
    term_record: "Khatauni RoR & Gata",
    districts: {
      "Gautam Buddha Nagar": {
        "Dadri": ["Bhangel", "Surajpur", "Tilapta"],
        "Sadar": ["Noida Sector 62", "Barola"],
        "Jewar": ["Jewar Khas", "Rabupura"]
      },
      "Ghaziabad": {
        "Ghaziabad": ["Indirapuram", "Vaishali", "Raj Nagar"],
        "Modinagar": ["Modinagar Khas", "Bhojpur"],
        "Loni": ["Loni Khas", "Banthla"]
      },
      "Lucknow": {
        "Sadar": ["Hazratganj", "Gomti Nagar", "Aliganj"],
        "Sarojini Nagar": ["Amausi", "Banthra"],
        "Bakshi Ka Talab": ["BKT Khas", "Itaunja"]
      },
      "Kanpur Nagar": {
        "Sadar": ["Civil Lines", "Swaroop Nagar"],
        "Ghatampur": ["Ghatampur Khas"],
        "Bilhaur": ["Bilhaur Khas"]
      },
      "Varanasi": {
        "Sadar": ["Lanka", "Shivpur", "Cantonment"],
        "Pindra": ["Pindra Khas"],
        "Raja Talab": ["Raja Talab Khas"]
      },
      "Agra": {
        "Sadar": ["Tajganj", "Dayalbagh"],
        "Fatehabad": ["Fatehabad Khas"],
        "Kiraoli": ["Fatehpur Sikri"]
      },
      "Prayagraj": {
        "Sadar": ["Civil Lines", "Daraganj"],
        "Phulpur": ["Phulpur Khas"],
        "Naini": ["Naini Khas"]
      },
      "Gorakhpur": {
        "Sadar": ["Gorakhpur Sadar", "Shahpur"],
        "Sahjanwa": ["Sahjanwa Khas"]
      },
      "Meerut": {
        "Meerut": ["Meerut Sadar", "Kankerkhera"],
        "Mawana": ["Mawana Khas"]
      },
      "Mathura": {
        "Mathura": ["Mathura Sadar", "Vrindavan"],
        "Chhata": ["Barsana", "Kosi Kalan"]
      }
    }
  },
  "Maharashtra": {
    term_anchal: "Taluka",
    term_record: "7/12 Extract & 8A",
    districts: {
      "Pune": {
        "Haveli": ["Hinjawadi", "Wakad", "Baner", "Kharadi"],
        "Pune City": ["Shivajinagar", "Kothrud", "Deccan"],
        "Mawal": ["Lonavala", "Taleghar"],
        "Shirur": ["Ranjangaon", "Sanaswadi"]
      },
      "Mumbai City": {
        "Mumbai": ["Fort", "Colaba", "Malabar Hill", "Dadabari"]
      },
      "Mumbai Suburban": {
        "Andheri": ["Andheri East", "Andheri West", "Juhu"],
        "Borivali": ["Borivali West", "Kandivali"],
        "Kurla": ["Powai", "Chembur"]
      },
      "Thane": {
        "Thane": ["Thane West", "Kalyan", "Dombivli"],
        "Mira-Bhayandar": ["Mira Road", "Bhayandar East"]
      },
      "Nagpur": {
        "Nagpur Urban": ["Civil Lines", "Dharampeth"],
        "Nagpur Rural": ["Hingna", "Wadi"]
      },
      "Nashik": {
        "Nashik": ["Panchavati", "Satpur"],
        "Malegaon": ["Malegaon Khas"]
      }
    }
  },
  "Karnataka": {
    term_anchal: "Taluk / Hobli",
    term_record: "RTC Pahani",
    districts: {
      "Bengaluru Urban": {
        "Bengaluru South": ["Electronic City", "Begur", "HSR Layout"],
        "Bengaluru East": ["Whitefield", "KR Puram", "Marathahalli"],
        "Bengaluru North": ["Yelahanka", "Hebbal", "Manyata"]
      },
      "Bengaluru Rural": {
        "Devanahalli": ["Kempegowda International Airport", "Devanahalli Khas"],
        "Doddaballapura": ["Doddaballapura Town"]
      },
      "Mysuru": {
        "Mysuru": ["Gokulam", "Vijayanagar", "Jayalakshmipuram"],
        "Nanjangud": ["Nanjangud Town"]
      }
    }
  },
  "Bihar": {
    term_anchal: "Anchal / Block",
    term_record: "Khatian & Dakhil Kharij",
    districts: {
      "Patna": {
        "Patna Sadar": ["Kankarbagh", "Boring Road", "Boring Canal Road"],
        "Danapur": ["Danapur Cantt", "Khagaul"],
        "Phulwari Sharif": ["Phulwari Khas", "Janipur"]
      },
      "Gaya": {
        "Gaya Sadar": ["Bodhgaya", "Manpur"],
        "Sherghati": ["Sherghati Khas"]
      },
      "Muzaffarpur": {
        "Musahari": ["Muzaffarpur Town", "Kanti"],
        "Sakra": ["Sakra Khas"]
      }
    }
  },
  "Tamil Nadu": {
    term_anchal: "Taluk",
    term_record: "Patta / Chitta RoR",
    districts: {
      "Chennai": {
        "Egmore": ["Egmore", "Nungambakkam"],
        "Mylapore": ["Mylapore", "Mandaveli"],
        "Guindy": ["Adyar", "Velachery"]
      },
      "Coimbatore": {
        "Coimbatore North": ["RS Puram", "Gandhipuram"],
        "Coimbatore South": ["Singanallur", "Peelamedu"]
      }
    }
  },
  "West Bengal": {
    term_anchal: "Block",
    term_record: "Khatian & Plot Banglarbhumi",
    districts: {
      "Kolkata": {
        "Kolkata Sadar": ["Alipore", "Salt Lake", "Ballygunge", "New Town"]
      },
      "North 24 Parganas": {
        "Bidhannagar": ["Sector V", "Rajarhat"],
        "Barasat": ["Barasat Sadar"]
      }
    }
  }
};

export const getSafeStateInfo = (tree: Record<string, any>, state: string): StateLocationInfo => {
  if (tree && tree[state]) {
    return tree[state];
  }
  if (INITIAL_LOCATION_TREE[state]) {
    return INITIAL_LOCATION_TREE[state];
  }
  return {
    term_anchal: "Tehsil / Sub-Division",
    term_record: "RoR Record of Rights",
    districts: {
      [`${state} Capital / District`]: {
        "Sadar Tehsil": ["Central Mauza", "North Village", "South Village"],
        "East Tehsil": ["East Mauza 1", "East Mauza 2"]
      }
    }
  };
};
