import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/inputgroup/inputgroup.css';

const InputGroup = ({label, name, error, ...rest}) => {
    return (
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input className="input" name={name} id={name} {...rest}/>
            {
                error.length > 0 &&
                    <div className="error-input">
                        <p className="error-description">{error}</p>
                    </div>
            }
        </div>
    )
}

InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string
}

export default InputGroup
