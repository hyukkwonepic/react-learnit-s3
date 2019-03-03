import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GalleryCarousel from '../GalleryCarousel';

export default class Gallery extends React.Component {
  state = {
    selectedImageType: 'front_default',
  }

  handleSelectImage = (type) => {
    this.setState({ selectedImageType: type });
  }

  render() {
    const { sprites } = this.props;
    const { selectedImageType } = this.state;

    let selectedImageUrl = null;
    let carouselImages = [];

    if (sprites) {
      selectedImageUrl = sprites[selectedImageType];
      carouselImages = Object.keys(sprites).filter((key) => {
        return sprites[key] !== null
      }).map((key) => {
        return {
          type: key,
          url: sprites[key]
        }
      });
    }

    return (
      <Wrapper>
        <Main image={selectedImageUrl} />
        <GalleryCarousel
          images={carouselImages}
          onSelect={this.handleSelectImage}
        />
      </Wrapper>
    );
  }
}

Gallery.propTypes = {
  sprites: PropTypes.object
}

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Main = styled.div`
  width: 100%;
  height: 270px;
  border: 3px solid #333;
  background-color: #fff;
  margin-bottom: 30px;
  ${(props) => {
    if (props.image) {
      return `background-image: url(${props.image});`
    }
  }}
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
`;