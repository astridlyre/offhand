class $61229521ce5649ad$export$2988323d61e911f8 {
    randomIndex(source) {
        const index = Math.floor(Math.random() * source.length);
        return source[index];
    }
    randomKey(object) {
        const keys = Object.keys(object);
        return this.randomIndex(keys);
    }
    constructor(){
        this.LOWERCASE = [
            ...'abcdefghijklmnopqrstuvwxyz'
        ];
        this.UPPERCASE = [
            ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ];
        this.LOWERCASE_AND_UPPERCASE = this.LOWERCASE.concat(this.UPPERCASE);
        this.randomDigit = ()=>Math.floor(Math.random() * 10)
        ;
        this.randomLowerCase = ()=>this.randomIndex(this.LOWERCASE)
        ;
        this.randomUpperCase = ()=>this.randomIndex(this.UPPERCASE)
        ;
        this.randomLetter = ()=>this.randomIndex(this.LOWERCASE_AND_UPPERCASE)
        ;
    }
}


class $9263dfd379e4a2d5$export$2c385b67516de71a {
    #randomizer;
    constructor(randomizer){
        this.#randomizer = randomizer;
    }
    letterify(str) {
        return str.replaceAll('X', this.#randomizer.randomLetter);
    }
    numberify(str1) {
        return str1.replaceAll('#', ()=>`${this.#randomizer.randomDigit()}`
        );
    }
    join(...tokens) {
        return tokens.filter(Boolean).join(' ');
    }
}


function $c1bd802c6a10d138$var$createGeneratorGetter(generator) {
    function RandomGenerator() {
        return generator.next().value;
    }
    RandomGenerator.toArray = function toArray(length) {
        if (length === 0) return [];
        if (!length) throw new Error('Length must be provided, to avoid infinite loop');
        const result = [];
        for(let i = 0; i < length; i++)result.push(generator.next().value);
        return result;
    };
    return RandomGenerator;
}
function* $c1bd802c6a10d138$var$generatorFromCallback(callback) {
    while(true)yield callback();
}
class $c1bd802c6a10d138$export$3a855c3f2688affb {
    #randomizer;
    from(target) {
        if (Array.isArray(target)) return this.randomGeneratorArray(target);
        else if (typeof target === 'function') return $c1bd802c6a10d138$var$createGeneratorGetter($c1bd802c6a10d138$var$generatorFromCallback(target));
        return this.randomGeneratorObject(target);
    }
    constructor(randomizer){
        this.#randomizer = randomizer;
    }
    randomGeneratorArray(array) {
        const generator = $c1bd802c6a10d138$var$generatorFromCallback(()=>this.#randomizer.randomIndex(array)
        );
        return $c1bd802c6a10d138$var$createGeneratorGetter(generator);
    }
    randomGeneratorObject(object) {
        const keys = Object.keys(object);
        const generator = $c1bd802c6a10d138$var$generatorFromCallback(()=>object[this.#randomizer.randomKey(keys)]
        );
        return $c1bd802c6a10d138$var$createGeneratorGetter(generator);
    }
}


const $482db9f6817634c1$var$MASTERCARD = {
    name: 'MasterCard',
    formats: [
        '51##############',
        '52##############',
        '53##############',
        '54##############',
        '55##############', 
    ]
};
const $482db9f6817634c1$var$VISA = {
    name: 'Visa',
    formats: [
        '4539############',
        '4556############',
        '4916############',
        '4532############',
        '4929############',
        '40240071########',
        '4485############',
        '4716############',
        '4###############', 
    ]
};
const $482db9f6817634c1$var$AMEX = {
    name: 'American Express',
    formats: [
        '34##############',
        '37##############'
    ]
};
const $482db9f6817634c1$var$DISCOVER = {
    name: 'Discover Card',
    formats: [
        '6011############'
    ]
};
const $482db9f6817634c1$export$dadaf2c8f84af53e = [
    $482db9f6817634c1$var$MASTERCARD,
    $482db9f6817634c1$var$VISA,
    $482db9f6817634c1$var$AMEX,
    $482db9f6817634c1$var$DISCOVER, 
];
class $482db9f6817634c1$export$c6c37b68224ccf8d {
    #randomizer;
    #replacer;
    #date;
    constructor(randomizer, replacer, date){
        this.#randomizer = randomizer;
        this.#replacer = replacer;
        this.#date = date;
    }
    paymentDetails() {
        const vendor = this.#randomizer.randomIndex($482db9f6817634c1$export$dadaf2c8f84af53e);
        const number = this.#replacer.numberify(this.#randomizer.randomIndex(vendor.formats));
        const expiration = this.#date.random('MM/YY');
        const holder = 'John Smith';
        return {
            type: vendor.name,
            number: number,
            expiration: expiration,
            holder: holder
        };
    }
}


const $8637712863d48a0c$export$3ff0162d390364f4 = [
    'black',
    'maroon',
    'green',
    'navy',
    'olive',
    'purple',
    'teal',
    'lime',
    'blue',
    'silver',
    'gray',
    'yellow',
    'fuchsia',
    'aqua',
    'white', 
];
const $8637712863d48a0c$export$e755b4518de49373 = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'Darkorange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed ',
    'Indigo ',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen', 
];


function $ef4fce51304a67a1$export$fcbe1efa6919329(length = 2) {
    return (n)=>`${n}`.padStart(length, '0')
    ;
}
const $ef4fce51304a67a1$export$19fa182fb736e81a = (start = 0, end = 100)=>Math.floor(Math.random() * (end - start)) + start
;
const $ef4fce51304a67a1$export$e16d8520af44a096 = (x, y)=>x + y
;
const $ef4fce51304a67a1$export$4e2d2ead65e5f7e3 = (x, y)=>x - y
;


class $13cfab555c5e13fd$export$c8d11923ce5dd047 {
    #randomizer;
    constructor(randomizer){
        this.opacity = ()=>Math.round(Math.random() * 100) / 100
        ;
        this.value = ()=>Math.floor(Math.random() * 256)
        ;
        this.safeName = ()=>this.#randomizer.randomIndex($8637712863d48a0c$export$3ff0162d390364f4)
        ;
        this.name = ()=>this.#randomizer.randomIndex($8637712863d48a0c$export$e755b4518de49373)
        ;
        this.rgbArray = ()=>[
                this.value(),
                this.value(),
                this.value()
            ]
        ;
        this.rgbaArray = ()=>this.rgbArray().concat(this.opacity())
        ;
        this.rgba = ()=>`rgba(${this.rgbaArray().join(', ')})`
        ;
        this.rgb = ()=>`rgb(${this.rgbArray().join(', ')})`
        ;
        this.hex = ()=>`#${this.rgbArray().map((n)=>$ef4fce51304a67a1$export$fcbe1efa6919329(2)(n.toString(16))
            ).join('')}`
        ;
        this.#randomizer = randomizer;
    }
    get COLOR_NAMES() {
        return $8637712863d48a0c$export$e755b4518de49373;
    }
    get SAFE_COLORS() {
        return $8637712863d48a0c$export$3ff0162d390364f4;
    }
}



const $fc4b6ef237562aec$export$1c81b3299fa22725 = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
    'XVI',
    'XVII',
    'XVIII',
    'XIX',
    'XX',
    'XXI', 
];
const $fc4b6ef237562aec$export$a1293b6f12329fc4 = [
    'Europe/Andorra',
    'Asia/Dubai',
    'Asia/Kabul',
    'America/Antigua',
    'America/Anguilla',
    'Europe/Tirane',
    'Asia/Yerevan',
    'Africa/Luanda',
    'Antarctica/McMurdo',
    'Antarctica/South_Pole',
    'Antarctica/Rothera',
    'Antarctica/Palmer',
    'Antarctica/Mawson',
    'Antarctica/Davis',
    'Antarctica/Casey',
    'Antarctica/Vostok',
    'Antarctica/DumontDUrville',
    'Antarctica/Syowa',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Cordoba',
    'America/Argentina/Salta',
    'America/Argentina/Jujuy',
    'America/Argentina/Tucuman',
    'America/Argentina/Catamarca',
    'America/Argentina/La_Rioja',
    'America/Argentina/San_Juan',
    'America/Argentina/Mendoza',
    'America/Argentina/San_Luis',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Ushuaia',
    'Pacific/Pago_Pago',
    'Europe/Vienna',
    'Australia/Lord_Howe',
    'Antarctica/Macquarie',
    'Australia/Hobart',
    'Australia/Currie',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Australia/Broken_Hill',
    'Australia/Brisbane',
    'Australia/Lindeman',
    'Australia/Adelaide',
    'Australia/Darwin',
    'Australia/Perth',
    'Australia/Eucla',
    'America/Aruba',
    'Europe/Mariehamn',
    'Asia/Baku',
    'Europe/Sarajevo',
    'America/Barbados',
    'Asia/Dhaka',
    'Europe/Brussels',
    'Africa/Ouagadougou',
    'Europe/Sofia',
    'Asia/Bahrain',
    'Africa/Bujumbura',
    'Africa/Porto-Novo',
    'America/St_Barthelemy',
    'Atlantic/Bermuda',
    'Asia/Brunei',
    'America/La_Paz',
    'America/Kralendijk',
    'America/Noronha',
    'America/Belem',
    'America/Fortaleza',
    'America/Recife',
    'America/Araguaina',
    'America/Maceio',
    'America/Bahia',
    'America/Sao_Paulo',
    'America/Campo_Grande',
    'America/Cuiaba',
    'America/Santarem',
    'America/Porto_Velho',
    'America/Boa_Vista',
    'America/Manaus',
    'America/Eirunepe',
    'America/Rio_Branco',
    'America/Nassau',
    'Asia/Thimphu',
    'Africa/Gaborone',
    'Europe/Minsk',
    'America/Belize',
    'America/St_Johns',
    'America/Halifax',
    'America/Glace_Bay',
    'America/Moncton',
    'America/Goose_Bay',
    'America/Blanc-Sablon',
    'America/Montreal',
    'America/Toronto',
    'America/Nipigon',
    'America/Thunder_Bay',
    'America/Iqaluit',
    'America/Pangnirtung',
    'America/Resolute',
    'America/Atikokan',
    'America/Rankin_Inlet',
    'America/Winnipeg',
    'America/Rainy_River',
    'America/Regina',
    'America/Swift_Current',
    'America/Edmonton',
    'America/Cambridge_Bay',
    'America/Yellowknife',
    'America/Inuvik',
    'America/Creston',
    'America/Dawson_Creek',
    'America/Vancouver',
    'America/Whitehorse',
    'America/Dawson',
    'Indian/Cocos',
    'Africa/Kinshasa',
    'Africa/Lubumbashi',
    'Africa/Bangui',
    'Africa/Brazzaville',
    'Europe/Zurich',
    'Africa/Abidjan',
    'Pacific/Rarotonga',
    'America/Santiago',
    'Pacific/Easter',
    'Africa/Douala',
    'Asia/Shanghai',
    'Asia/Harbin',
    'Asia/Chongqing',
    'Asia/Urumqi',
    'Asia/Kashgar',
    'America/Bogota',
    'America/Costa_Rica',
    'America/Havana',
    'Atlantic/Cape_Verde',
    'America/Curacao',
    'Indian/Christmas',
    'Asia/Nicosia',
    'Europe/Prague',
    'Europe/Berlin',
    'Europe/Busingen',
    'Africa/Djibouti',
    'Europe/Copenhagen',
    'America/Dominica',
    'America/Santo_Domingo',
    'Africa/Algiers',
    'America/Guayaquil',
    'Pacific/Galapagos',
    'Europe/Tallinn',
    'Africa/Cairo',
    'Africa/El_Aaiun',
    'Africa/Asmara',
    'Europe/Madrid',
    'Africa/Ceuta',
    'Atlantic/Canary',
    'Africa/Addis_Ababa',
    'Europe/Helsinki',
    'Pacific/Fiji',
    'Atlantic/Stanley',
    'Pacific/Chuuk',
    'Pacific/Pohnpei',
    'Pacific/Kosrae',
    'Atlantic/Faroe',
    'Europe/Paris',
    'Africa/Libreville',
    'Europe/London',
    'America/Grenada',
    'Asia/Tbilisi',
    'America/Cayenne',
    'Europe/Guernsey',
    'Africa/Accra',
    'Europe/Gibraltar',
    'America/Godthab',
    'America/Danmarkshavn',
    'America/Scoresbysund',
    'America/Thule',
    'Africa/Banjul',
    'Africa/Conakry',
    'America/Guadeloupe',
    'Africa/Malabo',
    'Europe/Athens',
    'Atlantic/South_Georgia',
    'America/Guatemala',
    'Pacific/Guam',
    'Africa/Bissau',
    'America/Guyana',
    'Asia/Hong_Kong',
    'America/Tegucigalpa',
    'Europe/Zagreb',
    'America/Port-au-Prince',
    'Europe/Budapest',
    'Asia/Jakarta',
    'Asia/Pontianak',
    'Asia/Makassar',
    'Asia/Jayapura',
    'Europe/Dublin',
    'Asia/Jerusalem',
    'Europe/Isle_of_Man',
    'Asia/Kolkata',
    'Indian/Chagos',
    'Asia/Baghdad',
    'Asia/Tehran',
    'Atlantic/Reykjavik',
    'Europe/Rome',
    'Europe/Jersey',
    'America/Jamaica',
    'Asia/Amman',
    'Asia/Tokyo',
    'Africa/Nairobi',
    'Asia/Bishkek',
    'Asia/Phnom_Penh',
    'Pacific/Tarawa',
    'Pacific/Enderbury',
    'Pacific/Kiritimati',
    'Indian/Comoro',
    'America/St_Kitts',
    'Asia/Pyongyang',
    'Asia/Seoul',
    'Asia/Kuwait',
    'America/Cayman',
    'Asia/Almaty',
    'Asia/Qyzylorda',
    'Asia/Aqtobe',
    'Asia/Aqtau',
    'Asia/Oral',
    'Asia/Vientiane',
    'Asia/Beirut',
    'America/St_Lucia',
    'Europe/Vaduz',
    'Asia/Colombo',
    'Africa/Monrovia',
    'Africa/Maseru',
    'Europe/Vilnius',
    'Europe/Luxembourg',
    'Europe/Riga',
    'Africa/Tripoli',
    'Africa/Casablanca',
    'Europe/Monaco',
    'Europe/Chisinau',
    'Europe/Podgorica',
    'America/Marigot',
    'Indian/Antananarivo',
    'Pacific/Majuro',
    'Pacific/Kwajalein',
    'Europe/Skopje',
    'Africa/Bamako',
    'Asia/Rangoon',
    'Asia/Ulaanbaatar',
    'Asia/Hovd',
    'Asia/Choibalsan',
    'Asia/Macau',
    'Pacific/Saipan',
    'America/Martinique',
    'Africa/Nouakchott',
    'America/Montserrat',
    'Europe/Malta',
    'Indian/Mauritius',
    'Indian/Maldives',
    'Africa/Blantyre',
    'America/Mexico_City',
    'America/Cancun',
    'America/Merida',
    'America/Monterrey',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Chihuahua',
    'America/Ojinaga',
    'America/Hermosillo',
    'America/Tijuana',
    'America/Santa_Isabel',
    'America/Bahia_Banderas',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Africa/Maputo',
    'Africa/Windhoek',
    'Pacific/Noumea',
    'Africa/Niamey',
    'Pacific/Norfolk',
    'Africa/Lagos',
    'America/Managua',
    'Europe/Amsterdam',
    'Europe/Oslo',
    'Asia/Kathmandu',
    'Pacific/Nauru',
    'Pacific/Niue',
    'Pacific/Auckland',
    'Pacific/Chatham',
    'Asia/Muscat',
    'America/Panama',
    'America/Lima',
    'Pacific/Tahiti',
    'Pacific/Marquesas',
    'Pacific/Gambier',
    'Pacific/Port_Moresby',
    'Asia/Manila',
    'Asia/Karachi',
    'Europe/Warsaw',
    'America/Miquelon',
    'Pacific/Pitcairn',
    'America/Puerto_Rico',
    'Asia/Gaza',
    'Asia/Hebron',
    'Europe/Lisbon',
    'Atlantic/Madeira',
    'Atlantic/Azores',
    'Pacific/Palau',
    'America/Asuncion',
    'Asia/Qatar',
    'Indian/Reunion',
    'Europe/Bucharest',
    'Europe/Belgrade',
    'Europe/Kaliningrad',
    'Europe/Moscow',
    'Europe/Volgograd',
    'Europe/Samara',
    'Asia/Yekaterinburg',
    'Asia/Omsk',
    'Asia/Novosibirsk',
    'Asia/Novokuznetsk',
    'Asia/Krasnoyarsk',
    'Asia/Irkutsk',
    'Asia/Yakutsk',
    'Asia/Khandyga',
    'Asia/Vladivostok',
    'Asia/Sakhalin',
    'Asia/Ust-Nera',
    'Asia/Magadan',
    'Asia/Kamchatka',
    'Asia/Anadyr',
    'Africa/Kigali',
    'Asia/Riyadh',
    'Pacific/Guadalcanal',
    'Indian/Mahe',
    'Africa/Khartoum',
    'Europe/Stockholm',
    'Asia/Singapore',
    'Atlantic/St_Helena',
    'Europe/Ljubljana',
    'Arctic/Longyearbyen',
    'Europe/Bratislava',
    'Africa/Freetown',
    'Europe/San_Marino',
    'Africa/Dakar',
    'Africa/Mogadishu',
    'America/Paramaribo',
    'Africa/Juba',
    'Africa/Sao_Tome',
    'America/El_Salvador',
    'America/Lower_Princes',
    'Asia/Damascus',
    'Africa/Mbabane',
    'America/Grand_Turk',
    'Africa/Ndjamena',
    'Indian/Kerguelen',
    'Africa/Lome',
    'Asia/Bangkok',
    'Asia/Dushanbe',
    'Pacific/Fakaofo',
    'Asia/Dili',
    'Asia/Ashgabat',
    'Africa/Tunis',
    'Pacific/Tongatapu',
    'Europe/Istanbul',
    'America/Port_of_Spain',
    'Pacific/Funafuti',
    'Asia/Taipei',
    'Africa/Dar_es_Salaam',
    'Europe/Kiev',
    'Europe/Uzhgorod',
    'Europe/Zaporozhye',
    'Europe/Simferopol',
    'Africa/Kampala',
    'Pacific/Johnston',
    'Pacific/Midway',
    'Pacific/Wake',
    'America/New_York',
    'America/Detroit',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Indiana/Indianapolis',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Vevay',
    'America/Chicago',
    'America/Indiana/Tell_City',
    'America/Indiana/Knox',
    'America/Menominee',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/North_Dakota/Beulah',
    'America/Denver',
    'America/Boise',
    'America/Shiprock',
    'America/Phoenix',
    'America/Los_Angeles',
    'America/Anchorage',
    'America/Juneau',
    'America/Sitka',
    'America/Yakutat',
    'America/Nome',
    'America/Adak',
    'America/Metlakatla',
    'Pacific/Honolulu',
    'America/Montevideo',
    'Asia/Samarkand',
    'Asia/Tashkent',
    'Europe/Vatican',
    'America/St_Vincent',
    'America/Caracas',
    'America/Tortola',
    'America/St_Thomas',
    'Asia/Ho_Chi_Minh',
    'Pacific/Efate',
    'Pacific/Wallis',
    'Pacific/Apia',
    'Asia/Aden',
    'Indian/Mayotte',
    'Africa/Johannesburg',
    'Africa/Lusaka',
    'Africa/Harare', 
];


