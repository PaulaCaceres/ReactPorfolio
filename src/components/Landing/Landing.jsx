import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/images/Logo-nombre-blanco.svg';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class LandingRaw extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Container fluid className={classes.hero}>
                    <Row>
                        <Col>
                            <img src={logo} className={classes.logoStyle} alt="Logo" />
                            <div className={classes.titleStyle} >
                                <h3>Software Developer & Audiovisual Designer</h3>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export const Landing = withStyles(styles)(LandingRaw);
