"use client"

import { FC } from 'react';
import TimelineEvent from '@/components/TimelineEvent';

const Timeline: FC = () => {
  const events = [
    {
      date: "July 16, 1945",
      title: "Trinity Test",
      description: "First successful test of atomic bomb in New Mexico",
      image: "/images/trinity-test.jpg",
      details: "The test took place in the Jornada del Muerto desert, creating a mushroom cloud visible from 60 miles away."
    },
    {
      date: "August 6, 1945",
      title: "Hiroshima Bombing",
      description: "First atomic bomb used in warfare, dropped on Hiroshima",
      image: "/images/hiroshima-bombing.jpg",
      details: "The 'Little Boy' bomb was dropped from the Enola Gay B-29 bomber at 8:15 AM local time."
    },
    {
      date: "August 9, 1945",
      title: "Nagasaki Bombing",
      description: "Second atomic bomb dropped on Nagasaki",
      image: "/images/nagasaki-bombing.jpg",
      details: "The 'Fat Man' bomb was dropped three days after Hiroshima, causing devastating destruction."
    },
    {
      date: "August 15, 1945",
      title: "Japanese Surrender",
      description: "Emperor Hirohito announces Japan's surrender",
      image: "/images/japanese-surrender.jpg",
      details: "The Emperor's radio broadcast announced Japan's surrender. The formal surrender was signed on September 2, 1945."
    },
    {
      date: "1946-1950",
      title: "Occupation and Reconstruction",
      description: "Allied occupation of Japan and beginning of reconstruction efforts in Hiroshima and Nagasaki.",
      image: "/images/reconstruction.jpg",
      details: "During the Allied occupation, Hiroshima and Nagasaki began rebuilding. Hiroshima was later designated a Peace Memorial City."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-memorial-100">Historical Timeline</h1>
          <p className="text-xl text-primary-300 max-w-2xl mx-auto">
            Chronological events that shaped history and their lasting impact on humanity
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {events.map((event, index) => (
            <TimelineEvent
              key={event.date}
              date={event.date}
              title={event.title}
              image={event.image}
              description={event.description}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
