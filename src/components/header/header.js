import React from 'react';
import logo from '../../static/muscle-wiki.png';
import './Header.css';

const header = () => (
    <div className="row">
        <img className="title" src ={logo} alt="MuscleWiki Logo"/>
            <ul>
                <li>Stretches</li>
                <li>Bodyweight</li>
                <li>Tools</li>
            </ul>
        <input type={Text} />
    </div>
);

export default header;