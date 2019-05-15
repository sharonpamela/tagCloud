import React from 'react';
import styled from 'styled-components';

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const Title = () => {
  return (
    <CenterDiv>
        <h1>TagCloud Generator</h1>
    </CenterDiv>
  )
}

export default Title;

