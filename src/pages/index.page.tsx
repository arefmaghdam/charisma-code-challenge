import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CoinList, Container, StyledLink, StyledTitle, StyledUl } from './index.styles';
import CoinComponent from '@/components/common/coin-component';
import { setSelectedSymbols } from '@/redux/slices/selectedSymbolsSlice';

export interface symbols {
  value: string[];
}

export default function Home() {
  const [currentSymbols, setCurrentSymbols] = useState<string[]>([]);
  const dispatch = useDispatch();
  const selectedSymbols = useSelector(
    (state: { selectedSymboles: { value: string[] } }) => state.selectedSymboles.value
  );

  useEffect(() => {
    const storedSymbols = localStorage.getItem('selectedSymbols');
    if (storedSymbols) {
      dispatch(setSelectedSymbols(JSON.parse(storedSymbols)));
    } else {
      localStorage.setItem('selectedSymbols', JSON.stringify(['']));
    }
  }, []);

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
      <StyledTitle>داشبورد</StyledTitle>
      <Container>
        <CoinList>
          <StyledUl>
            <CoinComponent searchResults={currentSymbols} showToggleButton={false} />
            <Link href="manage-tokens">
              <StyledLink>+ مدیریت لیست کوین ها</StyledLink>
            </Link>
          </StyledUl>
        </CoinList>
      </Container>
    </>
  );
}
