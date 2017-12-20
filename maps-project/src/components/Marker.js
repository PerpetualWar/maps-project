import React, { Component } from 'react';

class Marker extends Component {
  render() {
    return (
      <div style={{
        position: 'relative', color: 'white', background: 'red',
        height: 40, width: 60, top: -20, left: -30, cursor: 'pointer'
      }}
        onClick={this.props.clicked}
      >
        {this.props.text}
      </div>
    )
  }
}

export default Marker;