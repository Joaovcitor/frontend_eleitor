import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: flex-start; */
background-color: #F21D2F;

width: 400px;
margin: 0 auto;
margin-top: 20px;
padding: 20px;
border-radius: 15px;

h2 {
  margin-bottom: 5px;
}

textarea {
  width: 350px;
  height: 200px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}

select {
  padding: 5px;
  border: none;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;

  option {
    /* background-color: black; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
  }
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: white;
  font-weight: bolder;
}

input {
  height: 40px;
  font-size: 18px;
  border: 1px solid #0D0D0D;
  padding: 0 10px;
  border-radius: 4px;
  &:focus {
    border: 1px solid red;
  }
}
`;
