import React from 'react';
import styled from 'styled-components';

const TextAreaStyle = styled.textarea`
  padding: 5px;
  cursor: pointer; 
`

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
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
      placeholder={props.placeholder} />
  </CenterDiv>
);

export default InputTextArea;