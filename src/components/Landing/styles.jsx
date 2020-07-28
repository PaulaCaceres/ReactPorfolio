import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
  return createStyles({
    hero: {
      backgroundColor: '#f79f02',
      height: '100vh',
    },
    logoStyle: {
      marginTop: '12rem',
      width: '400px'
    },
    titleStyle: {
      marginTop: '2rem',
    }
  });
}
