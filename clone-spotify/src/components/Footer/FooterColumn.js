import React from 'react'
import PropTypes from 'prop-types'

function FooterColumn({columnTitle, links}) {
    return (
        <div className="column">
            <p className="title">{columnTitle}</p>
            <ul>
                {      
                    links.map((link) => (
                        <li key={link.url}><a href={link.url}>{link.label}</a></li>
                    ))
                }
            </ul>

        </div>
    )
}

FooterColumn.propTypes = {
    columnTitle: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
}

export default FooterColumn

