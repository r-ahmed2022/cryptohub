import './App.css';
import React, { useEffect, useContext, useState } from 'react';
import {Routes, Route} from "react-router-dom"
import { useDispatch } from 'react-redux';
import Header from "./components/Header"
import Home from "./components/Home"
import Coin from "./components/Coin"
import { LIST_CRYPTO } from './redux/cryptoList';
import { TRENDING_CRYPTO } from './redux/TopTrendingCoin';
import {Context} from "./Context"

function App() {
  const {currency} = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LIST_CRYPTO(currency));
    dispatch(TRENDING_CRYPTO())
  }, [dispatch, currency]);
  return (
    <div className='wrapper'>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route> 
          <Route path="/coins/:id" element={<Coin />}></Route> 
          <Route path='*' element={<Home />} />

         </Routes>
    </div>
  );
}

export default App;
