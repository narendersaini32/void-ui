import React from 'react';
import { Avatar } from '..';
import { Container } from '../reuseable';
import { grey300 } from '../../consts/colors/colors.json';


const InputRender = () => (
  <Container title="avatar UI" fontWeight={600} borderColor="black" background="#9FB3C8" border={1}>
    <Container title="image avatar" background={grey300} border={1}>
      <Avatar />
      <Avatar size={60} />
      <Avatar size={70} />
      <Avatar size={80} />
    </Container>

    <Container title="letter avatar" background={grey300} border={1}>
      <Avatar letter="a" />
      <Avatar size={60} letter="b" />
      <Avatar size={70} letter="c" />
      <Avatar size={80} letter="ddddddddddd" />
    </Container>

  </Container>
);

export default InputRender;
