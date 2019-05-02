import React from 'react';
import styled from 'styled-components';
import { grey600, grey500 } from '../../consts/colors/colors.json';

const StyledButton = styled.button`
    border:1px solid ${grey500};
    cursor: pointer;
    background: ${grey600};
    border-radius: 7px;
    box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
    color: black;
    font-size: 19px;
    outline: none;
    text-align: center;
    user-select: none;
    transition: all 0.2s ease;
    padding: 7px 15px 7px 15px;
    &:active{
    top:4px;
    position:relative;
    border:0px;
    box-shadow: 0px 0px rgba(0, 0, 0, 0.2);
    }
    &:hover {
    opacity:0.8;
    }
`;
const Button = () => <StyledButton type="button">Button</StyledButton>;

export default Button;
