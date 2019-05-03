import React from 'react';
import styled from 'styled-components';
import ButtonRender from './buttonRender';

const Main = styled.div`
    height: 100%;
    width: -webkit-fill-available;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Home = () => (
  <Main>
    <ButtonRender />

  </Main>
);

export default Home;
