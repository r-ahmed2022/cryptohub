import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Header from '../Header';
import Home from '../Home';
import Coin from '../Coin'

describe('Cryptocurrencies', () => {
  test('should match header snapshot', () => {
    const {container} = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should match home snapshot', () => {
    const {container} = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should match coin snapshot', () => {
    const {container} = render(
      <Provider store={store}>
        <Coin />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});