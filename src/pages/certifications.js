import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import certification1 from "../../public/images/articles/create loading screen in react js.jpg"
import certification2 from "../../public/images/articles/create loading screen in react js.jpg";
import {motion, useMotionValue} from "framer-motion"
import certificate3 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import certificate4 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage =motion(Image);

const MovingImg = ({title, img, link})=> {

  const x= useMotionValue(0);
  const y= useMotionValue(0);

  const imgRef = useRef(null);
  
    function handleMouse(event) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
  
    function handleMouseLeave(event) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  
  return (
    <Link href={link} target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}>
    <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
    <FramerImage style={{x:x, y:y}}
    intial={{opacity: 0}}
    whileInView={{opacity:1,transition:{duration:0.2}}}
    ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
    </Link>
  )
}

const Certificate = ({img, title, date, link}) => {
      return (
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between dark:bg-dark dark:text-light dark:border-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col'>
          <MovingImg title={title} img={img} link={link}/>
          <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
      )
}

const FeaturedCertifications= ({img, title, summary, link}) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
      <Link href={link} target="_blank"
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg '
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'
                />
            </Link>
            <Link href={link} target='_blank'>
            <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-light xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-medium mb-2 dark:text-light'>{summary}</p>
    </li>
  )
}

const certifications = () => {
  return (
    <>
    <Head>
        <title>Yash Chawla | Certifications</title>
        <meta name="description" content="any description"/>
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text="Words Can Change The World!" className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
          <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
          <FeaturedCertifications
          img={certification1}
          title="Enhancing Soft Skills and Personality - NPTEL"
          summary="Involves developing interpersonal abilities, communication, and self-awareness to improve interactions and personal growth."
          link="/"
          />
            <FeaturedCertifications
          img={certification2}
          title="Python Programming with DSA - YBI Foundation"
          summary="Equips individuals with essential coding skills and in-depth knowledge of key data structures and algorithms."
          link="/"
          />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Certifications</h2>
          <ul>
            <Certificate
             title="CISCO Placement 2024 CCNAv7: Introduction to Networks"
             date="July 03, 2024"
             link="/"
             img={certificate3}
             />
            <Certificate
             title="CISCO Placement 2024 CCNAv7: Introduction to Networks"
             date="July 03, 2024"
             link="/"
             img={certificate3}
             />
            <Certificate
             title="CISCO Placement 2024 CCNAv7: Introduction to Networks"
             date="July 03, 2024"
             link="/"
             img={certificate3}
             />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default certifications
