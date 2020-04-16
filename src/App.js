import React from 'react';
import Musclemap from './containers/Musclemap/Musclemap';
import Layout from './components/layout/layout';
import './App.css';

const scrollToTop = () => {

  var toTop = document.querySelector('.genderBtn');
  toTop.scrollIntoView({ behavior: 'smooth', block: 'end'}); 
}

class App extends React.Component {
  render() {
    return (
        <Layout className="App">
          <Musclemap />
          <div>
            <button className="top" onClick={scrollToTop}></button>
          </div>
        </Layout>
    );
  }  
}

export default App;
