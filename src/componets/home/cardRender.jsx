import React from 'react';
import { Card } from '..';
import { Container } from '../reuseable';


const AvatarRender = () => (
  <Container title="Card UI" fontWeight={600} borderColor="black" background="#9FB3C8" border={1}>
    <Container title="image card" background="white">
      <Card title="avatar" />
      <Card title="Track" src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" bgColor="bluegrey" />
      <Card title="nature" src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" bgColor="cyan" />
      <Card title="apple" src="https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" bgColor="blue" />
    </Container>
  </Container>
);

export default AvatarRender;
