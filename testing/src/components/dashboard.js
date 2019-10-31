import React, { useState } from 'react';
import Display from "./display";


function Dashboard(props) {

    return (

        <div >
            <button data-testid="react-button" onClick={props.strike}> Strike </button>
            <button data-testid="react-button2" onClick={props.ball}> Ball </button>
            <button data-testid="react-button3" onClick={props.foul}> Foul </button>
            <button data-testid="react-button4" onClick={props.hit}> Hit </button>
        </div>
    );
}

export default Dashboard;