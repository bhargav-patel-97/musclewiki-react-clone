import MediaQuery, { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react';
import DesktopElementRenderer from '../ElementRenderer/DesktopElementRenderer';


const musclewiki = 'https://musclewiki.org/static/Crops/';
const musclewiki_female = 'https://musclewiki.org/static/Crops/female/';

const desktopFigures = { 'male': [
  
  { key: 0, src: `${musclewiki}00.-Blank-Figures.png`, className: 'background', alt: 'muscle-map-man' },
  { key: 1, src: `${musclewiki}08.-TrapsLeft.png`, className: 'male-traps-left', alt: 'muscle-map-man' },
  { key: 2, src: `${musclewiki}08.-TrapsRight.png`, className: 'male-traps-right', alt: 'muscle-map-man' },
  { key: 3, src: `${musclewiki}07.A-Deltoids.png`, className: 'male-shoulders-left', alt: 'muscle-map-man' },
  { key: 4, src: `${musclewiki}07.B-Deltoids.png`, className: 'male-shoulders-right', alt: 'muscle-map-man' },
  { key: 5, src: `${musclewiki}06.-Pecs.png`, className: 'male-pecs', alt: 'muscle-map-man' },
  { key: 6, src: `${musclewiki}05.A-Biceps.png`, className: 'male-biceps-left', alt: 'muscle-map-man' },
  { key: 7, src: `${musclewiki}05.B-Biceps.png`, className: 'male-biceps-right', alt: 'muscle-map-man' },
  { key: 8, src: `${musclewiki}14.A-Forearms.png`, className: 'male-forearm-left', alt: 'muscle-map-man' },
  { key: 9, src: `${musclewiki}14.B-Forearms.png`, className: 'male-forearm-right', alt: 'muscle-map-man' },
  { key: 10, src: `${musclewiki}04.-Obliques.png`, className: 'male-obliques', alt: 'muscle-map-man' },
  { key: 11, src: `${musclewiki}01.A-Quads.png`, className: 'male-quads-left', alt: 'muscle-map-man' },
  { key: 12, src: `${musclewiki}01.B-Quads.png`, className: 'male-quads-right', alt: 'muscle-map-man' },
  { key: 13, src: `${musclewiki}13.A-Calves.png`, className: 'male-calves-left', alt: 'calves-left-man'  },
  { key: 14, src: `${musclewiki}13.B-Calves.png`, className: 'male-calves-right', alt: ''  },
  { key: 15, src: `${musclewiki}08.B-Traps.png`, className: 'male-back-traps', alt: ''  },
  { key: 16, src: `${musclewiki}08.C-Traps.png`, className: 'male-back-traps-mid', alt: ''  },
  { key: 17, src: `${musclewiki}07.C-Deltoids.png`, className: 'male-back-shoulders-left', alt: ''  },
  { key: 18, src: `${musclewiki}07.D-Deltoids.png`, className: 'male-back-shoulders-right', alt: ''  },
  { key: 19, src: `${musclewiki}09.A-Triceps.png`, className: 'male-triceps-left', alt: ''  },
  { key: 20, src: `${musclewiki}09.B-Triceps.png`, className: 'male-triceps-right', alt: ''  },
  { key: 21, src: `${musclewiki}10.A-Lats.png`, className: 'male-back-lats-left', alt: ''  },
  { key: 22, src: `${musclewiki}10.B-Lats.png`, className: 'male-back-lats-right', alt: ''  },
  { key: 23, src: `${musclewiki}15.-Lower-Back.png`, className: 'male-back-lower', alt: ''  },
  { key: 24, src: `${musclewiki}14.C-Forearms.png`, className: 'male-back-forearms-left', alt: ''  },
  { key: 25, src: `${musclewiki}14.D-Forearms.png`, className: 'male-back-forearms-right', alt: ''  },
  { key: 26, src: `${musclewiki}11.-Glutes.png`, className: 'male-back-glutes', alt: ''  },
  { key: 27, src: `${musclewiki}12.A-Hamstrings.png`, className: 'male-back-hamstrings-left', alt: ''  },
  { key: 28, src: `${musclewiki}12.B-Hamstrings.png`, className: 'male-back-hamstrings-right', alt: ''  },
  { key: 29, src: `${musclewiki}13.C-Calves.png`, className: 'male-back-calves-left', alt: ''  },
  { key: 30, src: `${musclewiki}13.D-Calves.png`, className: 'male-back-calves-right', alt: ''  }

],
'female': [
  
  { key: 0, src: `${musclewiki_female}Female-Figures.png`, className: 'background', alt: '' },
  { key: 1, src: `${musclewiki_female}female-traps-A.png`, className: 'female-Traps-left', alt: '' },
  { key: 2, src: `${musclewiki_female}female-traps-B.png`, className: 'female-Traps-right', alt: '' },
  { key: 3, src: `${musclewiki_female}female-deltoids-A.png`, className: 'female-Shoulders-left', alt: '' },
  { key: 4, src: `${musclewiki_female}female-deltoids-B.png`, className: 'female-Shoulders-right', alt: '' },
  { key: 5, src: `${musclewiki_female}female-pecs.png`, className: 'female-Pecs', alt: '' },
  { key: 6, src: `${musclewiki_female}female-biceps-A.png`, className: 'female-Biceps-left', alt: '' },
  { key: 7, src: `${musclewiki_female}female-biceps-B.png`, className: 'female-Biceps-right', alt: '' },
  { key: 8, src: `${musclewiki_female}female-forearms-A.png`, className: 'female-Forearm-left', alt: '' },
  { key: 9, src: `${musclewiki_female}female-forearms-B.png`, className: 'female-Forearm-right', alt: '' },
  { key: 10, src: `${musclewiki_female}female-abdominals.png`, className: 'female-Abdominals', alt: '' },
  { key: 11, src: `${musclewiki_female}female-quads-A.png`, className: 'female-Quads-left', alt: '' },
  { key: 12, src: `${musclewiki_female}female-quads-B.png`, className: 'female-Quads-right', alt: '' },
  { key: 13, src: `${musclewiki_female}female-calves-A.png`, className: 'female-Calves-left', alt: '' },
  { key: 14, src: `${musclewiki_female}female-calves-B.png`, className: 'female-Calves-right', alt: '' },
  { key: 15, src: `${musclewiki_female}female-traps-C.png`, className: 'female-Back-traps', alt: '' },
  { key: 16, src: `${musclewiki_female}female-traps-D.png`, className: 'female-Back-traps-lower', alt: '' },
  { key: 17, src: `${musclewiki_female}female-deltoids-C.png`, className: 'female-Back-Shoulders-left', alt: '' },
  { key: 18, src: `${musclewiki_female}female-deltoids-D.png`, className: 'female-Back-Shoulders-right', alt: '' },
  { key: 19, src: `${musclewiki_female}female-triceps-A.png`, className: 'female-Triceps-left', alt: '' },
  { key: 20, src: `${musclewiki_female}female-triceps-B.png`, className: 'female-Triceps-right', alt: '' },
  { key: 21, src: `${musclewiki_female}female-lats-A.png`, className: 'female-Back-lats-left', alt: '' },
  { key: 22, src: `${musclewiki_female}female-lats-B.png`, className: 'female-Back-lats-right', alt: '' },
  { key: 23, src: `${musclewiki_female}female-lowerback.png`, className: 'female-Back-lower', alt: '' },
  { key: 24, src: `${musclewiki_female}female-forearms-C.png`, className: 'female-Back-Forearms-left', alt: '' },
  { key: 25, src: `${musclewiki_female}female-forearms-D.png`, className: 'female-Back-Forearms-right', alt: '' },
  { key: 26, src: `${musclewiki_female}female-glutes.png`, className: 'female-Back-Glutes', alt: '' },
  { key: 27, src: `${musclewiki_female}female-hamstrings-A.png`, className: 'female-Back-Hamstrings-left', alt: '' },
  { key: 28, src: `${musclewiki_female}female-hamstrings-B.png`, className: 'female-Back-Hamstrings-right', alt: '' },
  { key: 29, src: `${musclewiki_female}female-calves-C.png`, className: 'female-Back-Calves-left', alt: '' },
  { key: 30, src: `${musclewiki_female}female-calves-D.png`, className: 'female-Back-Calves-right', alt: '' }
  

]}

const mobileFigures = { 'male': [
  { key: 0, src: `${musclewiki}mobilebg.png`, className: 'bg', alt: 'muscle-map-man' },
  { key: 1, src: `${musclewiki}08.-TrapsLeft.png`, className: 'male-traps-left', alt: 'muscle-map-man' },
  { key: 2, src: `${musclewiki}08.-TrapsRight.png`, className: 'male-traps-right', alt: 'muscle-map-man' },
  { key: 3, src: `${musclewiki}07.A-Deltoids.png`, className: 'male-shoulders-left', alt: 'muscle-map-man' },
  { key: 4, src: `${musclewiki}07.B-Deltoids.png`, className: 'male-shoulders-right', alt: 'muscle-map-man' },
  { key: 5, src: `${musclewiki}06.-Pecs.png`, className: 'male-pecs', alt: 'muscle-map-man' },
  { key: 6, src: `${musclewiki}05.A-Biceps.png`, className: 'male-biceps-left', alt: 'muscle-map-man' },
  { key: 7, src: `${musclewiki}05.B-Biceps.png`, className: 'male-biceps-right', alt: 'muscle-map-man' },
  { key: 8, src: `${musclewiki}14.A-Forearms.png`, className: 'male-forearm-left', alt: 'muscle-map-man' },
  { key: 9, src: `${musclewiki}14.B-Forearms.png`, className: 'male-forearm-right', alt: 'muscle-map-man' },
  { key: 10, src: `${musclewiki}04.-Obliques.png`, className: 'male-obliques', alt: 'muscle-map-man' },
  { key: 11, src: `${musclewiki}01.A-Quads.png`, className: 'male-quads-left', alt: 'muscle-map-man' },
  { key: 12, src: `${musclewiki}01.B-Quads.png`, className: 'male-quads-right', alt: 'muscle-map-man' },
  { key: 13, src: `${musclewiki}13.A-Calves.png`, className: 'male-calves-left', alt: 'calves-left-man'  },
  { key: 14, src: `${musclewiki}13.B-Calves.png`, className: 'male-calves-right', alt: ''  },
  { key: 15, src: `${musclewiki}08.B-Traps.png`, className: 'male-back-traps', alt: ''  },
  { key: 16, src: `${musclewiki}08.C-Traps.png`, className: 'male-back-traps-mid', alt: ''  },
  { key: 17, src: `${musclewiki}07.C-Deltoids.png`, className: 'male-back-shoulders-left', alt: ''  },
  { key: 18, src: `${musclewiki}07.D-Deltoids.png`, className: 'male-back-shoulders-right', alt: ''  },
  { key: 19, src: `${musclewiki}09.A-Triceps.png`, className: 'male-triceps-left', alt: ''  },
  { key: 20, src: `${musclewiki}09.B-Triceps.png`, className: 'male-triceps-right', alt: ''  },
  { key: 21, src: `${musclewiki}10.A-Lats.png`, className: 'male-back-lats-left', alt: ''  },
  { key: 22, src: `${musclewiki}10.B-Lats.png`, className: 'male-back-lats-right', alt: ''  },
  { key: 23, src: `${musclewiki}15.-Lower-Back.png`, className: 'male-back-lower', alt: ''  },
  { key: 24, src: `${musclewiki}14.C-Forearms.png`, className: 'male-back-forearms-left', alt: ''  },
  { key: 25, src: `${musclewiki}14.D-Forearms.png`, className: 'male-back-forearms-right', alt: ''  },
  { key: 26, src: `${musclewiki}11.-Glutes.png`, className: 'male-back-glutes', alt: ''  },
  { key: 27, src: `${musclewiki}12.A-Hamstrings.png`, className: 'male-back-hamstrings-left', alt: ''  },
  { key: 28, src: `${musclewiki}12.B-Hamstrings.png`, className: 'male-back-hamstrings-right', alt: ''  },
  { key: 29, src: `${musclewiki}13.C-Calves.png`, className: 'male-back-calves-left', alt: ''  },
  { key: 30, src: `${musclewiki}13.D-Calves.png`, className: 'male-back-calves-right', alt: ''  }
],
'female': [
  { key: 0, src: `${musclewiki_female}female-mobilebg.png`, className: 'bg', alt: '' },
  { key: 1, src: `${musclewiki_female}female-traps-A.png`, className: 'female-Traps-left', alt: '' },
  { key: 2, src: `${musclewiki_female}female-traps-B.png`, className: 'female-Traps-right', alt: '' },
  { key: 3, src: `${musclewiki_female}female-deltoids-A.png`, className: 'female-Shoulders-left', alt: '' },
  { key: 4, src: `${musclewiki_female}female-deltoids-B.png`, className: 'female-Shoulders-right', alt: '' },
  { key: 5, src: `${musclewiki_female}female-pecs.png`, className: 'female-Pecs', alt: '' },
  { key: 6, src: `${musclewiki_female}female-biceps-A.png`, className: 'female-Biceps-left', alt: '' },
  { key: 7, src: `${musclewiki_female}female-biceps-B.png`, className: 'female-Biceps-right', alt: '' },
  { key: 8, src: `${musclewiki_female}female-forearms-A.png`, className: 'female-Forearm-left', alt: '' },
  { key: 9, src: `${musclewiki_female}female-forearms-B.png`, className: 'female-Forearm-right', alt: '' },
  { key: 10, src: `${musclewiki_female}female-abdominals.png`, className: 'female-Abdominals', alt: '' },
  { key: 11, src: `${musclewiki_female}female-quads-A.png`, className: 'female-Quads-left', alt: '' },
  { key: 12, src: `${musclewiki_female}female-quads-B.png`, className: 'female-Quads-right', alt: '' },
  { key: 13, src: `${musclewiki_female}female-calves-A.png`, className: 'female-Calves-left', alt: '' },
  { key: 14, src: `${musclewiki_female}female-calves-B.png`, className: 'female-Calves-right', alt: '' },
  { key: 15, src: `${musclewiki_female}female-traps-C.png`, className: 'female-Back-traps', alt: '' },
  { key: 16, src: `${musclewiki_female}female-traps-D.png`, className: 'female-Back-traps-lower', alt: '' },
  { key: 17, src: `${musclewiki_female}female-deltoids-C.png`, className: 'female-Back-Shoulders-left', alt: '' },
  { key: 18, src: `${musclewiki_female}female-deltoids-D.png`, className: 'female-Back-Shoulders-right', alt: '' },
  { key: 19, src: `${musclewiki_female}female-triceps-A.png`, className: 'female-Triceps-left', alt: '' },
  { key: 20, src: `${musclewiki_female}female-triceps-B.png`, className: 'female-Triceps-right', alt: '' },
  { key: 21, src: `${musclewiki_female}female-lats-A.png`, className: 'female-Back-lats-left', alt: '' },
  { key: 22, src: `${musclewiki_female}female-lats-B.png`, className: 'female-Back-lats-right', alt: '' },
  { key: 23, src: `${musclewiki_female}female-lowerback.png`, className: 'female-Back-lower', alt: '' },
  { key: 24, src: `${musclewiki_female}female-forearms-C.png`, className: 'female-Back-Forearms-left', alt: '' },
  { key: 25, src: `${musclewiki_female}female-forearms-D.png`, className: 'female-Back-Forearms-right', alt: '' },
  { key: 26, src: `${musclewiki_female}female-glutes.png`, className: 'female-Back-Glutes', alt: '' },
  { key: 27, src: `${musclewiki_female}female-hamstrings-A.png`, className: 'female-Back-Hamstrings-left', alt: '' },
  { key: 28, src: `${musclewiki_female}female-hamstrings-B.png`, className: 'female-Back-Hamstrings-right', alt: '' },
  { key: 29, src: `${musclewiki_female}female-calves-C.png`, className: 'female-Back-Calves-left', alt: '' },
  { key: 30, src: `${musclewiki_female}female-calves-D.png`, className: 'female-Back-Calves-right', alt: '' }
  
]}

const Images = (props) => {

  let gender = props.selection;
  const [element, setElement] = useState(''); 
  const database = props.db;
  const [src, getSrc] = useState('');

  const desktopRoute = (e) => {
    try {

      let clickedElement = e.target.className;
      clickedElement !== 'background' ? setElement(clickedElement): setElement('');
      let element = clickedElement.split('-');
      if (element[0] === 'mobile') {
        element.shift();
      }
      console.log(element);
      let el = element.join(" ");
      let req = el.toUpperCase();
      let src = database[`${gender}`][`${req}`];
      getSrc(src);
      let toHide = document.querySelector('.hide');
      toHide.classList.remove('hide');

      window.onscroll = function() {scrollFunction()};
      const mybutton = document.querySelector(".top");

      function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";

        
      }
}

    } catch (e) {
      console.log(e);
    }
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  });
    
    return(
      <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>

        {isDesktopOrLaptop && <> 
          {desktopFigures[gender].map 
            (({key, className, src, alt}) =>
                <img 
                  key={key} 
                  src={src} 
                  alt={alt} 
                  onClick={(e) => desktopRoute(e)} 
                  className={className}>
                </img>
            )
          }
          </>}
          {isTabletOrMobileDevice && <> 
            {mobileFigures[gender].map
              (({key, className, src, alt}) => 
              <img 
                key={key} 
                src={src} 
                alt={alt} 
                onClick={(e) => desktopRoute(e)} 
                className={`mobile-${className}`}
              />)
            }
            </>}
          <DesktopElementRenderer className={`desktopMuscle`} element={element} exercise={src} />
      </MediaQuery>
    )
}

  
export default Images;