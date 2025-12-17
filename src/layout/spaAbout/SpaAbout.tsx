import styled from "styled-components";
import {LeftContentSpaAbout} from "./LeftContentSpaAbout.tsx";
import {PicturesForRightContent} from "./picturesForRightContent.tsx";



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