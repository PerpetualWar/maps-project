import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from '../store/actions/action_preferences';

class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
        from drawer
      </div>
    )
  }
}


export default connect(null, { toggleDrawer })(Drawer);