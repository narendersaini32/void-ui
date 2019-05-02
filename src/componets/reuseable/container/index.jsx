import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  grey900, grey300, grey700,
} from '../../../consts/colors/colors.json';

const StyledContainer = styled.div`
  padding: 20px ;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
`;
const FieldSet = styled.fieldset`
  max-width: 500px;
  margin: 20px;
  border: 5px solid ${grey900};
  border-radius: 22px;
  box-shadow: 6px 9px 5px 0px rgba(0,0,0,0.75);
  background:${grey300};
  height: fit-content;
`;

const Legend = styled.legend`
  text-transform: capitalize;
  font-weight: 600;
  border-radius: 4px;
  background:${grey700};
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
