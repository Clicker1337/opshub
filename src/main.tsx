import '@/shared/config/env';
import './index.css';

import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with id "root" not found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0077FF',
          borderRadius: 6,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
