import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { ContextProvider } from './Context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ContextProvider>

  </React.StrictMode>,
);
