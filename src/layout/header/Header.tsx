// import React from 'react';

import styled from "styled-components";
import {Logo} from "../../components/logo/logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
  return (
    <StyleHeader >
     <Logo/>
     <Menu/>
    </StyleHeader>
  );
};

const StyleHeader =  styled.header`
  //background-color: #5cda5c;
  display: flex;
 justify-content: space-between;

  position: sticky;
  top: 0; /* Элемент "прилипнет", когда его верхний край коснется верха окна */
  z-index: 1000;
  background-color: rgb(245, 245, 245, 0.8);

  //min-width: 1193px;
  //min-height: 59px;
`