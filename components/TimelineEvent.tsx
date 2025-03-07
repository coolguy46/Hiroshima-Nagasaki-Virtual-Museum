'use client';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  details?: string;
  image: string; // Now required
  align?: 'left' | 'right';
}

const TimelineEvent: FC<TimelineEventProps> = ({ 
  date, 
  title, 
  description, 
  details, 
  image, 
  align = 'left' 
}) => {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Validate image URL
  const validImageUrl = image && typeof image === 'string' && image.trim() !== '' 
    ? image 
    : null;

  const renderImage = () => {
    if (!validImageUrl || imageError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
          <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      );
    }

    return (
      <>
        <Image 
          src={validImageUrl}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => setImageError(true)}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`flex flex-col ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
      >
        {/* Date marker in the center for mobile, hidden on desktop */}
        <div className="md:hidden bg-red-700 text-white rounded-full px-4 py-1 text-sm font-medium mb-4 shadow-md">
          {date}
        </div>

        {/* Content card */}
        <div className={`w-full md:w-5/12 bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full`}>
          <div className="relative h-48 w-full bg-slate-200">
            {renderImage()}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm opacity-80">{description}</p>
            </div>
          </div>
          
          {details && (
            <div className={`p-4 ${expanded ? 'block' : 'hidden md:block'}`}>
              <p className="text-slate-600 text-sm">{details}</p>
            </div>
          )}
          
          {/* Mobile-only expand button */}
          {details && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className="md:hidden self-center text-slate-500 hover:text-red-700 text-sm font-medium flex items-center gap-1 p-2"
            >
              {expanded ? 'Show less' : 'Show more'}
              <svg className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Center timeline elements */}
        <div className="hidden md:flex flex-col items-center mx-6 relative">
          <div className="h-full w-px bg-slate-300 absolute"></div>
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-white shadow-md border-4 border-slate-100 flex items-center justify-center z-10">
              <div className="w-10 h-10 rounded-full bg-red-700"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
              {date.length > 10 ? date.slice(0, 4) : date.slice(5, 7)}
            </div>
          </div>
          <div className="mt-2 bg-slate-800 text-white rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap">
            {date}
          </div>
        </div>

        {/* Empty space on the other side */}
        <div className="hidden md:block md:w-5/12"></div>
      </motion.div>
    </div>
  );
};

export default TimelineEvent;