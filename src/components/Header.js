import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Select, MenuItem, AppBar,
} from '@mui/material';
import { Context } from '../Context';

export default function Header() {
  const { currency, setCurrency } = useContext(Context);
  const navigate = useNavigate();
  const goHome = () => {
    navigate(-1);
  };

  return (
    <AppBar color="transparent" position="static">
      <Container maxWidth="lg">
        <div className="toolbar">

          <h1 className="crypto-title" onClick={() => goHome()}>
            CryptoHub
          </h1>

          <Select
            variant="outlined"
            className="menu"
            style={{
              width: 100,
              height: 40,
              marginLeft: 'auto',
              border: '1px solid white',
              color: 'white',
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >

            <MenuItem className="menu-item" value="USD">USD</MenuItem>
            <MenuItem className="menu-item" value="INR">INR</MenuItem>
          </Select>
        </div>
      </Container>
    </AppBar>

  );
}
