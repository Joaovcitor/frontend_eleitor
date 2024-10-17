import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Organizador = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
`


export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #032859;
    -webkit-box-shadow: 10px 6px 4px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 6px 4px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 6px 4px 0px rgba(0,0,0,0.75);
    width: 300px;
    margin-top: 60px;
    margin-left: 30px;
    border-radius: 5px;
    padding: 10px;

    h4 {
      color: white;
      font-size: 20px;

    }


  }

  p {
    font-size: 18px;
    /* margin-left: 15px; */
    color: black;
  }

  input {
    border: none;
    border-bottom: solid 1px black;
    background-color: transparent;
    color: white;
    text-align: center;
    font-size: 18px;
  }
`;

export const Links = styled(Link)`
background-color: #F24162;
padding: 7px;
margin-bottom: 10px;
margin-top: 10px;
border-radius: 4px;
color: white;
`

export const Section = styled.section`
display: flex;
justify-content: center;
flex-direction: row;
margin-top: 40px;

div {
  margin-left: 20px;
  background-color: #011126;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  -webkit-box-shadow: 10px 6px 4px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 6px 4px 0px rgba(0,0,0,0.75);
box-shadow: 10px 6px 4px 0px rgba(0,0,0,0.75);

  p {
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
  }
}
`

export const Form = styled.form`
margin-top: 20px;
display: flex;
flex-direction: column;

input {
  margin-bottom: 20px;
  height: 40px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  &:focus {
  border: 1px solid #05F2C7;
}}
`;
