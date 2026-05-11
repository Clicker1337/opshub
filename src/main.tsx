import './index.css';

import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { StoreProvider } from '@/app/providers/StoreProvider';
import { env } from '@/shared/config/env';

import { App } from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with id "root" not found in index.html');
}

const enableMocking = async (): Promise<void> => {
  if (!env.VITE_ENABLE_MOCKS) {
    return;
  }

  const { worker } = await import('@/shared/api/mocks/browser');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
};

await enableMocking().then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <StoreProvider>
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
      </StoreProvider>
    </StrictMode>,
  );
});
