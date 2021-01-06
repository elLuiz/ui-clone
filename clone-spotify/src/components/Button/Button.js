import React from 'react'
import PropTypes from 'prop-types';
import '../../styles/components/buttons/credentialsbutton/button.css';

const Button = ({action, className, onClick}) => {
    return (
        <button onClick={onClick} className={"btn " + className}>
            {action}
        </button>
    )
}

Button.propTypes = {
    action: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button
