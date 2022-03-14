const Header = (props) => {
    const {title, subtitle="Put your life in the circuit of a computer!"} = props;
    return (
        <div className="header">
            <div className="container">
            <h1 className="header__title">{title}</h1>
            <h2 className="header__subtitle">{subtitle}</h2>
            </div>
        </div>
    );
}

export default Header;