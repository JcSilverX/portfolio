'use client';

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      className='contact'
      id='contact'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className='text-center mb-3'>Please contact me directly at <a href='mailto:jcsilverx@gmail.com' className='text-decoration-underline'>jcsilverx@gmail.com</a> or through this form.</p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
        className='form'
      >

        <div className='mb-3'>
          <input type='email' name='senderEmail' id='' className='form__input form__input--email' placeholder='Your email'/>
        </div>

        <div className='mb-3'>
          <textarea className='form__input form__input--textarea' name='message' placeholder='Your message' />
        </div>

        <SubmitBtn />
      </form>
    </motion.section>
  );
};
