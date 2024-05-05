import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
export default function Icon() {
  return (
    <div className='container'>
      <div className='icon'>
        <div className='icon-set'>
        <FaFacebook />
        <FaLinkedinIn />
        <FaYoutube/>
       <FaGithub/>
        </div>
      </div>
    </div>
  )
}
