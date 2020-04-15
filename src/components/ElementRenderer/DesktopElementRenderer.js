import React from 'react';
import './DesktopElementRenderer.css';


const DesktopElementRenderer = (props) => {

    let muscleRaw = props.element;
    let muscle = muscleRaw.split('-');
    let title= muscle.join(" ").toUpperCase();    
    
    return (
        <div className={props.className}>
            <h2>{title}</h2>
             <img src={props.exercise} alt=""/>
        </div>
    )
}

export default DesktopElementRenderer;