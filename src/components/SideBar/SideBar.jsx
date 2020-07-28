import React, { Component } from 'react';
import logo from '../../assets/images/Logo-iniciales-blanco.svg';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
class SideBarRaw extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if (this.props.show) {
                this.setState({ open: true })
            }
            else {
                this.setState({ open: false })
            }
        }
    }
    render() {
        const { classes } = this.props;
        let sidebarClasses = classes.sideBar;
        if (this.state.open) {
            sidebarClasses = classes.sideBarOpen;
        }
        return (
            <nav className={sidebarClasses}>
                <div className={classes.headerSidebar}>
                    <img src={logo} alt="Logo" className={classes.headerSidebarLogo} />
                </div>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Link className={classes.link} to="/">Home</Link>
                    </li>
                    <li className={classes.li}>
                        <Link className={classes.link} to="/gallery">Gallery</Link>
                    </li>
                    <li className={classes.li}>
                        <a
                            className={classes.link}
                            href="https://paulacaceres.github.io/paulacaceresweb/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Projects
                    </a>
                    </li>
                    <li className={classes.li}>
                        <a
                            className={classes.link}
                            href="mailto:paulacaceres.dis@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get in touch
                    </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export const SideBar = withStyles(styles)(SideBarRaw);
