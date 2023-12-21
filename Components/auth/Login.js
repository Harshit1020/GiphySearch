"use client"
import React, { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "@/firebase/firebase.config";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success("User Successfully Loged In")
      if(user){
        router.push("/gallery")
      }
    } catch (error) {
      toast.error("wrong credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-wrap content-between bg-[#141313]  overflow-x-hidden">
    <form onSubmit={loginUser} className="w-full max-w-md p-6 bg-white rounded-md shadow-md mt-11">
      <span className="mt-5 block w-full text-xl uppercase font-bold mb-4 text-center">Log In</span>
      <div className="mb-4">
        <label htmlFor="email" className="block text-xs mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-xs mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Log In
      </button>
      <Link href="/signup">Create new acc ? signup</Link>
    </form>
 
  </div> 
  );
};

export default LoginForm;
