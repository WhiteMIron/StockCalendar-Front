import styled from '@emotion/styled';
import React, { SetStateAction, useEffect, useState } from 'react';
import prev from '@images/page_prev.png';
import prevHover from '@images/page_prevhover.png';
import next from '@images/page_next.png';
import nextHover from '@images/page_nexthover.png';
import { Istock } from '@typings/stock';
import axios from 'axios';

interface IpaginationProps {
  totalCount: number;
  numPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  setStocks: React.Dispatch<SetStateAction<Istock[]>>;
  stockCode: string;
}

const Pagination = ({
  stockCode,
  totalCount,
  numPerPage,
  currentPage,
  setCurrentPage,
  setStocks,
}: IpaginationProps) => {
  const [offset, setOffset] = useState(0);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const onPrev = () => {
    axios
      .get('/api/specific-stock-all', {
        params: { code: stockCode, offset: offset - 1, numPerPage: numPerPage },
      })
      .then((response) => {
        let stocks = response.data.stock;
        totalCount = response.data.totalCount;
        stocks.map((stock: Istock) => {
          if (!Array.isArray(stock.news)) {
            stock.news = JSON.parse(stock.news);
          }
          return stock;
        });
        setStocks(stocks);
        setOffset(offset - 1);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
  };

  const onNext = () => {
    axios
      .get('/api/specific-stock-all', {
        params: { code: stockCode, offset: offset + 1, numPerPage: numPerPage },
      })
      .then((response) => {
        let stocks = response.data.stock;
        totalCount = response.data.totalCount;
        stocks.map((stock: Istock) => {
          if (!Array.isArray(stock.news)) {
            stock.news = JSON.parse(stock.news);
          }
          return stock;
        });
        setStocks(stocks);
        setOffset(offset + 1);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
  };

  const getPageNumbers = () => {
    var startPage = offset * numPerPage + 1;
    var endPage = Math.min(startPage + numPerPage - 1, totalCount);

    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  const pageNumbers = getPageNumbers();

  return (
    <Container>
      {offset > 0 ? (
        <PageArrowBox>
          <PagePrev src={prev} onClick={onPrev} />
        </PageArrowBox>
      ) : (
        <></>
      )}

      {pageNumbers.map((number) => {
        return (
          <PageItem
            onClick={() => {
              handlePageChange(number);
            }}
            key={number}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </PageItem>
        );
      })}

      {offset < Math.floor(totalCount / numPerPage) ? (
        <PageArrowBox>
          <PageNext src={next} onClick={onNext} />
        </PageArrowBox>
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const PageArrowBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PagePrev = styled.img`
  width: 18px;
  height: 18px;
  &:hover {
    content: url(${prevHover});
    cursor: pointer;
  }
`;

const PageNext = styled.img`
  width: 18px;
  height: 18px;
  &:hover {
    content: url(${nextHover});
    cursor: pointer;
  }
`;

const PageItem = styled.li`
  padding: 0 10;
  &.active {
    border-radius: 4px;
    background-color: #60d6bf;

    color: #fff;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PagePrevBtn = styled.button``;
export default Pagination;