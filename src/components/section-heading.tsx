import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({
  children
}: SectionHeadingProps) {
  return (
    <h2 className='second-heading'>{children}</h2>
  );
};
