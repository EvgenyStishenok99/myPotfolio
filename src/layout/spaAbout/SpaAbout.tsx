import styled from "styled-components";
import {LeftContentSpaAbout} from "./LeftAndRightContent/LeftContentSpaAbout.tsx";
import {PicturesForRightContent} from "./LeftAndRightContent/picturesForRightContent.tsx";



export const SpaAbout = () => {
  return (
    <SpaAboutStyles id="SpaAbout">
      <LeftContentSpaAbout/>
      <PicturesForRightContent/>
    </SpaAboutStyles>
  );
};

const SpaAboutStyles = styled.div`
  padding-top: 200px;
  display: flex;
`