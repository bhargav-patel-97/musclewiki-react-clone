const musclewiki = 'https://musclewiki.org/static/Crops/'
const images = [
  { key: 0, src: `${musclewiki}00.-Blank-Figures.png`, className: 'background', alt: 'muscle-map-man' },
  { key: 1, src: `${musclewiki}08.-TrapsLeft.png`, className: 'trapsA', alt: 'muscle-map-man' },
  { key: 2, src: `${musclewiki}08.-TrapsRight.png`, className: 'trapsB', alt: 'muscle-map-man' },
  { key: 3, src: `${musclewiki}07.A-Deltoids.png`, className: 'shouldersA', alt: 'muscle-map-man' },
  { key: 4, src: `${musclewiki}07.B-Deltoids.png`, className: 'shouldersB', alt: 'muscle-map-man' },
  { key: 5, src: `${musclewiki}06.-Pecs.png`, className: 'pecs', alt: 'muscle-map-man' },
  { key: 6, src: `${musclewiki}05.A-Biceps.png`, className: 'bicepsA', alt: 'muscle-map-man' },
  { key: 7, src: `${musclewiki}05.B-Biceps.png`, className: 'bicepsB', alt: 'muscle-map-man' },
  { key: 8, src: `${musclewiki}14.A-Forearms.png`, className: 'forearmA', alt: 'muscle-map-man' },
  { key: 9, src: `${musclewiki}14.B-Forearms.png`, className: 'forearmB', alt: 'muscle-map-man' },
  { key: 10, src: `${musclewiki}04.-Obliques.png`, className: 'obliques', alt: 'muscle-map-man' },
  { key: 11, src: `${musclewiki}01.A-Quads.png`, className: 'quadsA', alt: 'muscle-map-man' },
  { key: 12, src: `${musclewiki}01.B-Quads.png`, className: 'quadsB', alt: 'muscle-map-man' },
  { key: 13, src: `${musclewiki}13.A-Calves.png`, className: 'calvesA', alt: 'calves-left-man'  },
  { key: 14, src: `${musclewiki}13.B-Calves.png`, className: 'calvesB', alt: ''  },
  { key: 15, src: `${musclewiki}08.B-Traps.png`, className: 'backtrapsA', alt: ''  },
  { key: 16, src: `${musclewiki}08.C-Traps.png`, className: 'backtrapsB', alt: ''  },
  { key: 17, src: `${musclewiki}07.C-Deltoids.png`, className: 'backshouldersA', alt: ''  },
  { key: 18, src: `${musclewiki}07.D-Deltoids.png`, className: 'backshouldersB', alt: ''  },
  { key: 19, src: `${musclewiki}09.A-Triceps.png`, className: 'tricepsA', alt: ''  },
  { key: 20, src: `${musclewiki}09.B-Triceps.png`, className: 'tricepsB', alt: ''  },
  { key: 21, src: `${musclewiki}10.A-Lats.png`, className: 'backlatsA', alt: ''  },
  { key: 22, src: `${musclewiki}10.B-Lats.png`, className: 'backlatsB', alt: ''  },
  { key: 23, src: `${musclewiki}15.-Lower-Back.png`, className: 'backlower', alt: ''  },
  { key: 24, src: `${musclewiki}14.C-Forearms.png`, className: 'backforearmsA', alt: ''  },
  { key: 25, src: `${musclewiki}14.D-Forearms.png`, className: 'backforearmsB', alt: ''  },
  { key: 26, src: `${musclewiki}11.-Glutes.png`, className: 'backglutes', alt: ''  },
  { key: 27, src: `${musclewiki}12.A-Hamstrings.png`, className: 'backhamstringsA', alt: ''  },
  { key: 28, src: `${musclewiki}12.B-Hamstrings.png`, className: 'backhamstringsB', alt: ''  },
  { key: 29, src: `${musclewiki}13.C-Calves.png`, className: 'backcalvesA', alt: ''  },
  { key: 30, src: `${musclewiki}13.D-Calves.png`, className: 'backcalvesB', alt: ''  },

];
  
  function imageLoader() {
    return images;
  }
  

  export default imageLoader;