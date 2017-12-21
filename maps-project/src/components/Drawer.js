import React, { Component } from 'react';
import { connect } from 'react-redux';

class Drawer extends Component {
  render() {
    return (
      <div className="drawer" onClick={this.props.close}>
        <div className="drawer-item">
          {this.props.date}
        </div>
      </div>
    )
  }
}


export default Drawer;