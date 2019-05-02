import React from 'react';
import styled from 'styled-components';
import { grey700 } from '../../consts/colors/colors.json';
import { Button } from '..';
import { Container } from '../reuseable';

const Main = styled.div`
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    background:${grey700};
    position: absolute;
`;

const Home = () => (
  <Main>
    <Container title="buttons">
      <Button text="awesome" />
      <Button text="cancel" color="yellow" />
      <Button text="error!" color="red" />
    </Container>
    <Container title="buttons">
      <Button text="awesome" />
      <Button text="cancel" color="yellow" border="0px" />
      <Button text="error!" color="red" border="0px" />
    </Container>
  </Main>
);

export default Home;
