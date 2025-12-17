import styled from "styled-components";


export const SpaProjects = () => {
  return (
    <SpaProjectsStyles>
      <div className="topBlock">
        <h1 className="mainH1">Projects</h1>
        <p className="mainP"> Things I’ve built so far</p>
      </div>
    </SpaProjectsStyles>
  );
};

const SpaProjectsStyles = styled.div`
  .mainH1{
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 54%;
    text-align: center;
    color: #42446e;
  }
  .mainP{
    font-family: "Poppins", sans-serif;;
    font-weight: 400;
    font-size: 32px;
    line-height: 81%;
    text-align: center;
    color: #666;
  }`