import styled from "styled-components";
import myPhoto from "../../../public/myPhoto.jpg"


export const SpaMain = () => {
  return (
    <SpaMainStyle id="SpaMain">
    <span>
Hi 👋,<br/>
My name is<br/>
<MyName>Evgeny ST</MyName><br/>
I build things for web
    </span>
      <SvgBackground>
        <img src="/public/Abstract.svg" alt="background"/>
      </SvgBackground>
      <Avatar>
      <img
        src={myPhoto}
        alt="myPhoto"
      />
      </Avatar>
    </SpaMainStyle>
  );
};

const SpaMainStyle =  styled.div`
  display: flex;
  justify-content: space-between;
  padding: 246px 0 291px 0;
  span{
    font-family: "Poppins", sans-serif;;
    font-weight: 700;
    font-size: 58px;
    line-height: 121%;
    letter-spacing: -0.02em;
    color: #42446e;
  }
  `
const MyName = styled.mark`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
const SvgBackground = styled.div`
    position: absolute;
    top: 62%;
    left: 80%;
    transform: translate(-50%, -50%);
    //z-index: 2;
    pointer-events: none;
    width: 770px;
    height: 770px;
    img {
      width: 100%;
      height: 100%;
      opacity: 0.25;
    }
  `
const Avatar = styled.div`
  display: inline-block;
  padding: 8px; /* Толщина обводки */
  background: linear-gradient(45deg, #ff0090, #ffffff, #000000, #6611ff);
  border-radius: 230px;
  img {
    border-radius: 230px;
    width: 349px;
    height: 349px;
    display: block;
  }
`









