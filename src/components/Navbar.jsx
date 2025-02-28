  "use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'
import Image from 'next/image';
import AudioMack from './MainContent/AudioMack';

const NavBar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
    <div className={styles.navbarLogo}>

      <AudioMack/>
    </div>

    <div className={styles.navbarSearch}>
      <Link className={styles.get} href="/Get plus +">Get Plus</Link>+
      <input type="text" placeholder="Search for artist,songs albums" />
    </div>
    <div className={`${styles.navbarLinks} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.discover}>
     <Link href="/discover">Discover</Link>
     </div>
    <Link href="/playlist">Playlists</Link>
      <Link href="/original">Originals</Link>
      <Link className={styles.createaccount} href="/Create an Account">Create an Account</Link>
      |
      <Link className={styles.signin} href="/Sign in">Sign in</Link>
      <Image className={styles.note} src='/notification.png'width={30}height={30}alt='image'/>
      <button className={styles.uploads}>
      <Image src='/uploads.png'width={20}height={20}alt='image'/>
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
