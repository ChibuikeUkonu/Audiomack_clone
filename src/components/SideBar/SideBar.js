import React from 'react' 
import styles from './SideBar.module.css'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      
        {/* <h2>Sidebar</h2> */}
        <ul>
          <h1>Browse</h1>
          <h3>Home</h3>
          <h3 href='#'>Trending Songs</h3>
          <h3 href='#'>Trending Albums</h3>
          <h3 href='#'>Recently Supported</h3>
          <h3 href='#'>Recently Added</h3>
          <h3 href='#'>Accounts For You</h3>
        <h1>Charts</h1>
        <h3 href='#'>Top Songs</h3>
        <h3 href='#'>Top Albums</h3>
        <h3 href='#'>Top Supported</h3>
        <div className={styles.line}>
          
        </div>
        <div className={styles.Genres}>
        <h1>Genres</h1>
        <div className={styles.twp}>
        <li className={styles.geng}>All Genres</li>
        <li className={styles.gen}>AfroSounds</li>
        </div>
        <div className={styles.three}>
         <li className={styles.jazz}>Hip-Pop/Rap</li>
        <li className={styles.jazz}>Latin</li>
        <li  className={styles.jazz}>Jazz/Bules</li>
        </div>
        <div className={styles.thret}>
     <li className={styles.pop}>Carribbean</li>
        <li className={styles.pop}>Pop</li>
        <li className={styles.pop}>R&B</li>
        <li className={styles.pop}>Gospel</li>
        </div>
        <div className={styles.thrht}>
       <li className={styles.rock}>Electronic</li>
        <li className={styles.rock}>Rock</li>
        <li className={styles.rock}>Punjabi</li>
        </div>
        <div className={styles.juyt}>
       <li className={styles.podcast}>Country</li>
        <li className={styles.podcast}>Instrumental</li>
        <li className={styles.podcast}>PodCast</li>
        </div>
        </div>
        </ul>
        
      </div>
  )
}

export default SideBar



