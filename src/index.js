import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Routers from './components/router';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <div className="row">
     
          <App />
    
          <Routers/>
      </div>

  </Provider>
  , document.querySelector('.myApp'));
  
