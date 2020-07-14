import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({
        imagesTitle: {
            textAlign: 'left',
            color: 'black',
            marginTop: '2rem',
            padding: '2rem'
        },
        about: {
            height: '100vh',
            padding: '6rem'
        }
    });
}
