import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import styles from '@/app/(main)/upload/upload.module.css'
import Link from 'next/link';
import { MdFileUpload } from "react-icons/md";
import { SiAudiomack } from "react-icons/si";

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
    </div>
  )
}

export default page
