import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GalleryCarousel = ({ images, onSelect }) => {
  return (
    <Wrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  white-space: nowrap;
  overflow-y: scroll;
`;

const Box = styled.div`
  display: inline-block;
  margin-right: 20px;
  border: 3px solid #333;
  width: 100px;
  height: 100px;
  background-color: #fff;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default GalleryCarousel;