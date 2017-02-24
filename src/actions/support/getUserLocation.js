/**
 * Created by eugene on 24.02.17.
 */
import { showPlaces } from './../showPlaces'

import { handleLocationError } from './handleErrors'

export function getUserLocation(map, google) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);

            // eslint-disable-next-line
            let marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Hello World!'
            });

            showPlaces(map, google, pos)
            
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        alert('sorry, geoloacation isn\'t supported')
    }
    
}