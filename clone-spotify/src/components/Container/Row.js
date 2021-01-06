import React from 'react';
import propTypes from 'prop-types';

const Row = ({children, styleClass}) => {
    return (
        <div style={styleClass && {display: 'flex', alignItems: 'flex-start'}} className={"row " + styleClass}>
            {children}
        </div>
    )
}

Row.propTypes = {
    children: propTypes.node.isRequired,
    styleClass: propTypes.string
}


export default React.memo(Row);