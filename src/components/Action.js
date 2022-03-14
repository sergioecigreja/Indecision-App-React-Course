const Action = (props) => (
    <div>
        <button className="big-button" disabled={!props.enabled} onClick={props.handlePickOption}>What should I do?</button>
    </div>
);

export default Action;