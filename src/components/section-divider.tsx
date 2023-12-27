'use client';

import React from 'react'
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
    >
      <hr className='vr' />
    </motion.div>
  );
};
