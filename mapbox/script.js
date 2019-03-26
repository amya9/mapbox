 document.body.style.backgroundColor="forestgreen";

function initMap() {
    var hamirpur = {
        info:
              '<strong>National institute of technology hamirpur</strong><br>\
               NIT Campus<br> Hamirpur 177005<br>\
               <a href="#">Get Directions</a>',
               lat: 31.708608,
               long: 76.527325,
    };

     var haridwar = {
         info:
               '<strong>Haridwar city </strong><br> uttrakhand <br>\
                <a href="#">Get Directions</a>',
                lat: 28.648955,
                long: 77.315429
    };

    var Delhi = {
        info:
               '<strong>Old Delhi</strong><br>\
                Railway Station<br>  Old Delhi, Delhi, 110006<br>\
                <a href="#">Get Directions</a>',
                lat: 29.218322,
                long: 79.513697,
    };

      var lucknow = {
           info:
                   '<strong>lucknow railway station</strong><br>\
                    Railway Colony, Charbagh <br> Lucknow, Uttar Pradesh<br>\
                    <a href="#">Get Directions</a>',
                    lat: 26.832252 ,
                    long: 80.924638,
    };

     var Gorakhpur = {
              info:
                     '<strong>Gorakhpur railway station</strong><br>\
                      Rapatpur, Belghat, Kawwa Bagh Colony<br>Gorakhpur, Uttar Pradesh 273404<br>\
                      <a href="#">Get Directions</a>',
                      lat: 26.759926,
                      long: 83.381845,
    };

    var motihari = {
                 info:
                         '<strong>Bapudham motihari railway station</strong><br>\
                          Chandmari ,Motihari,East champaran <br>  Bihar,845401 <br>\
                          <a href="#">Get Directions</a>',
                          lat: 26.656083,
                          long:  84.905151,
    };

     var patna = {
                 info:
                          '<strong>Rajendra Nagar Terminal</strong><br>\
                            govt high school, Rajendra Nagar <br> Patna, Bihar<br>\
                           <a href="#">Get Directions</a>',
                           lat: 25.602981,
                           long: 85.162687,
    };

      var nepal = {
                 info:
                        '<strong>Pokhra</strong><br>\
                          Annapurna Muesum<br>  Nepal<br>\
                          <a href="#">Get Directions</a>',
                          lat: 28.239429,
                          long: 83.990204,
    };

      var cochin= {
                 info:
                        '<strong>university road</strong><br>\
                         Cochin university<br>Kerla<br>\
                         <a href="#">Get Directions</a>',
                         lat: 10.044746,
                         long: 76.328137,
    };

      var jodhpur = {
                 info:
                         '<strong>Bhagat Ki Kothi </strong><br>\
                          Jodhpur, Rajasthan<br>\
                          <a href="#">Get Directions</a>',
                          lat:26.259961,
                           long: 73.016747,
    };

    var locations = [
                     [hamirpur.info, hamirpur.lat, hamirpur.long, 0],
                     [haridwar.info, haridwar.lat, haridwar.long, 1],
                     [Delhi.info, Delhi.lat, Delhi.long, 2],
                     [lucknow.info, lucknow.lat, lucknow.long, 3],
                     [Gorakhpur.info, Gorakhpur.lat, Gorakhpur.long, 4],
                     [motihari.info, motihari.lat, motihari.long, 5],
                     [patna.info, patna.lat, patna.long, 6],
                     [nepal.info, nepal.lat, nepal.long, 7],
                     [cochin.info, cochin.lat, cochin.long, 8],
                     [jodhpur.info, jodhpur.lat, jodhpur.long, 9],
    ];

    var map = new google.maps.Map(document.getElementById('maps'), {
                                         zoom: 5,
                                         center: {lat:31.708608, lng: 76.527325},
                                         mapTypeId: 'hybrid'
        });

    var infowindow = new google.maps.InfoWindow({});
    var marker, i;
    
               for (i = 0; i < locations.length; i++) {
                            marker = new google.maps.Marker({
                            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                            map: map,
            });
                     google.maps.event.addDomListener(marker, 'click', (function (marker, i) {
                     return function () {
                     infowindow.setContent(locations[i][0]);
                     infowindow.open(map, marker)
                }
            })
            
            (marker, i))
        
        }
        
     var Coords = [
                   {lat: 31.708608, lng: 76.527325},
                   {lat: 28.648955, lng: 77.315429},
                   {lat: 29.218322, lng: 79.513697},
                   {lat: 26.832252, lng: 80.924638},
                   {lat:26.759926, lng: 83.381845},
                   {lat:28.239429, lng: 83.990204},
                   {lat:26.656083, lng:  84.905151},
                   {lat:25.602981, lng: 85.162687},
                   {lat:10.044746, lng: 76.328137},
                   {lat:26.259961, lng: 73.016747},
                   {lat: 31.708608, lng: 76.527325}
        ];

    var Paths = new google.maps.Polygon({
                                          paths: Coords,
                                          strokeColor: '#FF0000',
                                          strokeOpacity: 0.8,
                                          strokeWeight: 2,
                                          fillColor: '#FF0000',
                                          fillOpacity: 0.35
        });

             Paths.setMap(map);
      
}