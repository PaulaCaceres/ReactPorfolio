import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const SideBarBtnRaw = React.forwardRef((props, ref) => {
    const { classes } = props;
    return (
        <button className={classes.toggleBtn} onClick={props.click}>
            <div className={classes.toggleBtnLine} />
            <div className={classes.toggleBtnLine}></div>
            <div className={classes.toggleBtnLine}></div>
        </button>
    )
})

export const SideBarBtn = withStyles(styles)(SideBarBtnRaw);
