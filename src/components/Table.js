import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';

const Table = (props) => {
  const { coins } = props;
  const history = useNavigate();
  const { symbol } = useContext(Context);
  const cryptoElements = coins?.map((crypto) => (
    <ul className="crypto-Card" key={crypto.id} onClick={() => history(`/coins/${crypto.id}`)}>
      <li>
        <img className="coin" src={crypto.image} alt="crypto-pic" />
        {' '}
      </li>
      <li className="coin-name">{crypto.name}</li>
      <li className="current_price">Current Price</li>
      <li className="coin">
        {symbol}
        {' '}
        {crypto.current_price}
      </li>
      <li className="lastcoin">
        {symbol}
        {' '}
        {crypto.high_24h}
      </li>
      <li className="lastcoin">
        {symbol}
        {' '}
        {crypto.low_24h}
      </li>
    </ul>
  ));

  return (
    <div className="crypto-list">
      <ul className="table-headers">
        <li>Symbol</li>
        <li>Name</li>
        <li>Curr_Price</li>
        <li>24_High</li>
        <li>24_Low</li>
      </ul>
      <div className="cryptoElements">
        {cryptoElements}
      </div>
    </div>
  );
};
export default Table;
