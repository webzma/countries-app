import { useState } from "react";
import { createContext } from "react";
import data from "../../data.json";
import { useMemo } from "react";
import { REGION_FILTER_WORDS } from "../services/regionFilterWords";

export const CountriesContext = createContext();

export default function CountriesProvider({ children }) {
  const [countries, setCountries] = useState(data);
  const [searchCountry, setSearchCountry] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const filteredCountriesBySearch = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchCountry.toLowerCase())
  });

  const filterBy = useMemo(() => {
    if (regionFilter == REGION_FILTER_WORDS.africa) {
      return filteredCountriesBySearch.filter(country => country.region === 'Africa');
    }

    if (regionFilter === REGION_FILTER_WORDS.asia) {
      return filteredCountriesBySearch.filter(country => country.region === 'Asia');
    }

    if (regionFilter === REGION_FILTER_WORDS.europe) {
      return filteredCountriesBySearch.filter(country => country.region === 'Europe');
    }

    if (regionFilter === REGION_FILTER_WORDS.oceani) {
      return filteredCountriesBySearch.filter(country => country.region === 'Oceania');
    }

    if (regionFilter === REGION_FILTER_WORDS.america) {
      return filteredCountriesBySearch.filter(country => country.region === 'Americas');
    }

    if (regionFilter === REGION_FILTER_WORDS.none) {
      console.log(countries);
      return countries
    }

    return filteredCountriesBySearch
  }, [filteredCountriesBySearch, regionFilter])

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        searchCountry,
        setSearchCountry,
        filteredCountriesBySearch,
        regionFilter,
        setRegionFilter,
        filterBy
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
