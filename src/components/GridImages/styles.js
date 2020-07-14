import { makeStyles } from '@material-ui/core/styles';

export default function useStyles(theme){
  return makeStyles({

    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      /* backgroundColor: theme.palette.background.paper, */
    },
    gridList: {
      width: 500,
      height: 450,
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    }
  })
}
