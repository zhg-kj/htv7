import React from 'react';
import '../styles/btn.css'

class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            label : "UNLOCK NOW",

        }
    }

    render(){
        return(
            <buttton className="btn">
                {this.state.label}
            </buttton>
        );
    }
}

export default Button;