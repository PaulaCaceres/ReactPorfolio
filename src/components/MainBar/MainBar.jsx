import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Backdrop, SideBar, Toolbar } from '../';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class MainBar extends Component {
  
  constructor() {
    super();

    this.state = {
      sidebarOpen: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ sidebarOpen: false })
    }
  }

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <Toolbar sidebarClickHandler={this.sidebarToggleClickHandler} />
        <SideBar show={this.state.sidebarOpen} />
        {backdrop}
      </div>
    );
  }
}

// export const MainBar = withStyles(styles)(MainBarRaw);
export default withRouter(props => <MainBar {...props} />);