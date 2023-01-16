/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
const Context = React.createContext()

const baseUrl = "https://api.coingecko.com/api/v3"
const specificCoin =  "coins/:id"
function ContextProvider({children}) {
    const [currency, setCurrency] = useState("INR")
    const [symbol, setSymbol] = useState("₹")
    
    useEffect(() => {
         if(currency === "INR") setSymbol("₹")
         else if(currency === "USD") setSymbol("$")
    }, [currency])
     return (
        <Context.Provider value={{currency, symbol, setCurrency, setSymbol}}>
          {children}
        </Context.Provider>
     )
}

export {ContextProvider, Context}