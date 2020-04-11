import React from 'react';
import styles from './Header.css'
import logo from '../../img/muscle-wiki.png';

const header = () => (
    <div class={styles.row}>
        <img className= {styles.title} src ={logo} alt="muscle wiki official logo"/>
        <ul>
            <li>Stretches</li>
            <li>Bodyweight</li>
            <li>Tools</li>
        </ul>
        <input type={Text} />
    </div>
);

export default header;