import React from "react";
import '../App.css';
import redirectToReddit from '../utils/auth'

function Button() {

    function handleSubmit() {
        redirectToReddit();
    }

    return (
        <button className="bg-black text-white text-xs font-semibold py-2 px-6 rounded-md border-2 border-transparent hover:border-black hover:bg-white hover:text-black transform active:translate-y-0.5 transition duration-150"  onClick={handleSubmit}>
            Button test
        </button>
    )
};

export default Button;



