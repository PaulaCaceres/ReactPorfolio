import React, { Component, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ImageCarouselRaw = props => {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState(props.images)
    const { classes } = props;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            {images.map(image =>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image.url}
                        alt="First slide"
                    />
                    <Carousel.Caption className={classes.titleContainer}>
                        <p className={classes.imageTitle}>{image.title}</p>
                    </Carousel.Caption>
                </Carousel.Item>)}
        </Carousel>
    )
}

export const ImageCarousel = withStyles(styles)(ImageCarouselRaw);
