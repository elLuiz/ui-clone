import React, { useState} from 'react';
import '../../styles/components/nav/nav.css';
import spotifylogo from '../../assets/spotify-logo.svg';
import Burger from './Burger';
import NavOptions from './NavOptions';
import useSticky from '../../hooks/useSticky';

const Nav = ()=>{
    const [open, setOpen] = useState(false);
    const scroll = useSticky();

    return (
        <nav className={scroll ? "spotify-nav sticky-bar": "spotify-nav"}>
            <a href="/" className="logo">
                <img src={spotifylogo} alt="Spotify" />
            </a>
            <NavOptions 
                open={open}
                options={[{"className": "default", "option":"Premium"},
                    {"className": "default", "option":"Support"},
                    {"className": "default", "option":"Download"},
                    {"className": "pipe", "option":""},
                    {"className": "user-action", "url": "/signup","option":"Sign up"},
                    {"className": "user-action", "url": "/login","option":"Log in"}
                ]}>
                    <a href="/" className="logo">
                        <img src={spotifylogo} alt="Spotify" />
                    </a>
            </NavOptions>
            <Burger open={open} onClick={()=>setOpen(!open)}/>
        </nav>
    )
}

export default React.memo(Nav);