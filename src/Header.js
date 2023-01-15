import React from 'react'
import {Container, Toolbar, Select, MenuItem,AppBar} from "@mui/material"


export default function Header() {
 
  return (
    <AppBar color="transparent" position='static'> 
            <Container maxWidth="md">
            <Toolbar>  
                <h1 className="crypto-title">  
                    CryptoHub
                </h1>
                <Select variant="outlined" style={{
                    width: 100,
                    height: 40,
                    marginLeft: "auto",
                    border: "1px solid white",
                    color: "white",
                }}>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
            </Toolbar>
            </Container>    
    </AppBar>

  )
}
