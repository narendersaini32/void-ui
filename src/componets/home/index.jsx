import React from 'react';
import styled from 'styled-components';
import ButtonRender from './buttonRender';
import InputRender from './inputRender';
import AvatarRender from './avatarRender';

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
    <InputRender />
    <AvatarRender />
  </Main>
);

export default Home;
