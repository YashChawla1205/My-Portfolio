import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details=({type, from,percent, time, place,info})=>{
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {from}
                </span>
                <br></br>
                <span className='capitalize font-medium text-dark/75 dark:text-light xs:text-sm'>
                {percent}
                </span>
                <br></br>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    )
}

const Education = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>

      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div
            style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                type="Bachelor of Science in Data Science and Applications" 
                from="Indian Institute of Technology, Madras"
                percent={<b>7.00 CGPA</b>} 
                time="May-2023 - May 2027" place="Remote"
                info="Data analysis, programming, machine learning and real-world problem-solving skills."
                />
                <Details
                type="Bachelor of Technology in Computer Science and Engineering (CSE)"
                percent={<b>8.5 CGPA or 81.36%</b>} 
                from="KIET Group of Institutions Affiliated to AKTU, Lucknow"
                time="November 2021 - Present" place="Ghaziabad, India"
                info="Relevant courses included Data Structures and Algorithms, Database Management Systems, Computer Networks and Programming Fundamentals."
                />
                <Details
                type="Higher Secondary School Certificate"
                percent={<b>75.4 %</b>} 
                from="Boys' High School and College"
                time="March 2018 - March 2020" place="Prayagraj, Uttar Pradesh, India"
                info="From Indian Certificate of Secondary Education (ICSE) "
                />
                <Details
                type="Secondary School Certificate"
                percent={<b>79.83 %</b>} 
                from="Boys' High School and College"
                time="March 2016 - March 2018" place="Prayagraj, Uttar Pradesh, India"
                info="From Indian Certificate of Secondary Education (ICSE) "
                />
            </ul>
        </div>
    </div>
  )
}

export default Education
