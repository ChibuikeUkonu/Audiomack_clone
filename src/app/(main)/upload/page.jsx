import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import styles from '@/app/(main)/upload/upload.module.css'
import Link from 'next/link';
import { MdFileUpload } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { IoAlbums } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const page = () => {
  return (
    <div>
    <div className={styles.navbar}>
    <div className={styles.navbarLogo}>

      <RxHamburgerMenu color='black'/>
    </div>

    <div className={styles.navbarSearch}>
    <SiAudiomack color='ffa500'size={30} />
      <h1>audiomack</h1>
      <h3>creators</h3>
      </div>
      <div className={styles.create}>
      <Link className={styles.createaccount} href="/signup">login</Link>/
      <Link className={styles.signin} href="/signup">Create Account</Link>
      </div>
      <div>
      <button className={styles.uploads}>
      <MdFileUpload color='#ffa500'size={20} />
      <Link href="/upload">Upload</Link> 
      </button>
    </div>
    </div>
    <div className={styles.line}></div> 
    <div className={styles.select}>
     <h1>Please Select your upload type</h1>
     <h3>Audiomack gives you unlimited storage, for free.</h3>
    </div>
    <div className={styles.music}>
      <div className={styles.song}>
    <FaMusic color='ffa500'size={50}/>
    <h1>Song</h1>
    <GoDotFill size={30} />    
    </div>
      <div className={styles.Album}>
    <IoAlbums color='ffa500'size={50}/>
    <h1>Albums/EP</h1>
    <GoDotFill size={30} />    
    </div>
      <div className={styles.musical}>
    <MdPodcasts color='ffa500'size={50}/>
    <h1>Non-Musical</h1>
    <GoDotFill size={30} />    
    </div>
    </div>
    <div className={styles.supported}>
    <button className={styles.bolht}>Next</button>
    </div>
    <div className={styles.suppor}>
      <p><strong>Supported file types:</strong> Zip, MP3, WAV, AIFF, OGG, FLAC and M4A.<strong> File Size:</strong> Up to 250MB per song.</p>
    </div>
    <div className={styles.auto}>
      <div className={styles.auts}>
      <p>Audiomack uploads are for artists and content creators only. DO NOT upload your personal music collection or</p>
      <p>unauthorized content. Accounts which upload infringing material will be banned and blocked immediately.</p>
      <h3 className={styles.copy}>Copyright compliance by<span style={{ color:"#00Bfff"}}>ACRcloud</span></h3>
    </div>
    </div>
   </div>
  )
}

export default page
