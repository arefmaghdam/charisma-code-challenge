import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CoinList, Container, StyledLink, StyledUl } from './index.styles';
import CoinComponent from '@/components/common/coin-component';

export default function Home() {
  const [currentSymbols, setCurrentSymbols] = useState<string[]>([]);
  const selectedSymbols = useSelector(
    (state: { selectedSymboles: { value: string[] } }) => state.selectedSymboles.value
  );

  useEffect(() => {
    if (currentSymbols) {
      setCurrentSymbols(selectedSymbols);
      console.log(selectedSymbols);
    }
  }, [currentSymbols]);

  return (
    <>
      <Head>
        <title>Bamitex</title>
        <meta name="description" content="Generated by Bamitex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4>داشبورد</h4>
      <Container>
        <CoinList>
          <StyledUl>
            <CoinComponent searchResults={currentSymbols} showToggleButton={false} />
          </StyledUl>
        </CoinList>
        <Link href="manage-tokens">
          <StyledLink>مدیریت لیست کوین ها</StyledLink>
        </Link>
      </Container>
    </>
  );
}
