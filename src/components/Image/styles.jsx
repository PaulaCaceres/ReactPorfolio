import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
  return createStyles({
    imageContainer: {
      height: '100vh',
      justifyContent: 'center',
    },
    imageDisplay: {
      width: '100%',
      height: '80%',
      marginTop: '5rem',
      verticalAlign: 'middle',
      objectFit: 'cover',
      objectPosition: 'center',
    }
  });
}