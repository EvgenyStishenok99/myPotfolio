import styled from "styled-components";
import React from "react";

interface SpaContactsProps {
  darkMode: boolean;
}

// вынести футер отдельно
export const SpaContacts: React.FC<SpaContactsProps> = ({ darkMode }) => {
  return (
    <SpaContactsStyles id="SpaContacts">
    <MyMail>
      <TextForaMail darkMode={darkMode}>For any questions please mail me:</TextForaMail>
      <Mail>stishenok999@mail.ru</Mail>
    </MyMail>
    </SpaContactsStyles>
  );
};

const SpaContactsStyles = styled.div`
  padding-top: 50px;
`
const MyMail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TextForaMail = styled.p<{ darkMode: boolean }>`
  margin: 0 0 9px 0 ;
  font-weight: 700;
  font-size: 58px;
  line-height: 121%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${props =>
  props.darkMode
    ? '#ccc'  // Темный режим с прозрачностью
    : '#1e0e62' // Светлый режим с прозрачностью
};
`
const Mail = styled.p`

  font-weight: 700;
  font-size: 58px;
  line-height: 121%;
  letter-spacing: -0.02em;
  text-align: center;
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 311px 0 ;
`