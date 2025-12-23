import {LineBottom} from "../../../components/lineBottom/LineBottom.tsx";
import styled from "styled-components";
import {Place} from "../../../../public/svg for spaAbout/Place.tsx";
import {Location} from "../../../../public/svg for spaAbout/Location.tsx";
import {Date} from "../../../../public/svg for spaAbout/Date.tsx";
import React from "react";

interface LeftContentSpaAboutProps {
  darkMode: boolean;
}


export const LeftContentSpaAbout: React.FC<LeftContentSpaAboutProps> = ({ darkMode }) => {
  const workExperience = [
    {
      // id: 1,
      title: "Loader",
      company: "Wherever they invite me",
      location: "Minsk",
      type: "Internship",
      period: "Sep 2016 - Dec 2017"
    },
    {
      // id: 2,
      title: "Sales consultant",
      company: "Football store",
      location: "Minsk",
      type: "Internship",
      period: "Sep 2018 - Dec 2019"
    },
    {
      // id: 3,
      title: "Compressor operator",
      company: "Mozyr Oil Refinery",
      location: "Mozyr",
      type: "Full Time",
      period: "Jan 2021 - To date..."
    }]
  const education = [{
    // id: 4,
    title: "Mechanical engineer",
    company: "Belarusian State Technological University",
    location: "",
    type: "Full Time",
    period: "Aug 2016 - Jan 2021"
  }];
  return (


  <LeftContentSpaAboutStyle darkMode={darkMode}>
    <h1>About Me</h1>
    <ForAboutMe darkMode={darkMode}>
      Entry-level Web Developer with strong theoretical knowledge and high
      motivation to learn. Currently honing my practical skills in
      JavaScript and React.js. I am a diligent, detail-focused individual
      looking to launch my career, grow professionally, and add value to
      a development team.
    </ForAboutMe>

    <h1>Work Experience</h1>
    {workExperience.map((job,index) => (
      <div key={index}>
        <BlockForWorkExperience >
          <LeftSide>
            <h2>{job.title}</h2>
            <BottomOfBlock>
              <LeftRightBottomOfBlock>
                <SvgPictures>
                  <Place />
                </SvgPictures>
                <MyPlace>{job.company}</MyPlace>
              </LeftRightBottomOfBlock>
              {job.location && (
                <LeftRightBottomOfBlock>
                  <SvgPictures>
                    <Location />
                  </SvgPictures>
                  <MyPlace>{job.location}</MyPlace>
                </LeftRightBottomOfBlock>
              )}
            </BottomOfBlock>
          </LeftSide>
          <RightSide>
            <GreenIcon darkMode={darkMode}>{job.type}</GreenIcon>
            <LeftRightBottomOfBlock>
              <SvgPictures>
                <Date />
              </SvgPictures>
              <MyPlace>{job.period}</MyPlace>
            </LeftRightBottomOfBlock>
          </RightSide>
        </BlockForWorkExperience>
        <LineBottom />
      </div>
    ))}

    <h1>Education</h1>
    {education.map((edu,index) => (
      <div key={index}>
        <BlockForWorkExperience >
          <LeftSide>
            <h2>{edu.title}</h2>
            <BottomOfBlock>
              <LeftRightBottomOfBlock>
                <SvgPictures>
                  <Place />
                </SvgPictures>
                <MyPlace>{edu.company}</MyPlace>
              </LeftRightBottomOfBlock>
              {edu.location && (
                <LeftRightBottomOfBlock>
                  <SvgPictures>
                    <Location />
                  </SvgPictures>
                  <MyPlace>{edu.location}</MyPlace>
                </LeftRightBottomOfBlock>
              )}
            </BottomOfBlock>
          </LeftSide>
          <RightSide>
            <GreenIcon darkMode={darkMode} >{edu.type}</GreenIcon>
            <LeftRightBottomOfBlock>
              <SvgPictures>
                <Date />
              </SvgPictures>
              <MyPlace>{edu.period}</MyPlace>
            </LeftRightBottomOfBlock>
          </RightSide>
        </BlockForWorkExperience>
        <LineBottom />
      </div>

    ))}
  </LeftContentSpaAboutStyle>
  );
};

const LeftContentSpaAboutStyle = styled.div<{ darkMode: boolean }>`
  max-width:58%; 
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 42px;
    line-height: 124%;
    letter-spacing: -0.01em;
   color: ${props =>
      props.darkMode
        ? '#a7a7a7'
        : '#42446e'
    };
  }
`
const BlockForWorkExperience = styled.div`
  display: flex;
  justify-content: space-between;
`
const ForAboutMe = styled.div<{ darkMode: boolean }>`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 144%;
  color: ${props =>
    props.darkMode
      ? '#a7a7a7'  
      : '#666' 
  };
  margin: 38px 0;
`
const LeftSide = styled.div`
  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: #666;
    margin: 0 0 0 0;
  }
`
const BottomOfBlock = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  min-width: 340px;
`
const LeftRightBottomOfBlock = styled.div`
  display: flex;
  gap: 4px;
`
const SvgPictures = styled.div`
  align-self: center;
  padding-bottom: 1px;
`
const MyPlace = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 233%;
  letter-spacing: 0.08em;
  color: #a7a7a7;
  margin-top: 0;
  margin-bottom: 0;
`

const RightSide = styled.div`
  
`
const GreenIcon = styled.p<{ darkMode: boolean }>`
  font-family: "Poppins", sans-serif;;
  font-weight: 600;
  font-size: 9px;
  line-height: 289%;
  text-align: center;
  color: ${props =>
  props.darkMode
    ? '#d7ffe0'  // Темный режим с прозрачностью
    : '#018c0f'};

  background: ${props =>
    props.darkMode
      ? '#018c0f'  // Темный режим с прозрачностью
      : '#d7ffe0'};
  border-radius: 100px;
  width: 84px;
  height: 24px;
  margin-top: -12px;
  margin-bottom: 12px;

  display: flex;
  flex-direction: column;
  align-self: flex-end;
  `