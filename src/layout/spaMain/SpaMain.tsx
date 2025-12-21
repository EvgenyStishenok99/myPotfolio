import styled from "styled-components";


export const SpaMain = () => {
  return (
    <SpaMainStyle id="SpaMain">

    <span>
Hi 👋,<br/>
My name is<br/>
<mark className="myName">Evgeny ST</mark><br/>
I build things for web
    </span>
      <div className="svg-background">
        <img src="/public/Abstract.svg" alt="background" />
      </div>
      <div className= "avatar">
      <img
        src="/public/myPhoto.jpg"
        alt="myPhoto"
      />
      </div>


    </SpaMainStyle>
  );
};

const SpaMainStyle =  styled.div`
  display: flex;
  justify-content: space-between;
  padding: 246px 0 291px 0;
  .svg-background {
    position: absolute;
    top: 66%;
    left: 78%;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;
    width: 770px;
    height: 770px;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.25;
    }
  }
  .myName{
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
span{
  font-family: "Poppins", sans-serif;;
  font-weight: 700;
  font-size: 58px;
  line-height: 121%;
  letter-spacing: -0.02em;
  color: #42446e;
}
  .avatar {
    display: inline-block;
    padding: 8px; /* Толщина обводки */
    background: linear-gradient(45deg, #ff0090, #ffffff, #000000, #6611ff);
    border-radius: 230px;

  }

  img {
    border-radius: 230px;
    width: 349px;
    height: 349px;
    display: block;

  }
`