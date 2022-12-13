import PropTypes from "prop-types";

function Button({text}) {
    return <button style={{
        backgroundColor : "black",
        color : "white",
    }}>{text}</button>;
}

Button.prototypes = {
    text : PropTypes.string.isRequired,
};

export default Button;