import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { grey300 } from '../../../consts/colors/colors.json';

const StyledContainer = styled.div`
  padding: 20px ;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
`;
const FieldSet = styled.fieldset`
width: inherit;
  margin: 42px;
  border:1px solid ${props => props.borderColor};
  border-radius: 22px;
  background:${grey300};
  height: fit-content;
`;

const Legend = styled.legend`
  text-transform: capitalize;
  font-weight: ${props => props.fontWeight};
  border-radius: 4px;
  background:${grey300};
`;

const Container = ({
  children, title, fontWeight, borderColor,
}) => (
  <FieldSet borderColor={borderColor}>
    <Legend fontWeight={fontWeight}>{title}</Legend>
    <StyledContainer>{children}</StyledContainer>
  </FieldSet>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  fontWeight: PropTypes.number,
  borderColor: PropTypes.string,
};

Container.defaultProps = {
  fontWeight: 100,
  borderColor: 'white',
};
export default Container;
