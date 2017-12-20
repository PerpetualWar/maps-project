import React from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from '../actions';

const Overlay = (props) => {
    const onBackdropClick = () => {
        props.toggleDrawer();
    }
    const classNames = props.drawerOpen ? 'overlay overlay-active' : 'overlay';
    return <div className={classNames} onClick={onBackdropClick} />;
}

const mapStateToProps = ({ preferences: { drawerOpen } }) => ({ drawerOpen });
export default connect(mapStateToProps, { toggleDrawer })(Overlay); 