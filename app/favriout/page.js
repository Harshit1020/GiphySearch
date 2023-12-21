"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase.config'
import { useRouter } from 'next/navigation';
import FavrioutCard  from "@/Components/FavrioutCard/page";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [favorites, setFavorites] = useState([]);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const fetchFavoriteGIFs = async () => {
      try {
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const idsString = existingFavorites.join(',');
        if (idsString) {
          const response = await axios.get(`https://api.giphy.com/v1/gifs?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&ids=${idsString}&rating=g`);
          setFavorites([...response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching favorite GIFs:", error);
      }
    };
    fetchFavoriteGIFs();
  }, [user]);

  console.log(favorites)
  return (
    <>
      <h3 className="text-center font-mono text-xl">Showing Favorite/s</h3>
      <div className="flex flex-wrap w-auto h-auto gap-2 py-10 px-5">
        <FavrioutCard images={favorites} />
    </div>
      <ToastContainer />
    </>
  );
};

export default Page;
