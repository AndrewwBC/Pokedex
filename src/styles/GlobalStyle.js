import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500&family=Noto+Serif+Khojki:wght@400;500&family=Poppins:ital,wght@0,100;0,500;0,600;1,800&family=Roboto:wght@400;500&display=swap');

  body{
    margin: 0;
    padding: 0;
    background-color: #fff;
    font-family: 'Poppins';
    position: relative;

  }

  div{
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li{
    list-style: none;
  }

`;
