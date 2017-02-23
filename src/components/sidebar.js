/**
 * Created by eugene on 23.02.17.
 */

import React, { Component } from 'react'
// eslint-disable-next-line
import { connect } from 'react-redux'
import Search from './search'


class Sidebar extends Component {
    render() {
        return (
            <div className="gmap__sidebar">
                <Search />
            </div>
        )
    }
}

export default Sidebar