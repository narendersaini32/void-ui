import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { grey300 } from '../../../consts/colors/colors.json';

const StyledContainer = styled.div`
  padding: 20px ;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
`;
const FieldSet = styled.fieldset`
  max-width: 500px;
  margin: 20px;
  border:1px solid;
  border-radius: 22px;
  background:${grey300};
  height: fit-content;
`;

const Legend = styled.legend`
  text-transform: capitalize;
  font-weight: 600;
  border-radius: 4px;
  background:${grey300};
`;

const Container = ({ children, title }) => (
  <FieldSet>
    <Legend>{title}</Legend>
    <StyledContainer>{children}</StyledContainer>
  </FieldSet>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default Container;
