import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx"
import {SpaMain} from "./layout/spaMain/SpaMain.tsx";
import {SpaAbout} from "./layout/spaAbout/SpaAbout.tsx";
import {SpaSkills} from "./layout/spaSkills/SpaSkills.tsx";
import {SpaProjects} from "./layout/spaProjects/SpaProjects.tsx";
import {SpaContacts} from "./layout/spaContacts/SpaContacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <AppStyle>
          <Container>
            <Header/>
            <SpaMain/>
            <SpaAbout/>
            <SpaSkills/>
            <SpaProjects/>
            <SpaContacts/>
            <Footer/>
          </Container>
        </AppStyle>
    )
}

export default App


const AppStyle = styled.div`
  background-color: whitesmoke;
  //border: 2px solid #ff5733;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  max-width: 1230px;
  //border: 2px solid #0039ff;
`

