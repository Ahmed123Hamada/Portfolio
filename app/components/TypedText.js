"use client"; // Add this directive at the top of the file

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const typed = new Typed(typedRef.current, {
      strings: [ 'Developer', 'Freelancer', 'IT Specialist'],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto text-start  " data-aos="zoom-out-right" data-aos-delay="100">
      <h2 className="text-5xl font-bold max-md:text-3xl">Ahmed Hamada</h2>
      <p className="text-2xl font-[sans-serif] mt-4">
        I'm <span ref={typedRef} className="typed"></span>
      </p>
    </div>
  );
};

export default TypedText;