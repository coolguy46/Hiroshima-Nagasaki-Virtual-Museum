"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// This is a generic template for all topic pages
// Replace the placeholder content with specific information for each topic
type TopicProps = {
  title: string;
  icon: string;
  heroImage: string;
  heroAlt: string;
  introduction: string;
  sections: {
    title: string;
    content: string[];
    image?: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
  }[];
  quotes: {
    text: string;
    author: string;
  }[];
  relatedTopics: {
    title: string;
    description: string;
    href: string;
    icon: string;
  }[];
};

export default function TopicPage({
  topic = {
    title: "Historical Context",
    icon: "📜",
    heroImage: "/hiroshima-context.jpg",
    heroAlt: "Historical documents and photos related to World War II",
    introduction: "The atomic bombings of Hiroshima and Nagasaki occurred in the final stage of World War II, a global conflict that had already claimed tens of millions of lives. Understanding the historical context is crucial to grasp why these unprecedented weapons were developed and ultimately used.",
    sections: [
      {
        title: "World War II in the Pacific",
        content: [
          "The Pacific War began in December 1941 with Japan's surprise attack on Pearl Harbor and subsequent invasions across Southeast Asia and the Pacific. By mid-1945, Japan had lost most of its conquered territories and was facing increasing pressure from Allied forces.",
          "The war in the Pacific was characterized by particularly brutal fighting, with high casualties on both sides. The battles of Iwo Jima and Okinawa demonstrated the Japanese military's determination to fight to the death rather than surrender."
        ],
        image: "/pacific-war-map.jpg",
        imageAlt: "Map showing the Pacific Theater of World War II",
        imagePosition: "right"
      },
      {
        title: "The Manhattan Project",
        content: [
          "The United States, with support from the United Kingdom and Canada, began a secret research and development project in 1942 to produce the first nuclear weapons. This effort, codenamed the Manhattan Project, was driven by fears that Nazi Germany might develop such weapons first.",
          "By July 1945, the project had successfully tested the first nuclear device at Alamogordo, New Mexico. With Germany's surrender in May 1945, the weapons were now considered for use against Japan."
        ],
        image: "/manhattan-project.jpg",
        imageAlt: "Scientists working on the Manhattan Project",
        imagePosition: "left"
      },
      {
        title: "Japan's Situation in 1945",
        content: [
          "By summer 1945, Japan's military and economic situation was dire. Its navy was largely destroyed, its air force severely depleted, and its cities subjected to devastating conventional bombing. However, Japan still had millions of soldiers and was preparing civilians to resist an invasion.",
          "Within the Japanese leadership, there was division between those who sought a negotiated peace and military leaders who insisted on fighting to the end. Emperor Hirohito's role and position during this period remains a subject of historical debate."
        ],
        image: "/japan-1945.jpg",
        imageAlt: "Bombed Japanese city in 1945",
        imagePosition: "right"
      }
    ],
    quotes: [
      {
        text: "Now I am become Death, the destroyer of worlds.",
        author: "J. Robert Oppenheimer, quoting the Bhagavad Gita after the Trinity test"
      },
      {
        text: "The atom bomb was no 'great decision.' It was merely another powerful weapon in the arsenal of righteousness.",
        author: "Harry S. Truman"
      }
    ],
    relatedTopics: [
      {
        title: "The Bombings",
        description: "Learn about the events of August 6th and 9th, 1945.",
        href: "/topics/bombing-events",
        icon: "🗓️"
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
      }
    ],
  } as TopicProps
}) {
  const [scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pt-16">
        <Image
          src={topic.heroImage}
          alt={topic.heroAlt}
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
            className="space-y-4 md:space-y-6"
          >
            <motion.div
              variants={fadeVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl mb-4 md:mb-8"
            >
              {topic.icon}
            </motion.div>
            
            <motion.h1 
              variants={fadeVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 md:mb-4 text-white [text-shadow:_0_2px_20px_rgba(0,0,0,0.7)]"
            >
              {topic.title}
            </motion.h1>
            
            <motion.p 
              variants={fadeVariants}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-100 mb-4 md:mb-6 max-w-3xl mx-auto font-light leading-relaxed"
            >
              {topic.introduction}
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="bg-white py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {topic.sections.map((section, index) => (
            <motion.section 
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`py-6 md:py-8 ${index !== topic.sections.length - 1 ? 'border-b border-slate-200' : ''}`}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`flex flex-col ${section.image ? 'md:flex-row' : ''} gap-6 md:gap-8 ${section.image && section.imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${section.image ? 'md:w-1/2' : 'w-full'}`}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 text-slate-800">{section.title}</h2>
                  <div className="prose prose-slate max-w-none">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 text-sm sm:text-base">{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                {section.image && (
                  <div className="md:w-1/2">
                    <div className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-lg shadow-md">
                      <Image 
                        src={section.image} 
                        alt={section.imageAlt || ''} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
      
      {/* Quotes Section */}
      <section className="bg-slate-900 text-white py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {topic.quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="text-center"
                viewport={{ once: true, margin: "-50px" }}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 md:mb-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <blockquote className="text-base md:text-xl font-serif italic font-light mb-3 md:mb-4">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <cite className="text-sm md:text-base text-slate-400 not-italic">— {quote.author}</cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Topics Section */}
      
      {/* Return Home Link */}
      <section className="bg-white py-8 md:py-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-red-700 hover:bg-red-800 
                     text-white rounded-md transition-all duration-300 text-sm md:text-base
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1 tracking-wide font-medium"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Home
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            <div className="lg:col-span-2">
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Hiroshima and Nagasaki Historical Project</h4>
              <p className="text-slate-400 mb-4 md:mb-6 max-w-md text-sm md:text-base">
                An educational resource for understanding the atomic bombings of 1945 and their historical significance.
              </p>
            </div>
            <div>
              <h5 className="text-sm md:text-base font-bold mb-3 md:mb-4">Explore Topics</h5>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <Link href="/topics/historical-context" className="text-slate-400 hover:text-white transition-colors">
                    Historical Context
                  </Link>
                </li>
                <li>
                  <Link href="/topics/bombing-events" className="text-slate-400 hover:text-white transition-colors">
                    The Bombings
                  </Link>
                </li>
                <li>
                  <Link href="/topics/human-impact" className="text-slate-400 hover:text-white transition-colors">
                    Human Impact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm md:text-base font-bold mb-3 md:mb-4">More Topics</h5>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <Link href="/topics/debates" className="text-slate-400 hover:text-white transition-colors">
                    Debates
                  </Link>
                </li>
                <li>
                  <Link href="/topics/global-impact" className="text-slate-400 hover:text-white transition-colors">
                    Global Impact
                  </Link>
                </li>
                <li>
                  <Link href="/topics/legacy" className="text-slate-400 hover:text-white transition-colors">
                    Legacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-slate-500 text-xs md:text-sm">
            <p>© {new Date().getFullYear()} | School History Project | Created for educational purposes only</p>
          </div>
        </div>
      </footer>
    </div>
  );
}