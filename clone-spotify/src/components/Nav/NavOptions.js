import React from 'react';
import propTypes from 'prop-types';

const NavOptions = ({options, children, open})=>{
    return (
        <div className={open ? "navigation-options navigation-options-open" : "navigation-options"}>
        <ul className="options">
            {
                options.map((option) => 
                    <li key={option.option} className={option.className}>{option.option}</li>
                )
            }
        </ul>
        {children && children}
    </div>
)
}

NavOptions.propTypes = {
    options: propTypes.array.isRequired,
    open: propTypes.bool.isRequired
}

export default React.memo(NavOptions);