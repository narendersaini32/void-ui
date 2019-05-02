import React from 'react';
import styled from 'styled-components';
import { grey700 } from '../../consts/colors/colors.json';
import { Button } from '..';
import { Container } from '../reuseable';

const Main = styled.div`
    height: 100%;
    width: -webkit-fill-available;
    background:${grey700};
    position: absolute;
    display: flex;
    flex-wrap: wrap;
`;

const Home = () => (
  <Main>
    <Container title="Black Text Color">
      <Button text="Default" />
      <Button text="yellow" color="yellow" />
      <Button text="red" color="red" />
      <Button text="pink" color="pink" />
      <Button text="cyan" color="cyan" />
      <Button text="indigo" color="indigo" />
      <Button text="blue" color="blue" />
      <Button text="yellowvivid" color="yellowvivid" />
      <Button text="bluregrey" color="bluregrey" />


    </Container>
    <Container title="white background">
      <Button text="Default" textColor="grey" color="white" />
      <Button text="yellow" textColor="yellow" color="white" />
      <Button text="red" textColor="red" color="white" />
      <Button text="pink" textColor="pink" color="white" />
      <Button text="cyan" textColor="cyan" color="white" />
      <Button text="indigo" textColor="indigo" color="white" />
      <Button text="blue" textColor="blue" color="white" />
      <Button text="yellowvivid" textColor="yellowvivid" color="white" />
      <Button text="bluregrey" textColor="bluregrey" color="white" />


    </Container>
    <Container title="white text color">
      <Button text="Default" textColor="white" />
      <Button text="yellow" color="yellow" textColor="white" />
      <Button text="red" color="red" textColor="white" />
      <Button text="pink" color="pink" textColor="white" />
      <Button text="cyan" color="cyan" textColor="white" />
      <Button text="indigo" color="indigo" textColor="white" />
      <Button text="blue" color="blue" textColor="white" />
      <Button text="yellowvivid" color="yellowvivid" textColor="white" />
      <Button text="bluregrey" color="bluregrey" textColor="white" />


    </Container>
    <Container title="with border and box shadow">
      <Button text="Default" textColor="white" border={1} />
      <Button text="yellow" textColor="yellow" color="white" border={1} />
      <Button text="red" textColor="red" color="white" border={1} />
      <Button text="pink" textColor="pink" color="white" border={1} />
      <Button text="cyan" textColor="cyan" color="white" border={1} />
      <Button text="indigo" textColor="indigo" color="white" border={1} />
      <Button text="blue" textColor="blue" color="white" border={1} />
      <Button text="yellowvivid" textColor="yellowvivid" color="white" border={1} />
      <Button text="bluregrey" textColor="bluregrey" color="white" border={1} />

    </Container>
    <Container title="without boxShadow">
      <Button text="Default" textColor="white" boxShadow={0} />
      <Button text="yellow" textColor="yellow" color="white" boxShadow={0} />
      <Button text="red" textColor="red" color="white" boxShadow={0} />
      <Button text="pink" textColor="pink" color="white" boxShadow={0} />
      <Button text="cyan" textColor="cyan" color="white" boxShadow={0} />
      <Button text="indigo" textColor="indigo" color="white" boxShadow={0} />
      <Button text="blue" textColor="blue" color="white" boxShadow={0} />
      <Button text="yellowvivid" textColor="yellowvivid" color="white" boxShadow={0} />
      <Button text="bluregrey" textColor="bluregrey" color="white" boxShadow={0} />

    </Container>
    <Container title="without boxShadow and with border">
      <Button text="Default" textColor="white" boxShadow={0} border={1} />
      <Button text="yellow" textColor="yellow" color="white" boxShadow={0} border={1} />
      <Button text="red" textColor="red" color="white" boxShadow={0} border={1} />
      <Button text="pink" textColor="pink" color="white" boxShadow={0} border={1} />
      <Button text="cyan" textColor="cyan" color="white" boxShadow={0} border={1} />
      <Button text="indigo" textColor="blue" color="white" boxShadow={0} border={1} />
      <Button text="blue" textColor="blue" color="white" boxShadow={0} border={1} />
      <Button text="yellowvivid" textColor="yellowvivid" color="white" boxShadow={0} border={1} />
      <Button text="bluregrey" textColor="bluregrey" color="white" boxShadow={0} border={1} />

    </Container>
    <Container title="rounded buttons">
      <Button text="Default" textColor="white" borderRadius={20} />
      <Button text="yellow" textColor="yellow" color="white" borderRadius={20} />
      <Button text="red" textColor="red" color="white" borderRadius={20} />
      <Button text="pink" textColor="pink" color="white" borderRadius={20} />
      <Button text="cyan" textColor="cyan" color="white" borderRadius={20} />
      <Button text="indigo" textColor="blue" color="white" borderRadius={20} />
      <Button text="blue" textColor="blue" color="white" borderRadius={20} />
      <Button text="yellowvivid" textColor="yellowvivid" color="white" borderRadius={20} />
      <Button text="bluregrey" textColor="bluregrey" color="white" borderRadius={20} />

    </Container>

  </Main>
);

export default Home;
