import styled from "styled-components";


export const SpaContacts = () => {
  return (
    <SpaContactsStyles>
    <div className="myAmail">
      <p className="textForamail">For any questions please mail me:</p>
      <p className="Amail">stishenok999@mail.ru</p>
    </div>
    </SpaContactsStyles>
  );
};

const SpaContactsStyles = styled.div`
  .myAmail {
    display: flex;
    flex-direction: column;
    align-items: center;
}
  .textForamail{
    margin: 200px 0 9px 0 ;
    font-weight: 700;
    font-size: 58px;
    line-height: 121%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #1e0e62;
  }
  .Amail{
   
    font-weight: 700;
    font-size: 58px;
    line-height: 121%;
    letter-spacing: -0.02em;
    text-align: center;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 311px 0 ;
  }
`

