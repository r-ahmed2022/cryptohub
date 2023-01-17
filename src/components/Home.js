import React, { useContext, useState, useEffect} from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import {Context} from "../Context"




export default function Home() {
 const {symbol} = useContext(Context)
 const {list} = useSelector(state => state.cryptolist)
  const [coins, setCoins] = useState(list?.list)
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState(1);

 
const  history = useNavigate();


    useEffect(() => {
      const updatedList = list?.filter((coin) =>
          coin.name.toLowerCase().includes(search) ||
          coin.symbol.toLowerCase().includes(search)
      )
      setCoins(updatedList) 
      return () => {
        console.log("component unmounted")
      }

    }, [search, list])
  
    const cryptoElements = coins?.map(crypto => {
      return <tr className="crypto-Card" onClick={() => history(`/coins/${crypto.id}`)}>
        <td><img className="coin" src={crypto.image} alt="crypto-pic" /></td>
         <td><span className="coin">{crypto.name}</span></td>
         <td><span className="coin">{symbol}{crypto.current_price}</span></td>
         <td><span className="coin">{symbol}{crypto.high_24h}</span></td>
         <td><span className="coin">{symbol}{crypto.low_24h}</span></td>
      </tr>
   })
  return (
    <main className="crypto-content">
    <h1>Trending Crypto Currencies across the Globe </h1>
    <input name="search" type="text" placeholder='Search for cryptocurrency' id="search" onChange={(e) => setSearch(e.target.value)}/>
     
        <table className="crypto-list">
        <tr><th>Symbol</th><th>Name</th><th>Curr_Price</th><th>24_High</th><th>24_Low</th></tr>
          {cryptoElements}
        </table>
             
    </main>
  )
}
