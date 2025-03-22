  "use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'
import Image from 'next/image';
import { useContext } from 'react';
import { SearchMusic } from '@/util/FetchData';
import { MdFileUpload } from "react-icons/md";
import AudioMack from './MainContent/AudioMack';
import SearchBar from './SearchBar';


const NavBar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className={styles.navbar}>
    <div className={styles.navbarLogo}>

      <AudioMack/>
    </div>

    <div className={styles.navbarSearch}>
      <Link className={styles.get} href="/Get plus +">Get Plus</Link>+
      
      </div>
      <div>
      <SearchBar/>
      </div>
    <div className={`${styles.navbarLinks} ${isMenuOpen ? styles.open : ''}`}>
      <div>
     <Link href="#" className={`${styles.discover}`}>
        Discover
        <div className={`${styles.dropdown}`}>
           <h1 href='#'>Trending Songs</h1>
           <h1 href='#'>Trending Albums</h1>
           <h1 href='#'>Top Songs</h1>
           <h1 href='#'>Top Albums</h1>
           <h1 href='#'>Recently Added</h1>
           <h1 href='#'>Account for you</h1>
           
        </div>
      </Link>
     </div>
    <Link href="#">Playlists</Link>
      <Link href="#">Originals</Link>
      <Link className={styles.createaccount} href="/signup">Create an Account</Link>
      |
      <Link className={styles.signin} href="/signup">Sign in</Link>
      <Image className={styles.note} src='/notification.png'width={30}height={30}alt='image'/>
      <button className={styles.uploads}>
      {/* <Image src='/uploads.png'width={20}height={20}alt='image'/> */}
      <MdFileUpload color='#ffa500'size={20} />
      <Link href="/upload">Upload</Link> 
      </button>
    </div>         
    <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
  </nav>
);
}

export default NavBar
