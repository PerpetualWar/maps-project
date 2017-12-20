import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import Drawer from './Drawer';
import { getDate } from '../store/actions/action_date';
import { toggleDrawer } from '../store/actions/action_preferences';

class MapContainer extends Component {
  static defaultProps = {
    center: { lat: 43.84, lng: 18.35 },
    zoom: 11
  };
  onClickHandler = async () => {
    console.log('marker click works')
    await this.props.getDate();
    this.props.toggleDrawer();
  }

  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', overflow: 'scroll' }}>
        <GoogleMap
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={43.84567}
            lng={18.35644}
            text={'Car'}
            clicked={this.onClickHandler}
          />
          {this.props.drawerOpen && <Drawer onClose={this.props.toggleDrawer} />}
        </GoogleMap>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    date: state.date,
    drawerOpen: state.preferences.drawerOpen
  }
}
export default connect(mapStateToProps, { getDate, toggleDrawer })(MapContainer);