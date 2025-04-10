 'use client'
import NavBar from '@/components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image'
import Banner from '@/components/MainContent/Banner';
import MusicCard from '@/components/music/MusicCard'
import Header from '@/components/layout/Header'
import MusicPlayer from '@/components/music/MusicPlayer';
import SideBar from '@/components/SideBar/SideBar';
import SearchResult from '@/components/SearchResult';
// import SignPage from '@/components/auth/signin/page';

export default function Home() {
  // const [count, setCount] = useState("data")
  return (
    <div className="container Page_container"> 
      {/* <SignPage/> */}
      <NavBar/>
      <Banner/>
      <div className="con">
      <SideBar/>
      <SearchResult />  
    </div>
      {/* <MusicPlayer /> */}
    </div>
    
  )
}

