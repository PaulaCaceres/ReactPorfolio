import React, { Component } from 'react';
import './Home.scss';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import { Landing, About, Footer, ImagesContainer } from '../../components';


class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home} style={{ height: '100vh' }} className="App">
        <Landing />
        <main>
          <ImagesContainer />
          <About />
        </main>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
