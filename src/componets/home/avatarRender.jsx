import React from 'react';
import { Avatar } from '..';
import { Container } from '../reuseable';


const AvatarRender = () => (
  <Container title="avatar UI" fontWeight={600} borderColor="black" background="#9FB3C8" border={1}>
    <Container title="image avatar">
      <Avatar />
      <Avatar size={60} />
      <Avatar size={70} />
      <Avatar size={80} />
    </Container>

    <Container title="letter avatar">
      <Avatar letter="a" />
      <Avatar size={60} letter="b" bgColor="pink" />
      <Avatar size={70} letter="c" bgColor="cyan" />
      <Avatar size={80} letter="d" bgColor="indigo" />
      <Avatar size={90} letter="e" bgColor="yellowvivid" />
      <Avatar size={100} letter="f" bgColor="bluegrey" />
    </Container>

  </Container>
);

export default AvatarRender;
