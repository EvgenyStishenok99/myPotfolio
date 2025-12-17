import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx"
import {SpaMain} from "./layout/spaMain/SpaMain.tsx";
import {SpaAbout} from "./layout/spaAbout/SpaAbout.tsx";

function App() {
    return (
        <AppStyle>
          <div className="Container">
            <Header/>
            <SpaMain/>
          <SpaAbout/>
          </div>
        </AppStyle>
    )
}

export default App


const AppStyle = styled.div`
  //background-color: black;
  border: 2px solid #ff5733;
  display: flex;
  flex-direction: column;
  align-items: center;
  .Container {
    
    border: 2px solid #0039ff;
    //max-width: 1193px;
  }

`

