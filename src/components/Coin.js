import React, {useEffect, useState, useContext} from 'react'
import { useParams } from "react-router-dom";
import {Context} from "../Context"
import {LinearProgress} from "@mui/material"


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
  return (
    <div className="coin-page">
    <div className="sidebar">

           <h1>{coin?.name}</h1>
           <div className="coin-name">
             <img src={coin?.image.large} alt={coin?.name}/>
             <p style={{textAlign: "center", padding: ".2em .5em" }}>
              {coin?.description.en.slice(0, 270)}
             </p>
             <a style={{color: "#fff"}} href={coin?.links.homepage[0]}>Website:<span> {coin?.links.homepage[0]}</span></a>
             <h3>Rank: {coin?.market_cap_rank}</h3>
             <span>Current Price:&nbsp;{coin?.market_data.current_price.usd}&nbsp;{currency}</span>
           </div>
    </div>
    <div className="chart-div">
          <h1>Char area</h1>
          <div className="chart-area">

          </div>
    </div>
    
    </div>
  )
}
