import {useState, useEffect} from 'react';

export default function useSticky(){
    const [scroll, setScroll] = useState(false);

    const handleScroll = ()=>{
        if(window.pageYOffset > 53)
            setScroll(true);
        else
            setScroll(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return scroll;
}