'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.5);

  return (
    <section ref={ref} className='skills' id='skills'>
      <SectionHeading>Skills</SectionHeading>

      <ul className='skills-list'>
        {
          skillsData.map((skill, index) => (
            <motion.li
              className='skills-list__item rounded-3 py-3 px-4'
              key={index}
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
