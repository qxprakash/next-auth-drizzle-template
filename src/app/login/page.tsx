import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../assets/background.webp';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
      <div className="bg-white shadow-md rounded-xl p-10 flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
        <div className="text-blue-600 space-y-6">
          <h1 className="text-5xl text-center font-bold">Welcome to Our Website</h1>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image alt='background' className='rounded-lg shadow-sm' src={backgroundImage} />
        </div>
        <form className="flex flex-col space-y-6 w-full max-w-sm">
          <div>
            <label htmlFor="username" className="text-lg font-medium text-gray-700">Username</label>
            <input type="text" id="username" className="mt-2 block w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="text-lg font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="mt-2 block w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 block text-md text-gray-900"> Remember me </label>
            </div>
            <div className="text-md">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
            </div>
          </div>
          <button type="submit" className="py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-300 text-lg font-semibold shadow-lg rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
