import React from 'react';
import styles from './Musclemap.css'
import TrapsLeft from '../../static/08.-TrapsLeft.png';
import TrapsRight from '../../static/08.-TrapsRight.png';
import shouldersA from '../../static/07.A-Deltoids.png';
import shouldersB from '../../static/07.B-Deltoids.png';
import pecs from "../../static/06.-Pecs.png";
import bicepsA from '../../static/05.A-Biceps.png';
import bicepsB from '../../static/05.B-Biceps.png';
import forearmsA from '../../static/14.A-Forearms.png';
import forearmsB from '../../static/14.B-Forearms.png';
import obliques from '../../static/04.-Obliques.png';
import quadsA from '../../static/01.A-Quads.png';
import quadsB from '../../static/01.B-Quads.png';
import calvesA from '../../static/13.A-Calves.png';
import calvesB from '../../static/13.B-Calves.png';

class Musclemap extends React.Component {
    constructor() {
        super();
        this.state = {
            urls : [
                
            ]
         };
    }

    render() {
        return(
            <div className={styles.Musclemap}>
                <img className={styles.background} src="https://musclewiki.org/static/Crops/00.-Blank-Figures.png" alt="muscle-map-musclewiki" />
                <img className={styles.trapsA} src={TrapsLeft} alt="male-left-traps" />
                <img className={styles.trapsB} src ={TrapsRight} alt ="male-right-traps" />
                <img className={styles.shouldersA} src={shouldersA} alt="mens-shoulders-left" />
                <img className={styles.shouldersB} src={shouldersB} alt="mens-shoulders-right" />
                <img className={styles.pecs} src={pecs} alt="mens-pecs"/>
                <img className={styles.bicepsA} src={bicepsA} alt="" />
                <img className={styles.bicepsB} src={bicepsB} alt="" />
                <img className={styles.forearmA} src={forearmsA} alt="" />
                <img className={styles.forearmB} src={forearmsB} alt="" />
                <img className={styles.obliques} src={obliques} alt="" />
                <img className={styles.quadsA} src={quadsA} alt="" />
                <img className={styles.quadsB} src={quadsB} alt="" />
                <img className={styles.calvesA} src={calvesA} alt="" />
                <img className={styles.calvesB} src={calvesB} alt="" />
                <img id="back-traps-a" src="/static/Crops/08.B-Traps.png" alt="" />
                <img id="back-traps-b" src="/static/Crops/08.C-Traps.png" alt="" />
                <img id="back-shoulders-a" src="/static/Crops/07.C-Deltoids.png" alt="" />
                <img id="back-shoulders-b" src="/static/Crops/07.D-Deltoids.png" alt="" />
                <img id="triceps-a" src="/static/Crops/09.A-Triceps.png" alt="" />
                <img id="triceps-b" src="/static/Crops/09.B-Triceps.png" alt="" />
                <img id="back-lats-a" src="/static/Crops/10.A-Lats.png" alt="" />
                <img id="back-lats-b" src="/static/Crops/10.B-Lats.png" alt="" />
                <img id="back-lower" src="/static/Crops/15.-Lower-Back.png" alt="" />
                <img id="back-forearms-a" src="/static/Crops/14.C-Forearms.png" alt="" />
                <img id="back-forearms-b" src="/static/Crops/14.D-Forearms.png" alt="" />
                <img id="back-glutes" src="/static/Crops/11.-Glutes.png" alt="" />
                <img id="back-hamstrings-a" src="/static/Crops/12.A-Hamstrings.png" alt="" />
                <img id="back-hamstrings-b" src="/static/Crops/12.B-Hamstrings.png" alt="" />
                <img id="back-calves-a" src="/static/Crops/13.C-Calves.png" alt="" />
                <img id="back-calves-b" src="/static/Crops/13.D-Calves.png" alt="" />
            </div>
        );
    }

}

export default Musclemap;