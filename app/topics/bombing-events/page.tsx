"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'


export default function BombingEventsPage() {
  const topicData : TopicProps= {
    title: "The Atomic Bombings",
    icon: "🗓️",
    heroImage: "/images/hiroshima-bombing.jpg",
    heroAlt: "Ruins of Hiroshima after the atomic bombing",
    introduction: "In August 1945, during World War II, the United States dropped two atomic bombs—one on Hiroshima and another on Nagasaki. These bombings caused massive destruction and played a major role in ending the war.",
    sections: [
      {
        title: "Hiroshima: August 6, 1945",
        content: [
          "At 8:15 AM, an American B-29 bomber called Enola Gay dropped a bomb named Little Boy over Hiroshima. It exploded in the air, creating a huge blast that destroyed most of the city.",
          "Tens of thousands died on the day of the bombing. Hiroshima City estimates that about 140,000 people had died by the end of 1945, including those who later died from injuries and radiation sickness."
        ],
        image: "/images/hiroshima-bombing.jpg",
        imageAlt: "Aftermath of Hiroshima bombing showing destroyed city",
        imagePosition: "right"
      },
      {
        title: "Nagasaki: August 9, 1945",
        content: [
          "Three days later, another bomb called Fat Man was dropped on Nagasaki. Kokura was the primary target, but poor visibility led the crew to divert to Nagasaki.",
          "The bomb exploded over the city, killing tens of thousands on the day of the attack. Nagasaki City estimates about 74,000 deaths by the end of 1945."
        ],
        image: "/images/nagasaki-bombing.jpg",
        imageAlt: "Ruins of Nagasaki after the atomic bombing",
        imagePosition: "left"
      },
      
      {
        title: "What Happened Next?",
        content: [
          "The explosions caused extreme destruction, fires, and radiation poisoning, which affected people for years.",
          "Japan announced its surrender on August 15, after the two bombings and the Soviet Union's entry into the war. The formal surrender was signed on September 2, 1945, aboard the USS Missouri."
        ],
        image: "/images/survivors-aftermath.jpg",
        imageAlt: "Woman holding a child among the ruins",
        imagePosition: "right"
      }
    ],
    relatedTopics: [
      {
        title: "Why It Happened",
        description: "Learn about the events leading up to the bombings.",
        href: "/topics/historical-context",
        icon: "📜"
      },
      {
        title: "The Human Cost",
        description: "Discover how the bombings affected people’s lives.",
        href: "/topics/human-impact",
        icon: "👤"
      },
      {
        title: "Was It Justified?",
        description: "Explore the debates on whether using the bombs was the right decision.",
        href: "/topics/debates",
        icon: "⚖️"
      }
    ],
  };

  return <TopicPage topic={topicData} />;
}
