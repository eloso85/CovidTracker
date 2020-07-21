import React from 'react';
import {CountryPicker, Cards, Chart} from './components';
import styles from './index.module.css'
import {fetchData} from './api';



// import CountryPicker from './components/CountryPicker/CountryPicker';
// import Cards from './components/Cards/Cards'
// import Charts from './components/Chart/Chart';

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data)
  }
  render(){
    return(
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
