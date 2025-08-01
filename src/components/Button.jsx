import React from "react";
import '../App.css';

function Button({onClick, children}) {

    return (
        <button className="bg-black text-white text-xs font-semibold py-2 px-6 rounded-md border-2 border-transparent hover:border-black hover:bg-white hover:text-black transform active:translate-y-0.5 transition duration-150"  onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;



