import React, {useEffect, useState, useContext} from 'react'
import { useParams } from "react-router-dom";
import {Context} from "../Context"
import {LinearProgress} from "@mui/material"
import parse from 'html-react-parser';
import Chart from "./Chart"
export default function Coin() {
  const {id} = useParams()
   const [coin, setCoin] = useState()
   const {currency, symbol} = useContext(Context)

   useEffect(() => {
      fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(response => response.json())
      .then(data => {    
        setCoin(data)})
        return () => {
          console.log("component unmounted")
        }
   }, [] )

   function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
   if (!coin) return <LinearProgress style={{ backgroundColor: "#BAFE03" }} />;

  return (
    <div className="coin-page">
    <div className="sidebar">

           <h1>{coin?.name}</h1>
           <div className="coin-name">
             <img className="coin-pic" src={coin?.image.large} alt={coin?.name}/>
             <p style={{textAlign: "center", padding: ".2em .5em" }}>
              {parse(coin?.description.en.split(". ")[0])}.
             </p>
             <a style={{color: "#fff"}} href={coin?.links.homepage[0]}>Website:<span> {coin?.links.homepage[0]}</span></a>
             <h3>Rank: {coin?.market_cap_rank}</h3>
             <span> Current price: - {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}</span>
           </div>
    </div>
    <div className="chart-div">
          <h1>Chart area</h1>
           <Chart id={coin.id}/>
           <div className="market-info">
              <p>{coin?.price_change_percentage_7d}</p>
           </div>
    </div>
    
    </div>
  )
}
