import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin: 10px 10px 10px 10px;
  padding: 5px;
  cursor: pointer; 
`

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const FormBtn = (props) => {
  return (
    <CenterDiv>
      <ButtonStyle
        onClick={props.action} >
        {props.title}
      </ButtonStyle>
    </CenterDiv>
  )
}

export default FormBtn;

