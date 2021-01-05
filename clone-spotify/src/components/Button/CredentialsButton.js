import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../../styles/components/buttons/credentialsbutton/credentialsbutton.css';

function CredentialsButton({url, label, className}) {
    return (
        <Link className={"cred-button " + className} to={url}>
            {label}
        </Link>
    )
}

CredentialsButton.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default CredentialsButton;

