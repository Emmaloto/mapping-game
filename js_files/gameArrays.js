
/*

IT'S A SMALL WORLD Project - CS286 

 Miguel Portillo 
 Emmanuel Oluloto

*/

// These are the arrays that contain which countries/landmarks have valid data that we can use on each of our maps.
// We can randomly select values from the array to populate our game.

var validPolys = [ "AD","AE","AF","AG","AI","AL","AM","AO","AR","AS","AT","AU","AW","AZ","BA","BB","BD","BE","BF","BG", 
"BH","BI","BJ","BM","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK", 
"CL","CM","CN","CO","CR","CU","CV","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH", 
"ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GG","GH","GI","GL","GM","GN","GQ", 
"GR","GS","GT","GU","GW","GY","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS", 
"IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI", 
"LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MM","MN","MP","MR","MS", 
"MT","MU","MV","MW","MX","MY","MZ","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA", 
"PE","PF","PG","PG","PH","PK","PL","PM","PN","PR","PT","PW","PY","QA","RO","RS","RU","RW","SA","SB", 
"SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","ST","SV","SY","SZ","TC","TD","TF", 
"TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE", 
"VG","VI","VN","VU","WF","WS","YE","ZA","ZM","ZW","NA"  ];

 var validCapitals = [ "AD","AE","AF","AG","AI","AL","AM","AO","AR","AS","AT","AU","AW","AZ","BA","BB","BD","BE","BF","BG", 
"BH","BI","BJ","BM","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK", 
"CL","CM","CN","CO","CR","CU","CV","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH", 
"ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GG","GH","GI","GL","GM","GN","GQ", 
"GR","GS","GT","GU","GW","GY","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS", 
"IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI", 
"LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MM","MN","MP","MR","MS", 
"MT","MU","MV","MW","MX","MY","MZ","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA", 
"PE","PF","PG","PG","PH","PK","PL","PM","PN","PR","PT","PW","PY","QA","RO","RS","RU","RW","SA","SB", 
"SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","ST","SV","SY","SZ","TC","TD","TF", 
"TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE", 
"VG","VI","VN","VU","WF","WS","YE","ZA","ZM","ZW","NA"  ];

var validFlags = ['AE', 'AF', 'AG', 'AM', 'AO', 'AR', 'AU', 'BA', 'BB', 'BE',
             'BG', 'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CM', 'CN',
             'CO', 'CU', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EE', 'EG',
             'ES', 'FI', 'FR', 'GE', 'GH', 'GR', 'GT', 'HN',
             'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IR', 'IS', 'IT',
             'JM', 'JP', 'KE', 'KH', 'KR', 'KW', 'KZ', 'LB', 'LI', 'LT',
             'LU', 'LY', 'MA', 'MD', 'ME', 'MG', 'MU', 'MX', 'MY', 'NG',
             'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PG', 'PH', 'PK', 'PL',
             'PR', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE',
             'SG', 'SI', 'SK', 'SN', 'SV', 'TH', 'TN',  'TR', 'TW',
             'UA', 'UG', 'GB', 'US', 'UY', 'UZ', 'VE', 'VN', 'YE', 'ZA'];

