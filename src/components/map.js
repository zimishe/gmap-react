/**
 * Created by eugene on 22.02.17.
 */

import React, { Component } from 'react'
// eslint-disable-next-line
import { connect } from 'react-redux'


class Map extends Component {
    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap.bind(this);
        
        // Asynchronously load the Google Maps script, passing in the callback reference

        loadJS('https://maps.google.com/maps/api/js?key=AIzaSyDRUCOhK3QDvocwOtZMG4_Eyaw6dBbm95A&libraries=places&callback=initMap')
    }

    initMap() {
        let map,
            google = window.google;
        
        map = new google.maps.Map(this.refs.map, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 13
        });
        
        let input = document.getElementById('search'),
            searchBox = new google.maps.places.SearchBox(input);

        google.maps.event.addListener(searchBox, 'places_changed', function() {
            let geocoder = new google.maps.Geocoder(),
                address = input.value;
            
            geocoder.geocode({ 'address': address }, function (results, status) {

                if (status === google.maps.GeocoderStatus.OK) {
                    let latitude = results[0].geometry.location.lat(),
                        longitude = results[0].geometry.location.lng();

                    let coords = {
                        lat: latitude,
                        lng : longitude
                    };
                    
                    // eslint-disable-next-line
                    let marker = new google.maps.Marker({
                        position: coords,
                        map: map,
                        title: 'Hello World!'
                    });

                    map.setCenter(coords);
                }
            });
        });

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
                
            }, function() {
                handleLocationError(true, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
           
        }
    }
    
    render() {
        
        return (
            <div className="gmap__map" id="map" ref="map">
               
            </div>
        )
    }
}

export default Map

function loadJS(src) {
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
