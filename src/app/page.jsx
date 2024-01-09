// pages/_app.js
"use client"

import { useState } from 'react';

import './globals.css';
import Navbar from './components/Navbar';
import Video from './components/video';
import Studio from './components/Studio';
import Footer from './components/Footer';


function MyApp({ Component, pageProps }) {


  return (
    <>

      <Navbar />
      <Video/>
      <Studio/>
      <Footer/>
  
  

 
    </>
  );
}

export default MyApp;
