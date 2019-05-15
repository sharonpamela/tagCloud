import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import WordCloudDisplay from './components/WordCloudDisplay';
import Title from './components/Title';
import styled from 'styled-components';
import Alert from './components/Alert';

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto; 
  font-family: 'Roboto', sans-serif;

  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

const LayoutDiv = styled.div`
  margin:auto; 
`;

class App extends Component {
    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
            FormInputData: '',
            AlertDisplay:false
        };
    }

    handleData(data) {
        if (data === ''){
            this.setState({
                AlertDisplay: true
            });
            // wait 2 seconds and fade alert
            setTimeout(() => this.setState({AlertDisplay: false}), 2000);
        }
        this.setState({
            FormInputData: data
        });
    }
    

    render() {
        return (
            <LayoutDiv>
                <Title/>
                <CenterDiv>
                    <FormContainer dataReturnHandler={this.handleData}/>
                    {this.state.FormInputData === '' ? null : <WordCloudDisplay rawData={this.state.FormInputData}/>}
                </CenterDiv>
                {this.state.AlertDisplay === true ? <Alert /> : null}
            </LayoutDiv>
        );
    }
}

export default App;