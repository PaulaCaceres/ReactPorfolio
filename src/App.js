import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Home, Gallery } from './pages';
import MainBar from './components/MainBar/MainBar.jsx';
import './App.css';
import './index.css';

function getTheme(theme) {
  return createMuiTheme({
    sizes: {
      column: {
        maxWidth: '90%',
        width: '20rem',
        marginLeft: '5vw',
        marginRight: '5vw'
      }
    },
    props: {
      MuiTypography: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    typography: {
      fontFamily: [
        'DMSans',
        'BasierCircle',
        'BasierSquare',
        'NotoSansJP',
        'Roboto',
        'Oxygen',
        'Ubuntu'
      ].join(','),
      primary: {
        main: 'black'
      },
      secondary: {
        light: '#8F9BAE',
        main: '#3C4858',
      },
      highlighted: {
        main: '#2F84DB'
      },
      button: {
        textTransform: 'none'
      },
      toolbarItem: {
        fontSize: '1rem',
      }
    },
    palette: {
      primary: {
        main: '#4C35D8',
      },
      secondary: {
        main: '#467EDD',
      },
    }
  });
}
class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={getTheme({ paletteType: 'dark' })}>
        <CssBaseline />
        <Router>
          <MainBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
