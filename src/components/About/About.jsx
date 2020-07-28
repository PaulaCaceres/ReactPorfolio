import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import mypic from '../../assets/images/mypic.jpg';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import ColorButton from '../ColorButton';

class AboutRaw extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Container fluid className={classes.about}>
                <Row className="justify-content">
                    <Col sm={8} className={classes.leftContainer}>
                        <h1 className={classes.aboutTitle}>About me</h1>
                        <p className={classes.aboutDescription}>
                            I'm a Developer and an Image and Sound Designer.
                            As an Image and Sound Designer of the University of Buenos Aires I learned about cinema, photography, art, sound.
                            I worked freelance for different companies, individuals, and for art biennials as a videographer, photographer and production assistant.
                            You can visit some of my projects at github.
                        </p>
                        <ColorButton
                            variant="contained"
                            color="primary"
                            className={classes.projectsBtn}
                            href="https://paulacaceres.github.io/paulacaceresweb/"
                            target="_blank">
                            Projects
                        </ColorButton>
                    </Col>
                    <Col sm={4}>
                        <Image src={mypic} thumbnail alt="mypicture" className={classes.picture} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export const About = withStyles(styles)(AboutRaw);


