import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.ylogo2 : assets.ylogo1} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            yashwardhansoni953@gmail.com
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Yashwardhan Soni. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/yashsoni978">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/yashwardhan-soni-a67b9a250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.geeksforgeeks.org/user/yashwardhaxeek/">Geeksforgeeks</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
