import React from 'react';
import styled from 'styled-components';

// Note: this component renders an alert for empty submition attemp on the page's form

const AlertStyle = styled.div`
    padding: 20px;
    display: grid;
    justify-content: center;
    grid-template-columns: auto;
    background-color: #f44336; /* Red */
    color: white;
    width:320px;
    margin-bottom: 15px;
    font-family: 'Roboto', sans-serif;
`;

const AlertBgStyle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto;
`;

const Alert = () => {
  return (
    <AlertBgStyle>
      <AlertStyle>
          Please enter or paste text to generate a TagCloud.
      </AlertStyle>
    </AlertBgStyle>
  )
}

export default Alert;



