'use client';

import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const numberOfParticles: number = 50;
    const context = canvasEl?.getContext('2d') as CanvasRenderingContext2D;
    let particlesArray: any[] = [];

    class Particle {
      constructor(
        private angle?: number,
        private x?: number,
        private y?: number,
        private size?: number,
        private speedX?: number,
        private speedY?: number,
        private colour?: string,
      ) {
        this.angle = Math.floor(Math.random() * 360);

        this.x = Math.random() * Number(canvasEl?.width);
        this.y = Math.random() * Number(canvasEl?.height);
        this.size = 2;
        this.speedX = Math.cos(this.angle) * 1;
        this.speedY = Math.sin(this.angle) * 1;

        this.colour = '0, 0, 0';
      }


      // getters/setters

      // public methods
      update(): void {
        this._constrains();

        this.x = Number(this.x) + Number(this.speedX);
        this.y = Number(this.y) + Number(this.speedY);

        this.draw();
      }

      draw(): void {
        context.fillStyle = `rgba(${this.colour}, .5)`;

        context.beginPath();
        context.arc(Number(this.x), Number(this.y), Number(this.size), 0, Math.PI * 2);
        context.fill();
        context.closePath();

        this._connect();
      }

      // private methods
      _connect(): void {
        const nearby = (Number(canvasEl?.width) + Number(canvasEl?.height)) * 0.1;

        particlesArray.forEach((particle) => {
          const distance = this._distance(particle);

          if (distance > nearby) {
            return;
          }

          const opacity = 1 - distance / nearby - 0.2;

          context.beginPath();
          context.lineWidth = 1;
          context.strokeStyle = `rgba(${this.colour}, ${opacity})`;
          context.moveTo(Number(this.x), Number(this.y));
          context.lineTo(particle.x, particle.y);
          context.stroke();
        });
      }

      _constrains(): void {
        if (Number(this.x) < 0 || Number(this.x) > Number(canvasEl?.width)) this.speedX = Number(this.speedX) * -1;

        if (Number(this.y) < 0 || Number(this.y) > Number(canvasEl?.height)) this.speedY = Number(this.speedY) * -1;
      }

      _distance(particle: { x: number; y: number; }): number {
        const distX = Number(this.x) - particle.x;
        const distY = Number(this.y) - particle.y;

        return Math.sqrt(distX * distX + distY * distY);
      }

      // static methods
      static init(): void {
        particlesArray = [...Array(numberOfParticles).fill(0).map(() => new Particle())];
      }

      static handleParticles(): void {
        particlesArray.forEach((particle) => {
          particle.update();
        });
      }
    }

    Particle.init();

    const animate = () => {
      context.clearRect(0, 0, Number(canvasEl?.width), Number(canvasEl?.height));
      Particle.handleParticles();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // end of canvas

  return (
    <section ref={ref} id='home' className='intro'>
      <div className="intro__content">
        <canvas ref={canvasRef} className='intro-canvas' width={2560} height={1600}></canvas>

        <motion.div
          className='intro__top'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className='intro__text'>Hello, I'm <span className='fw-600'>Jose</span>.</p>
          <p className='intro__text'>I'm a self-taught and passionate <span className='fw-900'>full-stack developer</span> studying at <em>Penn State University</em>.</p>
        </motion.div>

        <motion.div
          className='intro__bottom'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href='#about'
            className='btn-intro rounded-pill'
            onClick={() => {
              setActiveSection('About');
              setTimeOfLastClick(Date.now());
            }}
          >
            View my work <BsArrowRight className='text-light' />
          </Link>
          <a className='btn-intro rounded-pill' href='/CV.pdf' download={true}>Download CV <HiDownload /></a>
          <a className='btn-intro btn-intro--linkedin rounded-circle' href='https://www.linkedin.com/in/jcsilverx/' target='_blank'><BsLinkedin className='btn-intro__icon' /></a>
          <a className='btn-intro btn-intro--github rounded-circle' href='https://github.com/JcSilverX' target='_blank'><FaGithubSquare className='btn-intro__icon' /></a>
        </motion.div>
      </div>
    </section>
  )
}
