'use client'
import { assets, infoList, toolsData, internships, achievements, certifications } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const About = ({ isDarkMode }) => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className='text-center mb-2 text-lg font-Ovo' initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        Introduction
      </motion.h4>

      <motion.h2 className='text-center text-5xl font-Ovo' initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        About Me
      </motion.h2>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-start my-20'>
        <div className='col-span-1 flex justify-center lg:justify-start'>
          <Image src={assets.profilepicture} alt='user' className='w-64 sm:w-80 rounded-3xl' />
        </div>

        <div className='col-span-3'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I'm a passionate and detail-oriented software developer with hands-on experience in building scalable web and mobile applications using modern technologies like Python, JavaScript (React.js, Node.js), MongoDB, and Firebase. I enjoy transforming ideas into real-world solutions and have built full-stack applications, RESTful APIs, and interactive Android apps using Kotlin and Jetpack Compose.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </ul>

          {/* Click-to-expand sections */}
          <div className='mt-12 space-y-6'>
            {[{ title: 'Internships', data: internships }, { title: 'Achievements', data: achievements }, { title: 'Certifications', data: certifications }].map((section, idx) => (
              <div key={idx}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className='w-full text-left text-xl font-semibold border p-3 rounded-xl dark:text-white hover:bg-lightHover dark:hover:bg-darkHover/30 transition-all'
                >
                  {section.title}
                </button>

                <AnimatePresence>
                  {openSection === section.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className='mt-2 border border-gray-400 dark:border-white rounded-xl p-4 overflow-hidden'
                    >
                      {section.title === 'Internships' ? (
                        section.data.map(({ company, role, duration, details }, i) => (
                          <div key={i} className='mb-4'>
                            <h4 className='font-semibold dark:text-white'>{company} | {role}</h4>
                            <p className='italic text-sm text-gray-600 dark:text-gray-300'>{duration}</p>
                            <ul className='list-disc list-inside text-gray-700 dark:text-white'>
                              {details.map((d, j) => (
                                <li key={j}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        <ul className='list-disc list-inside text-gray-700 dark:text-white'>
                          {section.data.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
