/**
 * Created by eugene on 24.02.17.
 */

export function showPlaces(map, google, pos) {
    let service,
        pyrmont = new google.maps.LatLng(pos.lat,pos.lng);

    const request = {
        location: pyrmont,
        radius: '1000',
        types: ['bar', 'food']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            map.setCenter(pyrmont);

            for (let i = 0; i < results.length; i++) {
                let place = results[i];

                let marker = new google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                    title: 'Hello World!'
                });
                
            }
        }
    }    
}

