import { Component } from 'react';
import countriesData from '../../data/datacountries.json';
import { Link } from 'react-router-dom';
import countryDetails from '../countrydetails/CountryDetails';

class CountriesList extends Component {

    state = {
        countries: []
    }

    componentDidMount() {
        this.setState({ countries: countriesData })
    }


    render() {
        const { countries } = this.state
        return(
            <ul className="list-group">
                {countries.map((country) => 
                <li key={country.cca3} className="list-group-item">
                <Link className="link" to={`/countries/${country.cca3}/detail`}>{country.name.common}</Link>
                </li>
                )}
                
            </ul>
           
        )
    }
}


export default CountriesList