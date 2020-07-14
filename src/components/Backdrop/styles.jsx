import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
    return createStyles({
        backdrop: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            background: 'rgba($color: #000000, $alpha: 0.3)',
            zIndex: '200',
        }
    });
}