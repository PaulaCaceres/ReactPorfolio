import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({
        about: {
            height: '100vh',
            padding: '6rem'
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
            '&:hover': {
                backgroundColor: '#ffddc1',
            },
            padding: '0.5rem 2rem 0.5rem 2rem',
            borderRadius: '2rem',
        },
        picture: {
            border: 'none'
        }
    });
}
