import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({
        mainContainer: {
            textAlign: 'center',
        },
        container: {
            margin: '5rem 3rem',
        },
        titleGallery: {
            margin: '2rem 0',
            textAlign: 'left',
        }
    });
}
