import React from 'react';
import {CountryPicker, Cards, Chart} from './components';
import styles from './index.module.css'
import {fetchData} from './api';



// import CountryPicker from './components/CountryPicker/CountryPicker';
// import Cards from './components/Cards/Cards'
// import Charts from './components/Chart/Chart';

class App extends React.Component {

  state = {
    data:{},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
    console.log(fetchedData)
  }
  render(){
    const {data} = this.state;

    return(
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
