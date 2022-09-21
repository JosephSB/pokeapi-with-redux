import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { GlobalStyle } from "./styled-components/globalStyle";
import { Provider } from 'react-redux';
import { pokemonsReducer } from "./redux/reducers/pokemons.reducers";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(pokemonsReducer,composedEnhancers);


root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

