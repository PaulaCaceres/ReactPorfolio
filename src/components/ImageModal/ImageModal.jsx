import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ImageCarousel } from '../'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ImageModalRaw = props => {
  const [images, setImages] = useState(props.imagesArray);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <ImageCarousel images={images} />
      </Modal.Body>
    </Modal>
  )
}

export const ImageModal = withStyles(styles)(ImageModalRaw);
