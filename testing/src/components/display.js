import React, { useState } from 'react';
import Dashboard from "./dashboard.js";


function Display(props) {

    return (
        <div>
            <div className="ballsDisplay" >
                <h1>Balls: {props.balls}</h1>
            </div>
            <div className="strikesDisplay" >
                <h1>Strikes: {props.strikes}</h1>
            </div>
        </div>
    )
}

export default Display;