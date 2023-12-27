'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  
  return (
    <motion.header
      className='header header-expand--lg px-3 position-fixed top-0 start-0 end-0 shadow-none visually-hidde'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link className='logo' href={'.'}>
        <span className='logo__text'>Jc</span>
      </Link>

      <nav className='nav ms-auto'>
        <ul className='nav__list nav__list--underline'>
          {
            links.map((link) => (
              <li
                className='nav__item'
                key={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                <Link className={clsx('nav__link', { 'active': activeSection === link.name })} href={link.hash}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>

    </motion.header>
  );
};
