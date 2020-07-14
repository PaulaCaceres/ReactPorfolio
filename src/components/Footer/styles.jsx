import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({
        footer: {
            height: '20vh',
            marginBottom: '0',
            backgroundColor: 'black',
        },
        p: {
            color: 'white',
        },
        a: {
            color: 'white',
            textDecoration: 'none',
            '&:hover': { color: '#f79f02', },
            '&:active': { color: '#f79f02', }
        },
    });
}