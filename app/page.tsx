"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const topics = [
    {
      title: "Historical Context",
      description: "Explore the causes and historical background that led to the bombings.",
      href: "/topics/historical-context",
      icon: "📜"
    },
    {
      title: "The Bombings",
      description: "Learn about the events of August 6th and 9th, 1945.",
      href: "/topics/bombing-events",
      icon: "🗓️"
    },
    {
      title: "Human Impact",
      description: "Understand the casualties and human suffering caused by the atomic bombs.",
      href: "/topics/human-impact",
      icon: "👤"
    },
    {
      title: "Debates",
      description: "Examine ethical and strategic debates surrounding the decision to use atomic weapons.",
      href: "/topics/debates",
      icon: "⚖️"
    },
    {
      title: "Global Impact",
      description: "Study how the bombings shaped the nuclear age and international relations.",
      href: "/topics/global-impact",
      icon: "🌐"
    },
    {
      title: "Legacy",
      description: "Discover how the bombings are commemorated and their ongoing significance.",
      href: "/topics/legacy",
      icon: "🕊️"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Navigation */}
      

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center pt-16">
        <Image
          src="/memorial-bg.jpg"
          alt="Hiroshima Peace Memorial"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/50 to-slate-900/80"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.max(0, 1 - scrollY / 500) }}
          className="absolute inset-0 bg-black/20"
        ></motion.div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-white [text-shadow:_0_2px_20px_rgba(0,0,0,0.7)]"
            >
              Hiroshima and Nagasaki: <br className="hidden sm:block" />
              <span className="text-3xl sm:text-4xl md:text-5xl">A Historical Overview</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeVariants}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-100 mb-6 max-w-3xl mx-auto font-light leading-relaxed"
            >
              An educational resource exploring the atomic bombings of 1945, their causes, impact, and significance
            </motion.p>

            <motion.p 
              variants={fadeVariants}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-100 mb-6 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Made By Ankur Sharma, Period 6 Zuanich
            </motion.p>
            
            <motion.div
              variants={fadeVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link 
                href="#explore" 
                className="inline-flex items-center justify-center px-6 py-3 bg-red-700 hover:bg-red-800 
                          text-white rounded-md transition-all duration-300 text-base sm:text-lg
                          shadow-lg hover:shadow-xl transform hover:-translate-y-1 tracking-wide font-medium
                          w-full sm:w-auto"
              >
                Explore Topics
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              
              <Link 
                href="/timeline" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-white/10 
                          text-white border border-white/30 rounded-md transition-all duration-300 text-base sm:text-lg
                          shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                View Timeline
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Overview Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-slate-800 text-center"
          >
            The Atomic Bombings: A Brief Overview
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="prose prose-slate max-w-none"
          >
            <p>
              On August 6 and 9, 1945, the United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki. 
              These were the first and remain the only uses of nuclear weapons in warfare. Hiroshima City estimates about 140,000 deaths
              and Nagasaki City about 74,000 by the end of 1945. The bombings and the Soviet Union&apos;s entry into the war preceded Japan&apos;s surrender.
            </p>
            <p>
              The bombings remain controversial to this day, with ongoing debate about whether they were necessary to end the 
              war, their role in the resulting Cold War nuclear arms race, and their lasting impact on international relations 
              and nuclear disarmament efforts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="explore" className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl font-serif font-bold text-center mb-12 text-slate-800"
          >
            Explore Key Topics
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={topic.href|| ""} className="block h-full">
                  <div className="p-6">
                    <div className="text-3xl mb-4">{topic.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{topic.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{topic.description}</p>
                    <div className="flex items-center text-red-700 font-medium">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      

      {/* Footer */}
      
    </div>
  );
}
