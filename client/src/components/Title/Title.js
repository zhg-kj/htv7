import React from 'react';

import "./Title.css";

export class Title extends React.Component{
    render() {
        return(
            <div className='intro'>
                <h1 style={{color: 'white'}}>WELCOME TO THE PRIVATE-BIT</h1>
                <h2 style={{color: 'white'}}>NO COINS, NO ENTRY</h2>
            </div>
        )
    }
}