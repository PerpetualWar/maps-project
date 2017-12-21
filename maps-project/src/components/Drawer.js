import React, { Component } from 'react';
import { connect } from 'react-redux';

const Drawer = (props) => (
  <div className="drawer" onClick={props.close}>
    <div className="drawer-item">
      {props.date}
    </div>
  </div>
);


export default Drawer;