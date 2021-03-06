import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
class FooterRaw extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Jumbotron fluid className={classes.footer}>
                    Get in touch{' '}
                    <a
                        className={classes.link}
                        href="mailto:paulacaceres.dis@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        paulacaceres.dis@gmail.com
                    </a>.
            </Jumbotron>
        )
    }
}

export const Footer = withStyles(styles)(FooterRaw)
