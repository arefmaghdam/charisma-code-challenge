import type { AppProps } from 'next/app';
import React from 'react';
import AppContainer from '@/app-container';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}
