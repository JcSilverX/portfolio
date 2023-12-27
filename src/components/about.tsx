'use client';

import Image from 'next/image';
import React, { } from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import aboutImg from '../../public/img.jpg';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='about'
      initial={{opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
       <SectionHeading>About</SectionHeading>

       <Image src={aboutImg} alt={'=`)'} width={150} height={150} quality={95} className='rounded-circle mb-4'/>
       
       <p className="about__text">Coming soon.</p>
    </motion.section>
  );
};
