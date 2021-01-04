import React from 'react'
import PropTypes from 'prop-types'

function Col({children, className, sectionTitle}) {
    return (    
        <div className={className}>
            {sectionTitle && <h2 className="section-title">{sectionTitle}</h2>}
            {children}
        </div>
    )
}

Col.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired, 
    sectionTitle: PropTypes.string
}

export default React.memo(Col);

