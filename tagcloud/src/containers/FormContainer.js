import React, { Component } from "react";
import InputTextArea from '../components/InputTextArea';
import FormBtn from '../components/FormBtn';
import styled from 'styled-components';

// Note: this component renders a form on the page


const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
    align-items:center;
    font-family: 'Roboto', sans-serif;
    margin:5%;
    `
const FormBtnStyle = styled.div`
    & {
        border: 2px solid black;
        background-color: white;
        color: black;
        margin: 4% 0%;
        font-size: 20px;
        cursor: pointer;
    }
    &:hover { 
        color:white;
        border-color: #4CAF50;
        background-color: #4CAF50;
    }
`

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputTxt: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.dataReturnHandler(this.state.inputTxt);
        this.setState({
            inputTxt: ''
        });
    }

    handleTextArea(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            ...prevState, inputTxt: value
        }), () => console.log(this.state.inputTxt))
    }

    render() {
        return (
            <CenterDiv>
            <form onSubmit={this.handleFormSubmit}>
                <InputTextArea
                    title={'Generate a tagCloud!'}
                    rows={10}
                    cols={50}
                    value={this.state.inputTxt}
                    name={'inputTxt'}
                    handleChange={this.handleTextArea}
                    placeholder={'<< Enter or paste text here >> '}
                />
                <FormBtnStyle>
                    <FormBtn 
                        action={this.handleFormSubmit}
                        title={'Generate'}
                    />
                </FormBtnStyle>
            </form>
            </CenterDiv>
        );
    }
}

export default FormContainer;





