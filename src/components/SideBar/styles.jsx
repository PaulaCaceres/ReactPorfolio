import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
  return createStyles({
    sideBar: {
      height: '100%',
      background: 'white',
      boxShadow: '1px 0px 7px rgba($color: #000000, $alpha: 0.5)',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '70%',
      maxWidth: '400px',
      zIndex: '300',
      transform: 'translateX(-100%)',
      transition: 'transform 0.3s ease-out',
    },
    sideBarOpen: {
      height: '100%',
      background: 'white',
      boxShadow: '1px 0px 7px rgba($color: #000000, $alpha: 0.5)',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '25vw',
      maxWidth: '400px',
      zIndex: '300',
      transition: 'transform 0.3s ease-out',
      transform: 'translateX(0)',
    },
    headerSidebar: {
      height: '10vh',
      backgroundColor: 'black',
    },
    headerSidebarLogo: {
      margin: '1rem',
      width: '2rem',
    },
    ul: {
      height: '100%',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    },
    li: {
      margin: '0.5rem 0',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
      fontSize: '1.5rem',
      '&:hover': {
        color: ' #f79f02',
      },
      '&:active': {
        color: ' #f79f02',
      },
    },
    contact: {
      color: 'black',
    }
  });
}
