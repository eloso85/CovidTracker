import React from 'react';
import {CountryPicker, Cards, Chart} from './components';
import styles from './index.module.css'
import {fetchData} from './api';
import coronaImg from './images/image.png'



// import CountryPicker from './components/CountryPicker/CountryPicker';
// import Cards from './components/Cards/Cards'
// import Charts from './components/Chart/Chart';

class App extends React.Component {

  state = {
    data:{},
    country:'',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
    console.log(fetchedData)
  }

  handleCountryChange = async(country)=>{
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country:country});
    console.log(fetchedData)
  }

  render(){
    const {data, country} = this.state;

    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt="COVID-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
