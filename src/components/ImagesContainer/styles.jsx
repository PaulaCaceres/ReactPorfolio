import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({
        images: {
            textAlign: 'left',
        },
        imagesTitle: {
            textAlign: 'left',
            color: 'black',
            marginTop: '0.5rem',
            padding: '2rem'
        },
        about: {
            height: '100vh',
            padding: '6rem'
        },
        galleryBtn: {
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
        }
    });
}
