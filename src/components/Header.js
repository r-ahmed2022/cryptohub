import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {Container, Toolbar, Select, MenuItem,AppBar} from "@mui/material"
import {Context} from "../Context"

export default function Header() {
  const {currency, setCurrency} = useContext(Context)
  return (
    <AppBar color="transparent" position='static'> 
            <Container maxWidth="lg">
            <Toolbar> 
            <Link className="navlink" path="/"> 
                <h1 className="crypto-title">  
                    CryptoHub
                </h1>
             </Link>
                <Select variant="outlined" style={{
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
