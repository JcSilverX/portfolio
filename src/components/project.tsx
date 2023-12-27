'use client';

import Image from 'next/image';
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

export default function Project({title, description, tags, imageUrl}: ProjectProps ) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <section
                className='project rounded-3 mb-3'
            >
                <div className="project__right">
                    <h3 className='third-heading mb-2'>{title}</h3>
                    <p className='project__description'><em>{description}</em></p>

                    <ul className='project-list'>
                        {
                            tags.map((tag, index) => (
                                <li className='project-list__item rounded-pill py-1 px-2 text-white' key={index}>{tag}</li>
                            ))
                        }
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt='Project I worked on'
                    quality={95}
                    className='project__img rounded shadow-lg d-none d-sm-block'
                ></Image>
            </section>
        </motion.div>
    );
};