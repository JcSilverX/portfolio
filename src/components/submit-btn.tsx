import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn btn--submit' disabled={pending}>
      {
        pending ?
          <div className='spinner spinner--submit'>
            <div className='spinner__border'></div>
          </div>
        : (
          <>
            Submit <FaPaperPlane />
          </>
        )
      }
    </button>
  );
}
