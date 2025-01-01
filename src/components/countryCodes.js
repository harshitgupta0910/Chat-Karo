const countryCodeToAbbreviation = {
    "376": "ad",  // Andorra
    "971": "ae",  // United Arab Emirates
    "93": "af",   // Afghanistan
    "1264": "ai", // Anguilla
    "355": "al",  // Albania
    "374": "am",  // Armenia
    "244": "ao",  // Angola
    "672": "aq",  // Antarctica
    "54": "ar",   // Argentina
    "1684": "as", // American Samoa
    "43": "at",   // Austria
    "61": "au",   // Australia
    "994": "az",  // Azerbaijan
    "1246": "bb", // Barbados
    "880": "bd",  // Bangladesh
    "32": "be",   // Belgium
    "226": "bf",  // Burkina Faso
    "359": "bg",  // Bulgaria
    "973": "bh",  // Bahrain
    "257": "bi",  // Burundi
    "229": "bj",  // Benin
    "673": "bn",  // Brunei
    "591": "bo",  // Bolivia
    "55": "br",   // Brazil
    "975": "bt",  // Bhutan
    "387": "ba",  // Bosnia and Herzegovina
    "267": "bw",  // Botswana
    "673": "bn",  // Brunei
    "359": "bg",  // Bulgaria
    "226": "bf",  // Burkina Faso
    "257": "bi",  // Burundi
    "855": "kh",  // Cambodia
    "237": "cm",  // Cameroon
    "1": "ca",    // Canada
    "235": "td",  // Chad
    "56": "cl",   // Chile
    "86": "cn",   // China
    "61": "cx",   // Christmas Island
    "57": "co",   // Colombia
    "269": "km",  // Comoros
    "242": "cg",  // Congo
    "243": "cd",  // Congo (DRC)
    "682": "ck",  // Cook Islands
    "506": "cr",  // Costa Rica
    "225": "ci",  // Côte d'Ivoire
    "385": "hr",  // Croatia
    "53": "cu",   // Cuba
    "357": "cy",  // Cyprus
    "420": "cz",  // Czech Republic
    "45": "dk",   // Denmark
    "253": "dj",  // Djibouti
    "1767": "dm", // Dominica
    "1": "do",    // Dominican Republic
    "593": "ec",  // Ecuador
    "20": "eg",   // Egypt
    "503": "sv",  // El Salvador
    "240": "gq",  // Equatorial Guinea
    "291": "er",  // Eritrea
    "372": "ee",  // Estonia
    "251": "et",  // Ethiopia
    "679": "fj",  // Fiji
    "358": "fi",  // Finland
    "33": "fr",   // France
    "594": "gf",  // French Guiana
    "689": "pf",  // French Polynesia
    "241": "ga",  // Gabon
    "220": "gm",  // Gambia
    "995": "ge",  // Georgia
    "49": "de",   // Germany
    "233": "gh",  // Ghana
    "350": "gi",  // Gibraltar
    "30": "gr",   // Greece
    "299": "gl",  // Greenland
    "1": "gd",    // Grenada
    "502": "gt",  // Guatemala
    "224": "gn",  // Guinea
    "245": "gw",  // Guinea-Bissau
    "592": "gy",  // Guyana
    "509": "ht",  // Haiti
    "504": "hn",  // Honduras
    "852": "hk",  // Hong Kong
    "36": "hu",   // Hungary
    "354": "is",  // Iceland
    "91": "in",   // India
    "62": "id",   // Indonesia
    "98": "ir",   // Iran
    "964": "iq",  // Iraq
    "353": "ie",  // Ireland
    "44": "im",   // Isle of Man
    "972": "il",  // Israel
    "39": "it",   // Italy
    "1876": "jm", // Jamaica
    "81": "jp",   // Japan
    "962": "jo",  // Jordan
    "7": "kz",    // Kazakhstan
    "254": "ke",  // Kenya
    "686": "ki",  // Kiribati
    "965": "kw",  // Kuwait
    "996": "kg",  // Kyrgyzstan
    "856": "la",  // Laos
    "371": "lv",  // Latvia
    "961": "lb",  // Lebanon
    "266": "ls",  // Lesotho
    "231": "lr",  // Liberia
    "218": "ly",  // Libya
    "423": "li",  // Liechtenstein
    "370": "lt",  // Lithuania
    "352": "lu",  // Luxembourg
    "853": "mo",  // Macau
    "389": "mk",  // Macedonia
    "261": "mg",  // Madagascar
    "265": "mw",  // Malawi
    "60": "my",   // Malaysia
    "960": "mv",  // Maldives
    "223": "ml",  // Mali
    "356": "mt",  // Malta
    "692": "mh",  // Marshall Islands
    "596": "mq",  // Martinique
    "222": "mr",  // Mauritania
    "230": "mu",  // Mauritius
    "262": "yt",  // Mayotte
    "52": "mx",   // Mexico
    "691": "fm",  // Micronesia
    "373": "md",  // Moldova
    "377": "mc",  // Monaco
    "976": "mn",  // Mongolia
    "382": "me",  // Montenegro
    "212": "ma",  // Morocco
    "258": "mz",  // Mozambique
    "95": "mm",   // Myanmar
    "264": "na",  // Namibia
    "674": "nr",  // Nauru
    "977": "np",  // Nepal
    "31": "nl",   // Netherlands
    "687": "nc",  // New Caledonia
    "64": "nz",   // New Zealand
    "505": "ni",  // Nicaragua
    "227": "ne",  // Niger
    "234": "ng",  // Nigeria
    "47": "no",   // Norway
    "968": "om",  // Oman
    "92": "pk",   // Pakistan
    "680": "pw",  // Palau
    "507": "pa",  // Panama
    "675": "pg",  // Papua New Guinea
    "595": "py",  // Paraguay
    "51": "pe",   // Peru
    "63": "ph",   // Philippines
    "48": "pl",   // Poland
    "351": "pt",  // Portugal
    "974": "qa",  // Qatar
    "40": "ro",   // Romania
    "7": "ru",    // Russia
    "250": "rw",  // Rwanda
    "685": "ws",  // Samoa
    "378": "sm",  // San Marino
    "239": "st",  // São Tomé and Príncipe
    "966": "sa",  // Saudi Arabia
    "221": "sn",  // Senegal
    "381": "rs",  // Serbia
    "248": "sc",  // Seychelles
    "232": "sl",  // Sierra Leone
    "65": "sg",   // Singapore
    "421": "sk",  // Slovakia
    "386": "si",  // Slovenia
    "677": "sb",  // Solomon Islands
    "252": "so",  // Somalia
    "27": "za",   // South Africa
    "34": "es",   // Spain
    "94": "lk",   // Sri Lanka
    "249": "sd",  // Sudan
    "597": "sr",  // Suriname
    "268": "sz",  // Eswatini (Swaziland)
    "46": "se",   // Sweden
    "41": "ch",   // Switzerland
    "963": "sy",  // Syria
    "886": "tw",  // Taiwan
    "992": "tj",  // Tajikistan
    "255": "tz",  // Tanzania
    "66": "th",   // Thailand
    "228": "tg",  // Togo
    "676": "to",  // Tonga
    "216": "tn",  // Tunisia
    "90": "tr",   // Turkey
    "993": "tm",  // Turkmenistan
    "688": "tv",  // Tuvalu
    "256": "ug",  // Uganda
    "380": "ua",  // Ukraine
    "971": "ae",  // United Arab Emirates
    "44": "gb",   // United Kingdom
    "1": "us",    // United States
    "598": "uy",  // Uruguay
    "998": "uz",  // Uzbekistan
    "678": "vu",  // Vanuatu
    "379": "va",  // Vatican City
    "58": "ve",   // Venezuela
    "84": "vn",   // Vietnam
    "967": "ye",  // Yemen
    "260": "zm",  // Zambia
    "263": "zw",  // Zimbabwe
    "376": "ad",  // Andorra
    "971": "ae",  // United Arab Emirates
    "93": "af",   // Afghanistan
    "1264": "ai", // Anguilla
    "1268": "ag", // Antigua and Barbuda
    "1345": "ai", // Anguilla
    "355": "al",  // Albania
    "374": "am",  // Armenia
    "244": "ao",  // Angola
    "672": "aq",  // Antarctica
    "54": "ar",   // Argentina
    "1684": "as", // American Samoa
    "43": "at",   // Austria
    "61": "au",   // Australia
    "297": "aw",  // Aruba
    "358": "ax",  // Åland Islands
    "994": "az",  // Azerbaijan
    "387": "ba",  // Bosnia and Herzegovina
    "1246": "bb", // Barbados
    "880": "bd",  // Bangladesh
    "32": "be",   // Belgium
    "226": "bf",  // Burkina Faso
    "359": "bg",  // Bulgaria
    "973": "bh",  // Bahrain
    "257": "bi",  // Burundi
    "229": "bj",  // Benin
    "590": "bl",  // Saint Barthélemy
    "1441": "bm", // Bermuda
    "673": "bn",  // Brunei
    "591": "bo",  // Bolivia
    "599": "bq",  // Caribbean Netherlands
    "55": "br",   // Brazil
    "1242": "bs", // Bahamas
    "975": "bt",  // Bhutan
    "47": "bv",   // Bouvet Island
    "267": "bw",  // Botswana
    "375": "by",  // Belarus
    "501": "bz",  // Belize
    "1": "ca",    // Canada
    "61": "cc",   // Cocos (Keeling) Islands
    "243": "cd",  // DR Congo
    "236": "cf",  // Central African Republic
    "242": "cg",  // Republic of the Congo
    "41": "ch",   // Switzerland
    "225": "ci",  // Côte d'Ivoire (Ivory Coast)
    "682": "ck",  // Cook Islands
    "56": "cl",   // Chile
    "237": "cm",  // Cameroon
    "86": "cn",   // China
    "57": "co",   // Colombia
    "506": "cr",  // Costa Rica
    "53": "cu",   // Cuba
    "238": "cv",  // Cape Verde
    "599": "cw",  // Curaçao
    "61": "cx",   // Christmas Island
    "357": "cy",  // Cyprus
    "420": "cz",  // Czechia
    "49": "de",   // Germany
    "253": "dj",  // Djibouti
    "45": "dk",   // Denmark
    "1767": "dm", // Dominica
    "1809": "do", // Dominican Republic
    "213": "dz",  // Algeria
    "593": "ec",  // Ecuador
    "372": "ee",  // Estonia
    "20": "eg",   // Egypt
    "212": "eh",  // Western Sahara
    "291": "er",  // Eritrea
    "34": "es",   // Spain
    "251": "et",  // Ethiopia
    "0": "eu",    // European Union
    "358": "fi",  // Finland
    "679": "fj",  // Fiji
    "500": "fk",  // Falkland Islands
    "691": "fm",  // Micronesia
    "298": "fo",  // Faroe Islands
    "33": "fr",   // France
    "241": "ga",  // Gabon
    "44": "gb",   // United Kingdom
    "44": "gb-eng", // England
    "44": "gb-nir", // Northern Ireland
    "44": "gb-sct", // Scotland
    "44": "gb-wls", // Wales
    "473": "gd",  // Grenada
    "995": "ge",  // Georgia
    "594": "gf",  // French Guiana
    "44": "gg",   // Guernsey
    "233": "gh",  // Ghana
    "350": "gi",  // Gibraltar
    "299": "gl",  // Greenland
    "220": "gm",  // Gambia
    "224": "gn",  // Guinea
    "590": "gp",  // Guadeloupe
    "240": "gq",  // Equatorial Guinea
    "30": "gr",   // Greece
    "500": "gs",  // South Georgia
    "502": "gt",  // Guatemala
    "1671": "gu", // Guam
    "245": "gw",  // Guinea-Bissau
    "592": "gy",  // Guyana
    "852": "hk",  // Hong Kong
    "672": "hm",  // Heard Island and McDonald Islands
    "504": "hn",  // Honduras
    "385": "hr",  // Croatia
    "509": "ht",  // Haiti
    "36": "hu",   // Hungary
    "62": "id",   // Indonesia
    "353": "ie",  // Ireland
    "972": "il",  // Israel
    "44": "im",   // Isle of Man
    "91": "in",   // India
    "246": "io",  // British Indian Ocean Territory
    "964": "iq",  // Iraq
    "98": "ir",   // Iran
    "354": "is",  // Iceland
    "39": "it",   // Italy
    "1537": "je", // Jersey
    "1876": "jm", // Jamaica
    "962": "jo",  // Jordan
    "81": "jp",   // Japan
    "254": "ke",  // Kenya
    "996": "kg",  // Kyrgyzstan
    "855": "kh",  // Cambodia
    "686": "ki",  // Kiribati
    "269": "km",  // Comoros
    "1869": "kn", // Saint Kitts and Nevis
    "850": "kp",  // North Korea
    "82": "kr",   // South Korea
    "965": "kw",  // Kuwait
    "1345": "ky", // Cayman Islands
    "7": "kz",    // Kazakhstan
    "856": "la",  // Laos
    "961": "lb",  // Lebanon
    "1758": "lc", // Saint Lucia
    "423": "li",  // Liechtenstein
    "94": "lk",   // Sri Lanka
    "231": "lr",  // Liberia
    "266": "ls",  // Lesotho
    "370": "lt",  // Lithuania
    "352": "lu",  // Luxembourg
    "371": "lv",  // Latvia
    "218": "ly",  // Libya
    "212": "ma",  // Morocco
    "377": "mc",  // Monaco
    "373": "md",  // Moldova
    "382": "me",  // Montenegro
    "590": "mf",  // Saint Martin
    "261": "mg",  // Madagascar
    "692": "mh",  // Marshall Islands
    "389": "mk",  // North Macedonia
    "223": "ml",  // Mali
    "95": "mm",   // Myanmar
    "976": "mn",  // Mongolia
    "853": "mo",  // Macau
    "1670": "mp", // Northern Mariana Islands
    "596": "mq",  // Martinique
    "222": "mr",  // Mauritania
    "1664": "ms", // Montserrat
    "356": "mt",  // Malta
    "230": "mu",  // Mauritius
    "960": "mv",  // Maldives
    "265": "mw",  // Malawi
    "52": "mx",   // Mexico
    "60": "my",   // Malaysia
    "258": "mz",  // Mozambique
    "264": "na",  // Namibia
    "687": "nc",  // New Caledonia
    "227": "ne",  // Niger
    "672": "nf",  // Norfolk Island
    "234": "ng",  // Nigeria
    "505": "ni",  // Nicaragua
    "31": "nl",   // Netherlands
    "47": "no",   // Norway
    "977": "np",  // Nepal
    "674": "nr",  // Nauru
    "683": "nu",  // Niue
    "64": "nz",   // New Zealand
    "968": "om",  // Oman
    "507": "pa",  // Panama
    "51": "pe",   // Peru
    "689": "pf",  // French Polynesia
    "675": "pg",  // Papua New Guinea
    "63": "ph",   // Philippines
    "92": "pk",   // Pakistan
    "48": "pl",   // Poland
    "508": "pm",  // Saint Pierre and Miquelon
    "872": "pn",  // Pitcairn Islands
    "1787": "pr", // Puerto Rico
    "970": "ps",  // Palestine
    "351": "pt",  // Portugal
    "680": "pw",  // Palau
    "595": "py",  // Paraguay
    "974": "qa",  // Qatar
    "262": "re",  // Réunion
    "40": "ro",   // Romania
    "7": "ru",    // Russia
    "250": "rw",  // Rwanda
    "290": "sh",  // Saint Helena
    "1869": "kn", // Saint Kitts and Nevis
    "1671": "gu", // Guam
    "39": "it",   // Italy
    "852": "hk",  // Hong Kong
    "968": "om",  // Oman
  };
  
  export default countryCodeToAbbreviation;