import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({
        footer: {
            padding: '2rem',
            marginBottom: '0',
            backgroundColor: 'black',
                color: 'white',
        },
        link: {
            color: 'white',
            textDecoration: 'none',
            '&:hover': { color: '#f79f02', },
            '&:active': { color: '#f79f02', }
        },
    });
}