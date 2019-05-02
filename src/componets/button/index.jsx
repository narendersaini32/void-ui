import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../consts/colors/colors.json';

const StyledButton = styled.button`
    border:0px;
    margin:10px;
    cursor: pointer;
    background: ${props => props.primaryColor};
    border-radius: 7px;
    box-shadow: 2px 4px ;
    color: black;
    font-size: 19px;
    outline: none;
    text-align: center;
    user-select: none;
    transition: all 0.2s ease;
    padding: 7px 15px 7px 15px;
    text-transform: capitalize;
    &:active{
    top:4px;
    position:relative;
    box-shadow: 0px 0px ;
    }
    &:hover {
    opacity:0.8;
    }
`;
const Button = ({ text, color }) => {
  const colorNumber = ['400', '500'];
  const primaryColor = colors[color + colorNumber[1]];
  const secondaryColor = colors[color + colorNumber[0]];
  return (
    <StyledButton
      type="button"
      secondaryColor={secondaryColor}
      primaryColor={primaryColor}
    >
      {text}
    </StyledButton>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
Button.defaultProps = {
  color: 'grey',
  text: 'click me',
};
export default Button;