var landmarkList = [{countryID: "AE", name: "Burj Khalifa", photo: "BurjKhalifa.jpeg", location: {lat: 25.197197, lng: 55.2743764}},
                {countryID: "AF", name: "Buddha of Bamyan", photo: "Buddha.jpeg", location: {lat:34.8320633, lng:67.8267582}},
                {countryID: "AG", name: "Fort James", photo: "FortJames.jpeg", location: {lat:17.1302507, lng:-61.8636274}},
                {countryID: "AM", name: "Garni Temple", photo: "GarniTemple.jpeg", location: {lat: 40.1125894, lng: 44.7279144}},
                {countryID: "AO", name: "Quicama National Park", photo: "Quicama.jpeg", location: {lat:-9.75, lng:13.5811393}}, 
                {countryID: "AR", name: "Buenos Aires Obelisk", photo: "Obelisk.jpeg", location: {lat:34.6037345, lng:-58.3815704}}, 
                {countryID: "AU", name: "Sydney Opera House", photo: "SydneyOpera.jpeg", location: {lat:-33.8567844, lng:151.2131027}},
                {countryID: "BA", name: "Old Bridge", photo: "OldBridge.jpeg", location: {lat:43.3372524, lng:17.8128649}},
                {countryID: "BB", name: "Harrison's Cave", photo: "Harrison.jpeg", location: {lat:13.1851754, lng:-59.5745364}},
                {countryID: "BE", name: "Grand Place", photo: "GrandPlace.jpeg", location: {lat:50.8467316, lng: 4.3524138}}, 
                {countryID: "BG", name: "Rila Monastery", photo: "RilaMonastery.jpeg", location: {lat:42.1333838, lng:23.3401215}},
                {countryID: "BH", name: "Bahrain World Trade Center", photo: "BahrainWTC.jpeg", location: {lat:26.239456, lng:50.5790072}}, 
                {countryID: "BR", name: "Christ the Redeemer", photo: "ChristTheRedeemer.jpeg", location: {lat: -22.951916, lng: -43.2104872}},
                {countryID: "CH", name: "Matterhorn", photo: "Matterhorn.jpeg", location: {lat:45.976589, lng: -0.078138}}, 
                {countryID: "CN", name: "Great Wall of China", photo: "GreatWall.jpeg", location: {lat: 40.4319077, lng: 116.5681862}},
                {countryID: "DE", name: "Neuschwanstein Castle", photo: "Neuschwanstein.jpeg", location: {lat:47.557574, lng:10.7498004}},
                {countryID: "EG", name: "Great Pyramid of Giza", photo: "GreatPyramid.jpeg", location: {lat: 29.9792345, lng: 31.13204}},
                {countryID: "ES", name: "La Sagrada Familia", photo: "SagradaFamilia.jpeg", location: {lat: 41.4036339, lng: 2.1721671}},
                {countryID: "FR", name: "Eiffel Tower", photo: "EiffelTower.jpeg", location: {lat: 48.8583736, lng: 2.2922926}}, 
                {countryID: "GB", name: "Tower of London", photo: "TowerofLondon.jpeg", location: {lat:51.5081157, lng: -0.078138}}, 
                {countryID: "GR", name: "Acropolis", photo: "Acropolis.jpeg", location: {lat: 37.9715365, lng: 23.7235605}},
                {countryID: "ID", name: "Bali", photo: "Bali.jpeg", location: {lat:-8.4556974, lng: 114.5110582}},
                {countryID: "IN", name: "Taj Mahal", photo: "TajMahal.jpeg", location: {lat: 27.1750151, lng: 78.0399665}},
                {countryID: "IT", name: "Colosseum", photo: "Colosseum.jpeg", location: {lat: 41.8902142, lng: 12.4900422}},
                {countryID: "JP", name: "Mount Fuji", photo: "Fuji.jpeg", location: {lat: 35.3034447, lng:138.5289302}},
                {countryID: "KH", name: "Angkor Wat", photo: "Angkor.jpeg", location: {lat:13.4121939, lng: 103.8599907}},
                {countryID: "KR", name: "Gyeongbokgung Palace", photo: "Gyeongbokgung.jpeg", location: {lat: 37.5796212, lng: 126.9748523}},
                {countryID: "MA", name: "Jemaa el-Fnaa", photo: "Jemaa.jpeg", location: {lat: 31.625777, lng: -7.9893797}},
                {countryID: "MX", name: "Tulum", photo: "Tulum.jpeg", location: {lat: 20.2096594, lng: -87.4894285}},
                {countryID: "RU", name: "Red Square", photo: "RedSquare.jpeg", location: {lat: 55.7539303, lng: 37.6186063}},
                {countryID: "TR", name: "Library of Celsus", photo: "LibraryOfCelsus.jpeg", location: {lat: 37.9392094, lng: 27.3387313}}, 
                {countryID: "ZA", name: "Table Mountain", photo: "TableMountain.jpeg", location: {Lat:-33.9628212, lng: 18.4010858}}
               ];  

