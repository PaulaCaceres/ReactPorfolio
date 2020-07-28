import React, { Component } from 'react';
import GridImages from '../../components/GridImages/GridImages';
import { Footer } from '../../components';
import styles from './styles'
import { withStyles } from '@material-ui/core/styles';

class Gallery extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.container}>
                    <h1 className={classes.titleGallery}>Gallery</h1>
                    <GridImages />
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(Gallery);
