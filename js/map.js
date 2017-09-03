window.onload = function(){
  initMap();
}

function initMap(){
  var usa = {lat: 38.101179, lng: -99.797959};
  //set map
  new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: usa
  });
}

function updateMap(address){

   var map = new google.maps.Map(document.getElementById('map'), { 
       center: {lat: 38.101179, lng: -99.797959},
       zoom: 8
   });

    for (var i=0; i<address.length; i++){
       var geocoder = new google.maps.Geocoder();
    
       geocoder.geocode({
          'address': address[i]
       }, 
       function(results, status) {
          if(status == google.maps.GeocoderStatus.OK) {
             new google.maps.Marker({
                position: results[0].geometry.location,
                map: map
             });
             // only zoom in if only 1 location
             if (address.length==1){
                map.setCenter(results[0].geometry.location);
             }
             else{
                 map.setZoom(4);
             }
          }
       });
    }
}