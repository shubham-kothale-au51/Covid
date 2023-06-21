// import React, { useEffect, useState } from "react";
// import axios from 'axios';


// function CovidData() {
//   const [continents, setContinents] = useState([]);
//   const [selectedContinent, setSelectedContinent] = useState("");
//   const [countries, setCountries] = useState([]);
//   const [countryData, setCountryData] = useState(null);
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     fetchContinents();
//   }, []);

//   const fetchContinents = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://covid-193.p.rapidapi.com/countries',
//       headers: {
//         'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
//         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       const continents = response.data.response.map((country) => country.continent);
//       setContinents([...new Set(continents)]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchCountriesByContinent = async (continent) => {
//     const options = {
//       method: 'GET',
//       url: 'https://covid-193.p.rapidapi.com/history',
//       headers: {
//         'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
//         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       const countries = response.data.response.filter((country) => country.continent === continent);
//       setCountries(countries);
//       setSelectedContinent(continent);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchCountryData = async (country) => {
//     const options = {
//       method: 'GET',
//       url: 'https://covid-193.p.rapidapi.com/statistics',
//       params: {
//         country: country,
//       },
//       headers: {
//         'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
//         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       setCountryData(response.data.response[0]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleContinentClick = (continent) => {
//     if (selectedContinent === continent) {
//       setSelectedContinent("");
//     } else {
//       fetchCountriesByContinent(continent);
//     }
//   };

//   const handleCountryClick = (country) => {
//     fetchCountryData(country);
//   };

//   const handleSearchInputChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     fetchCountryData(searchInput);
//   };

//   return (
//     <div className="covidData">
//       <h1>COVID-19 CASES COUNTRY WISE</h1>
//       <div className="covidData__input">
//         <form onSubmit={handleSearchSubmit}>
//           <input onChange={handleSearchInputChange} placeholder="Enter Country Name" />
//           <br />
//           <button type="submit">Search</button>
//         </form>
//       </div>

//       <div className="covidData__continents">
//         {continents.map((continent, index) => (
//           <div key={index} className="covidData__continent">
//             <button onClick={() => handleContinentClick(continent)}>
//               {selectedContinent === continent ? "-" : "+"}
//             </button>
//             <span>{continent}</span>
//             {selectedContinent === continent && (
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Country</th>
//                     <th>Population</th>
//                     <th>Total Cases</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {countries.map((country, index) => (
//                     <tr key={index} onClick={() => handleCountryClick(country.country)}>
//                       <td>{country.country}</td>
//                       <td>{country.population}</td>
//                       <td>{country.cases.total}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         ))}
//       </div>

//       {countryData && (
//         <div className="covidData__country__info">
//           <p>Country Name: {countryData.country}</p>
//           <p>Cases: {countryData.cases.total}</p>
//           <p>Deaths: {countryData.deaths.total}</p>
//           <p>Recovered: {countryData.cases.recovered}</p>
//           <p>Cases Today: {countryData.cases.new}</p>
//           <p>Deaths Today: {countryData.deaths.new}</p>
//           <p>Recovered Today: {countryData.cases.recovered}</p>
//           <p>Last Updated: {countryData.time}</p>
//           <p>Continent: {countryData.continent}</p>
//           <p>Population: {countryData.population}</p>
//           <p>Total Tests: {countryData.tests.total}</p>
//           <p>Active cases: {countryData.cases.active}</p>
//           <p>Critical cases: {countryData.cases.critical}</p>
//           <p>Day: {countryData.day}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CovidData;



// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import "./CovidData.css";

// function CovidData() {
//   const [continents, setContinents] = useState([]);
//   const [selectedContinent, setSelectedContinent] = useState("");
//   const [continentCountries, setContinentCountries] = useState([]);
//   const [countryData, setCountryData] = useState(null);
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     fetchContinents();
//   }, []);

//   const fetchContinents = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://covid-193.p.rapidapi.com/countries',
//       headers: {
//         'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
//         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       const continents = response.data.response.map((country) => country.continent);
//       setContinents([...new Set(continents)]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchCountriesByContinent = async (continent) => {
//     const options = {
//       method: 'GET',
//       url: 'https://covid-193.p.rapidapi.com/history',
//       headers: {
//         'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
//         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       const countries = response.data.response.filter((country) => country.continent === continent);
//       setContinentCountries(countries);
//       setSelectedContinent(continent);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchCountryData = async (country) => {
//     const options = {
//       method: 'GET',
//       url: 'https://covid-193.p.rapidapi.com/statistics',
//       params: {
//         country: country,
//       },
//       headers: {
//         'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
//         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       setCountryData(response.data.response[0]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleContinentClick = (continent) => {
//     if (selectedContinent === continent) {
//       setSelectedContinent("");
//     } else {
//       fetchCountriesByContinent(continent);
//     }
//   };

//   const handleCountryClick = (country) => {
//     fetchCountryData(country);
//   };

//   const handleSearchInputChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     fetchCountryData(searchInput);
//   };

//   return (
//     <div className="covidData">
//       <h1>COVID-19 CASES COUNTRY WISE</h1>
//       <div className="covidData__input">
//         <form onSubmit={handleSearchSubmit}>
//           <input onChange={handleSearchInputChange} placeholder="Enter Country Name" />
//           <br />
//           <button type="submit">Search</button>
//         </form>
//       </div>

