import React from 'react';
import styled from 'styled-components';

// Note: this component renders a text input field for the page's form


const TextAreaStyle = styled.textarea`
  padding: 5px;
  font-family: 'Roboto', sans-serif;
`

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items:center;
`;

const InputTextArea = (props) => (  
  <CenterDiv>
    <label>{props.title}</label>
    <TextAreaStyle
      name={props.name}
      rows={props.rows}
      cols = {props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
    />
  </CenterDiv>
);

export default InputTextArea;