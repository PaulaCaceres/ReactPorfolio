import React, { Component } from 'react';
import GridImages from '../../components/GridImages/GridImages';
import './Gallery.scss';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class Gallery extends Component {
    render() {
        return (
            <div>
                <h1>Gallery</h1>
                <GridImages />
            </div>
        )
    }
}

export default withStyles(styles)(Gallery);
