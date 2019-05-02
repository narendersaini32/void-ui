import React from 'react';
import styled from 'styled-components';
import { grey700 } from '../../consts/colors/colors.json';
import { Button } from '..';

const Main = styled.div`
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    background:${grey700};
`;
const Container = styled.div`
    padding: 100px 100px 100px 100px;
    display: flex;
    justify-content: center;
`;
const Home = () => (
  <Main>
    <Container>
      <Button text="awesome" />
      <Button text="cancel" color="yellow" />
      <Button text="error!" color="red" />
    </Container>
  </Main>
);

export default Home;
