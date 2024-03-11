// pages/app/login.page.tsx
"use client";
import Link from 'next/link';
import { FormEvent, useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
     
      localStorage.setItem('user', JSON.stringify(data.user));

      
      window.location.href = '/'; 
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
    }
  };
  return (
    <div className="text-center p-10 md:p-20">
      <form className="bg-gradient-to-br from-red-100 bg-opacity-75 p-8 md:p-20 rounded-md shadow-md w-full">
        <h1 className="text-white font-bold text-3xl md:text-5xl mb-6 md:mb-10">Login</h1>
        <div className="mb-4 md:mb-8">
          <label htmlFor="Username" className="text-black mb-2 md:mb-0 md:mr-4">Username:</label>
          <input type="text" id="username" name="username" className="p-2 w-full md:w-2/5 text-black" />
        </div>
        <div className="mb-4 md:mb-8">
          <label htmlFor="Password" className="text-black mb-2 md:mb-0 md:mr-4">Password:</label>
          <input type="password" id="password" name="password" className="p-2 w-full md:w-2/5 text-black" />
        </div>
        <div className="mt-4">
          <Link href="/" className="p-2 bg-red-900 text-white rounded-full cursor-pointer pl-6 pr-6 md:pl-10 md:pr-10">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
