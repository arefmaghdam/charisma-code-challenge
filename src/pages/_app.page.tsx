import type { AppProps } from 'next/app';
import React from 'react';
import AppContainer from '@/app-container';
import { Provider } from 'react-redux';
import store from '@/redux/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </Provider>
  );
}
