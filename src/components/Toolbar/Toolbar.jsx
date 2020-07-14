import React from 'react';
import { SideBarBtn } from '../';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ToolbarRaw = React.forwardRef((props, ref) => {
    const { classes } = props;
    return (
        <header className={classes.toolbar}>
            <nav className={classes.toolbarNavigation}>
                <div>
                    <SideBarBtn click={props.sidebarClickHandler} />
                </div>
                <div className={classes.toolbarLogo}>
                    <a className={classes.link} href="/"> </a>
                </div>
                <div className={classes.spacer}></div>
            </nav>
        </header>
    )
})

export const Toolbar = withStyles(styles)(ToolbarRaw);
