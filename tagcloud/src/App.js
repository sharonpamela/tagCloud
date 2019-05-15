import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import WordCloudDisplay from './components/WordCloudDisplay';
import Title from './components/Title';

class App extends Component {
    render() {
        return (
            <div>
                <Title />
                <FormContainer />
                <WordCloudDisplay />
            </div>
        );
    }
}

export default App;