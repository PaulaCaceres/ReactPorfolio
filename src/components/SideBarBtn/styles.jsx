import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({ 
        toggleBtn: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '24px',
          width: '36px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0',
          boxSizing: 'border-box',
          focus: {
            outline: 'none',
        }
      },
      toggleBtnLine: {
          width: '30px',
          height: '2px',
          background: 'white',
      } 
    });
}