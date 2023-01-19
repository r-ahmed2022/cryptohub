import React, {useContext, useState} from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

import {Container, Toolbar, Select, MenuItem,AppBar} from "@mui/material"
import {Context} from "../Context"

export default function Header() {
  const {currency, setCurrency} = useContext(Context)
  const navigate = useNavigate()
  const {list} = useSelector(state => state.trendingcryptos)
  const [trendingCoins, setTrendingCoins] = useState(list?.coins)
  console.log(trendingCoins)
  const goHome = () => {
      navigate(-1)
  }

  return (
    <AppBar color="transparent" position='static'> 
            <Container maxWidth="lg">
            <Toolbar> 
                <h1 className="crypto-title" onClick={() => goHome()}>  
                    CryptoHub
                </h1>

                <div className="trending-coins">

                </div>

                <Select variant="outlined"  className="menu" style={{
                    width: 100,
                    height: 40,
                    marginLeft: "auto",
                    border: "1px solid white",
                    color: "white",
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
            </Toolbar>
            </Container>    
    </AppBar>

  )
}
