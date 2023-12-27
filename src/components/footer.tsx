import React from 'react'

export default function Footer() {
  return (
    <footer className='footer footer--jsx text-secondary'>
      <small className='copyright mb-1'>
        <p className='copyright__text'>Coded by JcSilverX</p>
      </small>
      <p className='footer__text'>
        <span className='fw-900'>About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, SCSS, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}
