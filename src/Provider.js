import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter instead of BrowserRouter
import { Provider } from 'react-redux';
import store from './store'; 
import App from './App'; 

test('renders App component', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

});
