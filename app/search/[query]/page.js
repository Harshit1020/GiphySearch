"use client"
import { useState, useEffect } from "react";
import axios from "@/utiles/axios";
import SearchCard from "@/Components/SearchCard/page";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "@/Components/Navbar"
import Loading from "@/Components/Loading"

const GiphySearch = ({ params }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true); 
  console.log(params)
  const fetchData = async () => {
    try {
      const results = await axios.get("/search", {
        params: {
          api_key:"ezPdyJdcbFzl6CAWWJzv842nSsZ5GdBW",
          q: params.query,
          limit: 10,
          offset: gifs.length,
        },
      });
      setGifs([...gifs, ...results.data.data]);
      setHasMore(results.data.data.length > 0);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
    <Navbar/>
      <h3 className="text-center font-mono text-xl">Search results.......</h3>
      <InfiniteScroll
        dataLength={gifs.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loading/>}
      >
        <div className="pt-5 columns-1 md:columns-4 px-5">
          <SearchCard images={gifs} />
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default GiphySearch;
