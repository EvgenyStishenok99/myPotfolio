import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx"
import {SpaMain} from "./layout/spaMain/SpaMain.tsx";
import {SpaAbout} from "./layout/spaAbout/SpaAbout.tsx";

function App() {
    return (
        <AppStyle>
            <Header/>
            <SpaMain/>
          <SpaAbout/>
        </AppStyle>
    )
}

export default App


const AppStyle = styled.div`
  //background-color: black;
`

