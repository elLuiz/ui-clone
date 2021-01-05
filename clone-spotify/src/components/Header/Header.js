import React from 'react';
import logo from '../../assets/spotify-black-logo.svg';
import '../../styles/components/header/header.css';

const Header = () => {
    return (
        <header className="spotify-header">
            <div className="spotify-logo">
                <img src={logo} alt="Spotify" />
            </div>
        </header>
    )
}

export default React.memo(Header);
