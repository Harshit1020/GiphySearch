"use client"
import React from 'react';

const Home = () => {
  return (
    <div className='w-full min-h-[80vh]'>
      <div className='md:w-8/12 mx-auto h-full'>
        <div className='text-center mt-4'>
          <h1 className="bg-gradient-to-r from-blue-300 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl mt-4 md:mt-0 md:text-6xl  font-semibold  ">GIF Search App</h1>
        </div>
        <div className='mt-[6vw] w-10/12 mx-auto space-y-10 opacity-75'>
          <h1>
            Welcome to the GIF Search App, a Next.js application designed and developed as part of the Full-Stack Intern Technical Test. This app incorporates Firebase Authentication for user login and registration, and its main feature is a GIF search functionality powered by the GIPHY API.
          </h1>
          <h1>
            Users can log in using their email and password or sign up for a new account. The authentication process is implemented using the Firebase Authentication web SDK. The GIF search functionality allows users to explore and discover a wide range of GIFs based on user-searched keywords, thanks to the GIPHY API integration.
          </h1>
          <h1>
            Optional tasks such as marking GIFs as favorites, implementing hot search with dynamic updates, and adding loading animations have been considered for an enhanced user experience.
          </h1>
          <h1>
            Feel free to explore the app and enjoy the seamless integration of authentication and GIF search features. Good luck with the test!
          </h1>
        </div>
        <div className="mt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Made with ❤️ by harshit.
      </div>
      </div>
    </div>
  );
};

export default Home;
