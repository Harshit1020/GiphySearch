"use client"
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";



const Image = () => {
    const { id } = useParams();
    const [singleImage, setSingleImage] = useState({});
    const [loading, setLoading] = useState(true);
    const [isFavorited, setIsFavorited] = useState(false);
    

    async function getSingleImage() {
        try {
            const { data } = await axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=ezPdyJdcbFzl6CAWWJzv842nSsZ5GdBW&rating=g`);
            setSingleImage(data);
            setLoading(false);
            const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            setIsFavorited(existingFavorites.includes(id));
        } catch (error) {
            toast.error(error.message, {
                autoClose: 3000,
            });
        }
    }

    useEffect(() => {
        getSingleImage();
    }, [id]);

    
    const addToFavorites = () => {
        try {
            let existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const isAlreadyFavorited = existingFavorites.includes(id);
            if (isAlreadyFavorited) {
                existingFavorites = existingFavorites.filter(favId => favId !== id);
                localStorage.setItem('favorites', JSON.stringify(existingFavorites));
                setIsFavorited(false);
                toast.info("Removed from Favorites!", {
                    autoClose: 3000,
                });
            } else {

                existingFavorites.push(id);
                localStorage.setItem('favorites', JSON.stringify(existingFavorites));
                setIsFavorited(true);
                toast.success("Added to Favorites!", {
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error(error.message, {
                autoClose: 3000,
            });
        }
    };

     

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4">
                <Link href="/" className="text-blue-500 p-5 hover:underline">← Back to Gallery</Link>
                {loading ? (
                    <p className="text-center mt-8">Loading...</p>
                ) : (
                    <>
                        <h1 className="text-center font-mono text-3xl mb-4">GIF by {singleImage?.data.username}</h1>
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="text-center">
                                <video autoPlay loop muted src={singleImage.data.images.fixed_height.mp4} alt={singleImage?.alt_description} className="mx-auto rounded-lg" />
                            </div>
                            <div className="mt-4 text-center capitalize">
                                <h2 className="text-2xl font-semibold">{singleImage?.data.title}</h2>
                                <div className="flex justify-center mt-4">
                                        <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={addToFavorites}>
                                        {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
                                    </button>
                                   
                                    <Link href={singleImage.data.images.original.url} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"  >
                                        Download
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Image;