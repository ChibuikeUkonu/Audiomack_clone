 'use client'
import NavBar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image'
import Banner from '@/components/MainContent/Banner';
import MusicCard from '@/components/music/MusicCard'
import Header from '@/components/layout/Header'
import MusicPlayer from '@/components/music/MusicPlayer';
import SideBar from '@/components/SideBar/SideBar';
// import SignPage from '@/components/auth/signin/page';

export default function Home() {
  return (
    <div className="container Page_container"> 
      {/* <SignPage/> */}
      <NavBar/>
      <Banner/>
      <SideBar/>
      <MusicPlayer />
    </div>
    
  )
}

