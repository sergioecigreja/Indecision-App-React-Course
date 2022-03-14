import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options:</h3>
            <button
                className="button--link"
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Add Options here:</p>}
        {props.options.map((option, index) => <Option key={option} text={option} count={index+1} handleDeleteOption={() => props.handleDeleteOption(option)} />)}
    </div>
);

export default Options;