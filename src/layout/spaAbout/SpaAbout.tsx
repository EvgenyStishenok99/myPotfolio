import styled from "styled-components";
import {LeftContentSpaAbout} from "./LeftAndRightContent/LeftContentSpaAbout.tsx";
import {PicturesForRightContent} from "./LeftAndRightContent/picturesForRightContent.tsx";
import React from "react";

interface SpaAboutProps {
  darkMode: boolean;
}

export const SpaAbout: React.FC<SpaAboutProps> = ({ darkMode }) => {
  return (
    <SpaAboutStyles  id="SpaAbout">
      <LeftContentSpaAbout darkMode={darkMode}/>
      <PicturesForRightContent/>
    </SpaAboutStyles>
  );
};

const SpaAboutStyles = styled.div`
  padding-top: 200px;
  display: flex;
`