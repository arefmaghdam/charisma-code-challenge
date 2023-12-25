import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TopNav from '@/components/common/top-nav';
import BackIcon from '@assets/back.svg';
import CoinComponent from '@/components/common/coin-component';
import useGetAPI from '@/hooks/useGetAPI';
import SearchInput from '@/components/common/search-input';
import MessageDisplay from '@/components/common/message-display';
import { CoinList, Container, StyledUl } from './index.styles';

const ManageTokens = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const { searchResults, isLoading, showNoTokenMessage } = useGetAPI(searchTerm);

  return (
    <Container>
      <TopNav
        centerComponent={<p>مدیریت لیست کوین ها</p>}
        leftComponent={<BackIcon onClick={() => router.push('/')} />}
      />
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CoinList>
        {isLoading ? (
          <MessageDisplay message="لطفاً منتظر بمانید..." />
        ) : showNoTokenMessage ? (
          <MessageDisplay message="چنین توکنی وجود ندارد" />
        ) : (
          searchResults.length > 0 && (
            <StyledUl>
              <CoinComponent searchResults={searchResults} />
            </StyledUl>
          )
        )}
      </CoinList>
    </Container>
  );
};

export default ManageTokens;
