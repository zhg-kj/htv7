import React from 'react';

import "./Title.css";

export class Title extends React.Component{
    render() {
        return(
            <div className='intro'>
                <h1>THE BITch</h1>
                <h3>WE HAVE ALL YOU WANT!</h3>
                <button type="button" className="browse">Browse</button>
            </div>
        )
    }
}