import React, { Component } from 'react';
import GridImages from '../../components/GridImages/GridImages';
import './Gallery.scss';

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

export default Gallery;
