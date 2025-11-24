import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { AuthInitializer } from './Providers/AuthInitializer';
import './App.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthInitializer>
          <App />
        </AuthInitializer>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
