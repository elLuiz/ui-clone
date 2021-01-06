import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/checkbox/checkbox.css';

function Checkbox({label}) {
    return (
        <label className="checkbox-container">
            {label}
            <input type="checkbox"/>
            <span className="checkmark"></span>
        </label>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired
}

export default Checkbox

