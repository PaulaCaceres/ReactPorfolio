import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
  return createStyles({
    imageContainer: {
      height: '80vh',
      justifyContent: 'center',
    },
    imageDisplay: {
      width: '100%',
      height: '80%',
      marginTop: '2rem',
      verticalAlign: 'middle',
      objectFit: 'cover',
      objectPosition: 'center',
    }
  });
}