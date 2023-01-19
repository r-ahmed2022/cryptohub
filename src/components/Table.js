import React, {useContext}from 'react'
import { useNavigate } from 'react-router-dom';
import {Context} from "../Context"


export const Table = (props) => {
    const {coins} = props
    const {symbol} = useContext(Context)
    const cryptoElements = coins?.map(crypto => {
        return <tr className="crypto-Card" key={crypto.id} onClick={() => history(`/coins/${crypto.id}`)}>
          <td><img className="coin" src={crypto.image} alt="crypto-pic" /></td>
           <td><span className="coin">{crypto.name}</span></td>
           <td><span className="coin">{symbol}&nbsp;{crypto.current_price}</span></td>
           <td><span className="coin">{symbol}&nbsp;{crypto.high_24h}</span></td>
           <td><span className="coin">{symbol}&nbsp;{crypto.low_24h}</span></td>
        </tr>
     })
const  history = useNavigate();
  
  return (
    <table className="crypto-list">
    <thead><tr><th>Symbol</th><th>Name</th><th>Curr_Price</th><th>24_High</th><th>24_Low</th></tr></thead>
    <tbody>
      {cryptoElements}
    </tbody>
    </table>
  )
}
