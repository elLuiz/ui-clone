import React from 'react'
import PropTypes from 'prop-types';
import '../../styles/components/footer/footer.css';

const Footer = ({children}) => {
    return (
        <footer className="spotify-footer">
            {children}
        </footer>
    )
}

Footer.propTypes = {
    children: PropTypes.node.isRequired
}

export default React.memo(Footer);