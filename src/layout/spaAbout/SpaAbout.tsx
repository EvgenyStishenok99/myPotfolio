import styled from "styled-components";


export const SpaAbout = () => {
  return (
    <SpaAboutStyles>
<div className="left-column">
  <h1>About Me</h1>
</div>
    </SpaAboutStyles>
  );
};

const SpaAboutStyles = styled.div`
  margin: 250px 0 300px 0;
  
  h1{
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 42px;
    line-height: 124%;
    letter-spacing: -0.01em;
    color: #42446e;
  }
  
`