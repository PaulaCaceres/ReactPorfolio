import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({
        about: {
            height: '100vh',
            padding: '6rem'
        },
        leftContainer: {
            textAlign: 'left',
        },
        aboutTitle: {
            textAlign: 'left',
            color: 'black',
            padding: '2rem'

        },
        aboutDescription: {
            textAlign: 'left',
            padding: '1rem 2rem 2rem 2rem'
        },
        projectsBtn: {
            backgroundColor: '#c97b63',
            color: 'white',
            padding: '0.5rem 2rem 0.5rem 2rem',
            borderRadius: '2rem',
            textDecoration: 'none',
            fontSize: '1rem',
            marginLeft: '2rem',
            '&:hover': {
                backgroundColor: '#ffddc1',
                color: 'white',
            },
            '&:active': {
                color: ' #f79f02',
            },
        },
        picture: {
            border: 'none'
        },
    });
}
