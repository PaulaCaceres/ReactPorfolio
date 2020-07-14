import React, { Component } from 'react';
import firebase from 'firebase';
import { firebaseDB, firebaseRef } from "../../firebase-config/firebase-config";
import useStyles from './styles.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

class GridImages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            isLoaded: false,
            portraitImages: [],
            landscapeImages: [],
            productsImages: [],
            likesAdded: [],
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

    addToFav = (id) => {
        let likesRef = firebaseRef.ref(`/pictures/${id}/likes`);
        let likes;

        likesRef.on('value', function (snapshot) {
            likes = snapshot.val();
        });

        if (this.state.likesAdded.includes(id)) {
            console.log('lo tiene');
            let currentArray = this.state.likesAdded;
            let newArray = [];
            console.log('currentArray I', currentArray);
            newArray = currentArray.filter(value => value !== id);
            console.log('newArray II', newArray);
            this.setState({ likesAdded: newArray })
            let updates = {};
            updates[`/pictures/${id}/likes`] = likes - 1;
            firebaseDB.update(updates);
        }
        else {
            console.log('NO lo tiene');
            this.setState({ likesAdded: [...this.state.likesAdded, id] })

            let updates = {};
            updates[`/pictures/${id}/likes`] = likes + 1;
            firebaseDB.update(updates);
        }
        this.getImages();
    };

    render() {
        const classes = useStyles();
        var { isLoaded, images } = this.state;

        if (!isLoaded) {
            return <div>Is loading..</div>
        } else {
            return (
                <div className={classes.root}>
                    <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                        {images.map((tile, index) => (
                            <GridListTile key={tile.title} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                                <img src={tile.url} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    titlePosition="top"
                                    actionIcon={
                                        <FormControlLabel
                                            label={tile.likes}
                                            control={
                                                <Checkbox
                                                    onClick={() => { this.addToFav(index) }}
                                                    icon={<FavoriteBorder />}
                                                    checkedIcon={<Favorite />}
                                                    name="cBox"
                                                />
                                            }
                                        />
                                    }
                                    actionPosition="left"
                                    className={classes.titleBar}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            );
        }
    }
}

export default GridImages;
