import React, { Component } from 'react';
import { connect } from 'react-redux';

class Drawer extends Component {
  render() {
    return (
      <div className="drawer" onClick={this.props.close}>
          {this.props.date}
      </div>
    )
  }
}


export default Drawer;