import React from 'react';
import styled from 'styled-components';

// Note: this component renders a title for the page

const TitleStyle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto;
  font-family: 'Roboto', sans-serif;
`;

const TitleBgStyle = styled.div`
  color:white;
  border-color: #4CAF50;
  background-color: #4CAF50;
`;


const Title = () => {
  return (
    <TitleBgStyle>
      <TitleStyle>
          <h1>TagCloud Generator</h1>
      </TitleStyle>
    </TitleBgStyle>
  )
}

export default Title;

