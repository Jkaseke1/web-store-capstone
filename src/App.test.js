
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react';
import store from './store';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

test('renders App component', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    );
  });

  // Debugging output
  console.log(document.body.innerHTML);

  // Add your assertions here
  expect(screen.getByText(/Welcome to Our Store/i)).toBeInTheDocument();
  expect(screen.getByText(/Discover amazing products at great prices!/i)).toBeInTheDocument();
});
