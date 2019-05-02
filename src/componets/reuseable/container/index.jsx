import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { grey900, grey300, red050 } from '../../../consts/colors/colors.json';

const StyledContainer = styled.div`
  padding: 10px ;
  display: flex;
  justify-content: center;
`;
const FieldSet = styled.fieldset`
  width: fit-content;
  margin: auto;
  border: 5px solid ${grey900};
  border-radius: 22px;
  margin: 10px auto 42px auto;
  box-shadow: 4px 4px;
  background:${grey300};
  height: fit-content;
`;

const Legend = styled.legend`
  text-transform: capitalize;
  font-weight: 600;
  border-radius: 4px;
  background:${red050};
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
