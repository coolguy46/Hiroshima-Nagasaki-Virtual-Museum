'use client';
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ExhibitCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const ExhibitCard: FC<ExhibitCardProps> = ({ id, title, description, imageSrc }) => {
  return (
    <Link href={`/exhibits/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      >
        <div className="relative h-48">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ExhibitCard;
