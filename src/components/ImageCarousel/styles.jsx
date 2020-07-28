import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
  return createStyles({
    titleContainer: {
      textAlign: '-webkit-center',
    },
    imageTitle: {
      width: 'fit-content',
      backgroundColor:
        'rgba(0,0,0,0.3)',
    }
  });
}