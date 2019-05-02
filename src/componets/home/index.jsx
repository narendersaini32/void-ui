import React from 'react';
import styled from 'styled-components';
import { Button } from '..';
import { Container } from '../reuseable';

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
    <Container title="rounded buttons">
      <Button text="Default" textColor="black" borderRadius={20} />
      <Button text="yellow" textColor="yellow" borderRadius={20} />
      <Button text="red" textColor="red" borderRadius={20} />
      <Button text="pink" textColor="pink" borderRadius={20} />
      <Button text="cyan" textColor="cyan" borderRadius={20} />
      <Button text="indigo" textColor="blue" borderRadius={20} />
      <Button text="blue" textColor="blue" borderRadius={20} />
      <Button text="yellowvivid" textColor="yellowvivid" borderRadius={20} />
      <Button text="bluegrey" textColor="bluegrey" borderRadius={20} />

    </Container>
    <Container title="Black Text Color">
      <Button text="Default" />
      <Button text="yellow" color="yellow" />
      <Button text="red" color="red" />
      <Button text="pink" color="pink" />
      <Button text="cyan" color="cyan" />
      <Button text="indigo" color="indigo" />
      <Button text="blue" color="blue" />
      <Button text="yellowvivid" color="yellowvivid" />
      <Button text="bluegrey" color="bluegrey" />


    </Container>
    <Container title="white background">
      <Button text="Default" textColor="grey" />
      <Button text="yellow" textColor="yellow" />
      <Button text="red" textColor="red" />
      <Button text="pink" textColor="pink" />
      <Button text="cyan" textColor="cyan" />
      <Button text="indigo" textColor="indigo" />
      <Button text="blue" textColor="blue" />
      <Button text="yellowvivid" textColor="yellowvivid" />
      <Button text="bluegrey" textColor="bluegrey" />


    </Container>
    <Container title="white text color">
      <Button text="Default" textColor="black" />
      <Button text="yellow" color="yellow" textColor="white" />
      <Button text="red" color="red" textColor="white" />
      <Button text="pink" color="pink" textColor="white" />
      <Button text="cyan" color="cyan" textColor="white" />
      <Button text="indigo" color="indigo" textColor="white" />
      <Button text="blue" color="blue" textColor="white" />
      <Button text="yellowvivid" color="yellowvivid" textColor="white" />
      <Button text="bluegrey" color="bluegrey" textColor="white" />


    </Container>
    <Container title="with border and box shadow">
      <Button text="Default" textColor="black" border={1} />
      <Button text="yellow" textColor="yellow" border={1} />
      <Button text="red" textColor="red" border={1} />
      <Button text="pink" textColor="pink" border={1} />
      <Button text="cyan" textColor="cyan" border={1} />
      <Button text="indigo" textColor="indigo" border={1} />
      <Button text="blue" textColor="blue" border={1} />
      <Button text="yellowvivid" textColor="yellowvivid" border={1} />
      <Button text="bluegrey" textColor="bluegrey" border={1} />

    </Container>
    <Container title="without boxShadow">
      <Button text="Default" textColor="black" boxShadow={0} />
      <Button text="yellow" textColor="yellow" boxShadow={0} />
      <Button text="red" textColor="red" boxShadow={0} />
      <Button text="pink" textColor="pink" boxShadow={0} />
      <Button text="cyan" textColor="cyan" boxShadow={0} />
      <Button text="indigo" textColor="indigo" boxShadow={0} />
      <Button text="blue" textColor="blue" boxShadow={0} />
      <Button text="yellowvivid" textColor="yellowvivid" boxShadow={0} />
      <Button text="bluegrey" textColor="bluegrey" boxShadow={0} />

    </Container>


  </Main>
);

export default Home;
