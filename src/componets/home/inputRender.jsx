import React from 'react';
import { Input } from '..';
import { Container } from '../reuseable';


const InputRender = () => (
  <Container title="input UI" fontWeight={600} borderColor="black" background="#9FB3C8" border={1}>
    <Container title="With Box Shadow">
      <Input />
      <Input bgColor="yellow" />
      <Input bgColor="red" />
      <Input bgColor="pink" />
      <Input bgColor="cyan" />
      <Input bgColor="indigo" />
      <Input bgColor="blue" />
      <Input bgColor="yellowvivid" />
      <Input bgColor="bluegrey" />
    </Container>
    <Container title="Without Box Shadow">
      <Input boxShadow={0} />
      <Input bgColor="yellow" boxShadow={0} />
      <Input bgColor="red" boxShadow={0} />
      <Input bgColor="pink" boxShadow={0} />
      <Input bgColor="cyan" boxShadow={0} />
      <Input bgColor="indigo" boxShadow={0} />
      <Input bgColor="blue" boxShadow={0} />
      <Input bgColor="yellowvivid" boxShadow={0} />
      <Input bgColor="bluegrey" boxShadow={0} />
    </Container>
  </Container>
);

export default InputRender;
