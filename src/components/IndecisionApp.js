import React from "react";
import Header from "./Header";
import Action from "./Action"
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";
import "normalize.css"
import "../styles/styles.scss"

export default class IndecisionApp extends React.Component {
    state = {
        title: "Indecision App",
        options: [],
        selectedOption: undefined
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) this.setState(() => ({ options }));
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem("options", JSON.stringify(this.state.options));
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add option!';
        } else if (this.state.options.indexOf(option) !== -1) {
            return 'There is an option with that value!';
        }

        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }

    handlePickOption = () => {
        const choice = Math.floor(Math.random() * this.state.options.length);

        this.setState(() => ({ selectedOption: this.state.options[choice] }));
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(existingOption => existingOption !== option)
        }));
    }

    handleCloseModal = () => {
        this.handleDeleteOption(this.state.selectedOption);

        this.setState(() => ({ selectedOption: undefined }));
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="container">
                    <Action handlePickOption={this.handlePickOption} enabled={this.state.options.length > 0} />
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal} />
            </div>
        );
    }
}