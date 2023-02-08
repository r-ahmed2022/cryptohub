import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import Pagination from './Pagination';

export default function Home() {
  const { list } = useSelector((state) => state.cryptolist);
  const [coins, setCoins] = useState(list?.list);
  const [search, setSearch] = useState('');
  const [pageNo, setPageNo] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [coinsPerPage, setCoinsPerPage] = useState(10);

  useEffect(() => {
    const updatedList = list?.filter((coin) => coin.name.toLowerCase().includes(search)
          || coin.symbol.toLowerCase().includes(search));
    setCoins(updatedList);
    return () => {
      console.log('component unmounted');
    };
  }, [search, list]);

  const paginate = (number) => {
    setPageNo(number);
  };

  const lastPageNo = pageNo * coinsPerPage;
  const firstPageNo = lastPageNo - coinsPerPage;
  const currentCoins = coins?.slice(firstPageNo, lastPageNo);

  return (
    <main className="crypto-content">
      <h1>Trending Crypto Currencies across the Globe </h1>
      <input name="search" type="text" placeholder="Search for cryptocurrency" id="search" onChange={(e) => setSearch(e.target.value)} />

      <Table coins={currentCoins} />
      <Pagination coins={coins} coinsPerPage={coinsPerPage} onclick={paginate} />
    </main>
  );
}
