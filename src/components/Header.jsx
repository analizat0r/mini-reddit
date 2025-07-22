import React from "react";
import Button from './Button';

function Header() {
    return (
        <div className="flex items-center h-20 bg-amber-600">
            <div>
                 <a href="#">MINI REDDIT</a>
                <Button />
            </div>
        </div>
    )
}

export default Header;