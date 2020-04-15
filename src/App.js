import React from 'react';
import styles from './App.css';
import Header from './components/header/header';
import Musclemap from './containers/Musclemap/Musclemap';


class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Musclemap />
      </div>
    );
  }  
}

export default App;
