import styled from "styled-components";
import {LeftContentSpaAbout} from "./LeftAndRightContent/LeftContentSpaAbout.tsx";
import {PicturesForRightContent} from "./LeftAndRightContent/picturesForRightContent.tsx";



export const SpaAbout = () => {
  return (
    <SpaAboutStyles>
      <LeftContentSpaAbout/>
      <PicturesForRightContent/>
    </SpaAboutStyles>
  );
};

const SpaAboutStyles = styled.div`
  margin: 200px 0;
  display: flex;
`