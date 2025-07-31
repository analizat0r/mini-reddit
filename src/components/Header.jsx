import React from "react";
import Button from './Button';

function Header({onClick}) {
    return (
        <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
            <div className="text-xl font-bold">Mini Reddit</div>
            <Button onClick={onClick}>Login</Button>
        </header>
    )
}

export default Header;
