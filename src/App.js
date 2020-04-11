import React from 'react';
import styles from './App.css';
import Header from './components/header/Header';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
      <Header />
      </div>
    );
  }  
}

export default App;
