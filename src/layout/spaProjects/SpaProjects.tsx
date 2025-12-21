import styled from "styled-components";
import {MyProjects} from "./myProjects/MyProjects.tsx";


export const SpaProjects = () => {
  return (
    <SpaProjectsStyles id="SpaProjects">
      <div className="topBlock">
        <h1 className="mainH1">Projects</h1>
        <p className="mainP"> Things I’ve built so far</p>
       <MyProjects/>
      </div>
    </SpaProjectsStyles>
  );
};

const SpaProjectsStyles = styled.div`
  padding-top: 201px;
  font-family: "Poppins", sans-serif;
  .mainH1 {

    font-weight: 700;
    font-size: 48px;
    line-height: 54%;
    text-align: center;
    color: #42446e;
  }

  .mainP {
margin-bottom: 110px;
    font-weight: 400;
    font-size: 32px;
    line-height: 81%;
    text-align: center;
    color: #666;
  }

`
