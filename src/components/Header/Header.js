import React from "react";
import Toolbar from './toolbar/toolbar'
import SideDrawer from './sideDrawer/sideDrawer'
import Backdrop from './backdrop/backdrop'
import './styles.scss'


class Header extends React.Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
       this.setState(prevState => {
           return { sideDrawerOpen: !prevState.sideDrawerOpen }
       })
    };

    backdropClickHandler = () => {
        this.setState({
            sideDrawerOpen: false
        })
    };


    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <>
            <div className="stickyHeader" >
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
            </div>
        </>
        );
    }
}
export default Header