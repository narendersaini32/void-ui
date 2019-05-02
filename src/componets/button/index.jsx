import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../consts/colors/colors.json';

const StyledButton = styled.button`
font-family: 'Dancing Script', cursive;
  border: ${props => `${props.border}px solid ${props.textColor}`};
  margin: 10px;
  cursor: pointer;
  background: ${props => props.primaryColor};
  border-radius: ${props => props.borderRadius}px;
  box-shadow: ${props => `${props.boxShadow}px ${props.boxShadow}px`};
  color: ${props => props.textColor};
  font-size: 19px;
  outline: none;
  text-align: center;
  user-select: none;
  transition: all 0.2s ease;
  padding: 7px 15px 7px 15px;
  text-transform: capitalize;
  &:active {
    top: 4px;
    position: relative;
    box-shadow: 0px 0px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
const Button = ({
  text, color, textColor, border, boxShadow, borderRadius,
}) => {
  const colorNumber = ['400', '500'];
  const primaryColor = colors[color + colorNumber[1]] || color;
  const secondaryColor = colors[color + colorNumber[0]] || color;
  const textColorFinal = colors[textColor + colorNumber[0]] || textColor;
  return (
    <StyledButton
      type="button"
      secondaryColor={secondaryColor}
      primaryColor={primaryColor}
      textColor={textColorFinal}
      border={border}
      boxShadow={boxShadow}
      borderRadius={borderRadius}
    >
      {text}
    </StyledButton>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.number,
  boxShadow: PropTypes.number,
  borderRadius: PropTypes.number,
};
Button.defaultProps = {
  color: 'white',
  text: 'click me',
  textColor: 'black',
  border: 0,
  boxShadow: 2,
  borderRadius: 7,
};
export default Button;
