import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import WordCloudDisplay from './components/WordCloudDisplay';
import Title from './components/Title';
import styled from 'styled-components';

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr; 

`;

class App extends Component {
    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
            FormInputData: ''
        };
    }

    handleData(data) {
        this.setState({
            FormInputData: data
        });
      }

    render() {
        return (
            <div>
                <Title />
                <CenterDiv>
                    <FormContainer dataReturnHandler={this.handleData}/>
                    {this.state.FormInputData === '' ? null : <WordCloudDisplay rawData={this.state.FormInputData}/>}
                </CenterDiv>
            </div>
        );
    }
}

export default App;