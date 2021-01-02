import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/container/container.css';

function Container({className, children}) {
    return (
        <section className={"spotify-section " + className}>
            {children}
        </section>
    )
}

Container.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Container