//        <div className="covidData__continents">
//         {continents.map((continent, index) => (
//           <div key={index} className="covidData__continent">
//             {/* <button onClick={() => handleContinentClick(continent)}>
//               {selectedContinent === continent ? "-" : "+"}
//             </button> */}
//             <span>{continent}</span>
//             {selectedContinent === continent && (
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Country</th>
//                     <th>Population</th>
//                     <th>Total Cases</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {continentCountries.map((country, index) => (
//                     <tr key={index} onClick={() => handleCountryClick(country.country)}>
//                       <td>{country.country}</td>
//                       <td>{country.population}</td>
//                       <td>{country.cases.total}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         ))}
//       </div>

//       {countryData && (
//   <div className="covidData__country__info">
//     <table>
//       <tbody>
//         <tr>
//           <td>Country Name:</td>
//           <td>{countryData.country}</td>
//         </tr>
//         <tr>
//           <td>Cases:</td>
//           <td>{countryData.cases.total}</td>
//         </tr>
//         <tr>
//           <td>Deaths:</td>
//           <td>{countryData.deaths.total}</td>
//         </tr>
//         <tr>
//           <td>Recovered:</td>
//           <td>{countryData.cases.recovered}</td>
//         </tr>
//         <tr>
//           <td>Cases Today:</td>
//           <td>{countryData.cases.new}</td>
//         </tr>
//         <tr>
//           <td>Deaths Today:</td>
//           <td>{countryData.deaths.new}</td>
//         </tr>
//         <tr>
//           <td>Recovered Today:</td>
//           <td>{countryData.cases.recovered}</td>
//         </tr>
//         <tr>
//           <td>Last Updated:</td>
//           <td>{countryData.time}</td>
//         </tr>
//         <tr>
//           <td>Continent:</td>
//           <td>{countryData.continent}</td>
//         </tr>
//         <tr>
//           <td>Population:</td>
//           <td>{countryData.population}</td>
//         </tr>
//         <tr>
//           <td>Total Tests:</td>
//           <td>{countryData.tests.total}</td>
//         </tr>
//         <tr>
//           <td>Active cases:</td>
//           <td>{countryData.cases.active}</td>
//         </tr>
//         <tr>
//           <td>Critical cases:</td>
//           <td>{countryData.cases.critical}</td>
//         </tr>
//         <tr>
//           <td>Day:</td>
//           <td>{countryData.day}</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// )}
//  </div>
//   );
// }

// export default CovidData;



import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./CovidData.css";

function CovidData() {
  const [continents, setContinents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [continentCountries, setContinentCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchContinents();
  }, []);

  const fetchContinents = async () => {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/countries',
      headers: {
        'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const continents = response.data.response.map((country) => country.continent);
      setContinents([...new Set(continents)]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCountriesByContinent = async (continent) => {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/history',
      headers: {
        'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const countries = response.data.response.filter((country) => country.continent === continent);
      setContinentCountries(countries);
      setSelectedContinent(continent);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCountryData = async (country) => {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      params: {
        country: country,
      },
      headers: {
        'X-RapidAPI-Key': '9b6dafed5dmsh389a43ee179daafp1e7f4ajsndae65e7f81b2',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setCountryData(response.data.response[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleContinentClick = (continent) => {
    if (selectedContinent === continent) {
      setSelectedContinent("");
    } else {
      fetchCountriesByContinent(continent);
    }
  };

  const handleCountryClick = (country) => {
    fetchCountryData(country);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchCountryData(searchInput);
  };

  return (
    <div className="covidData">
      <h1>COVID-19 CASES COUNTRY WISE</h1>
      <div className="covidData__input">
        <form onSubmit={handleSearchSubmit}>
          <input onChange={handleSearchInputChange} placeholder="Enter Country Name" />
          <br />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="covidData__continents">
        {continents.map((continent, index) => (
          <div key={index} className="covidData__continent">
            <span>{continent}</span>
            {selectedContinent === continent && (
              <table>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Population</th>
                    <th>Total Cases</th>
                  </tr>
                </thead>
                <tbody>
                  {continentCountries.map((country, index) => (
                    <tr key={index} onClick={() => handleCountryClick(country.country)}>
                      <td>{country.country}</td>
                      <td>{country.population}</td>
                      <td>{country.cases.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>

      {countryData && (
        <div className="covidData__country__info">
          <table>
            <tbody>
              <tr>
                <td>Country Name:</td>
                <td>{countryData.country}</td>
              </tr>
              <tr>
                <td>Cases:</td>
                <td>{countryData.cases.total}</td>
              </tr>
              <tr>
                <td>Deaths:</td>
                <td>{countryData.deaths.total}</td>
              </tr>
              <tr>
                <td>Recovered:</td>
                <td>{countryData.cases.recovered}</td>
              </tr>
              <tr>
                <td>Cases Today:</td>
                <td>{countryData.cases.new}</td>
              </tr>
              <tr>
                <td>Deaths Today:</td>
                <td>{countryData.deaths.new}</td>
              </tr>
              <tr>
                <td>Last Updated:</td>
                <td>{countryData.time}</td>
              </tr>
              <tr>
                <td>Continent:</td>
                <td>{countryData.continent}</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>{countryData.population}</td>
              </tr>
              <tr>
                <td>Total Tests:</td>
                <td>{countryData.tests.total}</td>
              </tr>
              <tr>
                <td>Active cases:</td>
                <td>{countryData.cases.active}</td>
              </tr>
              <tr>
                <td>Critical cases:</td>
                <td>{countryData.cases.critical}</td>
              </tr>
              <tr>
                <td>Day:</td>
                <td>{countryData.day}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CovidData;
