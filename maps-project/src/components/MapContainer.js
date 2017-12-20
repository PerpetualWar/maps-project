import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import { CSSTransition, Transition } from 'react-transition-group';
import Marker from './Marker';
import Drawer from './Drawer';
import { getDate } from '../store/actions/action_date';
import { toggleDrawer } from '../store/actions/action_preferences';
import Spinner from './Spinner';

class MapContainer extends Component {
  static defaultProps = {
    center: { lat: 43.84, lng: 18.35 },
    zoom: 11
  };
  onClickHandler = async () => {
    if (!this.props.date)
      await this.getDate();
    this.props.toggleDrawer();
  }
  getDate = async () => {
    await this.props.getDate();
  }

  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', overflow: 'scroll' }}>
        <CSSTransition classNames="slide" in={this.props.drawerOpen} >
          <Drawer date={this.props.date} close={this.props.toggleDrawer} />
        </CSSTransition>
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
        </GoogleMap>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    date: state.date.date,
    drawerOpen: state.preferences.drawerOpen
  }
}
export default connect(mapStateToProps, { getDate, toggleDrawer })(MapContainer);