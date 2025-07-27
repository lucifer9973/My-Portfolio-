import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode, links = {}, internships = [], achievements = [], certifications = [] }) => {
  const [showInternships, setShowInternships] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        About Me</motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-start my-20'>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='col-span-1 flex justify-center lg:justify-start items-start'>
          <Image src={assets.profilepicture} alt='user' className='w-64 sm:w-80 rounded-3xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='col-span-3'>

          <p className='mb-10 max-w-2xl font-Ovo'>
            I'm a passionate and detail-oriented software developer with hands-on experience in building scalable web and mobile applications using modern technologies like Python, JavaScript (React.js, Node.js), MongoDB, and Firebase. I enjoy transforming ideas into real-world solutions and have built full-stack applications, RESTful APIs, and interactive Android apps using Kotlin and Jetpack Compose.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>

          <section className='mt-10 max-w-2xl mx-auto'>
            <button onClick={() => setShowInternships(!showInternships)} className='text-xl font-semibold mb-2 text-left dark:text-white border p-3 rounded-xl w-full hover:bg-lightHover dark:hover:bg-darkHover/30 transition-all'>Internships</button>
            {showInternships && (internships || []).map(({ company, role, duration, details }, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={idx} 
                className='border rounded-xl p-4 my-4 dark:border-white border-gray-400'>
                <h4 className='font-semibold dark:text-white'>{company} | {role}</h4>
                <p className='italic text-sm text-gray-600 dark:text-gray-300'>{duration}</p>
                <ul className='list-disc list-inside text-gray-700 dark:text-white'>
                  {(details || []).map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </section>

          <section className='mt-10 max-w-2xl mx-auto'>
            <button onClick={() => setShowAchievements(!showAchievements)} className='text-xl font-semibold mb-2 text-left dark:text-white border p-3 rounded-xl w-full hover:bg-lightHover dark:hover:bg-darkHover/30 transition-all'>Achievements</button>
            {showAchievements && (
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='list-disc list-inside text-gray-700 dark:text-white border rounded-xl p-4 my-4'>
                {(achievements || []).map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </motion.ul>
            )}
          </section>

          <section className='mt-10 max-w-2xl mx-auto'>
            <button onClick={() => setShowCertifications(!showCertifications)} className='text-xl font-semibold mb-2 text-left dark:text-white border p-3 rounded-xl w-full hover:bg-lightHover dark:hover:bg-darkHover/30 transition-all'>Certifications</button>
            {showCertifications && (
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='list-disc list-inside text-gray-700 dark:text-white border rounded-xl p-4 my-4'>
                {(certifications || []).map((certification, idx) => (
                  <li key={idx}>{certification}</li>
                ))}
              </motion.ul>
            )}
          </section>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About;
