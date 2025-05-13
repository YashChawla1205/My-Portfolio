import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details=({position,company,companyLink,time,address,work})=>{
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last-mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    )
}

const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            
                <Details
                position="Campus Ambassador" company="RiseUpp"
                companyLink="https://www.riseupp.com/"
                time="January 2024 - Present" address="Remote"
                work="Promoting the organization on campus through events, social media, and other channels and acting as a liaison between the organization/company and the university."
                />
          
            
                <Details
                position="Public Relations Head" company="TEDxKIET"
                companyLink="www.tedxkiet.com"
                time="June 2023 - Present" address="Ghaziabad, Delhi-NCR, India"
                work="Responsible for all the promotional activities occurring In-Campus and Off-Campus. Also developed and executed strategic PR campaigns to promote TEDx events, resulting in increased media coverage and audience engagement."
                />
                <Details
                position="Summer Intern ( Data Science and Deep Learning )" company="KIET Group of Institutions"
                companyLink="www.kiet.edu"
                time="August 2022 - September 2022" address="Ghaziabad, Delhi-NCR, India"
                work="Learned data pre-processing, machine learning, and deep learning fundamentals. Enhance problem-solving skills by tackling complex data challenges, and optimizing models for specific datasets."
                />
            
        </ul>
    </div>
    </div>
  )
}

export default Experience
