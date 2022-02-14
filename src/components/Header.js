import React, { useState } from 'react';
import NavTrans from './NavTrans';
import NavSolid from './NavSolid';

function Header() {
    const [myHeader, setMyHeader] = useState(false);
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
        const changemyHeading = () => {
            if (window.scrollY >= 100) {
                setMyHeader(true)
            } else {
                setMyHeader(false)
            }
        }
        window.addEventListener('scroll', changemyHeading);
    }
    return <header className="sticky top-0 z-10 bg-transparent">
        {myHeader ? <NavSolid /> : <NavTrans />}
    </header>;
}

export default Header;
