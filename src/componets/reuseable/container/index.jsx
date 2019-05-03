import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { grey200 } from '../../../consts/colors/colors.json';

const StyledContainer = styled.div`
  padding: 20px ;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  align-items: center;
`;
const FieldSet = styled.fieldset`
width: inherit;
  margin: 42px;
  border: ${props => `${props.border}px solid ${props.borderColor}`};
  border-radius: 22px;
  background:${props => props.background};
  height: fit-content;
`;

const Legend = styled.legend`
  text-transform: capitalize;
  font-weight: ${props => props.fontWeight};
  border-radius: 4px;
  background:black;
  color:white;
`;

const Container = ({
  children, title, fontWeight, borderColor, background, border,
}) => (
  <FieldSet borderColor={borderColor} background={background} border={border}>
    <Legend fontWeight={fontWeight}>{title}</Legend>
    <StyledContainer>{children}</StyledContainer>
  </FieldSet>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  fontWeight: PropTypes.number,
  borderColor: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.number,
};

Container.defaultProps = {
  fontWeight: 100,
  borderColor: 'white',
  background: 'black',
  border: 0,
};
export default Container;
