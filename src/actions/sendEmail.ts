'use server';

import React from 'react';
import ContactFormEmail from '@/email/contact-form-email';
import { validateString, getErrorMessageName } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESENT_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      subject: 'Message from contact form',
      to: 'jcsilverx@gmail.com',
      reply_to: senderEmail as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessageName(error),
    };
  }

  return {
    data,
  };
};
