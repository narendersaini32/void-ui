import React from 'react';
import styled from 'styled-components';
import { natural } from '../../consts/colors/colors.json';

const Main = styled.div`
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    background:${natural};
`;
const Home = () => <Main />;

export default Home;
