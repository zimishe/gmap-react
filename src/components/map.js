/**
 * Created by eugene on 22.02.17.
 */

import React, { Component } from 'react'
// eslint-disable-next-line
import { connect } from 'react-redux'
import { initMap } from './../actions/initMap'
import { loadJS } from './../actions/support/loadJS'


class Map extends Component {
    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = initMap.bind(this);
        
        // Asynchronously load the Google Maps script, passing in the callback reference

        loadJS('https://maps.google.com/maps/api/js?key=AIzaSyDRUCOhK3QDvocwOtZMG4_Eyaw6dBbm95A&libraries=places&callback=initMap')
    }
    
    render() {
        
        return (
            <div className="gmap__map" id="map" ref="map">
               
            </div>
        )
    }
}

export default Map
