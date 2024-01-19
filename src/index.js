import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className='overflow-hidden'>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);
