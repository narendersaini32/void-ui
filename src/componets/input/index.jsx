import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../consts/colors/colors.json';

const StyledInputMain = styled.div`
  position: relative;
  margin: 30px;
`;
const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  color: ${props => props.textColor};
  border-radius: ${props => `${props.borderRadius}px 0px 0px ${props.borderRadius}px`};
  padding: 0 20px;
  background: ${props => props.background};
  transform: translateZ(0) translateX(0);
  transition: all 0.3s ease-in;
`;
const StyledInput = styled.input`
  display: inline-block;
  width: 500px;
  height: 40px;
  box-sizing: border-box;
  outline: none;
  border:0px;
  border-radius: ${props => props.borderRadius}px;
  padding: 10px 10px 10px 100px;
  transition: all 0.1s ease-out;
  box-shadow: ${props => `${props.boxShadow}px ${props.boxShadow}px ${props.background}`};
  &:focus {
    padding: 10px;
    transition: all 0.3s ease-out;
    transition-delay: 0.2s;
    box-shadow: 0 0 34px ${props => props.background};
  }
  &:focus + ${StyledLabel} {
    transform: translateY(-120%) translateX(0%);
    transition: all 0.1s ease-out;
    border-radius: ${props => props.borderRadius}px;
    }
      &:hover +${StyledLabel} {
        background: white;
        color: black;
      }
`;

const Input = ({
  bgColor, textColor, borderRadius, boxShadow,
}) => {
  const colorNumber = ['400', '500'];
  const background = colors[bgColor + colorNumber[1]] || bgColor;

  return (
    <StyledInputMain>
      <StyledInput
        type="text"
        borderRadius={borderRadius}
        background={background}
        placeholder="Try typing something in here!"
        boxShadow={boxShadow}
        textColor={textColor}
      />
      <StyledLabel background={background} borderRadius={borderRadius} textColor={textColor}>
        Name
      </StyledLabel>
    </StyledInputMain>
  );
};

Input.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.number,
  boxShadow: PropTypes.number,
};
Input.defaultProps = {
  bgColor: 'white',
  textColor: 'black',
  borderRadius: 7,
  boxShadow: 4,
};
export default Input;
