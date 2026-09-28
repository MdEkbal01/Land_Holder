export interface StateLocationInfo {
  term_anchal: string;
  term_record: string;
  term_plot: string;
  term_holding: string;
  districts: Record<string, Record<string, string[]>>;
}

export const ALL_INDIA_STATES: string[] = [
  "Jharkhand",
  "Uttar Pradesh",
  "Maharashtra",
  "Karnataka",
  "Bihar",
  "Tamil Nadu",
  "Gujarat",
  "Rajasthan",
  "Madhya Pradesh",
  "West Bengal",
  "Andhra Pradesh",
  "Telangana",
  "Haryana",
  "Punjab",
  "Odisha",
  "Chhattisgarh",
  "Kerala",
  "Himachal Pradesh",
  "Uttarakhand",
  "Assam",
  "Tripura",
  "Manipur",
  "Goa",
  "Delhi (NCT)",
  "Arunachal Pradesh",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Sikkim",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

export const PAN_INDIA_MASTER_TREE: Record<string, StateLocationInfo> = {
  "Jharkhand": {
    term_anchal: "Anchal / Circle",
    term_record: "Khatian & Register-II",
    term_plot: "Khesra / Plot No",
    term_holding: "Khata Number",
    districts: {
      "Bokaro": {
        "Chas": ["Kura", "Bhandaridih", "Bandhdih", "Tupkadih", "Sultandih", "Chas Khas", "Kalamati", "Pandra", "Kailash Nagar", "Pindrajora", "Kamas", "Pundru"],
        "Bermo": ["Phusro", "Bermo Khas", "Jarangdih", "Dhori", "Baidkaro", "Govindpur", "Kargali", "Durgapur"],
        "Chandan Kiyari": ["Silfor", "Amlabad", "Bhojudih", "Mahal", "Batbinor", "Chandan Kiyari Khas", "Kumardaga"],
        "Gomia": ["Gomia Khas", "Saram", "Kathara", "Swang", "Hatia", "Lalpania"],
        "Jaridih": ["Jainamore", "Tantri", "Jaridih Khas", "Gura"],
        "Kasmar": ["Kasmar Khas", "Khairachatar", "Durgapur", "Manjhadadih"],
        "Nawadih": ["Nawadih Khas", "Tarami", "Bhandaro", "Kanjkiro"],
        "Peterbar": ["Peterbar Khas", "Angwali", "Tenughat", "Chalka"]
      },
      "Ranchi": {
        "Kanke": ["Kanke Khas", "Boreya", "Arsande", "Chiraudi", "Gonda", "Sukhurhutu", "Pithoria", "Sangkura"],
        "Namkum": ["Tati Silwai", "Sidrol", "Lalpur", "Rajaulatu", "Samlong", "Dungri"],
        "Ratu": ["Ratu Chawk", "Kathitand", "Kamre", "Bajra", "Pandra", "Simaliya"],
        "Nagri": ["Nagri Khas", "Tupudana", "Daladili", "Hulhundu", "Baram"],
        "Ormanjhi": ["Ormanjhi Khas", "Dudhmati", "Gagari", "Kuchu", "Hundru", "Irba"],
        "Bundu": ["Bundu Town", "Humta", "Taubandh", "Kanchi", "Edal"],
        "Angara": ["Jonha", "Getalsud", "Sita Falls", "Angara Khas"],
        "Mandar": ["Mandar Khas", "Bisrampur", "Brambe", "Karge"],
        "Silli": ["Silli Town", "Lota", "Muri", "Banta"],
        "Sonahatu": ["Sonahatu Khas", "Jamuda", "Churgi", "Pandadih"],
        "Tamar": ["Tamar Khas", "Deori", "Sarjamdih", "Salgaradih"],
        "Bero": ["Bero Khas", "Itki", "Karanj", "Tuko"],
        "Lapung": ["Lapung Khas", "Karanjoli", "Purnadih"],
        "Chanho": ["Chanho Khas", "Ragho", "Choreya", "Patratu"],
        "Burmu": ["Burmu Khas", "Chakme", "Gonda", "Umedanda"],
        "Khelari": ["Khelari Khas", "Ray", "Dakra", "Lapra"],
        "Itki": ["Itki Thakurgaon", "Chachkopi", "Ranchi Road"]
      },
      "Dhanbad": {
        "Dhanbad": ["Jharia", "Saraidhela", "Hirapur", "Bank More", "Dhansar", "Kusunda"],
        "Nirsa": ["Nirsa Khas", "Chirkunda", "Barakar", "Mugma", "Kumardhubi"],
        "Baghmara": ["Baghmara Khas", "Katras", "Mahuda", "Malkera", "Sijua"],
        "Govindpur": ["Govindpur Khas", "Karmatand", "Morabadi", "Barwadda", "Khartanga", "Asanboni"],
        "Baliapur": ["Baliapur Khas", "Pradhankhanta", "Sindri", "Alakdiha"],
        "Tundi": ["Tundi Khas", "Manpur", "Kamalpur", "Rupaban"],
        "Topchanchi": ["Topchanchi Khas", "Gomoh", "Matari", "Chalkari"],
        "Jharia": ["Jharia Khas", "Bhaga", "Lodna", "Bhowra", "Tisra"]
      },
      "East Singhbhum": {
        "Golmuri-cum-Jugsalai": ["Sakchi", "Bistupur", "Kadma", "Sonari", "Telco", "Baridih", "Mango", "Jugsalai"],
        "Ghatshila": ["Ghatshila Khas", "Moubanda", "Kashida", "Dhalbhumgarh"],
        "Potka": ["Potka Khas", "Haldipokhar", "Kowali", "Hata"],
        "Patamda": ["Patamda Khas", "Kumir", "Boro", "Jabar"],
        "Baharagora": ["Baharagora Khas", "Barasol", "Khandamouda"],
        "Chakulia": ["Chakulia Khas", "Kalyanchak", "Digha"],
        "Musabani": ["Musabani Khas", "Surda", "Badia", "Pathargora"]
      },
      "Hazaribagh": {
        "Hazaribagh": ["Sadar", "Matwari", "Korrah", "Okni", "Nawabganj", "Pelawal", "Demotand"],
        "Barhi": ["Barhi Khas", "Koliwada", "Rasoia Dhamna", "Konra"],
        "Ichak": ["Ichak Khas", "Barkagaon", "Kariatu", "Dadh", "Gobardar"],
        "Barkagaon": ["Barkagaon Khas", "Harli", "Sikri", "Gonda"],
        "Chauparan": ["Chauparan Khas", "Danua", "Padma", "Tajpur"]
      },
      "Giridih": {
        "Giridih": ["Giridih Sadar", "Pachamba", "Baniyadih", "Sirsiya", "Makatpur"],
        "Dumri": ["Isri", "Dumri Khas", "Parasnath", "Madhuban", "Nimiaghat"],
        "Bagodar": ["Bagodar Khas", "Atka", "Donlo", "Hesla"],
        "Gandey": ["Gandey Khas", "Ahilyapur", "Jhalakdiha"]
      },
      "Deoghar": {
        "Deoghar": ["Deoghar Sadar", "Jasidih", "Kunda", "Baidyanathdham", "Rikhia", "Rohini"],
        "Madhupur": ["Madhupur Khas", "Bhedwa", "Sapatta", "Pathrol", "Paharipur"],
        "Sarath": ["Sarath Khas", "Chitra", "Borio", "Palandaha"]
      },
      "Palamu": {
        "Medininagar": ["Sadar", "Chainpur", "Shahpur", "Redma", "Kandandu", "Daltonganj", "Chianki"],
        "Hussainabad": ["Japla", "Hussainabad Khas", "Mohammadganj", "Deori", "Kusumha"],
        "Chattarpur": ["Chattarpur Khas", "Kewaldag", "Mahuawan"]
      },
      "Ramgarh": {
        "Ramgarh": ["Ramgarh Cantonment", "Kuju", "Sirka", "Marar"],
        "Patratu": ["Patratu Khas", "Bhurkunda", "Balkudra", "Sayal"],
        "Gola": ["Gola Khas", "Barlanga", "Chitarpur", "Rajrappa"]
      }
    }
  },
  "Uttar Pradesh": {
    term_anchal: "Tehsil",
    term_record: "Khatauni RoR & Gata",
    term_plot: "Gata / Khasra No",
    term_holding: "Khata Number",
    districts: {
      "Gautam Buddha Nagar": {
        "Dadri": ["Bhangel", "Surajpur", "Tilapta", "Greater Noida West", "Bisrakh", "Chhapraula", "Dujana"],
        "Sadar": ["Noida Sector 62", "Barola", "Atta", "Chhalera", "Nithari", "Sorkha", "Salarpur", "Mamura"],
        "Jewar": ["Jewar Khas", "Rabupura", "Jahangirpur", "Rohi", "Kishorepur", "Dayanatpur"]
      },
      "Ghaziabad": {
        "Ghaziabad": ["Indirapuram", "Vaishali", "Raj Nagar", "Kavi Nagar", "Sanjay Nagar", "Sahibabad", "Muradnagar"],
        "Modinagar": ["Modinagar Khas", "Bhojpur", "Niwari", "Patla", "Begumabad"],
        "Loni": ["Loni Khas", "Banthla", "Tronica City", "Mandoli", "Pavi Sadakpur"]
      },
      "Lucknow": {
        "Sadar": ["Hazratganj", "Gomti Nagar", "Aliganj", "Mahanagar", "Indira Nagar", "Charbagh", "Alambagh"],
        "Sarojini Nagar": ["Amausi", "Banthra", "Gauri", "Natkur", "Piparsand", "Hindnagar"],
        "Bakshi Ka Talab": ["BKT Khas", "Itaunja", "Mandiaon", "Asthi", "Bhitauli", "Bhaisamau"],
        "Malihabad": ["Malihabad Khas", "Rahimabad", "Kakori", "Gosainganj"],
        "Mohanlalganj": ["Mohanlalganj Khas", "Kalli Pashchim", "Khujauli", "Nagram"]
      },
      "Varanasi": {
        "Sadar": ["Lanka", "Shivpur", "Cantonment", "Assi", "Dashashwamedh", "Pandeypur", "Sarnath"],
        "Pindra": ["Pindra Khas", "Babatpur", "Phulpur", "Mangari", "Sindhora"],
        "Raja Talab": ["Raja Talab Khas", "Kachhwa", "Rohania", "Jakhini"]
      },
      "Kanpur Nagar": {
        "Sadar": ["Civil Lines", "Swaroop Nagar", "Kakadeo", "Kalyanpur", "Govind Nagar", "Panki", "Rawatpur"],
        "Ghatampur": ["Ghatampur Khas", "Patara", "Bhitargaon", "Sadh", "Sajeti"],
        "Bilhaur": ["Bilhaur Khas", "Shivrajpur", "Araul", "Chaubepur"]
      },
      "Prayagraj": {
        "Sadar": ["Civil Lines", "Daraganj", "Katra", "Allahpur", "George Town", "Phaphamau"],
        "Phulpur": ["Phulpur Khas", "Jhunsi", "Andawa", "Sahson"],
        "Naini": ["Naini Khas", "Chaka", "Dandi", "Jasra", "Shankargarh"]
      },
      "Agra": {
        "Sadar": ["Tajganj", "Dayalbagh", "Kamla Nagar", "Sanjay Place", "Bodla"],
        "Fatehabad": ["Fatehabad Khas", "Doki", "Shamsabad"],
        "Kiraoli": ["Fatehpur Sikri", "Kiraoli Khas", "Achhnera"]
      },
      "Gorakhpur": {
        "Sadar": ["Gorakhpur Sadar", "Shahpur", "Basharatpur", "Taramandal", "Pipraich", "Bargadwa"],
        "Sahjanwa": ["Sahjanwa Khas", "Ghaghar", "Bhilora", "Rithia"],
        "Chauri Chaura": ["Mundera Bazar", "Bhopatpur", "Sardarnagar"]
      },
      "Meerut": {
        "Meerut": ["Meerut Sadar", "Kankerkhera", "Shastri Nagar", "Pallavpuram", "Partapur"],
        "Mawana": ["Mawana Khas", "Hastinapur", "Parikshitgarh"],
        "Sardhana": ["Sardhana Khas", "Daurala", "Lawar"]
      },
      "Mathura": {
        "Mathura": ["Mathura Sadar", "Vrindavan", "Goverdhan", "Radha Kund"],
        "Chhata": ["Barsana", "Kosi Kalan", "Nandgaon", "Chaumuhan"]
      }
    }
  },
  "Maharashtra": {
    term_anchal: "Taluka",
    term_record: "7/12 Extract & 8A",
    term_plot: "Gat / Survey Number",
    term_holding: "Khate Number",
    districts: {
      "Pune": {
        "Haveli": ["Hinjawadi", "Wakad", "Baner", "Kharadi", "Hadapsar", "Wagholi", "Kothrud", "Bavdhan"],
        "Pune City": ["Shivajinagar", "Kothrud", "Deccan Gymkhana", "Camp", "Swargate"],
        "Mawal": ["Lonavala", "Khandala", "Taleghar", "Kamshet", "Talegaon Dabhade"],
        "Shirur": ["Ranjangaon", "Sanaswadi", "Koregaon Bhima", "Shikrapur"],
        "Mulshi": ["Pirangut", "Lavasa", "Paud", "Bhugaon", "Kolwan", "Lavale"],
        "Baramati": ["Baramati Khas", "Malegaon", "Supi", "Someshwar"]
      },
      "Mumbai Suburban": {
        "Andheri": ["Andheri East", "Andheri West", "Juhu", "Versova", "Vile Parle", "Lokhandwala", "Marol"],
        "Borivali": ["Borivali West", "Kandivali", "Dahisar", "Gorai", "Charkop", "Malad"],
        "Kurla": ["Powai", "Chembur", "Ghatkopar", "Vidyavihar", "Kurla West", "Trombay"]
      },
      "Thane": {
        "Thane": ["Thane West", "Naupada", "Ghodbunder Road", "Majiwada", "Kopri"],
        "Kalyan": ["Kalyan West", "Dombivli East", "Kalyan East", "Thakurli", "Titwala"],
        "Mira-Bhayandar": ["Mira Road", "Bhayandar East", "Bhayandar West", "Kashimira", "Uttan"]
      },
      "Nagpur": {
        "Nagpur Urban": ["Civil Lines", "Dharampeth", "Ramdaspeth", "Sadar", "Sitabuldi", "Manewada"],
        "Nagpur Rural": ["Hingna", "Wadi", "Kamptee", "Besa", "Beltarodi"],
        "Katol": ["Katol Khas", "Narkhed", "Kondhali", "Sawargaon"]
      },
      "Nashik": {
        "Nashik": ["Panchavati", "Satpur", "CIDCO", "Indira Nagar", "Ambad"],
        "Niphad": ["Pimpalgaon Baswant", "Ozar", "Niphad Town", "Lasalgaon"],
        "Malegaon": ["Malegaon Camp", "Dabhad", "Ravalgad", "Zodga"]
      }
    }
  },
  "Karnataka": {
    term_anchal: "Taluk / Hobli",
    term_record: "RTC Pahani",
    term_plot: "Survey / Hissa No",
    term_holding: "Khata Number",
    districts: {
      "Bengaluru Urban": {
        "Bengaluru South": ["Electronic City", "Begur", "HSR Layout", "Koramangala", "JP Nagar", "Banashankari", "Uttarahalli", "Jigani"],
        "Bengaluru East": ["Whitefield", "KR Puram", "Marathahalli", "Varthur", "Mahadevapura", "Bellandur", "Kadugodi"],
        "Bengaluru North": ["Yelahanka", "Hebbal", "Manyata Tech Park", "Jakkur", "Sahakara Nagar", "Vidyaranyapura"],
        "Anekal": ["Anekal Town", "Attibele", "Chandapura", "Sarjapura", "Bannerghatta"]
      },
      "Bengaluru Rural": {
        "Devanahalli": ["Kempegowda Airport Area", "Devanahalli Town", "Vijayapura", "Kundana"],
        "Doddaballapura": ["Doddaballapura Town", "Tubagere", "Kasaba", "Sasalu"],
        "Nelamangala": ["Nelamangala Town", "Sompur", "Doddabele", "Thyamagondlu"]
      },
      "Mysuru": {
        "Mysuru": ["Gokulam", "Vijayanagar", "Jayalakshmipuram", "Kuvempunagar", "Saraswathipuram", "Hebbal Industrial"],
        "Nanjangud": ["Nanjangud Town", "Kowlande", "Hullahalli", "Bilikere"],
        "Hunsur": ["Hunsur Town", "Bilikere", "Hanagod", "Gavadagere"]
      }
    }
  },
  "Bihar": {
    term_anchal: "Anchal / Block",
    term_record: "Khatian & Dakhil Kharij",
    term_plot: "Khesra No",
    term_holding: "Khata No",
    districts: {
      "Patna": {
        "Patna Sadar": ["Kankarbagh", "Boring Road", "Bailey Road", "Patliputra Colony", "Rajendra Nagar", "Digha"],
        "Danapur": ["Danapur Cantt", "Khagaul", "Saguna More", "Mustafapur", "Maner"],
        "Phulwari Sharif": ["Phulwari Khas", "Janipur", "Walmi", "Bhikha Chak", "Sampatchak"],
        "Fatwah": ["Fatwah Khas", "Daniawan", "Surungpur", "Bakhtiarpur"]
      },
      "Gaya": {
        "Gaya Sadar": ["Bodhgaya", "Manpur", "Civil Lines", "Delha", "Rampur"],
        "Sherghati": ["Sherghati Khas", "Dobhi", "Barachatti", "Hunterganj"],
        "Tekari": ["Tekari Khas", "Konch", "Guraru", "Belaganj"]
      },
      "Muzaffarpur": {
        "Musahari": ["Muzaffarpur Town", "Kanti", "Brahampura", "Mithanpura", "Damodarpur"],
        "Sakra": ["Sakra Khas", "Dholi", "Piar", "Machhahi"],
        "Motipur": ["Motipur Khas", "Baruraj", "Sahebganj"]
      }
    }
  },
  "Tamil Nadu": {
    term_anchal: "Taluk",
    term_record: "Patta / Chitta RoR",
    term_plot: "Survey / Sub-division No",
    term_holding: "Patta Number",
    districts: {
      "Chennai": {
        "Egmore": ["Egmore", "Nungambakkam", "Chetpet", "Kilpauk"],
        "Mylapore": ["Mylapore", "Mandaveli", "Alwarpet", "RA Puram", "Santhome"],
        "Guindy": ["Adyar", "Velachery", "Saidapet", "Thiruvanmiyur", "Besant Nagar"],
        "Ambattur": ["Ambattur OT", "Padi", "Mogappair", "Korattur", "Mannurpet"],
        "Sholinganallur": ["Sholinganallur", "OMR IT Corridor", "Perungudi", "Thoraipakkam", "Karapakkam"]
      },
      "Coimbatore": {
        "Coimbatore North": ["RS Puram", "Gandhipuram", "Saibaba Colony", "Ganapathy", "Saravanampatti"],
        "Coimbatore South": ["Singanallur", "Peelamedu", "Ramanathapuram", "Kuniyamuthur"],
        "Pollachi": ["Pollachi Town", "Kinathukadavu", "Anaimalai", "Kottur"]
      }
    }
  },
  "Gujarat": {
    term_anchal: "Taluka",
    term_record: "VF-7/12 & VF-8A Extract",
    term_plot: "Survey No",
    term_holding: "Khata Number",
    districts: {
      "Ahmedabad": {
        "Daskroi": ["Bopal", "Sanand Road", "Ghatlodia", "Chandlodia", "Vastrapur", "Thaltej"],
        "Ahmedabad City": ["Navrangpura", "Satellite", "Paldi", "Ellisbridge", "Maninagar"],
        "Sanand": ["Sanand GIDC", "Shela", "Telav", "Chekhla", "Nidhrad"]
      },
      "Surat": {
        "Chorasi": ["Adajan", "Vesu", "Piplod", "Althan", "Dumas", "Bhimrad"],
        "Majura": ["Ghod Dod Road", "City Light", "Athwa Lines", "Nanpura"],
        "Kamrej": ["Kamrej Town", "Kholwad", "Pasodara", "Vav"]
      }
    }
  },
  "Rajasthan": {
    term_anchal: "Tehsil",
    term_record: "Jamabandi Nakal",
    term_plot: "Khasra No",
    term_holding: "Khata Number",
    districts: {
      "Jaipur": {
        "Jaipur": ["Vaishali Nagar", "Malviya Nagar", "Mansarovar", "C-Scheme", "Bani Park", "Jagatpura"],
        "Sanganer": ["Sanganer Town", "Sitapura Industrial Area", "Pratap Nagar", "Muhana"],
        "Amer": ["Amer Town", "Kukas", "Chandwaji", "Achrol"]
      },
      "Jodhpur": {
        "Jodhpur": ["Ratanada", "Shastri Nagar", "Paota", "Sardarpura"],
        "Luni": ["Luni Khas", "Salawas", "Rohat", "Mogra"]
      }
    }
  },
  "Madhya Pradesh": {
    term_anchal: "Tehsil",
    term_record: "Khasra / Khatoni RoR",
    term_plot: "Khasra No",
    term_holding: "Khata Number",
    districts: {
      "Bhopal": {
        "Huzur": ["Arera Colony", "MP Nagar", "Kolar Road", "Bairagarh", "Hoshangabad Road"],
        "Berasia": ["Berasia Town", "Runaha", "Damkheda", "Lalariya"]
      },
      "Indore": {
        "Indore": ["Vijay Nagar", "Palasia", "MG Road", "Rau", "Bicholi Mardana", "Super Corridor"],
        "Sanwer": ["Sanwer Town", "Kshipra", "Dharampuri", "Ajnod"]
      }
    }
  },
  "West Bengal": {
    term_anchal: "Block",
    term_record: "Khatian & Plot Record",
    term_plot: "Plot / Dag No",
    term_holding: "Khatian No",
    districts: {
      "Kolkata": {
        "Kolkata Sadar": ["Alipore", "Ballygunge", "Salt Lake City", "New Town", "Park Street", "Behala"]
      },
      "North 24 Parganas": {
        "Bidhannagar": ["Sector V IT Hub", "Rajarhat Action Area", "Baguiati", "Kestopur"],
        "Barasat": ["Barasat Sadar", "Madhyamgram", "Hridaypur"]
      }
    }
  },
  "Andhra Pradesh": {
    term_anchal: "Mandal",
    term_record: "Adangal & 1-B RoR",
    term_plot: "Survey / Sub-Division No",
    term_holding: "Khata / Pattadar Passbook No",
    districts: {
      "Visakhapatnam": {
        "Visakhapatnam Urban": ["MVP Colony", "Gajuwaka", "Madhurawada", "Rushikonda", "Seethammadhara"],
        "Anandapuram": ["Anandapuram Town", "Gambheeram", "Vemulavalasa"]
      },
      "NTR (Vijayawada)": {
        "Vijayawada Urban": ["Benz Circle", "MG Road", "Governorpet", "Gunadala", "Bhavanipuram"],
        "Gannavaram": ["Airport Area", "Gannavaram Town", "Kesarapalle"]
      }
    }
  },
  "Telangana": {
    term_anchal: "Mandal",
    term_record: "Dharani RoR-1B & Passbook",
    term_plot: "Survey / Sub-division No",
    term_holding: "Khata No / PPB",
    districts: {
      "Hyderabad": {
        "Shaikpet": ["Jubilee Hills", "Banjara Hills", "Madhapur", "Film Nagar"],
        "Secunderabad": ["Begumpet", "Marredpally", "Bowenpally", "Tarnaka"]
      },
      "Rangareddy": {
        "Serilingampally": ["Gachibowli", "HITEC City", "Kondapur", "Nanakramguda", "Financial District"],
        "Rajendranagar": ["Rajendranagar Town", "Attapur", "Budvel", "Shamshabad Airport Area"]
      }
    }
  },
  "Haryana": {
    term_anchal: "Tehsil / Sub-Tehsil",
    term_record: "Nakal Jamabandi",
    term_plot: "Khasra / Killa No",
    term_holding: "Khewat / Khatoni No",
    districts: {
      "Gurugram": {
        "Gurugram": ["DLF Cyber City", "Golf Course Road", "Sohna Road", "Sector 29", "Sushant Lok"],
        "Wazirabad": ["Sector 56", "Sector 57", "Wazirabad Village", "Tigra"],
        "Manesar": ["IMT Manesar", "Kasan", "Naurangpur", "Pachgaon"]
      },
      "Faridabad": {
        "Faridabad": ["Sector 15", "Sector 16", "NIT Faridabad", "Greenfield", "Surajkund"],
        "Ballabgarh": ["Ballabgarh Town", "Chhainsa", "Tigaon", "Prithla"]
      }
    }
  },
  "Punjab": {
    term_anchal: "Tehsil",
    term_record: "Jamabandi (Fard)",
    term_plot: "Khasra / Killa No",
    term_holding: "Khewat / Khatauni",
    districts: {
      "Ludhiana": {
        "Ludhiana East": ["Model Town", "Civil Lines", "Sarabha Nagar", "BRS Nagar"],
        "Ludhiana West": ["Ferozepur Road", "South City", "Ayali Kalan"]
      },
      "SAS Nagar (Mohali)": {
        "Mohali": ["Sector 62", "Sector 70", "Aerocity", "IT City Mohali", "Kharar"],
        "Dera Bassi": ["Dera Bassi Town", "Zirakpur", "Lalru"]
      }
    }
  },
  "Odisha": {
    term_anchal: "Tahasil",
    term_record: "RoR / Khatian",
    term_plot: "Plot No",
    term_holding: "Khata No",
    districts: {
      "Khordha (Bhubaneswar)": {
        "Bhubaneswar": ["Saheed Nagar", "Jayadev Vihar", "Patia Infocity", "Chandrasekharpur", "Khandagiri"],
        "Jatni": ["Jatni Town", "IIT Area", "Khurda Road"]
      },
      "Cuttack": {
        "Cuttack Sadar": ["Badambadi", "CDA Sector 9", "Choudwar", "Bidanasi"]
      }
    }
  },
  "Chhattisgarh": {
    term_anchal: "Tehsil",
    term_record: "B-I & P-II Khasra",
    term_plot: "Khasra No",
    term_holding: "Khata Number",
    districts: {
      "Raipur": {
        "Raipur": ["Pandri", "Telibandha", "Shankar Nagar", "VIP Road", "Naya Raipur Atal Nagar"],
        "Arang": ["Arang Town", "Mandir Hasaud", "Gullu"]
      },
      "Durg": {
        "Durg": ["Bhilai Sector 6", "Nehru Nagar", "Supela", "Kumhari"]
      }
    }
  },
  "Kerala": {
    term_anchal: "Taluk",
    term_record: "Thandaper & Resurvey Record",
    term_plot: "Survey / Resurvey No",
    term_holding: "Thandaper Account No",
    districts: {
      "Thiruvananthapuram": {
        "Thiruvananthapuram": ["Kowdiar", "Pattom", "Technopark Kazhakkoottam", "Vellayambalam", "Varkala"],
        "Neyyattinkara": ["Neyyattinkara Town", "Vizhinjam Port Area", "Poovar"]
      },
      "Ernakulam (Kochi)": {
        "Kanakayannur": ["MG Road", "Marine Drive", "Kakkanad Infopark", "Palarivattom", "Edappally"],
        "Aluva": ["Aluva Town", "Angamaly", "Nedumbassery Airport Area"]
      }
    }
  },
  "Himachal Pradesh": {
    term_anchal: "Tehsil",
    term_record: "Jamabandi Nakal",
    term_plot: "Khasra No",
    term_holding: "Khewat / Khatauni",
    districts: {
      "Shimla": {
        "Shimla Urban": ["The Mall", "Chhota Shimla", "Sanjauli", "Kasumpti", "Jakhu"],
        "Shimla Rural": ["Dhalli", "Mashobra", "Kufri", "Totu"]
      },
      "Kangra": {
        "Dharamshala": ["McLeod Ganj", "Kotwali Bazar", "Dari", "Sidhpur"],
        "Kangra": ["Kangra Town", "Gaggal", "Nagrota Bagwan"]
      }
    }
  },
  "Uttarakhand": {
    term_anchal: "Tehsil",
    term_record: "Khatauni RoR",
    term_plot: "Khasra No",
    term_holding: "Khata Number",
    districts: {
      "Dehradun": {
        "Dehradun": ["Rajpur Road", "Clement Town", "Sahastradhara Road", "Vasant Vihar", "Mussoorie"],
        "Rishikesh": ["Rishikesh Town", "Tapovan", "Raiwala", "Shyampur"],
        "Vikasnagar": ["Vikasnagar Town", "Herbertpur", "Dakpathar"]
      },
      "Haridwar": {
        "Haridwar": ["Kankhal", "Jwalapur", "BHEL Township", "Shivalik Nagar", "Roorkee"]
      }
    }
  },
  "Assam": {
    term_anchal: "Revenue Circle",
    term_record: "Jamabandi (Chitha)",
    term_plot: "Dag No",
    term_holding: "Patta No",
    districts: {
      "Kamrup Metropolitan (Guwahati)": {
        "Guwahati": ["Dispur Secretariat", "Ganeshguri", "Paltan Bazar", "Ulubari", "Khanapara"],
        "Dispur": ["Six Mile", "Beltola", "Hatigaon", "Jayanagar"]
      }
    }
  },
  "Tripura": {
    term_anchal: "Revenue Circle",
    term_record: "e-Jami Khatian",
    term_plot: "Plot / Dag No",
    term_holding: "Khatian No",
    districts: {
      "West Tripura (Agartala)": {
        "Agartala Sadar": ["Capital Complex", "Banamalipur", "Radhanagar", "Ramnagar", "Badharghat"]
      }
    }
  },
  "Manipur": {
    term_anchal: "Sub-Division",
    term_record: "Jamabandi / Patta",
    term_plot: "Dag No",
    term_holding: "Patta No",
    districts: {
      "Imphal West": {
        "Lamphelpat": ["Imphal City", "Lamphel", "Thangmeiband", "Uripok", "Keishamthong"]
      }
    }
  },
  "Goa": {
    term_anchal: "Taluka",
    term_record: "Form I & XIV RoR",
    term_plot: "Survey / Sub-Division No",
    term_holding: "Survey Property No",
    districts: {
      "North Goa": {
        "Tiswadi (Panaji)": ["Panaji City", "Miramar", "Dona Paula", "Old Goa", "Ribandar"],
        "Bardez": ["Mapusa", "Calangute", "Candolim", "Porvorim", "Anjuna"]
      },
      "South Goa": {
        "Salcete (Margao)": ["Margao Town", "Colva", "Benaulim", "Fatorda", "Navelim"]
      }
    }
  },
  "Delhi (NCT)": {
    term_anchal: "Tehsil / Sub-Division",
    term_record: "Khatauni RoR & Khasra Girdawari",
    term_plot: "Khasra No",
    term_holding: "Khata Number",
    districts: {
      "New Delhi": {
        "Chanakyapuri": ["Diplomatic Enclave", "Jor Bagh", "Lodhi Colony"],
        "Connaught Place": ["CP Inner Circle", "Barakhamba", "Janpath"]
      },
      "South Delhi": {
        "Hauz Khas": ["Green Park", "Safdarjung Enclave", "IIT Delhi Area", "Malviya Nagar"],
        "Mehrauli": ["Qutub Area", "Sultanpur", "Chattarpur", "Gadaipur"]
      },
      "South West Delhi": {
        "Dwarka": ["Sector 6", "Sector 10", "Sector 12", "Sector 21", "Kakrola", "Bijwasan"],
        "Najafgarh": ["Najafgarh Town", "Dhansa", "Mitraon", "Kanganheri"]
      },
      "North West Delhi": {
        "Rohini": ["Sector 3", "Sector 8", "Sector 15", "Sector 24", "Rithala"],
        "Kanjhawala": ["Kanjhawala Village", "Bawana", "Narela", "Alipur"]
      }
    }
  }
};

export const getMasterStateInfo = (state: string): StateLocationInfo => {
  if (PAN_INDIA_MASTER_TREE[state]) {
    return PAN_INDIA_MASTER_TREE[state];
  }
  return {
    term_anchal: "Tehsil / Sub-Division",
    term_record: "RoR Record of Rights",
    term_plot: "Plot / Survey Number",
    term_holding: "Khata / Holding Number",
    districts: {
      [`${state} Capital / Central District`]: {
        "Sadar Tehsil": ["Central Mauza", "North Village", "South Village", "East Mauza", "West Village"],
        "Sub-Divisional Circle": ["Sub-Division Village 1", "Sub-Division Village 2"]
      }
    }
  };
};
