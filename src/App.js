import './App.css';
import Navbar from './components/navbar/Navbar';
import CountriesList from './components/countrieslist/CountriesList';
import CountryDetails from './components/countrydetails/CountryDetails';
import { Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>
      <Switch>
        <Route path="/countries/:cca3/detail" component={CountryDetails}/>
      </Switch>
     
    
    </div>
  )
}

export default App;
