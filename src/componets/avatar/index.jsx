import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMain = styled.div`
margin: 10px;
width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  position: relative;
  overflow: hidden;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
  background:${props => props.background};
  color:${props => props.textColor};
  text-transform: uppercase;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
`;

const Avatar = ({
  src, size, letter, background, textColor,
}) => (
  <StyledMain size={size} background={background} textColor={textColor}>
    {(letter && letter.substring(0, 2)) || <StyledImg src={src} />}
  </StyledMain>
);

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
  letter: PropTypes.string,
  background: PropTypes.string,
  textColor: PropTypes.string,
};
Avatar.defaultProps = {
  src: 'https://i.kinja-img.com/gawker-media/image/upload/s--vSY-o42Q--/c_scale,f_auto,fl_progressive,q_80,w_800/ecq5rsk3n1nolujedskk.jpg',
  size: 40,
  letter: '',
  background: 'black',
  textColor: 'white',
};
export default Avatar;
