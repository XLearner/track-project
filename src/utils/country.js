const country = [
  {
    code: 'AF',
    name: 'Afghanistan',
    name_zh: '阿富汗',
  },
  {
    code: 'AL',
    name: 'Albania',
    name_zh: '阿尔巴尼亚',
  },
  {
    code: 'DZ',
    name: 'Algeria',
    name_zh: '阿尔及利亚',
  },
  {
    code: 'AS',
    name: 'American Samoa',
    name_zh: '美属萨摩亚',
  },
  {
    code: 'AD',
    name: 'Andorra',
    name_zh: '安道尔',
  },
  {
    code: 'AO',
    name: 'Angola',
    name_zh: '安哥拉',
  },
  {
    code: 'AI',
    name: 'Anguilla',
    name_zh: '安圭拉',
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
    name_zh: '安提瓜和巴布达',
  },
  {
    code: 'AR',
    name: 'Argentina',
    name_zh: '阿根廷',
  },
  {
    code: 'AM',
    name: 'Armenia',
    name_zh: '亚美尼亚',
  },
  {
    code: 'AW',
    name: 'Aruba',
    name_zh: '阿鲁巴',
  },
  {
    code: 'AU',
    name: 'Australia',
    name_zh: '澳大利亚',
  },
  {
    code: 'AT',
    name: 'Austria',
    name_zh: '奥地利',
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    name_zh: '阿塞拜疆',
  },
  {
    code: 'BS',
    name: 'Bahamas',
    name_zh: '巴哈马',
  },
  {
    code: 'BH',
    name: 'Bahrain',
    name_zh: '巴林',
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    name_zh: '孟加拉国',
  },
  {
    code: 'BB',
    name: 'Barbados',
    name_zh: '巴巴多斯',
  },
  {
    code: 'BY',
    name: 'Belarus',
    name_zh: '白俄罗斯',
  },
  {
    code: 'BE',
    name: 'Belgium',
    name_zh: '比利时',
  },
  {
    code: 'BZ',
    name: 'Belize',
    name_zh: '伯利兹',
  },
  {
    code: 'BJ',
    name: 'Benin',
    name_zh: '贝宁',
  },
  {
    code: 'BM',
    name: 'Bermuda',
    name_zh: '百慕大',
  },
  {
    code: 'BT',
    name: 'Bhutan',
    name_zh: '不丹',
  },
  {
    code: 'BO',
    name: 'Bolivia',
    name_zh: '玻利维亚',
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    name_zh: '波斯尼亚和黑塞哥维那',
  },
  {
    code: 'BW',
    name: 'Botswana',
    name_zh: '博茨瓦纳',
  },
  {
    code: 'BR',
    name: 'Brazil',
    name_zh: '巴西',
  },
  {
    code: 'BN',
    name: 'Brunei',
    name_zh: '文莱',
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    name_zh: '保加利亚',
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
    name_zh: '布基纳法索',
  },
  {
    code: 'BI',
    name: 'Burundi',
    name_zh: '布隆迪',
  },
  {
    code: 'KH',
    name: 'Cambodia',
    name_zh: '柬埔寨',
  },
  {
    code: 'CM',
    name: 'Cameroon',
    name_zh: '喀麦隆',
  },
  {
    code: 'CA',
    name: 'Canada',
    name_zh: '加拿大',
  },
  {
    code: 'CV',
    name: 'Cape Verde',
    name_zh: '佛得角',
  },
  {
    code: 'KY',
    name: 'Cayman Islands',
    name_zh: '开曼群岛',
  },
  {
    code: 'CF',
    name: 'Central African Republic',
    name_zh: '中非共和国',
  },
  {
    code: 'TD',
    name: 'Chad',
    name_zh: '乍得',
  },
  {
    code: 'CL',
    name: 'Chile',
    name_zh: '智利',
  },
  {
    code: 'CN',
    name: 'China',
    name_zh: '中国',
  },
  {
    code: 'CO',
    name: 'Colombia',
    name_zh: '哥伦比亚',
  },
  {
    code: 'KM',
    name: 'Comoros',
    name_zh: '科摩罗',
  },
  {
    code: 'CG',
    name: 'Congo',
    name_zh: '刚果（布）',
  },
  {
    code: 'CD',
    name: 'Congo, the Democratic Republic of the',
    name_zh: '刚果（金）',
  },
  {
    code: 'CK',
    name: 'Cook Islands',
    name_zh: '库克群岛',
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    name_zh: '哥斯达黎加',
  },
  {
    code: 'CI',
    name: "Côte d'Ivoire",
    name_zh: '科特迪瓦',
  },
  {
    code: 'HR',
    name: 'Croatia',
    name_zh: '克罗地亚',
  },
  {
    code: 'CU',
    name: 'Cuba',
    name_zh: '古巴',
  },
  {
    code: 'CY',
    name: 'Cyprus',
    name_zh: '塞浦路斯',
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    name_zh: '捷克共和国',
  },
  {
    code: 'DK',
    name: 'Denmark',
    name_zh: '丹麦',
  },
  {
    code: 'DJ',
    name: 'Djibouti',
    name_zh: '吉布提',
  },
  {
    code: 'DM',
    name: 'Dominica',
    name_zh: '多米尼克',
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    name_zh: '多米尼加',
  },
  {
    code: 'EC',
    name: 'Ecuador',
    name_zh: '厄瓜多尔',
  },
  {
    code: 'EG',
    name: 'Egypt',
    name_zh: '埃及',
  },
  {
    code: 'SV',
    name: 'El Salvador',
    name_zh: '萨尔瓦多',
  },
  {
    code: 'GQ',
    name: 'Equatorial Guinea',
    name_zh: '赤道几内亚',
  },
  {
    code: 'ER',
    name: 'Eritrea',
    name_zh: '厄立特里亚',
  },
  {
    code: 'EE',
    name: 'Estonia',
    name_zh: '爱沙尼亚',
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    name_zh: '埃塞俄比亚',
  },
  {
    code: 'FK',
    name: 'Falkland Islands (Malvinas)',
    name_zh: '福克兰群岛（马尔维纳斯）',
  },
  {
    code: 'FO',
    name: 'Faroe Islands',
    name_zh: '法罗群岛',
  },
  {
    code: 'FJ',
    name: 'Fiji',
    name_zh: '斐济',
  },
  {
    code: 'FI',
    name: 'Finland',
    name_zh: '芬兰',
  },
  {
    code: 'FR',
    name: 'France',
    name_zh: '法国',
  },
  {
    code: 'GF',
    name: 'French Guiana',
    name_zh: '法属圭亚那',
  },
  {
    code: 'PF',
    name: 'French Polynesia',
    name_zh: '法属波利尼西亚',
  },
  {
    code: 'GA',
    name: 'Gabon',
    name_zh: '加蓬',
  },
  {
    code: 'GM',
    name: 'Gambia',
    name_zh: '冈比亚',
  },
  {
    code: 'GE',
    name: 'Georgia',
    name_zh: '格鲁吉亚',
  },
  {
    code: 'DE',
    name: 'Germany',
    name_zh: '德国',
  },
  {
    code: 'GH',
    name: 'Ghana',
    name_zh: '加纳',
  },
  {
    code: 'GI',
    name: 'Gibraltar',
    name_zh: '直布罗陀',
  },
  {
    code: 'GR',
    name: 'Greece',
    name_zh: '希腊',
  },
  {
    code: 'GL',
    name: 'Greenland',
    name_zh: '格陵兰',
  },
  {
    code: 'GD',
    name: 'Grenada',
    name_zh: '格林纳达',
  },
  {
    code: 'GP',
    name: 'Guadeloupe',
    name_zh: '瓜德罗普',
  },
  {
    code: 'GU',
    name: 'Guam',
    name_zh: '关岛',
  },
  {
    code: 'GT',
    name: 'Guatemala',
    name_zh: '危地马拉',
  },
  {
    code: 'GN',
    name: 'Guinea',
    name_zh: '几内亚',
  },
  {
    code: 'GW',
    name: 'Guinea-Bissau',
    name_zh: '几内亚比绍',
  },
  {
    code: 'GY',
    name: 'Guyana',
    name_zh: '圭亚那',
  },
  {
    code: 'HT',
    name: 'Haiti',
    name_zh: '海地',
  },
  {
    code: 'VA',
    name: 'Holy See (Vatican City State)',
    name_zh: '梵蒂冈',
  },
  {
    code: 'HN',
    name: 'Honduras',
    name_zh: '洪都拉斯',
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    name_zh: '香港',
  },
  {
    code: 'HU',
    name: 'Hungary',
    name_zh: '匈牙利',
  },
  {
    code: 'IS',
    name: 'Iceland',
    name_zh: '冰岛',
  },
  {
    code: 'IN',
    name: 'India',
    name_zh: '印度',
  },
  {
    code: 'ID',
    name: 'Indonesia',
    name_zh: '印度尼西亚',
  },
  {
    code: 'IR',
    name: 'Iran, Islamic Republic of',
    name_zh: '伊朗',
  },
  {
    code: 'IQ',
    name: 'Iraq',
    name_zh: '伊拉克',
  },
  {
    code: 'IE',
    name: 'Ireland',
    name_zh: '爱尔兰',
  },
  {
    code: 'IL',
    name: 'Israel',
    name_zh: '以色列',
  },
  {
    code: 'IT',
    name: 'Italy',
    name_zh: '意大利',
  },
  {
    code: 'JM',
    name: 'Jamaica',
    name_zh: '牙买加',
  },
  {
    code: 'JP',
    name: 'Japan',
    name_zh: '日本',
  },
  {
    code: 'JO',
    name: 'Jordan',
    name_zh: '约旦',
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    name_zh: '哈萨克斯坦',
  },
  {
    code: 'KE',
    name: 'Kenya',
    name_zh: '肯尼亚',
  },
  {
    code: 'KI',
    name: 'Kiribati',
    name_zh: '基里巴斯',
  },
  {
    code: 'KP',
    name: "Korea, Democratic People's Republic of",
    name_zh: '朝鲜',
  },
  {
    code: 'KR',
    name: 'Korea, Republic of',
    name_zh: '韩国',
  },
  {
    code: 'KW',
    name: 'Kuwait',
    name_zh: '科威特',
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan',
    name_zh: '吉尔吉斯斯坦',
  },
  {
    code: 'LA',
    name: "Lao People's Democratic Republic",
    name_zh: '老挝',
  },
  {
    code: 'LV',
    name: 'Latvia',
    name_zh: '拉脱维亚',
  },
  {
    code: 'LB',
    name: 'Lebanon',
    name_zh: '黎巴嫩',
  },
  {
    code: 'LS',
    name: 'Lesotho',
    name_zh: '莱索托',
  },
  {
    code: 'LR',
    name: 'Liberia',
    name_zh: '利比里亚',
  },
  {
    code: 'LY',
    name: 'Libya',
    name_zh: '利比亚',
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    name_zh: '列支敦士登',
  },
  {
    code: 'LT',
    name: 'Lithuania',
    name_zh: '立陶宛',
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    name_zh: '卢森堡',
  },
  {
    code: 'MO',
    name: 'Macao',
    name_zh: '澳门',
  },
  {
    code: 'MK',
    name: 'Macedonia, the Former Yugoslav Republic of',
    name_zh: '马其顿',
  },
  {
    code: 'MG',
    name: 'Madagascar',
    name_zh: '马达加斯加',
  },
  {
    code: 'MW',
    name: 'Malawi',
    name_zh: '马拉',
  },
  {
    code: 'MY',
    name: 'Malaysia',
    name_zh: '马来西亚',
  },
  {
    code: 'MV',
    name: 'Maldives',
    name_zh: '马尔代夫',
  },
  {
    code: 'ML',
    name: 'Mali',
    name_zh: '马里',
  },
  {
    code: 'MT',
    name: 'Malta',
    name_zh: '马耳他',
  },
  {
    code: 'MH',
    name: 'Marshall Islands',
    name_zh: '马绍尔群岛',
  },
  {
    code: 'MQ',
    name: 'Martinique',
    name_zh: '马提尼克',
  },
  {
    code: 'MR',
    name: 'Mauritania',
    name_zh: '毛里塔尼亚',
  },
  {
    code: 'MU',
    name: 'Mauritius',
    name_zh: '毛里求斯',
  },
  {
    code: 'YT',
    name: 'Mayotte',
    name_zh: '马约特',
  },
  {
    code: 'MX',
    name: 'Mexico',
    name_zh: '墨西哥',
  },
  {
    code: 'FM',
    name: 'Micronesia, Federated States of',
    name_zh: '密克罗尼西亚联邦',
  },
  {
    code: 'MD',
    name: 'Moldova, Republic of',
    name_zh: '摩尔多瓦',
  },
  {
    code: 'MC',
    name: 'Monaco',
    name_zh: '摩纳哥',
  },
  {
    code: 'MN',
    name: 'Mongolia',
    name_zh: '蒙古',
  },
  {
    code: 'ME',
    name: 'Montenegro',
    name_zh: '黑山',
  },
  {
    code: 'MS',
    name: 'Montserrat',
    name_zh: '蒙特塞拉特',
  },
  {
    code: 'MA',
    name: 'Morocco',
    name_zh: '摩洛哥',
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    name_zh: '莫桑比克',
  },
  {
    code: 'MM',
    name: 'Myanmar',
    name_zh: '缅甸',
  },
  {
    code: 'NA',
    name: 'Namibia',
    name_zh: '纳米比亚',
  },
  {
    code: 'NR',
    name: 'Nauru',
    name_zh: '瑙鲁',
  },
  {
    code: 'NP',
    name: 'Nepal',
    name_zh: '尼泊尔',
  },
  {
    code: 'NL',
    name: 'Netherlands',
    name_zh: '荷兰',
  },
  {
    code: 'NC',
    name: 'New Caledonia',
    name_zh: '新喀里多尼亚',
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    name_zh: '新西兰',
  },
  {
    code: 'NI',
    name: 'Nicaragua',
    name_zh: '尼加拉瓜',
  },
  {
    code: 'NE',
    name: 'Niger',
    name_zh: '尼日尔',
  },
  {
    code: 'NG',
    name: 'Nigeria',
    name_zh: '尼日利亚',
  },
  {
    code: 'NU',
    name: 'Niue',
    name_zh: '纽埃',
  },
  {
    code: 'NF',
    name: 'Norfolk Island',
    name_zh: '诺福克岛',
  },
  {
    code: 'MP',
    name: 'Northern Mariana Islands',
    name_zh: '北马里亚纳群岛',
  },
  {
    code: 'NO',
    name: 'Norway',
    name_zh: '挪威',
  },
  {
    code: 'OM',
    name: 'Oman',
    name_zh: '阿曼',
  },
  {
    code: 'PK',
    name: 'Pakistan',
    name_zh: '巴基斯坦',
  },
  {
    code: 'PW',
    name: 'Palau',
    name_zh: '帕劳',
  },
  {
    code: 'PS',
    name: 'Palestine, State of',
    name_zh: '巴勒斯坦',
  },
  {
    code: 'PA',
    name: 'Panama',
    name_zh: '巴拿马',
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
    name_zh: '巴布亚新几内亚',
  },
  {
    code: 'PY',
    name: 'Paraguay',
    name_zh: '巴拉圭',
  },
  {
    code: 'PE',
    name: 'Peru',
    name_zh: '秘鲁',
  },
  {
    code: 'PH',
    name: 'Philippines',
    name_zh: '菲律宾',
  },
  {
    code: 'PN',
    name: 'Pitcairn',
    name_zh: '皮特凯恩群岛',
  },
  {
    code: 'PL',
    name: 'Poland',
    name_zh: '波兰',
  },
  {
    code: 'PT',
    name: 'Portugal',
    name_zh: '葡萄牙',
  },
  {
    code: 'PR',
    name: 'Puerto Rico',
    name_zh: '波多黎各',
  },
  {
    code: 'QA',
    name: 'Qatar',
    name_zh: '卡塔尔',
  },
  {
    code: 'RE',
    name: 'Réunion',
    name_zh: '留尼汪',
  },
  {
    code: 'RO',
    name: 'Romania',
    name_zh: '罗马尼亚',
  },
  {
    code: 'RU',
    name: 'Russian Federation',
    name_zh: '俄罗斯联邦',
  },
  {
    code: 'RW',
    name: 'Rwanda',
    name_zh: '卢旺达',
  },
  {
    code: 'BL',
    name: 'Saint Barthélemy',
    name_zh: '圣巴泰勒米',
  },
  {
    code: 'SH',
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    name_zh: '圣赫勒拿、阿森松岛和特里斯坦达库尼亚群岛',
  },
  {
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    name_zh: '圣基茨和尼维斯',
  },
  {
    code: 'LC',
    name: 'Saint Lucia',
    name_zh: '圣卢西亚',
  },
  {
    code: 'MF',
    name: 'Saint Martin (French part)',
    name_zh: '法属圣马丁',
  },
  {
    code: 'PM',
    name: 'Saint Pierre and Miquelon',
    name_zh: '圣皮埃尔和密克隆',
  },
  {
    code: 'VC',
    name: 'Saint Vincent and the Grenadines',
    name_zh: '圣文森特和格林纳丁斯',
  },
  {
    code: 'WS',
    name: 'Samoa',
    name_zh: '萨摩亚',
  },
  {
    code: 'SM',
    name: 'San Marino',
    name_zh: '圣马力诺',
  },
  {
    code: 'ST',
    name: 'Sao Tome and Principe',
    name_zh: '圣多美和普林西比',
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    name_zh: '沙特阿拉伯',
  },
  {
    code: 'SN',
    name: 'Senegal',
    name_zh: '塞内加尔',
  },
  {
    code: 'RS',
    name: 'Serbia',
    name_zh: '塞尔维亚',
  },
  {
    code: 'SC',
    name: 'Seychelles',
    name_zh: '塞舌尔',
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
    name_zh: '塞拉利昂',
  },
  {
    code: 'SG',
    name: 'Singapore',
    name_zh: '新加坡',
  },
  {
    code: 'SX',
    name: 'Sint Maarten (Dutch part)',
    name_zh: '荷属圣马丁',
  },
  {
    code: 'SK',
    name: 'Slovakia',
    name_zh: '斯洛伐克',
  },
  {
    code: 'SI',
    name: 'Slovenia',
    name_zh: '斯洛文尼亚',
  },
  {
    code: 'SB',
    name: 'Solomon Islands',
    name_zh: '所罗门群岛',
  },
  {
    code: 'SO',
    name: 'Somalia',
    name_zh: '索马里',
  },
  {
    code: 'ZA',
    name: 'South Africa',
    name_zh: '南非',
  },
  {
    code: 'GS',
    name: 'South Georgia and the South Sandwich Islands',
    name_zh: '南乔治亚和南桑威奇群岛',
  },
  {
    code: 'SS',
    name: 'South Sudan',
    name_zh: '南苏丹',
  },
  {
    code: 'ES',
    name: 'Spain',
    name_zh: '西班牙',
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    name_zh: '斯里兰卡',
  },
  {
    code: 'SD',
    name: 'Sudan',
    name_zh: '苏丹',
  },
  {
    code: 'SR',
    name: 'Suriname',
    name_zh: '苏里南',
  },
  {
    code: 'SJ',
    name: 'Svalbard and Jan Mayen',
    name_zh: '斯瓦尔巴和扬马延',
  },
  {
    code: 'SZ',
    name: 'Swaziland',
    name_zh: '斯威士兰',
  },
  {
    code: 'SE',
    name: 'Sweden',
    name_zh: '瑞典',
  },
  {
    code: 'CH',
    name: 'Switzerland',
    name_zh: '瑞士',
  },
  {
    code: 'SY',
    name: 'Syrian Arab Republic',
    name_zh: '叙利亚',
  },
  {
    code: 'TW',
    name: 'Taiwan, Province of China',
    name_zh: '台湾',
  },
  {
    code: 'TJ',
    name: 'Tajikistan',
    name_zh: '塔吉克斯坦',
  },
  {
    code: 'TZ',
    name: 'Tanzania, United Republic of',
    name_zh: '坦桑尼亚',
  },
  {
    code: 'TH',
    name: 'Thailand',
    name_zh: '泰国',
  },
  {
    code: 'TL',
    name: 'Timor-Leste',
    name_zh: '东帝汶',
  },
  {
    code: 'TG',
    name: 'Togo',
    name_zh: '多哥',
  },
  {
    code: 'TK',
    name: 'Tokelau',
    name_zh: '托克劳',
  },
  {
    code: 'TO',
    name: 'Tonga',
    name_zh: '汤加',
  },
  {
    code: 'TT',
    name: 'Trinidad and Tobago',
    name_zh: '特立尼达和多巴哥',
  },
  {
    code: 'TN',
    name: 'Tunisia',
    name_zh: '突尼斯',
  },
  {
    code: 'TR',
    name: 'Turkey',
    name_zh: '土耳其',
  },
  {
    code: 'TM',
    name: 'Turkmenistan',
    name_zh: '土库曼斯坦',
  },
  {
    code: 'TC',
    name: 'Turks and Caicos Islands',
    name_zh: '特克斯和凯科斯群岛',
  },
  {
    code: 'TV',
    name: 'Tuvalu',
    name_zh: '图瓦卢',
  },
  {
    code: 'UG',
    name: 'Uganda',
    name_zh: '乌干达',
  },
  {
    code: 'UA',
    name: 'Ukraine',
    name_zh: '乌克兰',
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    name_zh: '阿拉伯联合酋长国',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    name_zh: '英国',
  },
  {
    code: 'US',
    name: 'United States',
    name_zh: '美国',
  },
  {
    code: 'UM',
    name: 'United States Minor Outlying Islands',
    name_zh: '美国本土外小岛屿',
  },
  {
    code: 'UY',
    name: 'Uruguay',
    name_zh: '乌拉圭',
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    name_zh: '乌兹别克斯坦',
  },
  {
    code: 'VU',
    name: 'Vanuatu',
    name_zh: '瓦努阿图',
  },
  {
    code: 'VE',
    name: 'Venezuela, Bolivarian Republic of',
    name_zh: '委内瑞拉',
  },
  {
    code: 'VN',
    name: 'Viet Nam',
    name_zh: '越南',
  },
  {
    code: 'VG',
    name: 'Virgin Islands, British',
    name_zh: '英属维尔京群岛',
  },
  {
    code: 'VI',
    name: 'Virgin Islands, U.S.',
    name_zh: '美属维尔京群岛',
  },
  {
    code: 'WF',
    name: 'Wallis and Futuna',
    name_zh: '瓦利斯和富图纳',
  },
  {
    code: 'EH',
    name: 'Western Sahara',
    name_zh: '西撒哈拉',
  },
  {
    code: 'YE',
    name: 'Yemen',
    name_zh: '也门',
  },
  {
    code: 'ZM',
    name: 'Zambia',
    name_zh: '赞比亚',
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
    name_zh: '津巴布韦',
  },
]

export const countryMap = {}
country.map((ele) => {
  countryMap[ele.code] = ele.name_zh
})

export default country
