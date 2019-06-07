
/*

IT'S A SMALL WORLD Project - CS286 

 Miguel Portillo 
 Emmanuel Oluloto

*/

      // Function to hide loading image after page has finished loading
      window.onload = function(){ document.getElementById("loading").style.display = "none" }

      // HTML Elements
      var capital_div, flag_div, photo_div;
      var map1, map2, map3;
      var messageBox;
      var messageMarker;

      // Keep track of gamemode, opened infowindow and map being used
      var openedWindow;
      var currMap;
      var currCenter;
      var currGame;

      // Game state variables
      var polysOn = true;
      var infoShowing = true;
      var staticInfo = false;
      var isStatic = false;
      var randFix = true;
      var optShow = false;

      // Stores current markers and polys
      var gameMarkers = {};
      var countryPolys = {};
      var currIDList = [];

      // Closure functions
      var addInfo, setInfoMarker, 
                   solveMarker, checkMarker, 
                   checkRichMarker, solveRichMarker, 
                   displayCountryInfo, animateMarker;



      function initMaps() {

        map1 = new google.maps.Map(document.getElementById('map1'), {
          center: {lat: 40, lng: 12 }, 
          zoom: 3
        });



        map2 = new google.maps.Map(document.getElementById('map2'), {
          center: {lat: 50.936647, lng: -4.092339}, 
          zoom: 3.5
        });


        map3 = new google.maps.Map(document.getElementById('map3'), { 
          center: {lat: 50.936647, lng: -4.092339},
          zoom: 3.5
        });        


        declareClosures();        

       capital_div = document.getElementById('capital_panel');
       flag_div    = document.getElementById('flag_panel');
       photo_div   = document.getElementById('photo_panel');  
       messageBox  = document.getElementById('messageBox');


       // Window ON map to make information easier to see.
       messageMarker = new RichMarker({
              position: new google.maps.LatLng(40, 10),
              map: map1,
              draggable:true,
              anchor: RichMarkerPosition.MIDDLE,
              shadow: "none",
              content: "<div id='mapMessage'> Let's begin! Remember to look at this window for information. </div>"
            });



       setInfoMarker(map1);
       setInfoMarker(map2);
       setInfoMarker(map3);

       currMap = map1;
       
       setMode("capitals");

       
      }

      //To select what type of game is displayed
      function setMode(val){
        messageBox.innerHTML = "A new game has begun! Please look below map for instructions.";
        currGame = val;

        if(val == "capitals"){
            capital_div.style.display = "block";

            flag_div.style.display    = "none";
            photo_div.style.display   = "none";

            resetGame();
            setCapitalGame();
        }else if(val == "flags"){
            flag_div.style.display = "block";

            capital_div.style.display = "none";
            photo_div.style.display = "none";

            resetGame();
            setFlagGame();
        }else if(val == "photos"){
            photo_div.style.display = "block";

            flag_div.style.display = "none";
            capital_div.style.display = "none";       

            resetGame();
            setTouristGame();                
        }

      }

      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
      function declareClosures(){

            // Function to make on-map info marker move whenever map window is moved
            setInfoMarker = function(map){

              // Listener to set position of info-marker only if marker is on map & visible & not frozen
              google.maps.event.addListener(map,'bounds_changed', function() {

                if(map == currMap && showMapInfo && !isStatic){
                  var newCenter = map.getCenter();
                  var ctrLat = newCenter.lat();
                  var ctrLon = newCenter.lng();

                  var dlat = ctrLat - currCenter.lat();
                  var dlon = ctrLon - currCenter.lng();
                  messageMarker.setPosition(new google.maps.LatLng(messageMarker.getPosition().lat() + dlat, 
                                                          messageMarker.getPosition().lng() + dlon*.9) );
                  currCenter = newCenter;                  
                }


              });
            }        

            // Function to open clicked markers' infowindow
             addInfo = function (marker, infoWindow) { 
              google.maps.event.addListener(marker, 'click', 
                function () { 
              
                  if(openedWindow != null)  openedWindow.close();
                  infoWindow.open(map1, marker);
                  openedWindow = infoWindow;
                }); 
            }

            // Function to check if marker has entered polygon
            // If it has, set certain properties of the marker
             checkMarker = function(marker, newPos, newIcon, id){
              marker.addListener('dragend', 
                function(event){

                    if(google.maps.geometry.poly.containsLocation(event.latLng, countryPolys[id])){
                        countryPolys[id].setOptions({ fillColor: '#13ed0e', strokeColor: '#13450e', visible: true});
                        marker.setOptions({ draggable: false, animation: google.maps.Animation.DROP });
                        if(newPos != null) {
                          marker.setPosition(newPos); 
                          marker.getMap().panTo(newPos);
                        }  
                        if(newIcon != "") marker.setIcon(newIcon);

                        messageBox.innerHTML = " Good job! You placed the capital city <b class='good'>"+ marker.getTitle() 
                                              + "</b> correctly in <b>" + countryInfo[id].countryName + "</b>!";
                        document.getElementById("mapMessage").innerHTML = messageBox.innerHTML;

                        displayCountryInfo(id);
                        checkEndGame();
                    }
                });
            }


            // Function to place marker in correct position 
            // also checks marker position
             solveMarker = function(marker, endPos){
              marker.addListener('rightclick', 
                function(event){
                    // Animates marker to correct position
                    messageBox.innerHTML = "Placing " + marker.getTitle() + "...";
                    document.getElementById("mapMessage").innerHTML = messageBox.innerHTML;

                    animateMarker(marker, marker.getPosition(), endPos, 5);    
                    marker.getMap().panTo(endPos);     
                });
            }

            // Function to check if richmarker has entered polygon
            // If it has, set certain properties of the marker
            /* This closure specifically for FLAGS only*/
             checkRichMarker = function(rich, newPos, id, gameMap){
               google.maps.event.addListener(rich, 'dragend', 
                function(){
                  
                    if(google.maps.geometry.poly.containsLocation(rich.getPosition(), countryPolys[id])){
                        countryPolys[id].setOptions({ fillColor: '#13ed0e', strokeColor: '#13450e', visible: true});
                        rich.setOptions({ draggable: false });
                        if(newPos != null) {rich.setPosition(newPos); gameMap.panTo(newPos)}  // Temp replacing animation

                        // Sets the bg color of solved flag
                        document.getElementById(id+"_flag").style.backgroundImage = "linear-gradient(45deg, #0f9b0f, #000000)";

                        var image = " <img class=smallIcon src = flags/" + id + ".png> ";
                        messageBox.innerHTML = " Awesome! This flag "+ image +
                                               " belongs to  <b class='good'>"+ countryInfo[id].countryName + "</b>! ";
                        document.getElementById("mapMessage").innerHTML = messageBox.innerHTML;

                        displayCountryInfo(id);                        
                        checkEndGame();
                        
                    }

                });

            }

            // Function to check if richmarker has entered polygon
            // If it has, set certain properties of the marker
            /* This closure specifically for PLACES only*/
             checkPlaceMarker = function(rich, newPos, id, gameMap){
               google.maps.event.addListener(rich, 'dragend', 
                function(){
                    // If marker is placed in correct polygon, toggle poly/marker color & display message
                    if(google.maps.geometry.poly.containsLocation(rich.getPosition(), countryPolys[id])){
                        countryPolys[id].setOptions({ fillColor: '#13ed0e', strokeColor: '#13450e', visible: true});
                        rich.setOptions({ draggable: false });

                        if(newPos != null) {
                          rich.setPosition( newPos ); 
                          gameMap.panTo(newPos);
                        }  

                        // Sets the bg color of solved photo
                        document.getElementById(id+"_photo").style.backgroundImage = "linear-gradient(45deg, #9796f0, #fbc7d4)";
                        
                        var country = landmarkList[id].countryID;
                        var image = " <img class=smallIcon src = photos/" + landmarkList[id].photo + ">";
                        messageBox.innerHTML = " Impressive! The "+ landmarkList[id].name  + 
                                               image + " is located in  <b class='good'>" + 
                                              countryInfo[country].countryName + "</b>! ";
                        document.getElementById("mapMessage").innerHTML = messageBox.innerHTML;

                        displayCountryInfo(id);                        
                        checkEndGame();
                        
                    }

                });

            }


            // Function to place richmarker in correct position  
            // The rightclick event listener alone doesn't work however the rightclick event is still set
            // so that it can be triggered by the solveAll button
             solveRichMarker = function(htmlID, rich, endPos, gameMap){

              // When marker is ready add listeners
              google.maps.event.addDomListener( rich, "ready", 
                function(){
                  var handleEvts = function(event){
                    // Animates marker to correct position
                    animateMarker(rich, rich.getPosition(), endPos, 5);    
                    gameMap.panTo(endPos);                
                  }

                 // Actually adds the rightclick event listener to element located by id
                 if(document.getElementById(htmlID) != null)
                  google.maps.event.addDomListener(document.getElementById(htmlID), 'mousedown', 
                    function(event){ if(event.button == 2) handleEvts(event); });

                 // For solveAll trigger
                 google.maps.event.addDomListener(rich, 'rightclick', handleEvts);
             });
                
            }

            displayCountryInfo = function(id){
              countryPolys[id].addListener('click', 
                function(event){
                  // If id passed is not country code, look up country code using index
                  if(!isNaN(id)) id = landmarkList[id].countryID;
                  var info = "<div class='summary'> <b class='co_text'>Country Information</b>"+ 
                             "<br><b> Country Name: </b>" + countryInfo[id].countryName +
                             "<br><b> Land Area: </b>" + countryInfo[id].landArea + " sq km" +
                             "<br><b> Capital: </b>" +  countryInfo[id].capital +
                             "<br><b> Continent: </b>" + countryInfo[id].continent +
                             "<br><b> Number of Land Bodies: </b>" +  countryPaths[id].length +
                             "</div>";
                  messageBox.innerHTML = info;
                  document.getElementById("mapMessage").innerHTML = messageBox.innerHTML;
                });              
            }

            // Animation of markers
            // CODE for animation was adapted from              
            // https://stackoverflow.com/questions/10904476/js-google-maps-api-v3-animate-marker-between-coordinates
            animateMarker = function(markerToMove, startPos, endPos, cycle){
              // Calculate total distance to travel
              var latDist = endPos.lat() - startPos.lat();
              var lngDist = endPos.lng() - startPos.lng();

              // Create array of positions to move marker to after delay              
              var animFrames = [];
              for (var percent = 0; percent < 1; percent += 0.01) {
                var curLat = startPos.lat() + percent * latDist;
                var curLng = startPos.lng() + percent * lngDist;
                animFrames.push(new google.maps.LatLng(curLat, curLng));
              }

              // Animation
              var curFrame = 0;
              var animPin = window.setInterval(
                function(){
                  markerToMove.setPosition(animFrames[curFrame]);
                  curFrame = curFrame + 1;
                  
                  // If marker has reached end of frames stop animation
                  // and trigger dragend event to fix marker
                  if(curFrame >= animFrames.length){
                    window.clearInterval(animPin);
                    google.maps.event.trigger(markerToMove, 'dragend', {latLng: markerToMove.getPosition()});

                  }                    
                }
              ,cycle);     

            }

      }

      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
      // Game Type 1 - Identify the capitals
      function setCapitalGame(){

        // Sets map to put richmarker on
        messageMarker.setMap(map1);
        currCenter = map1.getCenter();
        currMap = map1;

        //Generate list of unique country abbrs from list of available capitals
        while(currIDList.length < 10){
            var r = Math.floor( Math.random() * validCapitals.length);
            // If current value does not exist in array (and has valid polys), then place it
            if(countryPaths[validCapitals[r]]!=null && currIDList.indexOf(validCapitals[r]) === -1) currIDList.push(validCapitals[r]);

        }

        for(var i = 0; i < currIDList.length; i++){

            // Create polygons
            var country = currIDList[i];
            var poly = new google.maps.Polygon({
              strokeWeight : 1.2
            , strokeOpacity: 1
            , fillColor    : 'red'
            , fillOpacity  : 0.5
            , strokeColor  : '#7a070e'
            , draggable: false
            });

            poly.setPaths( new google.maps.MVCArray( transformArray(countryPaths[country]) ) );
            poly.setMap(map1);
            if(!polysOn) poly.setVisible(false); 

            // Create locations to place markers
            var mlat = 0, mlng = 0;
            if(randFix){
              mlat = Math.random() * (90 - -90) - 90; 
              mlng = Math.random() * (180 - -180) - 180 ;
            }else{
              mlat = 40+i*2;
              mlng = 10+i*2;
            }

            // Create markers and infowindows
            var capMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(mlat, mlng) 
                   ,map: map1
                   ,title:  countryInfo[country].capital
                   ,draggable: true
                   ,animation: google.maps.Animation.DROP
                });


            var info = new google.maps.InfoWindow({
                content:'<span class="info_text"><b> '+ capMarker.title +'</b></span>'
            });

            addInfo(capMarker, info);
            checkMarker(capMarker, countryInfo[country].capital_location, "icons/NeedleLeftYellow.png", country)
            solveMarker(capMarker, countryInfo[country].capital_location);

            countryPolys[country] = poly;
            gameMarkers[country] = capMarker;

        }            


      }

      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
      // Game Type 2 - Identify the flags
      function setFlagGame(){
        // Sets map to put richmarker on
        messageMarker.setMap(map2);
        currCenter = map2.getCenter();
        currMap = map2;

        //Generate list of unique country abbrs from list of available flags
        while(currIDList.length < 10){
            var r = Math.floor( Math.random() * validFlags.length);
            // If current value does not exist in array AND is valid, then place it
            var ensureExist = countryInfo[validFlags[r]] != null && countryPaths[validFlags[r]] != null;
            if(currIDList.indexOf(validFlags[r]) === -1 && ensureExist) currIDList.push(validFlags[r]);

        }



        for(var i = 0; i < currIDList.length; i++){

            // Create polygons
            var country = currIDList[i];
            var poly = new google.maps.Polygon({
             strokeWeight : 1.2
            , strokeOpacity: 1
            , fillColor    : 'red'
            , fillOpacity  : 0.5
            , strokeColor  : '#7a070e'
            , draggable: false
            });


            poly.setPaths( new google.maps.MVCArray( transformArray(countryPaths[country]) ) );
            poly.setMap(map2);
            if(!polysOn) poly.setVisible(false); 


            var image = "flags/" + country + ".png";
            // Create locations to place markers
            var mlat = 0, mlng = 0;
            if(randFix){
              mlat = Math.random() * (90 - -90) - 90; 
              mlng = Math.random() * (180 - -180) - 180 ;
            }else{
              mlat = 40+i*2;
              mlng = 10+i*2;
            }            

            var flagMarker = new RichMarker({
              position: new google.maps.LatLng(mlat, mlng),
              map: map2,
              draggable: true,
              anchor: RichMarkerPosition.MIDDLE,
              shadow: "none",
              content: '<div class="img_holder" id="'+country+'_flag"> '+
                       ' <img class="rich_photo"  src=' + image + '> </div>'
            });

            checkRichMarker(flagMarker, countryInfo[country].capital_location, country, map2);
            solveRichMarker(country+'_flag' ,flagMarker, countryInfo[country].capital_location, map2);

            countryPolys[country] = poly;
            gameMarkers[country] = flagMarker;
            

        }            

      }


      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
      // Game Type 3 - Identify the landmarks      
      function setTouristGame(){
        // ==IMPORTANT== 
        // Since one country can have multiple tourist destinations, we have to use the index of the 
        // landmarks IN THE ORIGINAL LANDMARKS ARRAY as our array IDs instead of the 2-letter country code

        // Sets map to put richmarker on
        messageMarker.setMap(map3);
        currCenter = map3.getCenter();
        currMap = map3;

        // Generate list of unique indexes from array of available landmarks
        while(currIDList.length < 10){
            var r = Math.floor( Math.random() * landmarkList.length);
            // If current value does not exist in array, then place it
            if(currIDList.indexOf(r) === -1) currIDList.push(r);

        }

        for(var i = 0; i < currIDList.length; i++){
          var touristIndex = currIDList[i];
          var country = landmarkList[touristIndex].countryID;

          // If country poly is not already in array, generate it
          if(countryPolys[touristIndex] == null){
              var poly = new google.maps.Polygon({
              strokeWeight : 1.2
              , strokeOpacity: 1
              , fillColor    : 'red'
              , fillOpacity  : 0.5
              , strokeColor  : '#7a070e'
              , draggable: false
            });

            poly.setPaths( new google.maps.MVCArray( transformArray(countryPaths[country]) ) );
            poly.setMap(map3);
            if(!polysOn) poly.setVisible(false); 
            
            countryPolys[touristIndex] = poly;
          
          }


            var image = "photos/" + landmarkList[touristIndex].photo ;
            // Create locations to place markers
            var mlat = 0, mlng = 0;
            if(randFix){
              mlat = Math.random() * (90 - -90) - 90; 
              mlng = Math.random() * (180 - -180) - 180 ;
            }else{
              mlat = 40+i*2;
              mlng = 10+i*2;
            }                
            var photoMarker = new RichMarker({
              position: new google.maps.LatLng(mlat, mlng),
              map: map3,
              draggable:true,
              anchor: RichMarkerPosition.MIDDLE,
              shadow: "none",
              content: '<div class="img_holder bor_outimg"  id="'+touristIndex +'_photo" > '+
                       ' <img class="rich_photo bor_img" src=' + image + '>'+
                       '<br> <b> '+landmarkList[touristIndex].name+' </b> </div>'
            });

            // Turns location into lat/lng object to be passed to functions since literals don't play nice
            var landmarkLoc = new google.maps.LatLng(landmarkList[touristIndex].location.lat, 
                                                     landmarkList[touristIndex].location.lng);

            checkPlaceMarker(photoMarker, landmarkLoc, touristIndex, map3);
            solveRichMarker(touristIndex +'_photo', photoMarker, landmarkLoc, map3);
            
            gameMarkers[touristIndex] = photoMarker;

        }      
      }


      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
      // Some helper functions


      //Check if a game has ended
      function checkEndGame(){
        var finished = true;
        var markerKeys = Object.keys(gameMarkers);

        for(var m = 0; m < markerKeys.length; m++){
          finished = finished && !gameMarkers[markerKeys[m]].getDraggable();
        }

        if(finished)
          messageBox.innerHTML = messageBox.innerHTML + 
                                 "<br> <b class='bl_text'> You got all of them placed correctly! Great job! </b>";

        document.getElementById("mapMessage").innerHTML = messageBox.innerHTML;
      }


      // Turns lists of coordinates into a list of MVCArrays
      function transformArray(listOfPolygons){
        var mvcPath = [];

        for(var i = listOfPolygons.length-1; i >= 0; i--){
            var mvcList = new google.maps.MVCArray(listOfPolygons[i]);
            mvcPath.push(mvcList);
        }

        return mvcPath;
      }

      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
      // GUI Functions

      // Wipe out all arrays
      function resetGame(){

        for(var a = 0; a < currIDList.length; a++){
          var country = currIDList[a];

          if(countryPolys[country] != null) countryPolys[country].setMap(null);
          if(gameMarkers[country] != null) gameMarkers[country].setMap(null);
        }
        countryPolys = {};
        gameMarkers = {};

        currIDList = [];

      }

      // Show/hide info marker on window
      function showMapInfo(isShow){
        infoShowing = isShow;
        messageMarker.setVisible(isShow);
      }

      // fix info marker location on map
      function fixInfo(fixed){
        isStatic = fixed;

      }
      // Show/hide polys
      function showPolys(show){
        polysOn = show;

        for (var i = 0; i < currIDList.length; i++) {              
          countryPolys[currIDList[i]].setVisible(show);
        }               
      }

      // Randomly spawn map markers
      function randomSpawn(ran){
        randFix = ran;
      }


      // Solve all marker positions
      function solveAll(){
           for (var s = 0; s < currIDList.length; s++) {      
           // Check if marker is already placed        
            if(gameMarkers[currIDList[s]].getDraggable()) 
              google.maps.event.trigger(gameMarkers[currIDList[s]], 'rightclick', {});
          }          
      }

      // Restart currently selected game
      function restartGame(){ setMode(currGame); }

      // Register an event listener to fire when the page finishes loading.
      google.maps.event.addDomListener(window, 'load', initMaps);
