"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'
export default function DebatesPage() {
  const topicData : TopicProps= {
    title: "Debates on Hiroshima and Nagasaki",
    icon: "⚖️",
    heroImage: "/images/decision-to-bomb.jpg",
    heroAlt: "President Harry S. Truman speaking at a desk",
    introduction: "The decision to drop atomic bombs on Hiroshima and Nagasaki remains one of the most debated topics in history. Some argue it was necessary to end World War II quickly, while others believe it was unnecessary and inhumane.",
    sections: [
      {
        title: "Argument: The Bombings Were Necessary",
        content: [
          "Supporters of the decision argue that the bombings forced Japan to surrender, preventing a long and deadly invasion.",
          "Predictions of casualties from an invasion varied widely; some reached into the millions. Supporters argue that using the bombs ended the war sooner and avoided an invasion."
        ],
        image: "/images/decision-to-bomb.jpg",
        imageAlt: "President Harry S. Truman speaking at a desk",
        imagePosition: "right"
      },
      {
        title: "Argument: The Bombings Were Unjustified",
        content: [
          "Critics argue that Japan was already close to surrendering, and the bombings caused unnecessary civilian suffering.",
          "They believe that alternatives, such as demonstrating the bomb’s power on an uninhabited area or continuing conventional warfare, could have ended the war without using nuclear weapons."
        ],
        image: "/images/nagasaki-bombing.jpg",
        imageAlt: "Ruins of Nagasaki after the atomic bombing",
        imagePosition: "left"
      },
      
    ],
    relatedTopics: [
      {
        title: "Historical Context",
        description: "Explore the events leading up to the bombings.",
        href: "/topics/historical-context",
        icon: "📜"
      },
      {
        title: "The Human Cost",
        description: "Understand the suffering caused by the atomic bombs.",
        href: "/topics/human-impact",
        icon: "👤"
      },
      {
        title: "The Science Behind the Bombs",
        description: "Learn how nuclear weapons work and their effects.",
        href: "/topics/technical-details",
        icon: "🔬"
      }
    ],
  };

  return <TopicPage topic={topicData} />;
}
