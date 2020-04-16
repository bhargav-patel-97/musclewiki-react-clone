import React from 'react';
import './DesktopElementRenderer.css';
import '../footer/footer.css';

const DesktopElementRenderer = (props) => {

    let muscleRaw = props.element;
    let muscle = muscleRaw.split('-');
    if (muscle[0] === 'mobile') {
        muscle.shift();
      }
    let title= muscle.join(" ").toUpperCase();

    return (
        <div className={props.className}>
            <h2 className="hide">{title}</h2>
            <img className="exerciseImg" src={props.exercise} alt=""/>
            <div className="footer">
                <p>An opensource initiative. Powered by <a href= "https://musclewiki.org">Musclewiki©</a></p>
                <p>Made with <span>❤</span> in India</p>
            </div>
        </div>
    )
}

export default DesktopElementRenderer;