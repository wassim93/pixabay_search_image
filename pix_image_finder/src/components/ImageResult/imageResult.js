import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ActionZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
class ImageResult extends Component {
  render() {
    let imageContent = this.loadData();
    return <div>{imageContent}</div>;
  }

  loadData() {
    let imagesContent;
    const { data } = this.props;
    if (data) {
      imagesContent = (
        <GridList cols={3}>
          {data.map((img) => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ActionZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL}></img>
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imagesContent = null;
    }

    return imagesContent;
  }
}

ImageResult.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ImageResult;
