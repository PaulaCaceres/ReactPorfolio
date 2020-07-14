import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
  return createStyles({
    toolbar: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '56px',
      zIndex: '100',
    },

    toolbarNavigation: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      padding: '0 1rem',
    },

    toolbarLogo: {
      marginLeft: '1rem',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.5rem',
    },
    spacer: {
      flex: '1',
    },
    toolbarNavigationItems: {
      ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
        display: 'flex',
      },
      li: {
        padding: '0 0.5rem',
      },
      a: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.5rem',
      },
      '&:hover': {
        color: 'orange',
      },
      '&:active': {
        color: 'orange',
      },
    },
    /* toolbarNavigationItems: {
      li: {
        padding: '0 0.5rem',
      },
      a: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.5rem',
      },
      '&:hover': {
        color: 'orange',
      },
      '&:active': {
        color: 'orange',
      },
    }, */
    /* toolbarNavigationItems: {
      a: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.5rem',
      },
      '&:hover': {
        color: 'orange',
      },
      '&:active': {
        color: 'orange',
      },
    } */
  });
}
