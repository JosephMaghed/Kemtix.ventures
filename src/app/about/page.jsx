// pages/_app.js
"use client"

import { useState } from 'react';

import '../globals.css';
import Navbar from '../components/Navbar';
import Video from '../components/video';
import Studio from '../components/Studio';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {


  return (
    <>

      <Navbar />
      <div style={{backgroundImage: 'url("/picture.jpg")'}}>
      <div style={{backgroundColor: 'rgb(24,21,124)', backgroundSize: 'cover', overflow: 'hidden',opacity:'0.9'}}>
      <div data-testid="colorUnderlay" className="LWbAav Kv1aVt"style={{textAlign:'left', marginLeft: '10%', marginRight: '10%'}}>
      <h1 className="font_2 wixui-rich-text__text" style={{fontSize:'25px',color:'rgb(234,222,113)'}}><span style={{letterSpacing:'0.05em'}} className="wixui-rich-text__text">WHO WE ARE</span></h1>
      <p style={{ fontFamily: 'wixui-rich-text__line-height:1.7em', fontSize: '16px',color:'white' }}>
        <span style={{ letterSpacing: '0em' }} className="wixui-rich-text__text color_36">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. 
          I’m a great place for you to tell a story and let your users know a little more about you.
          <br className="wixui-rich-text__text" />
          <br className="wixui-rich-text__text" />
          This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
        </span>
      </p>
    </div></div></div>
      <Studio/>
      <Footer/>
  
  

 
    </>
  );
}

export default MyApp;
