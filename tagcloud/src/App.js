import React, { Component } from "react";
import WordCloud from './WordCloudDisplay';
import InputTextArea from './InputTextArea';
import FormBtn from './FormBtn';

class App extends Component {

    render() {
        return (
            <div>
                <form>
                    <WordCloud />
                    <InputTextArea />
                    <FormBtn />
                </form>

            </div>
        );
    }

}

export default App;


