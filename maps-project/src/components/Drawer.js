import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { toggleDrawer } from '../store/actions/action_preferences';

class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
          {this.props.date}
        {/* <div className="drawer-item">
        </div> */}
      </div>
    )
  }
}


export default Drawer;