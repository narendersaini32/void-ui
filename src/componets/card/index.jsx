import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors, { grey300 } from '../../consts/colors/colors.json';


const StyledMain = styled.div`
  width: 345px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${props => props.background};
  margin:20px;
`;
const StyledImgDiv = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 140px;
  background-image: url(${props => props.src});
`;
const StyledContent = styled.div`
  padding: 16px;
`;
const StyledTitle = styled.h2`
  margin-bottom: 0.35em;
  color: ${props => props.secondaryColor};
  font-size: 30px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0em;
  text-transform: capitalize;
  &:first-letter{
      font-size:55px
  }
`;

const StyledText = styled.p`
  color: ${props => props.secondaryColor};
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;
`;
const Card = ({
  src, bgColor, textColor, text, title,
}) => {
  const colorNumber = ['400', '500'];
  const background = colors[bgColor + colorNumber[1]] || bgColor;
  const secondaryColor = colors[textColor + colorNumber[1]] || textColor;
  return (
    <StyledMain background={background}>
      <StyledImgDiv src={src} />
      <StyledContent>
        <StyledTitle secondaryColor={secondaryColor}>{title}</StyledTitle>
        <StyledText secondaryColor={secondaryColor}>{text}</StyledText>
      </StyledContent>
    </StyledMain>
  );
};

Card.propTypes = {
  src: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};
Card.defaultProps = {
  src:
    'https://i.kinja-img.com/gawker-media/image/upload/s--vSY-o42Q--/c_scale,f_auto,fl_progressive,q_80,w_800/ecq5rsk3n1nolujedskk.jpg',
  title: 'Title',
  text:
    'By default, we use the combination of a <div> element and a background image to display the media. It can be problematic in some situations. For instance, you might want to display a video.',
  bgColor: grey300,
  textColor: 'black',
};
export default Card;
