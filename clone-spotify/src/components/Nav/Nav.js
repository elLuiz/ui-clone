import React, { useState } from 'react';
import '../../styles/components/nav/nav.css';
import spotifylogo from '../../assets/spotify-logo.svg';
import Burger from './Burger';
import NavOptions from './NavOptions';

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="spotify-nav">
            <a href="/" className="logo">
                <img src={spotifylogo} alt="Spotify" />
            </a>
            <NavOptions 
                open={open}
                options={[{"className": "default", "option":"Premium"},
                    {"className": "default", "option":"Support"},
                    {"className": "default", "option":"Download"},
                    {"className": "pipe", "option":""},
                    {"className": "user-action", "option":"Sign up"},
                    {"className": "user-action", "option":"Log in"}
                ]}>
                    <a href="/" className="logo">
                        <img src={spotifylogo} alt="Spotify" />
                    </a>
            </NavOptions>
            <Burger open={open} onClick={()=>setOpen(!open)}/>
        </nav>
    )
}
