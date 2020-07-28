import React from 'react';
import { firebaseDB } from "../../firebase-config/firebase-config";
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from '../';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import ColorButton from '../ColorButton';

class ImagesContainerRaw extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            isLoaded: false,
            portraitImages: [],
            landscapeImages: [],
            productsImages: [],
            addToFav: false,
        }
    }

    componentDidMount() {
        this.getImages();
    }

    getImages = () => {
        firebaseDB.on('child_added', (snapshot) => {
            let response = snapshot.val();
            response.map(image => {
                if (image.type === "portrait") {
                    this.setState({ portraitImages: [...this.state.portraitImages, image] })
                } else if (image.type === "landscape") {
                    this.setState({ landscapeImages: [...this.state.landscapeImages, image] })
                } else {
                    this.setState({ productsImages: [...this.state.productsImages, image] })
                }
            })
            this.setState({ images: response, isLoaded: true })
        });
    }

    render() {
        const { classes } = this.props;
        var { isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Is loading..</div>
        } else {
            return (
                <Container fluid className={classes.images} style={{ height: 'auto' }}>
                    <h1 className={classes.imagesTitle}>Portfolio</h1>
                    <ColorButton
                        variant="contained"
                        color="primary"
                        className={classes.galleryBtn}
                        href="/gallery"
                    >
                        Gallery
                        </ColorButton>
                    <Row className="justify-content-md-center">
                        <Col sm={4}>
                            <Image
                                imagesArray={this.state.portraitImages} />
                        </Col>
                        <Col sm={4}>
                            <Image imagesArray={this.state.landscapeImages} />
                        </Col>
                        <Col sm={4}>
                            <Image imagesArray={this.state.productsImages} />
                        </Col>
                    </Row>

                </Container>
            );
        }
    }
}

export const ImagesContainer = withStyles(styles)(ImagesContainerRaw);
