import React, { useState, useEffect } from 'react';

const Context = React.createContext();
function ContextProvider({ children }) {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');

  useEffect(() => {
    if (currency === 'INR') setSymbol('₹');
    else if (currency === 'USD') setSymbol('$');
  }, [currency]);
  return (
    <Context.Provider value={{
      currency, symbol, setCurrency, setSymbol,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
