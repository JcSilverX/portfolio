'use client';

import { useTheme } from '@/lib/hooks';
import React, { } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button type='button' className='btn btn--theme-switch' onClick={toggleTheme}>
      {
        theme === 'light' ? (
          <BsSun />
        ) : (
          <BsMoon />
        )
      }
    </button>
  );
}
