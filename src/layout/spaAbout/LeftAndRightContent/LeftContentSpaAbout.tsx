import {LineBottom} from "../../../components/lineBottom/LineBottom.tsx";
import styled from "styled-components";
import {Place} from "../../../../public/svg for spaAbout/Place.tsx";
import {Location} from "../../../../public/svg for spaAbout/Location.tsx";
import {Date} from "../../../../public/svg for spaAbout/Date.tsx";

//создать компоненту с пропсами, убрать svg
export const LeftContentSpaAbout = () => {
  return (
    <LeftContentSpaAboutStyle>
      <h1>About Me</h1>
      <p className="forAboutMe">TEntry-level Web Developer
        with strong theoretical knowledge and high
        motivation to learn. Currently honing my practical skills in
        JavaScript and React.js. I am a diligent, detail-focused individual
        looking to launch my career, grow professionally, and add value to
        a development team.
      </p>
      <h1>Work Experience</h1>
      <div className="blockForWorkExperience">
        <div className="leftSide">
          <h2>Loader</h2>
          <div className="bottomOfBlock">
            <div className="leftBottomOfBlock">
              <div className="svgPictures">
              <Place/>
              </div>
              <p className="place">Wherever they invite me</p>
            </div>
            <div className="rightBottomOfBlock">
              <div className="svgPictures">
                <Location/>
              </div>
              <p className="place">Minsk</p>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <p className="greenIcon">
            Full Time
          </p>
          <div className="BottomOfBlock">
            <div className="svgPictures">
              <Date/>
            </div>
            <p className="place">Sep 2016 - Dec 2017</p>
          </div>
        </div>

      </div>
      <LineBottom/>
      <div className="blockForWorkExperience">
        <div className="leftSide">
          <h2>Sales consultant</h2>
          <div className="bottomOfBlock">
            <div className="leftBottomOfBlock">
              <div className="svgPictures">
                <Place/>
              </div>
              <p className="place">Football store</p>
            </div>
            <div className="rightBottomOfBlock">
              <div className="svgPictures">
                <Location/>
              </div>
              <p className="place">Minsk</p>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <p className="greenIcon">
            Internship
          </p>
          <div className="BottomOfBlock">
            <div className="svgPictures">
              <Date/>
            </div>
            <p className="place">Sep 2018 - Dec 2019</p>
          </div>
        </div>

      </div>
      <LineBottom/>
      <div className="blockForWorkExperience">
        <div className="leftSide">
          <h2>Compressor operator</h2>
          <div className="bottomOfBlock">
            <div className="leftBottomOfBlock">
              <div className="svgPictures">
                <Place/>
              </div>
              <p className="place">Mozyr Oil Refinery</p>
            </div>
            <div className="rightBottomOfBlock">
              <div className="svgPictures">
               <Location/>
              </div>
              <p className="place">Mozyr</p>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <p className="greenIcon">
            Internship
          </p>
          <div className="BottomOfBlock">
            <div className="svgPictures">
              <Date/>
            </div>
            <p className="place">Jan 2021 - To date...</p>
          </div>
        </div>

      </div>
      <LineBottom/>
      <h1>Education</h1>
      <div className="blockForWorkExperience">
        <div className="leftSide">
          <h2>Mechanical engineer</h2>
          <div className="bottomOfBlock">
            <div className="leftBottomOfBlock">
              <div className="svgPictures">
                <Place/>
              </div>
              <p className="place">Belarusian State Technological University</p>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <p className="greenIcon">
            Full Time
          </p>
          <div className="BottomOfBlock">
            <div className="svgPictures">
              <Date/>
            </div>
            <p className="place">Aug 2016 - Jan 2021</p>
          </div>
        </div>

      </div>
      <LineBottom/>
    </LeftContentSpaAboutStyle>
  );
};

const LeftContentSpaAboutStyle = styled.div`
  max-width: 710px; // сделать в процентах
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 42px;
    line-height: 124%;
    letter-spacing: -0.01em;
    color: #42446e;
  }

  .forAboutMe {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: #666;
    margin: 38px 0;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: #666;
    margin: 0 0 0 0;
  }

  .place {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 233%;
    letter-spacing: 0.08em;
    color: #a7a7a7;

    margin-top: 0;
    margin-bottom: 0;


  }

  .leftBottomOfBlock, .rightBottomOfBlock, .BottomOfBlock {
    display: flex;
    gap: 4px;

  }


  .svgPictures {
    align-self: center;
    padding-bottom: 1px;
  }

  .bottomOfBlock {
    display: flex;
    gap: 25px;
    justify-content: space-between;
    min-width: 340px;
  }

  .greenIcon {
    font-family: "Poppins", sans-serif;;
    font-weight: 600;
    font-size: 9px;
    line-height: 289%;
    text-align: center;
    color: #018c0f;

    background: #d7ffe0;
    border-radius: 100px;
    width: 84px;
    height: 24px;
    margin-top: -12px;
    margin-bottom: 12px;

    display: flex;
    flex-direction: column;
    align-self: flex-end;
  }

  .blockForWorkExperience{
    display: flex;
    justify-content: space-between;
  }
`

