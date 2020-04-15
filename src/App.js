import React from 'react';
import Musclemap from './containers/Musclemap/Musclemap';
import Layout from './components/layout/layout';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <Layout className="App">
          <Musclemap />
        </Layout>
    );
  }  
}

export default App;
