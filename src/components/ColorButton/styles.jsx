import { createStyles } from '@material-ui/core/styles';

export default function styles(theme){
    return createStyles({
        root: {
            backgroundColor: '#c97b63',
            '&:hover': {
                backgroundColor: '#ffddc1',
            },
            padding: '0.3rem 0.8rem 0.3rem 0.8rem',
            borderRadius: '2rem',
        },
    })
}
