import React, { Component } from 'react';
import { ImageModal } from '../'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
class ImageRaw extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imagesArray: [],
            isLoaded: false,
            modalShow: false,
        };
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        this.setState({ imagesArray: this.props.imagesArray, isLoaded: true });
    }

    openModal = () => {
        this.setState({ modalShow: true });
    };

    closeModal = () => {
        this.setState({ modalShow: false });
    }

    render() {
        const { classes } = this.props;
        var { isLoaded, imagesArray } = this.state;
        if (!isLoaded) {
            return <div>Is loading..</div>
        } else {
            return (
                <div className={classes.imageContainer}>
                    <img
                        className={classes.imageDisplay}
                        src={imagesArray[0].url}
                        alt={'img'}
                        onClick={() => this.openModal()} />
                    <ImageModal
                        show={this.state.modalShow}
                        onHide={() => this.closeModal()}
                        imagesArray={this.state.imagesArray}
                    />
                </div>
            );
        }
    }
}

export const Image = withStyles(styles)(ImageRaw);