const $f90a36a0628a5e0a$var$pad2 = $ef4fce51304a67a1$export$fcbe1efa6919329(2);
const $f90a36a0628a5e0a$var$FOUR_YEARS = 126144000000;
class $f90a36a0628a5e0a$export$4ffcd5ec136f7272 {
    #config;
    #randomizer;
    constructor(randomizer, config){
        this.century = ()=>this.#randomizer.randomIndex($fc4b6ef237562aec$export$1c81b3299fa22725)
        ;
        this.ampm = ()=>this.#randomizer.randomIndex([
                'am',
                'pm'
            ])
        ;
        this.dayOfYear = ()=>$ef4fce51304a67a1$export$19fa182fb736e81a(1, 365)
        ;
        this.dayOfMonth = ()=>this.#randomLocaleDate({
                day: 'numeric'
            })
        ;
        this.dayOfWeek = ()=>this.#randomLocaleDate({
                weekday: 'long'
            })
        ;
        this.monthNumber = ()=>$ef4fce51304a67a1$export$19fa182fb736e81a(1, 12)
        ;
        this.monthName = ()=>this.#randomLocaleDate({
                month: 'long'
            })
        ;
        this.year = ()=>$ef4fce51304a67a1$export$19fa182fb736e81a(1960, 2060)
        ;
        this.timezone = ()=>this.#randomizer.randomIndex($fc4b6ef237562aec$export$a1293b6f12329fc4)
        ;
        this.#config = config;
        this.#randomizer = randomizer;
    }
     #randomFunction(...fns) {
        return this.#randomizer.randomIndex(fns);
    }
     #randomLocaleDate(options) {
        return this.random().toLocaleDateString(this.#config.locale, options);
    }
    unix() {
        return Math.round(Math.random() * Date.now());
    }
    time() {
        return `${$f90a36a0628a5e0a$var$pad2($ef4fce51304a67a1$export$19fa182fb736e81a(0, 24))}:${$f90a36a0628a5e0a$var$pad2($ef4fce51304a67a1$export$19fa182fb736e81a(0, 60))}:${$f90a36a0628a5e0a$var$pad2($ef4fce51304a67a1$export$19fa182fb736e81a(0, 60))}`;
    }
    random(format) {
        const padTo2 = $ef4fce51304a67a1$export$fcbe1efa6919329();
        const start = Date.now();
        const end = start + Math.floor(Math.random() * $f90a36a0628a5e0a$var$FOUR_YEARS);
        const date = new Date(this.#randomFunction($ef4fce51304a67a1$export$e16d8520af44a096, $ef4fce51304a67a1$export$4e2d2ead65e5f7e3)(start, end));
        if (!format) return date;
        const y = date.getFullYear();
        const d = padTo2(date.getDate());
        const m = padTo2(date.getMonth() + 1);
        if (format === 'MM/YY') return `${m}/${String(y).slice(2)}`;
        else if (format === 'YYYY-MM-DD') return `${y}-${m}-${d}`;
        else if (format === 'YYYY-DD-MM') return `${y}-${d}-${m}`;
        return date.toLocaleString(this.#config.locale);
    }
    get CENTURIES() {
        return $fc4b6ef237562aec$export$1c81b3299fa22725;
    }
    get TIMEZONES() {
        return $fc4b6ef237562aec$export$a1293b6f12329fc4;
    }
}


class $a8e101027d325e52$export$ac67718a6827a790 {
    constructor(config){
        this.randomizer = new $61229521ce5649ad$export$2988323d61e911f8();
        this.replacer = new $9263dfd379e4a2d5$export$2c385b67516de71a(this.randomizer);
        this.randomGenerator = new $c1bd802c6a10d138$export$3a855c3f2688affb(this.randomizer);
        this.date = new $f90a36a0628a5e0a$export$4ffcd5ec136f7272(this.randomizer, config);
        this.creditCard = new $482db9f6817634c1$export$c6c37b68224ccf8d(this.randomizer, this.replacer, this.date);
        this.color = new $13cfab555c5e13fd$export$c8d11923ce5dd047(this.randomizer);
    }
}


export {$a8e101027d325e52$export$ac67718a6827a790 as Offhand};
//# sourceMappingURL=index.js.map
