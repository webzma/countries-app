import { useContext } from "react"
import { CountriesContext }  from "../Context"

export function CountryInfo() {
  const context = useContext(CountriesContext)

  return (
    <div key={context.infoCountry?.name} className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-20">
      <div className="dark:shadow-md dark:shadow-slate-800 dark:bg-slate-800 p-2 shadow-gray-200 shadow-lg">
        <img className="w-full h-80 dark:shadow-md dark:shadow-slate-800 object-cover" src={context?.infoCountry?.flags?.svg} alt="country image" />
      </div>
    
    <div className="gap-8 flex flex-col justify-center ">
      <h4 className="font-bold text-2xl dark:text-white-color">{context.infoCountry.name}</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="flex flex-col dark:text-white gap-2">
            <span className="font-semibold">Native name: <span className="font-light">{context.infoCountry?.nativeName}</span></span>
            <span className="font-semibold">Population: <span className="font-light">{context.infoCountry?.population}</span></span>
            <span className="font-semibold">Region: <span className="font-light">{context.infoCountry?.region}</span></span>
            <span className="font-semibold">Sub region: <span className="font-light">{context.infoCountry?.subregion}</span></span>
            <span className="font-semibold">Capital: <span className="font-light">{context.infoCountry?.capital}</span></span>
        </p>

        <p className="flex flex-col dark:text-white gap-2">
          <span className="font-semibold">Top level domain: <span className="font-light">{context.infoCountry?.topLevelDomain[0]}</span></span>
          <span className="font-semibold">
            Currencies:
            {
              context.infoCountry?.currencies?.map(currency => (
                <span key={currency.name} className="font-light"> {currency.name}</span>
              ))
            }
          </span>
          <span className="font-semibold">Languages: {context.infoCountry?.languages?.map(language =>(
            <span className="font-light" key={language.name}> {language.name}</span> 
          ))}</span>
        </p>
      </div>

      <div>
        <div className="font-bold flex-col md:flex-row text-sm flex gap-6 md:items-center dark:text-white">
          Border countries: 
          <p className="flex flex-col md:flex-row gap-2">

            {
              context.infoCountry?.borders?.map(border =>  (
                <span key={border.name} className="font-medium w-full flex dark:text-white justify-center p-2 bg-white dark:shadow-md dark:shadow-slate-800 dark:bg-dark-blue-elements-dark shadow-gray-200 shadow-lg rounded-md">{border}</span>
              ))
            }
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}