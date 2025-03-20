import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.Banner_container}> 
    <div className={styles.text}>
    <img src='/Banners.png'width={1000}height={300}alt='image'/>
       <div>
       <h1>The music platform <span style={{ color:"#ffa500"}}>empowering Artist.</span></h1>
      <span>Audiomack is an artist-first music platform that helps <br />musicians <strong> reach and engage fans across the world.</strong></span>
      <div className={styles.music_upload}>
      <button>
        Upload your Music for FREE
        </button>  
      </div>
       </div>
    </div>
      </div>
  )
}

export default Banner
