import React, { Component } from 'react';

const Marker = (props) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30, cursor: 'pointer'
  }}
    onClick={props.clicked}
  >
    {props.text}
  </div>
);

export default Marker;