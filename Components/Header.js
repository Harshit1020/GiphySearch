"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { auth } from '@/firebase/firebase.config'; 
import { onAuthStateChanged ,signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import {toast} from 'react-toastify'

const Header = () => {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/")
    toast.warning("Log out !")
    
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const navLinks = user
    ? [
        { name: 'Home', path: '/' },
        { name: 'Trending', path: '/gallery' },
        { name: 'Favorite', path: '/favriout' },
        { name: 'Sign Out', onClick: handleSignOut },
      ]
    : [
        { name: 'Home', path: '/' },
        { name: 'Sign Up', path: '/signup' },
        { name: 'Sign In', path: '/signin' },
      ];
  return (
    <header className="p-4 w-full py-4 shadow bg-[#222121]">
      <div className="flex items-center justify-between">
        <div className="mr-4">
          <Link className="text-white text-2xl" href="/">
            LOGO
          </Link>
        </div>
        <nav className="mr-4">
          <ul className="flex space-x-11 text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
          
                  {link.onClick ? (
                    <a className='text-sm text-white cursor-pointer' onClick={link.onClick}>{link.name}</a>
                  ) : (
                    <Link className="text-white text-sm" href={link.path}>
                      {link.name}
                    </Link>
                  )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
