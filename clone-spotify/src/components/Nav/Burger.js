import React from 'react'
import PropTypes from 'prop-types'

function Burger({open, onClick}) {
    return (
        <div onClick={onClick} className={open ? "burger open" : "burger"}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

Burger.propTypes = {
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Burger

