"use client"
import React, { useState, useEffect } from 'react';
import axios from "@/utiles/axios" 
import Link from 'next/link';
import Card from '@/Components/Card/page'; 
import ReactPaginate from 'react-paginate';
import Navbar from "@/Components/Navbar"
import Loading from "@/Components/Loading"
import { resolve } from 'path';
const Page = () => {
  const [gifs, setGifs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setloading] = useState(true)
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const gifsPerPage = 25; 
  
  const fetchGifs = async () => {
    try {
      setloading(false)
      const result = await axios.get('/trending', {
        params: {
          api_key:"ezPdyJdcbFzl6CAWWJzv842nSsZ5GdBW",
          offset: offset + gifsPerPage,
        },
      });
      setOffset(offset + gifsPerPage);
      if (result.data.data.length === 0) {
        setHasMore(false);
      }
      setGifs([...gifs, ...result.data.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    setOffset(data.selected * gifsPerPage);
    setHasMore(true);
  };
 useEffect(() => {
   fetchGifs();
  }, [currentPage]);

  return (
    <div className='mt-11'>
      <Navbar/>
      <h3 className="text-center font-mono text-xl">What's trending today</h3>
      <div className="pt-5 columns-1 md:columns-4 px-5">
      {loading ? (
        <Loading/>
      ) : (
        <Card images={gifs} />
      )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next->"
        onPageChange={handlePageClick}
        pageCount={Math.ceil(gifs.length / gifsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel="<-previous"
        containerClassName="pagination"
        activeClassName="active"
        className="flex gap-7 justify-center mt-5 mt-5"
      />

    </div>
  );
};

export default Page;
