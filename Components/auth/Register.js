"use client"
import React, { useState, useEffect } from 'react';
import {auth} from "@/firebase/firebase.config"
import {createUserWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // Redirect if the user is already authenticated
      if (currentUser) {
        router.push('/gallery');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
        setEmail("")
        setPass("")
      await createUserWithEmailAndPassword(auth, email, pass);
      router.push('/gallery');
    } catch (error) {
      toast.error('Invalid Data!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };
  return (
    <div className="w-96 mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={registerUser}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
        <Link href="/signin">Already have acc ? login</Link>
      </form>
    </div>
  );
};

export default RegisterPage;
