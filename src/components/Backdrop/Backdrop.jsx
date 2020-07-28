import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
class BackdropRaw extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.backdrop} onClick={this.props.click}></div>
        )
    }
}

export const Backdrop = withStyles(styles)(BackdropRaw)
