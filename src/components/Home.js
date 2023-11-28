import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function Country() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v2/all?fields=name,region,flag"
        );
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const filterByRegion = (region) => {
    if (region === "All") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) => country.region === region);
      setFilteredCountries(filtered);
    }
    setActiveFilter(region);
  };

  return (
    <div className="home-page">
      <div className="region-filter">
        <button
          className={activeFilter === "All" ? "active" : ""}
          onClick={() => filterByRegion("All")}
        >
          All
        </button>

        <button
          className={activeFilter === "Asia" ? "active" : ""}
          onClick={() => filterByRegion("Asia")}
        >
          Asia
        </button>

        <button
          className={activeFilter === "Europe" ? "active" : ""}
          onClick={() => filterByRegion("Europe")}
        >
          Europe
        </button>
      </div>
      <div>
        <h1 className="country">Countries</h1>
        <div className="countries-list">
          {filteredCountries.map((country, index) => (
            <div key={index} className="country-box">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="country-flag"
              />
              <div>
                <h3>{country.name}</h3>
                <p>{country.region}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
