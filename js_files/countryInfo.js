
/*

IT'S A SMALL WORLD Project - CS286 

 Miguel Portillo 
 Emmanuel Oluloto

*/


var countryInfo = 
{  
 'AD': { 
  countryName: "Andorra", 
  landArea: 468, 
  capital: "Andorra la Vella", 
  capital_location:  new google.maps.LatLng(42.5,1.516667), 
  continent: "Europe", 
  color: "#94E1B1" 
},
 'AE': { 
  countryName: "United Arab Emirates", 
  landArea: 82880, 
  capital: "Abu Dhabi", 
  capital_location:  new google.maps.LatLng(24.466666666666665,54.366667), 
  continent: "Asia", 
  color: "#FF3333" 
},
 'AF': { 
  countryName: "Afghanistan", 
  landArea: 647500, 
  capital: "Kabul", 
  capital_location:  new google.maps.LatLng(34.516666666666666,69.183333), 
  continent: "Asia", 
  color: "#FF6666" 
},
 'AG': { 
  countryName: "Antigua and Barbuda", 
  landArea: 443, 
  capital: "Saint John's", 
  capital_location:  new google.maps.LatLng(17.116666666666667,-61.85), 
  continent: "North America", 
  color: "#FF9999" 
},
 'AI': { 
  countryName: "Anguilla", 
  landArea: 102, 
  capital: "The Valley", 
  capital_location:  new google.maps.LatLng(18.216666666666665,-63.05), 
  continent: "North America", 
  color: "#FFCCCC" 
},
 'AL': { 
  countryName: "Albania", 
  landArea: 28748, 
  capital: "Tirana", 
  capital_location:  new google.maps.LatLng(41.31666666666667,19.816667), 
  continent: "Europe", 
  color: "#FF3300" 
},
 'AM': { 
  countryName: "Armenia", 
  landArea: 29800, 
  capital: "Yerevan", 
  capital_location:  new google.maps.LatLng(40.166666666666664,44.5), 
  continent: "Europe", 
  color: "#CC3300" 
},
 'AO': { 
  countryName: "Angola", 
  landArea: 1246700, 
  capital: "Luanda", 
  capital_location:  new google.maps.LatLng(-8.833333333333334,13.216667), 
  continent: "Africa", 
  color: "#CC6633" 
},
 'AR': { 
  countryName: "Argentina", 
  landArea: 2766890, 
  capital: "Buenos Aires", 
  capital_location:  new google.maps.LatLng(-34.583333333333336,-58.666667), 
  continent: "South America", 
  color: "#993300" 
},
 'AS': { 
  countryName: "American Samoa", 
  landArea: 199, 
  capital: "Pago Pago", 
  capital_location:  new google.maps.LatLng(-14.266666666666667,-170.7), 
  continent: "Australia", 
  color: "#FF9966" 
},
 'AT': { 
  countryName: "Austria", 
  landArea: 83858, 
  capital: "Vienna", 
  capital_location:  new google.maps.LatLng(48.2,16.366667), 
  continent: "Europe", 
  color: "#FF6600" 
},
 'AU': { 
  countryName: "Australia", 
  landArea: 7686850, 
  capital: "Canberra", 
  capital_location:  new google.maps.LatLng(-35.266666666666666,149.133333), 
  continent: "Australia", 
  color: "#996633" 
},
 'AW': { 
  countryName: "Aruba", 
  landArea: 193, 
  capital: "Oranjestad", 
  capital_location:  new google.maps.LatLng(12.516666666666667,-70.033333), 
  continent: "North America", 
  color: "#CC9966" 
},
 'AZ': { 
  countryName: "Azerbaijan", 
  landArea: 86600, 
  capital: "Baku", 
  capital_location:  new google.maps.LatLng(40.38333333333333,49.866667), 
  continent: "Europe", 
  color: "#663300" 
},
 'BA': { 
  countryName: "Bosnia and Herzegovina", 
  landArea: 51129, 
  capital: "Sarajevo", 
  capital_location:  new google.maps.LatLng(43.86666666666667,18.416667), 
  continent: "Europe", 
  color: "#CC6600" 
},
 'BB': { 
  countryName: "Barbados", 
  landArea: 431, 
  capital: "Bridgetown", 
  capital_location:  new google.maps.LatLng(13.1,-59.616667), 
  continent: "North America", 
  color: "#FF9933" 
},
 'BD': { 
  countryName: "Bangladesh", 
  landArea: 144000, 
  capital: "Dhaka", 
  capital_location:  new google.maps.LatLng(23.716666666666665,90.4), 
  continent: "Asia", 
  color: "#FFCC99" 
},
 'BE': { 
  countryName: "Belgium", 
  landArea: 30510, 
  capital: "Brussels", 
  capital_location:  new google.maps.LatLng(50.833333333333336,4.333333), 
  continent: "Europe", 
  color: "#FF9900" 
},
 'BF': { 
  countryName: "Burkina Faso", 
  landArea: 274200, 
  capital: "Ouagadougou", 
  capital_location:  new google.maps.LatLng(12.366666666666667,-1.516667), 
  continent: "Africa", 
  color: "#CC9933" 
},
 'BG': { 
  countryName: "Bulgaria", 
  landArea: 110910, 
  capital: "Sofia", 
  capital_location:  new google.maps.LatLng(42.68333333333333,23.316667), 
  continent: "Europe", 
  color: "#996600" 
},
 'BH': { 
  countryName: "Bahrain", 
  landArea: 665, 
  capital: "Manama", 
  capital_location:  new google.maps.LatLng(26.233333333333334,50.566667), 
  continent: "Asia", 
  color: "#FFCC66" 
},
 'BI': { 
  countryName: "Burundi", 
  landArea: 27830, 
  capital: "Bujumbura", 
  capital_location:  new google.maps.LatLng(-3.3666666666666667,29.35), 
  continent: "Africa", 
  color: "#0033FF" 
},
 'BJ': { 
  countryName: "Benin", 
  landArea: 112620, 
  capital: "Porto-Novo", 
  capital_location:  new google.maps.LatLng(6.483333333333333,2.616667), 
  continent: "Africa", 
  color: "#FFCC33" 
},
 'BM': { 
  countryName: "Bermuda", 
  landArea: 53, 
  capital: "Hamilton", 
  capital_location:  new google.maps.LatLng(32.28333333333333,-64.783333), 
  continent: "North America", 
  color: "#FFCC00" 
},
 'BN': { 
  countryName: "Brunei Darussalam", 
  landArea: 5770, 
  capital: "Bandar Seri Begawan", 
  capital_location:  new google.maps.LatLng(4.883333333333333,114.933333), 
  continent: "Asia", 
  color: "#999966" 
},
 'BO': { 
  countryName: "Bolivia", 
  landArea: 1098580, 
  capital: "La Paz", 
  capital_location:  new google.maps.LatLng(-16.5,-68.15), 
  continent: "South America", 
  color: "#666633" 
},
 'BR': { 
  countryName: "Brazil", 
  landArea: 8511965, 
  capital: "Brasilia", 
  capital_location:  new google.maps.LatLng(-15.783333333333333,-47.916667), 
  continent: "South America", 
  color: "#00CC00" 
},
 'BS': { 
  countryName: "Bahamas", 
  landArea: 13940, 
  capital: "Nassau", 
  capital_location:  new google.maps.LatLng(25.083333333333332,-77.35), 
  continent: "North America", 
  color: "#999933" 
},
 'BT': { 
  countryName: "Bhutan", 
  landArea: 47000, 
  capital: "Thimphu", 
  capital_location:  new google.maps.LatLng(27.466666666666665,89.633333), 
  continent: "Asia", 
  color: "#CCCC66" 
},
 'BW': { 
  countryName: "Botswana", 
  landArea: 600370, 
  capital: "Gaborone", 
  capital_location:  new google.maps.LatLng(-24.633333333333333,25.9), 
  continent: "Africa", 
  color: "#333300" 
},
 'BY': { 
  countryName: "Belarus", 
  landArea: 207600, 
  capital: "Minsk", 
  capital_location:  new google.maps.LatLng(53.9,27.566667), 
  continent: "Europe", 
  color: "#666600" 
},
 'BZ': { 
  countryName: "Belize", 
  landArea: 22966, 
  capital: "Belmopan", 
  capital_location:  new google.maps.LatLng(17.25,-88.766667), 
  continent: "Central America", 
  color: "#999900" 
},
 'CA': { 
  countryName: "Canada", 
  landArea: 9976140, 
  capital: "Ottawa", 
  capital_location:  new google.maps.LatLng(45.416666666666664,-75.7), 
  continent: "Central America", 
  color: "#FF0066" 
},
 'CC': { 
  countryName: "Cocos Islands", 
  landArea: 14, 
  capital: "West Island", 
  capital_location:  new google.maps.LatLng(-12.166666666666666,96.833333), 
  continent: "Australia", 
  color: "#CCCC00" 
},
 'CD': { 
  countryName: "Democratic Republic of the Congo", 
  landArea: 2345410, 
  capital: "Kinshasa", 
  capital_location:  new google.maps.LatLng(-4.316666666666666,15.3), 
  continent: "Africa", 
  color: "#FFFF00" 
},
 'CF': { 
  countryName: "Central African Republic", 
  landArea: 622984, 
  capital: "Bangui", 
  capital_location:  new google.maps.LatLng(4.366666666666666,18.583333), 
  continent: "Africa", 
  color: "#66FF33" 
},
 'CG': { 
  countryName: "Republic of Congo", 
  landArea: 342000, 
  capital: "Brazzaville", 
  capital_location:  new google.maps.LatLng(-4.25,15.283333), 
  continent: "Africa", 
  color: "#FF0066" 
},
 'CH': { 
  countryName: "Switzerland", 
  landArea: 41290, 
  capital: "Bern", 
  capital_location:  new google.maps.LatLng(46.916666666666664,7.466667), 
  continent: "Europe", 
  color: "#0066FF" 
},
 'CI': { 
  countryName: "Cote d'Ivoire", 
  landArea: 322460, 
  capital: "Yamoussoukro", 
  capital_location:  new google.maps.LatLng(6.816666666666666,-5.266667), 
  continent: "Africa", 
  color: "NA" 
},
 'CK': { 
  countryName: "Cook Islands", 
  landArea: 240, 
  capital: "Avarua", 
  capital_location:  new google.maps.LatLng(-21.2,-159.766667), 
  continent: "Australia", 
  color: "#CCFF00" 
},
 'CL': { 
  countryName: "Chile", 
  landArea: 756950, 
  capital: "Santiago", 
  capital_location:  new google.maps.LatLng(-33.45,-70.666667), 
  continent: "South America", 
  color: "#99CC00" 
},
 'CM': { 
  countryName: "Cameroon", 
  landArea: 475440, 
  capital: "Yaounde", 
  capital_location:  new google.maps.LatLng(3.8666666666666667,11.516667), 
  continent: "Africa", 
  color: "#CCFF33" 
},
 'CN': { 
  countryName: "China", 
  landArea: 9596960, 
  capital: "Beijing", 
  capital_location:  new google.maps.LatLng(39.916666666666664,116.383333), 
  continent: "Asia", 
  color: "#99CC33" 
},
 'CO': { 
  countryName: "Colombia", 
  landArea: 1138910, 
  capital: "Bogota", 
  capital_location:  new google.maps.LatLng(4.6,-74.083333), 
  continent: "South America", 
  color: "#669900" 
},
 'CR': { 
  countryName: "Costa Rica", 
  landArea: 51100, 
  capital: "San Jose", 
  capital_location:  new google.maps.LatLng(9.933333333333334,-84.083333), 
  continent: "Central America", 
  color: "#CCFF66" 
},
 'CU': { 
  countryName: "Cuba", 
  landArea: 110860, 
  capital: "Havana", 
  capital_location:  new google.maps.LatLng(23.116666666666667,-82.35), 
  continent: "North America", 
  color: "#99FF00" 
},
 'CV': { 
  countryName: "Cape Verde", 
  landArea: 4033, 
  capital: "Praia", 
  capital_location:  new google.maps.LatLng(14.916666666666666,-23.516667), 
  continent: "Africa", 
  color: "#669933" 
},
 'CX': { 
  countryName: "Christmas Island", 
  landArea: 135, 
  capital: "The Settlement", 
  capital_location:  new google.maps.LatLng(-10.416666666666666,105.716667), 
  continent: "Australia", 
  color: "#99CC66" 
},
 'CY': { 
  countryName: "Cyprus", 
  landArea: 9250, 
  capital: "Nicosia", 
  capital_location:  new google.maps.LatLng(35.166666666666664,33.366667), 
  continent: "Europe", 
  color: "#336600" 
},
 'CZ': { 
  countryName: "Czech Republic", 
  landArea: 78866, 
  capital: "Prague", 
  capital_location:  new google.maps.LatLng(50.083333333333336,14.466667), 
  continent: "Europe", 
  color: "#66CC00" 
},
 'DE': { 
  countryName: "Germany", 
  landArea: 357021, 
  capital: "Berlin", 
  capital_location:  new google.maps.LatLng(52.516666666666666,13.4), 
  continent: "Europe", 
  color: "#99FF33" 
},
 'DJ': { 
  countryName: "Djibouti", 
  landArea: 23000, 
  capital: "Djibouti", 
  capital_location:  new google.maps.LatLng(11.583333333333334,43.15), 
  continent: "Africa", 
  color: "#FFFF00" 
},
 'DK': { 
  countryName: "Denmark", 
  landArea: 43094, 
  capital: "Copenhagen", 
  capital_location:  new google.maps.LatLng(55.666666666666664,12.583333), 
  continent: "Europe", 
  color: "#66FF00" 
},
 'DM': { 
  countryName: "Dominica", 
  landArea: 754, 
  capital: "Roseau", 
  capital_location:  new google.maps.LatLng(15.3,-61.4), 
  continent: "North America", 
  color: "#66CC33" 
},
 'DO': { 
  countryName: "Dominican Republic", 
  landArea: 48730, 
  capital: "Santo Domingo", 
  capital_location:  new google.maps.LatLng(18.466666666666665,-69.9), 
  continent: "North America", 
  color: "#339900" 
},
 'DZ': { 
  countryName: "Algeria", 
  landArea: 2381740, 
  capital: "Algiers", 
  capital_location:  new google.maps.LatLng(36.75,3.05), 
  continent: "Africa", 
  color: "#99FF66" 
},
 'EC': { 
  countryName: "Ecuador", 
  landArea: 283560, 
  capital: "Quito", 
  capital_location:  new google.maps.LatLng(-0.21666666666666667,-78.5), 
  continent: "South America", 
  color: "#33CC00" 
},
 'EE': { 
  countryName: "Estonia", 
  landArea: 45226, 
  capital: "Tallinn", 
  capital_location:  new google.maps.LatLng(59.43333333333333,24.716667), 
  continent: "Europe", 
  color: "#66FF33" 
},
 'EG': { 
  countryName: "Egypt", 
  landArea: 1001450, 
  capital: "Cairo", 
  capital_location:  new google.maps.LatLng(30.05,31.25), 
  continent: "Africa", 
  color: "#33FF00" 
},
 'EH': { 
  countryName: "Western Sahara", 
  landArea: 0, 
  capital: "El-Aaiún", 
  capital_location:  new google.maps.LatLng(27.153611,-13.203333), 
  continent: "Africa", 
  color: "#669966" 
},
 'ER': { 
  countryName: "Eritrea", 
  landArea: 121320, 
  capital: "Asmara", 
  capital_location:  new google.maps.LatLng(15.333333333333334,38.933333), 
  continent: "Africa", 
  color: "#0033FF" 
},
 'ES': { 
  countryName: "Spain", 
  landArea: 504782, 
  capital: "Madrid", 
  capital_location:  new google.maps.LatLng(40.4,-3.683333), 
  continent: "Europe", 
  color: "#99CC99" 
},
 'ET': { 
  countryName: "Ethiopia", 
  landArea: 1127127, 
  capital: "Addis Ababa", 
  capital_location:  new google.maps.LatLng(9.033333333333333,38.7), 
  continent: "Africa", 
  color: "#339933" 
},
 'FI': { 
  countryName: "Finland", 
  landArea: 337030, 
  capital: "Helsinki", 
  capital_location:  new google.maps.LatLng(60.166666666666664,24.933333), 
  continent: "Europe", 
  color: "#66CC66" 
},
 'FJ': { 
  countryName: "Fiji", 
  landArea: 18270, 
  capital: "Suva", 
  capital_location:  new google.maps.LatLng(-18.133333333333333,178.416667), 
  continent: "Australia", 
  color: "#33CC33" 
},
 'FK': { 
  countryName: "Falkland Islands", 
  landArea: 12173, 
  capital: "Stanley", 
  capital_location:  new google.maps.LatLng(-51.7,-57.85), 
  continent: "South America", 
  color: "#003300" 
},
 'FM': { 
  countryName: "Federated States of Micronesia", 
  landArea: 702, 
  capital: "Palikir", 
  capital_location:  new google.maps.LatLng(6.916666666666667,158.15), 
  continent: "Australia", 
  color: "#006600" 
},
 'FO': { 
  countryName: "Faroe Islands", 
  landArea: 1399, 
  capital: "Torshavn", 
  capital_location:  new google.maps.LatLng(62,-6.766667), 
  continent: "Europe", 
  color: "#009900" 
},
 'FR': { 
  countryName: "France", 
  landArea: 547030, 
  capital: "Paris", 
  capital_location:  new google.maps.LatLng(48.86666666666667,2.333333), 
  continent: "Europe", 
  color: "#00CC00" 
},
 'GA': { 
  countryName: "Gabon", 
  landArea: 267667, 
  capital: "Libreville", 
  capital_location:  new google.maps.LatLng(0.38333333333333336,9.45), 
  continent: "Africa", 
  color: "#00FF00" 
},
 'GB': { 
  countryName: "United Kingdom", 
  landArea: 244820, 
  capital: "London", 
  capital_location:  new google.maps.LatLng(51.5,-0.083333), 
  continent: "Europe", 
  color: "#33FF33" 
},
 'GD': { 
  countryName: "Grenada", 
  landArea: 344, 
  capital: "Saint George's", 
  capital_location:  new google.maps.LatLng(12.05,-61.75), 
  continent: "North America", 
  color: "#66FF66" 
},
 'GE': { 
  countryName: "Georgia", 
  landArea: 69700, 
  capital: "Tbilisi", 
  capital_location:  new google.maps.LatLng(41.68333333333333,44.833333), 
  continent: "Europe", 
  color: "#99FF99" 
},
 'GG': { 
  countryName: "Guernsey", 
  landArea: 78, 
  capital: "Saint Peter Port", 
  capital_location:  new google.maps.LatLng(49.45,-2.533333), 
  continent: "Europe", 
  color: "NA" 
},
 'GH': { 
  countryName: "Ghana", 
  landArea: 239460, 
  capital: "Accra", 
  capital_location:  new google.maps.LatLng(5.55,-0.216667), 
  continent: "Africa", 
  color: "#00FF33" 
},
 'GI': { 
  countryName: "Gibraltar", 
  landArea: 7, 
  capital: "Gibraltar", 
  capital_location:  new google.maps.LatLng(36.13333333333333,-5.35), 
  continent: "Europe", 
  color: "#00CC33" 
},
 'GL': { 
  countryName: "Greenland", 
  landArea: 2166086, 
  capital: "Nuuk", 
  capital_location:  new google.maps.LatLng(64.18333333333334,-51.75), 
  continent: "Central America", 
  color: "#3399CC" 
},
 'GM': { 
  countryName: "The Gambia", 
  landArea: 11300, 
  capital: "Banjul", 
  capital_location:  new google.maps.LatLng(13.45,-16.566667), 
  continent: "Africa", 
  color: "#33FF66" 
},
 'GN': { 
  countryName: "Guinea", 
  landArea: 245857, 
  capital: "Conakry", 
  capital_location:  new google.maps.LatLng(9.5,-13.7), 
  continent: "Africa", 
  color: "#33CC66" 
},
 'GQ': { 
  countryName: "Equatorial Guinea", 
  landArea: 28051, 
  capital: "Malabo", 
  capital_location:  new google.maps.LatLng(3.75,8.783333), 
  continent: "Africa", 
  color: "#66FF99" 
},
 'GR': { 
  countryName: "Greece", 
  landArea: 131940, 
  capital: "Athens", 
  capital_location:  new google.maps.LatLng(37.983333333333334,23.733333), 
  continent: "Europe", 
  color: "#00FF66" 
},
 'GS': { 
  countryName: "South Georgia and South Sandwich Islands", 
  landArea: 0, 
  capital: "King Edward Point", 
  capital_location:  new google.maps.LatLng(-54.283333,-36.5), 
  continent: "Antarctica", 
  color: "#339966" 
},
 'GT': { 
  countryName: "Guatemala", 
  landArea: 108890, 
  capital: "Guatemala City", 
  capital_location:  new google.maps.LatLng(14.616666666666667,-90.516667), 
  continent: "Central America", 
  color: "#66CC99" 
},
 'GU': { 
  countryName: "Guam", 
  landArea: 549, 
  capital: "Hagatna", 
  capital_location:  new google.maps.LatLng(13.466666666666667,144.733333), 
  continent: "Australia", 
  color: "#006633" 
},
 'GW': { 
  countryName: "Guinea-Bissau", 
  landArea: 36120, 
  capital: "Bissau", 
  capital_location:  new google.maps.LatLng(11.85,-15.583333), 
  continent: "Africa", 
  color: "#00CC66" 
},
 'GY': { 
  countryName: "Guyana", 
  landArea: 214970, 
  capital: "Georgetown", 
  capital_location:  new google.maps.LatLng(6.8,-58.15), 
  continent: "South America", 
  color: "#33FF99" 
},
 'HM': { 
  countryName: "Heard Island and McDonald Islands", 
  landArea: 0, 
  capital: "N/A", 
  capital_location:  new google.maps.LatLng(0,0), 
  continent: "Antarctica", 
  color: "#99FFCC" 
},
 'HN': { 
  countryName: "Honduras", 
  landArea: 112090, 
  capital: "Tegucigalpa", 
  capital_location:  new google.maps.LatLng(14.1,-87.216667), 
  continent: "Central America", 
  color: "#00FF99" 
},
 'HR': { 
  countryName: "Croatia", 
  landArea: 56542, 
  capital: "Zagreb", 
  capital_location:  new google.maps.LatLng(45.8,16), 
  continent: "Europe", 
  color: "#33CC99" 
},
 'HT': { 
  countryName: "Haiti", 
  landArea: 27750, 
  capital: "Port-au-Prince", 
  capital_location:  new google.maps.LatLng(18.533333333333335,-72.333333), 
  continent: "North America", 
  color: "#009966" 
},
 'HU': { 
  countryName: "Hungary", 
  landArea: 93030, 
  capital: "Budapest", 
  capital_location:  new google.maps.LatLng(47.5,19.083333), 
  continent: "Europe", 
  color: "#66FFCC" 
},
 'ID': { 
  countryName: "Indonesia", 
  landArea: 1919440, 
  capital: "Jakarta", 
  capital_location:  new google.maps.LatLng(-6.166666666666667,106.816667), 
  continent: "Asia", 
  color: "#999900" 
},
 'IE': { 
  countryName: "Ireland", 
  landArea: 70280, 
  capital: "Dublin", 
  capital_location:  new google.maps.LatLng(53.31666666666667,-6.233333), 
  continent: "Europe", 
  color: "#00CC99" 
},
 'IL': { 
  countryName: "Israel", 
  landArea: 20770, 
  capital: "Jerusalem", 
  capital_location:  new google.maps.LatLng(31.766666666666666,35.233333), 
  continent: "Asia", 
  color: "#33FFCC" 
},
 'IM': { 
  countryName: "Isle of Man", 
  landArea: 572, 
  capital: "Douglas", 
  capital_location:  new google.maps.LatLng(54.15,-4.483333), 
  continent: "Europe", 
  color: "NA" 
},
 'IN': { 
  countryName: "India", 
  landArea: 3287590, 
  capital: "New Delhi", 
  capital_location:  new google.maps.LatLng(28.6,77.2), 
  continent: "Asia", 
  color: "#00FFCC" 
},
 'IO': { 
  countryName: "British Indian Ocean Territory", 
  landArea: 0, 
  capital: "Diego Garcia", 
  capital_location:  new google.maps.LatLng(-7.3,72.4), 
  continent: "Africa", 
  color: "#669999" 
},
 'IQ': { 
  countryName: "Iraq", 
  landArea: 437072, 
  capital: "Baghdad", 
  capital_location:  new google.maps.LatLng(33.333333333333336,44.4), 
  continent: "Asia", 
  color: "#336666" 
},
 'IR': { 
  countryName: "Iran", 
  landArea: 1648000, 
  capital: "Tehran", 
  capital_location:  new google.maps.LatLng(35.7,51.416667), 
  continent: "Asia", 
  color: "#99CCCC" 
},
 'IS': { 
  countryName: "Iceland", 
  landArea: 103000, 
  capital: "Reykjavik", 
  capital_location:  new google.maps.LatLng(64.15,-21.95), 
  continent: "Europe", 
  color: "#339999" 
},
 'IT': { 
  countryName: "Italy", 
  landArea: 301230, 
  capital: "Rome", 
  capital_location:  new google.maps.LatLng(41.9,12.483333), 
  continent: "Europe", 
  color: "#FF3366" 
},
 'JE': { 
  countryName: "Jersey", 
  landArea: 116, 
  capital: "Saint Helier", 
  capital_location:  new google.maps.LatLng(49.18333333333333,-2.1), 
  continent: "Europe", 
  color: "NA" 
},
 'JM': { 
  countryName: "Jamaica", 
  landArea: 10831, 
  capital: "Kingston", 
  capital_location:  new google.maps.LatLng(18,-76.8), 
  continent: "North America", 
  color: "#33CCCC" 
},
 'JO': { 
  countryName: "Jordan", 
  landArea: 92300, 
  capital: "Amman", 
  capital_location:  new google.maps.LatLng(31.95,35.933333), 
  continent: "Asia", 
  color: "#003333" 
},
 'JP': { 
  countryName: "Japan", 
  landArea: 377835, 
  capital: "Tokyo", 
  capital_location:  new google.maps.LatLng(35.68333333333333,139.75), 
  continent: "Asia", 
  color: "#006666" 
},
 'KE': { 
  countryName: "Kenya", 
  landArea: 582650, 
  capital: "Nairobi", 
  capital_location:  new google.maps.LatLng(-1.2833333333333332,36.816667), 
  continent: "Africa", 
  color: "#009999" 
},
 'KG': { 
  countryName: "Kyrgyzstan", 
  landArea: 198500, 
  capital: "Bishkek", 
  capital_location:  new google.maps.LatLng(42.86666666666667,74.6), 
  continent: "Asia", 
  color: "#00CCCC" 
},
 'KH': { 
  countryName: "Cambodia", 
  landArea: 181040, 
  capital: "Phnom Penh", 
  capital_location:  new google.maps.LatLng(11.55,104.916667), 
  continent: "Asia", 
  color: "#00FFFF" 
},
 'KI': { 
  countryName: "Kiribati", 
  landArea: 811, 
  capital: "Tarawa", 
  capital_location:  new google.maps.LatLng(-0.8833333333333333,169.533333), 
  continent: "Australia", 
  color: "#33FFFF" 
},
 'KM': { 
  countryName: "Comoros", 
  landArea: 2170, 
  capital: "Moroni", 
  capital_location:  new google.maps.LatLng(-11.7,43.233333), 
  continent: "Africa", 
  color: "#66FFFF" 
},
 'KN': { 
  countryName: "Saint Kitts and Nevis", 
  landArea: 261, 
  capital: "Basseterre", 
  capital_location:  new google.maps.LatLng(17.3,-62.716667), 
  continent: "North America", 
  color: "#99FFFF" 
},
 'KP': { 
  countryName: "North Korea", 
  landArea: 120540, 
  capital: "Pyongyang", 
  capital_location:  new google.maps.LatLng(39.016666666666666,125.75), 
  continent: "Asia", 
  color: "#990033" 
},
 'KR': { 
  countryName: "South Korea", 
  landArea: 98480, 
  capital: "Seoul", 
  capital_location:  new google.maps.LatLng(37.55,126.983333), 
  continent: "Asia", 
  color: "#00CCFF" 
},
 'KW': { 
  countryName: "Kuwait", 
  landArea: 17820, 
  capital: "Kuwait City", 
  capital_location:  new google.maps.LatLng(29.366666666666667,47.966667), 
  continent: "Asia", 
  color: "#0099CC" 
},
 'KY': { 
  countryName: "Cayman Islands", 
  landArea: 262, 
  capital: "George Town", 
  capital_location:  new google.maps.LatLng(19.3,-81.383333), 
  continent: "North America", 
  color: "#33CCFF" 
},
 'KZ': { 
  countryName: "Kazakhstan", 
  landArea: 2717300, 
  capital: "Astana", 
  capital_location:  new google.maps.LatLng(51.166666666666664,71.416667), 
  continent: "Asia", 
  color: "#3399CC" 
},
 'LA': { 
  countryName: "Laos", 
  landArea: 236800, 
  capital: "Vientiane", 
  capital_location:  new google.maps.LatLng(17.966666666666665,102.6), 
  continent: "Asia", 
  color: "#006699" 
},
 'LB': { 
  countryName: "Lebanon", 
  landArea: 10400, 
  capital: "Beirut", 
  capital_location:  new google.maps.LatLng(33.86666666666667,35.5), 
  continent: "Asia", 
  color: "#66CCFF" 
},
 'LC': { 
  countryName: "Saint Lucia", 
  landArea: 616, 
  capital: "Castries", 
  capital_location:  new google.maps.LatLng(14,-61), 
  continent: "North America", 
  color: "#0099FF" 
},
 'LI': { 
  countryName: "Liechtenstein", 
  landArea: 160, 
  capital: "Vaduz", 
  capital_location:  new google.maps.LatLng(47.13333333333333,9.516667), 
  continent: "Europe", 
  color: "#336699" 
},
 'LK': { 
  countryName: "Sri Lanka", 
  landArea: 65610, 
  capital: "Colombo", 
  capital_location:  new google.maps.LatLng(6.916666666666667,79.833333), 
  continent: "Asia", 
  color: "#6699CC" 
},
 'LR': { 
  countryName: "Liberia", 
  landArea: 111370, 
  capital: "Monrovia", 
  capital_location:  new google.maps.LatLng(6.3,-10.8), 
  continent: "Africa", 
  color: "#003366" 
},
 'LS': { 
  countryName: "Lesotho", 
  landArea: 30355, 
  capital: "Maseru", 
  capital_location:  new google.maps.LatLng(-29.316666666666666,27.483333), 
  continent: "Africa", 
  color: "#0066CC" 
},
 'LT': { 
  countryName: "Lithuania", 
  landArea: 65200, 
  capital: "Vilnius", 
  capital_location:  new google.maps.LatLng(54.68333333333333,25.316667), 
  continent: "Europe", 
  color: "#3399FF" 
},
 'LU': { 
  countryName: "Luxembourg", 
  landArea: 2586, 
  capital: "Luxembourg", 
  capital_location:  new google.maps.LatLng(49.6,6.116667), 
  continent: "Europe", 
  color: "#99CCFF" 
},
 'LV': { 
  countryName: "Latvia", 
  landArea: 64589, 
  capital: "Riga", 
  capital_location:  new google.maps.LatLng(56.95,24.1), 
  continent: "Europe", 
  color: "#0066FF" 
},
 'LY': { 
  countryName: "Libya", 
  landArea: 1759540, 
  capital: "Tripoli", 
  capital_location:  new google.maps.LatLng(32.88333333333333,13.166667), 
  continent: "Africa", 
  color: "#3366CC" 
},
 'MA': { 
  countryName: "Morocco", 
  landArea: 446550, 
  capital: "Rabat", 
  capital_location:  new google.maps.LatLng(34.016666666666666,-6.816667), 
  continent: "Africa", 
  color: "#003399" 
},
 'MC': { 
  countryName: "Monaco", 
  landArea: 2, 
  capital: "Monaco", 
  capital_location:  new google.maps.LatLng(43.733333333333334,7.416667), 
  continent: "Europe", 
  color: "#6699FF" 
},
 'MD': { 
  countryName: "Moldova", 
  landArea: 33843, 
  capital: "Chisinau", 
  capital_location:  new google.maps.LatLng(47,28.85), 
  continent: "Europe", 
  color: "#0033CC" 
},
 'ME': { 
  countryName: "Montenegro", 
  landArea: 14026, 
  capital: "Podgorica", 
  capital_location:  new google.maps.LatLng(42.43333333333333,19.266667), 
  continent: "Europe", 
  color: "#3366FF" 
},
 'MG': { 
  countryName: "Madagascar", 
  landArea: 587040, 
  capital: "Antananarivo", 
  capital_location:  new google.maps.LatLng(-18.916666666666668,47.516667), 
  continent: "Africa", 
  color: "#0033FF" 
},
 'MH': { 
  countryName: "Marshall Islands", 
  landArea: 181, 
  capital: "Majuro", 
  capital_location:  new google.maps.LatLng(7.1,171.383333), 
  continent: "Australia", 
  color: "#666699" 
},
 'MK': { 
  countryName: "Macedonia", 
  landArea: 25333, 
  capital: "Skopje", 
  capital_location:  new google.maps.LatLng(42,21.433333), 
  continent: "Europe", 
  color: "#333366" 
},
 'ML': { 
  countryName: "Mali", 
  landArea: 1240000, 
  capital: "Bamako", 
  capital_location:  new google.maps.LatLng(12.65,-8), 
  continent: "Africa", 
  color: "#9999CC" 
},
 'MM': { 
  countryName: "Myanmar", 
  landArea: 678500, 
  capital: "Rangoon", 
  capital_location:  new google.maps.LatLng(16.8,96.15), 
  continent: "Asia", 
  color: "#333399" 
},
 'MN': { 
  countryName: "Mongolia", 
  landArea: 1565000, 
  capital: "Ulaanbaatar", 
  capital_location:  new google.maps.LatLng(47.916666666666664,106.916667), 
  continent: "Asia", 
  color: "#6666CC" 
},
 'MP': { 
  countryName: "Northern Mariana Islands", 
  landArea: 477, 
  capital: "Saipan", 
  capital_location:  new google.maps.LatLng(15.2,145.75), 
  continent: "Australia", 
  color: "#3333CC" 
},
 'MR': { 
  countryName: "Mauritania", 
  landArea: 1030700, 
  capital: "Nouakchott", 
  capital_location:  new google.maps.LatLng(18.066666666666666,-15.966667), 
  continent: "Africa", 
  color: "#000066" 
},
 'MS': { 
  countryName: "Montserrat", 
  landArea: 102, 
  capital: "Plymouth", 
  capital_location:  new google.maps.LatLng(16.7,-62.216667), 
  continent: "North America", 
  color: "#000099" 
},
 'MT': { 
  countryName: "Malta", 
  landArea: 316, 
  capital: "Valletta", 
  capital_location:  new google.maps.LatLng(35.88333333333333,14.5), 
  continent: "Europe", 
  color: "#0000CC" 
},
 'MU': { 
  countryName: "Mauritius", 
  landArea: 2040, 
  capital: "Port Louis", 
  capital_location:  new google.maps.LatLng(-20.15,57.483333), 
  continent: "Africa", 
  color: "#0000FF" 
},
 'MV': { 
  countryName: "Maldives", 
  landArea: 300, 
  capital: "Male", 
  capital_location:  new google.maps.LatLng(4.166666666666667,73.5), 
  continent: "Asia", 
  color: "#3333FF" 
},
 'MW': { 
  countryName: "Malawi", 
  landArea: 118480, 
  capital: "Lilongwe", 
  capital_location:  new google.maps.LatLng(-13.966666666666667,33.783333), 
  continent: "Africa", 
  color: "#6666FF" 
},
 'MX': { 
  countryName: "Mexico", 
  landArea: 1972550, 
  capital: "Mexico City", 
  capital_location:  new google.maps.LatLng(19.433333333333334,-99.133333), 
  continent: "Central America", 
  color: "#0033FF" 
},
 'MY': { 
  countryName: "Malaysia", 
  landArea: 329750, 
  capital: "Kuala Lumpur", 
  capital_location:  new google.maps.LatLng(3.1666666666666665,101.7), 
  continent: "Asia", 
  color: "#CCCCFF" 
},
 'MZ': { 
  countryName: "Mozambique", 
  landArea: 801590, 
  capital: "Maputo", 
  capital_location:  new google.maps.LatLng(-25.95,32.583333), 
  continent: "Africa", 
  color: "#3300FF" 
},
 'NC': { 
  countryName: "New Caledonia", 
  landArea: 19060, 
  capital: "Noumea", 
  capital_location:  new google.maps.LatLng(-22.266666666666666,166.45), 
  continent: "Australia", 
  color: "#6633FF" 
},
 'NE': { 
  countryName: "Niger", 
  landArea: 1267000, 
  capital: "Niamey", 
  capital_location:  new google.maps.LatLng(13.516666666666667,2.116667), 
  continent: "Africa", 
  color: "#33FF00" 
},
 'NF': { 
  countryName: "Norfolk Island", 
  landArea: 10991, 
  capital: "Kingston", 
  capital_location:  new google.maps.LatLng(-29.05,167.966667), 
  continent: "Australia", 
  color: "#330099" 
},
 'NG': { 
  countryName: "Nigeria", 
  landArea: 923768, 
  capital: "Abuja", 
  capital_location:  new google.maps.LatLng(9.083333333333334,7.533333), 
  continent: "Africa", 
  color: "#9966FF" 
},
 'NI': { 
  countryName: "Nicaragua", 
  landArea: 129494, 
  capital: "Managua", 
  capital_location:  new google.maps.LatLng(12.133333333333333,-86.25), 
  continent: "Central America", 
  color: "#6600FF" 
},
 'NL': { 
  countryName: "Netherlands", 
  landArea: 41526, 
  capital: "Amsterdam", 
  capital_location:  new google.maps.LatLng(52.35,4.916667), 
  continent: "Europe", 
  color: "#663399" 
},
 'NO': { 
  countryName: "Norway", 
  landArea: 324220, 
  capital: "Oslo", 
  capital_location:  new google.maps.LatLng(59.916666666666664,10.75), 
  continent: "Europe", 
  color: "#9966CC" 
},
 'NP': { 
  countryName: "Nepal", 
  landArea: 140800, 
  capital: "Kathmandu", 
  capital_location:  new google.maps.LatLng(27.716666666666665,85.316667), 
  continent: "Asia", 
  color: "#330066" 
},
 'NR': { 
  countryName: "Nauru", 
  landArea: 21, 
  capital: "Yaren", 
  capital_location:  new google.maps.LatLng(-0.5477,166.920867), 
  continent: "Australia", 
  color: "#6600CC" 
},
 'NU': { 
  countryName: "Niue", 
  landArea: 260, 
  capital: "Alofi", 
  capital_location:  new google.maps.LatLng(-19.016666666666666,-169.916667), 
  continent: "Australia", 
  color: "#9933FF" 
},
 'NZ': { 
  countryName: "New Zealand", 
  landArea: 268680, 
  capital: "Wellington", 
  capital_location:  new google.maps.LatLng(-41.3,174.783333), 
  continent: "Australia", 
  color: "#CC99FF" 
},
 'OM': { 
  countryName: "Oman", 
  landArea: 212460, 
  capital: "Muscat", 
  capital_location:  new google.maps.LatLng(23.616666666666667,58.583333), 
  continent: "Asia", 
  color: "#9900FF" 
},
 'PA': { 
  countryName: "Panama", 
  landArea: 78200, 
  capital: "Panama City", 
  capital_location:  new google.maps.LatLng(8.966666666666667,-79.533333), 
  continent: "Central America", 
  color: "#9933CC" 
},
 'PE': { 
  countryName: "Peru", 
  landArea: 1285220, 
  capital: "Lima", 
  capital_location:  new google.maps.LatLng(-12.05,-77.05), 
  continent: "South America", 
  color: "#660099" 
},
 'PF': { 
  countryName: "French Polynesia", 
  landArea: 4167, 
  capital: "Papeete", 
  capital_location:  new google.maps.LatLng(-17.533333333333335,-149.566667), 
  continent: "Australia", 
  color: "#CC66FF" 
},
 'PG': { 
  countryName: "Papua New Guinea", 
  landArea: 462840, 
  capital: "Port Moresby", 
  capital_location:  new google.maps.LatLng(-9.45,147.183333), 
  continent: "Australia", 
  color: "#9900CC" 
},
 'PG': { 
  countryName: "Papua New Guinea", 
  landArea: 0, 
  capital: "Port Moresby", 
  capital_location:  new google.maps.LatLng(-9.45,147.183333), 
  continent: "Australia", 
  color: "NA" 
},
 'PH': { 
  countryName: "Philippines", 
  landArea: 300000, 
  capital: "Manila", 
  capital_location:  new google.maps.LatLng(14.6,120.966667), 
  continent: "Asia", 
  color: "#CC33FF" 
},
 'PK': { 
  countryName: "Pakistan", 
  landArea: 803940, 
  capital: "Islamabad", 
  capital_location:  new google.maps.LatLng(33.68333333333333,73.05), 
  continent: "Asia", 
  color: "#CC00FF" 
},
 'PL': { 
  countryName: "Poland", 
  landArea: 312685, 
  capital: "Warsaw", 
  capital_location:  new google.maps.LatLng(52.25,21), 
  continent: "Europe", 
  color: "#996699" 
},
 'PM': { 
  countryName: "Saint Pierre and Miquelon", 
  landArea: 389, 
  capital: "Saint-Pierre", 
  capital_location:  new google.maps.LatLng(46.766666666666666,-56.183333), 
  continent: "Central America", 
  color: "#663366" 
},
 'PN': { 
  countryName: "Pitcairn Islands", 
  landArea: 47, 
  capital: "Adamstown", 
  capital_location:  new google.maps.LatLng(-25.066666666666666,-130.083333), 
  continent: "Australia", 
  color: "#CC99CC" 
},
 'PR': { 
  countryName: "Puerto Rico", 
  landArea: 9104, 
  capital: "San Juan", 
  capital_location:  new google.maps.LatLng(18.466666666666665,-66.116667), 
  continent: "North America", 
  color: "#993399" 
},
 'PT': { 
  countryName: "Portugal", 
  landArea: 92391, 
  capital: "Lisbon", 
  capital_location:  new google.maps.LatLng(38.71666666666667,-9.133333), 
  continent: "Europe", 
  color: "#CC33CC" 
},
 'PW': { 
  countryName: "Palau", 
  landArea: 458, 
  capital: "Melekeok", 
  capital_location:  new google.maps.LatLng(7.483333333333333,134.633333), 
  continent: "Australia", 
  color: "#330033" 
},
 'PY': { 
  countryName: "Paraguay", 
  landArea: 406750, 
  capital: "Asuncion", 
  capital_location:  new google.maps.LatLng(-25.266666666666666,-57.666667), 
  continent: "South America", 
  color: "#660066" 
},
 'QA': { 
  countryName: "Qatar", 
  landArea: 11437, 
  capital: "Doha", 
  capital_location:  new google.maps.LatLng(25.283333333333335,51.533333), 
  continent: "Asia", 
  color: "#990099" 
},
 'RO': { 
  countryName: "Romania", 
  landArea: 237500, 
  capital: "Bucharest", 
  capital_location:  new google.maps.LatLng(44.43333333333333,26.1), 
  continent: "Europe", 
  color: "#FF00FF" 
},
 'RS': { 
  countryName: "Serbia", 
  landArea: 102350, 
  capital: "Belgrade", 
  capital_location:  new google.maps.LatLng(44.833333333333336,20.5), 
  continent: "Europe", 
  color: "#FF33FF" 
},
 'RU': { 
  countryName: "Russia", 
  landArea: 17075200, 
  capital: "Moscow", 
  capital_location:  new google.maps.LatLng(55.75,37.6), 
  continent: "Europe", 
  color: "#FFFF33" 
},
 'RW': { 
  countryName: "Rwanda", 
  landArea: 26338, 
  capital: "Kigali", 
  capital_location:  new google.maps.LatLng(-1.95,30.05), 
  continent: "Africa", 
  color: "#FF66FF" 
},
 'SA': { 
  countryName: "Saudi Arabia", 
  landArea: 1960582, 
  capital: "Riyadh", 
  capital_location:  new google.maps.LatLng(24.65,46.7), 
  continent: "Asia", 
  color: "#FF99FF" 
},
 'SB': { 
  countryName: "Solomon Islands", 
  landArea: 28450, 
  capital: "Honiara", 
  capital_location:  new google.maps.LatLng(-9.433333333333334,159.95), 
  continent: "Australia", 
  color: "#FFCCFF" 
},
 'SC': { 
  countryName: "Seychelles", 
  landArea: 455, 
  capital: "Victoria", 
  capital_location:  new google.maps.LatLng(-4.616666666666667,55.45), 
  continent: "Africa", 
  color: "#FF00CC" 
},
 'SD': { 
  countryName: "Sudan", 
  landArea: 2505810, 
  capital: "Khartoum", 
  capital_location:  new google.maps.LatLng(15.6,32.533333), 
  continent: "Africa", 
  color: "#CC0099" 
},
 'SE': { 
  countryName: "Sweden", 
  landArea: 449964, 
  capital: "Stockholm", 
  capital_location:  new google.maps.LatLng(59.333333333333336,18.05), 
  continent: "Europe", 
  color: "#FF33CC" 
},
 'SG': { 
  countryName: "Singapore", 
  landArea: 693, 
  capital: "Singapore", 
  capital_location:  new google.maps.LatLng(1.2833333333333332,103.85), 
  continent: "Asia", 
  color: "#CC3399" 
},
 'SH': { 
  countryName: "Saint Helena", 
  landArea: 410, 
  capital: "Jamestown", 
  capital_location:  new google.maps.LatLng(-15.933333333333334,-5.716667), 
  continent: "Africa", 
  color: "#990066" 
},
 'SI': { 
  countryName: "Slovenia", 
  landArea: 20273, 
  capital: "Ljubljana", 
  capital_location:  new google.maps.LatLng(46.05,14.516667), 
  continent: "Europe", 
  color: "#FF66CC" 
},
 'SJ': { 
  countryName: "Svalbard", 
  landArea: 62049, 
  capital: "Longyearbyen", 
  capital_location:  new google.maps.LatLng(78.21666666666667,15.633333), 
  continent: "Europe", 
  color: "#990033" 
},
 'SK': { 
  countryName: "Slovakia", 
  landArea: 48845, 
  capital: "Bratislava", 
  capital_location:  new google.maps.LatLng(48.15,17.116667), 
  continent: "Europe", 
  color: "#993366" 
},
 'SL': { 
  countryName: "Sierra Leone", 
  landArea: 71740, 
  capital: "Freetown", 
  capital_location:  new google.maps.LatLng(8.483333333333333,-13.233333), 
  continent: "Africa", 
  color: "#CC6699" 
},
 'SM': { 
  countryName: "San Marino", 
  landArea: 61, 
  capital: "San Marino", 
  capital_location:  new google.maps.LatLng(43.93333333333333,12.416667), 
  continent: "Europe", 
  color: "#660033" 
},
 'SN': { 
  countryName: "Senegal", 
  landArea: 196190, 
  capital: "Dakar", 
  capital_location:  new google.maps.LatLng(14.733333333333333,-17.633333), 
  continent: "Africa", 
  color: "#CC0066" 
},
 'SO': { 
  countryName: "Somalia", 
  landArea: 637657, 
  capital: "Mogadishu", 
  capital_location:  new google.maps.LatLng(2.066666666666667,45.333333), 
  continent: "Africa", 
  color: "#FF3399" 
},
 'SR': { 
  countryName: "Suriname", 
  landArea: 163270, 
  capital: "Paramaribo", 
  capital_location:  new google.maps.LatLng(5.833333333333333,-55.166667), 
  continent: "South America", 
  color: "#FF99CC" 
},
 'ST': { 
  countryName: "Sao Tome and Principe", 
  landArea: 1001, 
  capital: "Sao Tome", 
  capital_location:  new google.maps.LatLng(0.3333333333333333,6.733333), 
  continent: "Africa", 
  color: "#FF0066" 
},
 'SV': { 
  countryName: "El Salvador", 
  landArea: 21040, 
  capital: "San Salvador", 
  capital_location:  new google.maps.LatLng(13.7,-89.2), 
  continent: "Central America", 
  color: "#CC3366" 
},
 'SY': { 
  countryName: "Syria", 
  landArea: 185180, 
  capital: "Damascus", 
  capital_location:  new google.maps.LatLng(33.5,36.3), 
  continent: "Asia", 
  color: "#990033" 
},
 'SZ': { 
  countryName: "Swaziland", 
  landArea: 17363, 
  capital: "Mbabane", 
  capital_location:  new google.maps.LatLng(-26.316666666666666,31.133333), 
  continent: "Africa", 
  color: "#FF6699" 
},
 'TC': { 
  countryName: "Turks and Caicos Islands", 
  landArea: 430, 
  capital: "Grand Turk", 
  capital_location:  new google.maps.LatLng(21.466666666666665,-71.133333), 
  continent: "North America", 
  color: "#CC0033" 
},
 'TD': { 
  countryName: "Chad", 
  landArea: 1284000, 
  capital: "N'Djamena", 
  capital_location:  new google.maps.LatLng(12.1,15.033333), 
  continent: "Africa", 
  color: "#FF3366" 
},
 'TF': { 
  countryName: "French Southern and Antarctic Lands", 
  landArea: 0, 
  capital: "Port-aux-Français", 
  capital_location:  new google.maps.LatLng(-49.35,70.216667), 
  continent: "Antarctica", 
  color: "#FF3333" 
},
 'TG': { 
  countryName: "Togo", 
  landArea: 56785, 
  capital: "Lome", 
  capital_location:  new google.maps.LatLng(6.116666666666666,1.216667), 
  continent: "Africa", 
  color: "#FF6666" 
},
 'TH': { 
  countryName: "Thailand", 
  landArea: 514000, 
  capital: "Bangkok", 
  capital_location:  new google.maps.LatLng(13.75,100.516667), 
  continent: "Asia", 
  color: "#FF9999" 
},
 'TJ': { 
  countryName: "Tajikistan", 
  landArea: 143100, 
  capital: "Dushanbe", 
  capital_location:  new google.maps.LatLng(38.55,68.766667), 
  continent: "Asia", 
  color: "#FFCCCC" 
},
 'TK': { 
  countryName: "Tokelau", 
  landArea: 266000, 
  capital: "Atafu", 
  capital_location:  new google.maps.LatLng(-9.166667,-171.833333), 
  continent: "Australia", 
  color: "#FF3300" 
},
 'TL': { 
  countryName: "Timor-Leste", 
  landArea: 15007, 
  capital: "Dili", 
  capital_location:  new google.maps.LatLng(-8.583333333333334,125.6), 
  continent: "Asia", 
  color: "NA" 
},
 'TM': { 
  countryName: "Turkmenistan", 
  landArea: 488100, 
  capital: "Ashgabat", 
  capital_location:  new google.maps.LatLng(37.95,58.383333), 
  continent: "Asia", 
  color: "#FF6633" 
},
 'TN': { 
  countryName: "Tunisia", 
  landArea: 163610, 
  capital: "Tunis", 
  capital_location:  new google.maps.LatLng(36.8,10.183333), 
  continent: "Africa", 
  color: "#CC6633" 
},
 'TO': { 
  countryName: "Tonga", 
  landArea: 748, 
  capital: "Nuku'alofa", 
  capital_location:  new google.maps.LatLng(-21.133333333333333,-175.2), 
  continent: "Australia", 
  color: "#993300" 
},
 'TR': { 
  countryName: "Turkey", 
  landArea: 780580, 
  capital: "Ankara", 
  capital_location:  new google.maps.LatLng(39.93333333333333,32.866667), 
  continent: "Europe", 
  color: "#FF9966" 
},
 'TT': { 
  countryName: "Trinidad and Tobago", 
  landArea: 5128, 
  capital: "Port of Spain", 
  capital_location:  new google.maps.LatLng(10.65,-61.516667), 
  continent: "North America", 
  color: "#FF6600" 
},
 'TV': { 
  countryName: "Tuvalu", 
  landArea: 26, 
  capital: "Funafuti", 
  capital_location:  new google.maps.LatLng(-8.516666666666667,179.216667), 
  continent: "Australia", 
  color: "#996633" 
},
 'TW': { 
  countryName: "Taiwan", 
  landArea: 35980, 
  capital: "Taipei", 
  capital_location:  new google.maps.LatLng(25.033333333333335,121.516667), 
  continent: "Asia", 
  color: "#00CC00" 
},
 'TZ': { 
  countryName: "Tanzania", 
  landArea: 945087, 
  capital: "Dar es Salaam", 
  capital_location:  new google.maps.LatLng(-6.8,39.283333), 
  continent: "Africa", 
  color: "#CC9966" 
},
 'UA': { 
  countryName: "Ukraine", 
  landArea: 603700, 
  capital: "Kyiv", 
  capital_location:  new google.maps.LatLng(50.43333333333333,30.516667), 
  continent: "Europe", 
  color: "#663300" 
},
 'UG': { 
  countryName: "Uganda", 
  landArea: 236040, 
  capital: "Kampala", 
  capital_location:  new google.maps.LatLng(0.31666666666666665,32.55), 
  continent: "Africa", 
  color: "#CC6600" 
},
 'US': { 
  countryName: "United States", 
  landArea: 9629091, 
  capital: "Washington: D.C.", 
  capital_location:  new google.maps.LatLng(38.883333,-77), 
  continent: "Central America", 
  color: "#00FFCC" 
},
 'UY': { 
  countryName: "Uruguay", 
  landArea: 176220, 
  capital: "Montevideo", 
  capital_location:  new google.maps.LatLng(-34.85,-56.166667), 
  continent: "South America", 
  color: "#FFCC99" 
},
 'UZ': { 
  countryName: "Uzbekistan", 
  landArea: 447400, 
  capital: "Tashkent", 
  capital_location:  new google.maps.LatLng(41.31666666666667,69.25), 
  continent: "Asia", 
  color: "#FF9900" 
},
 'VA': { 
  countryName: "Vatican City", 
  landArea: 0, 
  capital: "Vatican City", 
  capital_location:  new google.maps.LatLng(41.9,12.45), 
  continent: "Europe", 
  color: "NA" 
},
 'VC': { 
  countryName: "Saint Vincent and the Grenadines", 
  landArea: 242, 
  capital: "Kingstown", 
  capital_location:  new google.maps.LatLng(13.133333333333333,-61.216667), 
  continent: "Central America", 
  color: "#CC9933" 
},
 'VE': { 
  countryName: "Venezuela", 
  landArea: 912050, 
  capital: "Caracas", 
  capital_location:  new google.maps.LatLng(10.483333333333333,-66.866667), 
  continent: "South America", 
  color: "#996600" 
},
 'VG': { 
  countryName: "British Virgin Islands", 
  landArea: 153, 
  capital: "Road Town", 
  capital_location:  new google.maps.LatLng(18.416666666666668,-64.616667), 
  continent: "North America", 
  color: "#FFCC66" 
},
 'VI': { 
  countryName: "US Virgin Islands", 
  landArea: 352, 
  capital: "Charlotte Amalie", 
  capital_location:  new google.maps.LatLng(18.35,-64.933333), 
  continent: "North America", 
  color: "#CC9900" 
},
 'VN': { 
  countryName: "Vietnam", 
  landArea: 329560, 
  capital: "Hanoi", 
  capital_location:  new google.maps.LatLng(21.033333333333335,105.85), 
  continent: "Asia", 
  color: "#FFCC33" 
},
 'VU': { 
  countryName: "Vanuatu", 
  landArea: 12200, 
  capital: "Port-Vila", 
  capital_location:  new google.maps.LatLng(-17.733333333333334,168.316667), 
  continent: "Australia", 
  color: "#FFCC00" 
},
 'WF': { 
  countryName: "Wallis and Futuna", 
  landArea: 274, 
  capital: "Mata-Utu", 
  capital_location:  new google.maps.LatLng(-13.95,-171.933333), 
  continent: "Australia", 
  color: "#999966" 
},
 'WS': { 
  countryName: "Samoa", 
  landArea: 2944, 
  capital: "Apia", 
  capital_location:  new google.maps.LatLng(-13.816666666666666,-171.766667), 
  continent: "Australia", 
  color: "#666633" 
},
 'YE': { 
  countryName: "Yemen", 
  landArea: 527970, 
  capital: "Sanaa", 
  capital_location:  new google.maps.LatLng(15.35,44.2), 
  continent: "Asia", 
  color: "#CCCC99" 
},
 'ZA': { 
  countryName: "South Africa", 
  landArea: 1219912, 
  capital: "Pretoria", 
  capital_location:  new google.maps.LatLng(-25.7,28.216667), 
  continent: "Africa", 
  color: "#CCCC66" 
},
 'ZM': { 
  countryName: "Zambia", 
  landArea: 752614, 
  capital: "Lusaka", 
  capital_location:  new google.maps.LatLng(-15.416666666666666,28.283333), 
  continent: "Africa", 
  color: "#CCCC33" 
},
 'ZW': { 
  countryName: "Zimbabwe", 
  landArea: 390580, 
  capital: "Harare", 
  capital_location:  new google.maps.LatLng(-17.816666666666666,31.033333), 
  continent: "Africa", 
  color: "#FF0066" 
},
 'NA': { 
  countryName: "Namibia", 
  landArea: 825418, 
  capital: "Windhoek", 
  capital_location:  new google.maps.LatLng(-22.566666666666666,17.083333), 
  continent: "Africa", 
  color: "#3300CC" 
}
} 
