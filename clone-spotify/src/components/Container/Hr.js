import React from 'react';
import PropTypes from 'prop-types';

const Hr = ({children}) => {
    return (
        <div className="divider">
            {children && children}
        </div>
    )
}

Hr.propTypes = {
    children: PropTypes.node
}

export default React.memo(Hr);
