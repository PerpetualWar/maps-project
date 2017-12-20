import React from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from '../store/actions/action_preferences';

const Overlay = (props) => {
    const classNames = props.drawerOpen ? 'overlay overlay-active' : 'overlay';
    console.log(props)
    return <div className={classNames} 
    />;
}

const mapStateToProps = ({ preferences: { drawerOpen } }) => ({ drawerOpen });
export default connect(mapStateToProps, { toggleDrawer })(Overlay); 