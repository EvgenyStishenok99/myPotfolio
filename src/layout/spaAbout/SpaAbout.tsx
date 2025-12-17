import styled from "styled-components";
import {LeftContentSpaAbout} from "./LeftContentSpaAbout.tsx";



export const SpaAbout = () => {
  return (
    <SpaAboutStyles>
      <LeftContentSpaAbout/>
    </SpaAboutStyles>
  );
};

const SpaAboutStyles = styled.div`
  margin: 250px 0 300px 0;
`