import React, { Component } from 'react';
import './Home.scss';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
/* import Toolbar from '../components/Toolbar/Toolbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Backdrop from '../components/Backdrop/Backdrop'; */

/* import Footer from '../../components/Footer/Footer';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About'; 
import ImagesContainer from '../../components/ImagesContainer/ImagesContainer';
*/
import { Landing, About, Footer, ImagesContainer } from '../../components';


class Home extends Component {
  constructor() {
    super();

    this.state = {
      /* sidebarOpen: false */
    };
  }


  /* sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen }
    });
  };
 
  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  }; */

  render() {

    return (
      <div style={{ height: '100vh' }} className="App">
        <Landing />
        <main>
          <ImagesContainer />
          <About />
        </main>
        <Footer />

        {/*  <ContextFav>
            <Router>
              <Switch>
                <Route path="/" exact component={UserList} />
                <Route path="/favorites" component={FavoriteList} />
              </Switch>
            </Router>
          </ContextFav> */}

      </div>
    );
  }
}

export default withStyles(styles)(Home);