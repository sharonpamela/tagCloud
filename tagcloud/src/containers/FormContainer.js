import React, { Component } from "react";
import InputTextArea from '../components/InputTextArea';
import FormBtn from '../components/FormBtn';

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
        // this.setState({
        //     formatedData: formatData(this.state.inputTxt)
        // });
    }

    handleTextArea(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            ...prevState, inputTxt: value
        }), () => console.log(this.state.inputTxt))
    }

    render() {
        return (
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

                <FormBtn action={this.handleFormSubmit}
                    type={'primary'}
                    title={'Generate'}
                />

            </form>
        );
    }
}

export default FormContainer;





