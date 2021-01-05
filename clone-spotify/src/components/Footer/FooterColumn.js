import React from 'react'
import PropTypes from 'prop-types'

function FooterColumn({columnTitle, links, className, children}) {
    return (
        <div className={"column " + className}>
            <p className="title">{columnTitle}</p>
            <ul>
                {      
                    links.map((link) => (
                        <li key={link.url}><a href={link.url}>{link.label}</a></li>
                    ))
                }
            </ul>
            {children}
        </div>
    )
}

FooterColumn.propTypes = {
    columnTitle: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
    className: PropTypes.string,
    children: PropTypes.node
}

export default FooterColumn

