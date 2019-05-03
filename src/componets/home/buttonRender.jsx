import React from 'react';
import { Button } from '..';
import { Container } from '../reuseable';

const ButtonRender = () => (
  <Container title="button UI" fontWeight={600} borderColor="black">
    <Container title="rounded buttons">
      <Button text="Default" textColor="black" borderRadius={20} />
      <Button text="yellow" textColor="black" color="yellow" borderRadius={20} />
      <Button text="red" textColor="black" color="red" borderRadius={20} />
      <Button text="pink" textColor="black" color="pink" borderRadius={20} />
      <Button text="cyan" textColor="black" color="cyan" borderRadius={20} />
      <Button text="indigo" textColor="black" color="indigo" borderRadius={20} />
      <Button text="blue" textColor="black" color="blue" borderRadius={20} />
      <Button text="yellowvivid" textColor="black" color="yellowvivid" borderRadius={20} />
      <Button text="bluegrey" textColor="black" color="bluegrey" borderRadius={20} />

    </Container>


    <Container title="without border">
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
      <Button text="Default" textColor="black" color="white" border={1} />
      <Button text="yellow" textColor="black" color="yellow" border={1} />
      <Button text="red" textColor="black" color="red" border={1} />
      <Button text="pink" textColor="black" color="pink" border={1} />
      <Button text="cyan" textColor="black" color="cyan" border={1} />
      <Button text="indigo" textColor="black" color="indigo" border={1} />
      <Button text="blue" textColor="black" color="blue" border={1} />
      <Button text="yellowvivid" textColor="black" color="yellowvivid" border={1} />
      <Button text="bluegrey" textColor="black" color="bluegrey" border={1} />

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
  </Container>
);
export default ButtonRender;
