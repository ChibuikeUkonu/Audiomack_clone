import React from 'react'
import style from './signup.module.css'
import Link from 'next/link';
import { TiSocialFacebook } from "react-icons/ti";
import { SiAudiomack } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { TfiApple } from "react-icons/tfi";
import Image from 'next/image'

const page = () => {
  return (
    <div className={style.signin}>
    <div className={style.hwith}>
    {/* <Image src='/audiomack logo.png'width={30} height={20}alt='image'/> */}
    <SiAudiomack color='#ffa500' size={50}/>
    <h1>sign up or login to audiomack</h1>
    <div className={style.continue}>
    <FcGoogle  size={30}/>   
   <Link href='#'>Continue with Google</Link>
    </div>
    <div className={style.facebook}>
    <TiSocialFacebook color='blue'size={25}/>
   <Link href='#'>Continue with Facebook</Link>
    </div>
    <div className={style.Appe}>
    <TfiApple  color='white' size={20}/>
  <Link href='#'>Continue with Apple</Link>
    </div>
    <div className={style.email}>
    <MdOutlineMail color='#ffa500'size={20}/>
  <Link href='#'>Continue with Email</Link>
    </div>
    </div>
    <div className={style.line}></div>
    <div className={style.terms}>
      <h3>By signing into audiomack you agree to our<span style={{ color:"#ffa500"}}>
        Terms of Service
        <span>and</span>
        <span style={{ color:"#ffa500"}}>Privacy Policy.</span></span></h3>
 </div>
      <div className={style.trouble}>
        <Link href='#'>Having trouble signing in?</Link>
      </div>
  </div>
  )
}

export default page
