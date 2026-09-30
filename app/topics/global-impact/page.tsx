"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'
export default function GlobalImpactPage() {
  const topicData : TopicProps= {
    title: "Global Impact of Hiroshima and Nagasaki",
    icon: "🌍",
    heroImage: "/images/nuclear-age.jpg",
    heroAlt: "Nuclear explosion",
    introduction: "The bombings of Hiroshima and Nagasaki changed the world forever. They contributed to the end of World War II and sparked debates, nuclear arms races, and global movements to prevent future nuclear warfare.",
    sections: [
      {
        title: "The Start of the Nuclear Age",
        content: [
          "The bombings demonstrated the power of nuclear weapons, leading to a new era of warfare and international relations.",
          "Countries began developing their own nuclear weapons, fearing that they would be left vulnerable without them."
        ],
        image: "/images/nuclear-age.jpg",
        imageAlt: "First nuclear test explosion",
        imagePosition: "right"
      },
      {
        title: "The Cold War and the Arms Race",
        content: [
          "The United States and the Soviet Union became rivals, each trying to outdo the other by building more powerful nuclear weapons.",
          "This led to the development of hydrogen bombs, intercontinental missiles, and a global fear of nuclear war."
        ],
        image: "/images/cold-war-arms-race.jpg",
        imageAlt: "Graphic of the United States and Soviet Union flags",
        imagePosition: "left"
      },
      
      
    ],
    relatedTopics: [
      {
        title: "The Science Behind the Bombs",
        description: "Learn about how nuclear weapons work and their effects.",
        href: "/topics/technical-details",
        icon: "🔬"
      },
      {
        title: "The Human Cost",
        description: "Understand the suffering caused by the atomic bombings.",
        href: "/topics/human-impact",
        icon: "👤"
      },
      {
        title: "The Cold War",
        description: "Explore how nuclear weapons shaped global politics after World War II.",
        href: "/topics/cold-war",
        icon: "❄️"
      }
    ],
  };

  return <TopicPage topic={topicData} />;
}
