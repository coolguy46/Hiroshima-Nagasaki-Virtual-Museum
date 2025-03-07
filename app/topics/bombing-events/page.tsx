"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'


export default function BombingEventsPage() {
  const topicData : TopicProps= {
    title: "The Atomic Bombings",
    icon: "🗓️",
    heroImage: "/bombing-mushroom-cloud.jpg",
    heroAlt: "Mushroom cloud over Hiroshima",
    introduction: "In August 1945, during World War II, the United States dropped two atomic bombs—one on Hiroshima and another on Nagasaki. These bombings caused massive destruction and played a major role in ending the war.",
    sections: [
      {
        title: "Hiroshima: August 6, 1945",
        content: [
          "At 8:15 AM, an American B-29 bomber called *Enola Gay* dropped a bomb named 'Little Boy' over Hiroshima. It exploded in the air, creating a huge blast that destroyed most of the city.",
          "Around 70,000 to 80,000 people died instantly, and many more suffered from burns, injuries, and radiation sickness in the following months."
        ],
        image: "/images/hiroshima-bombing.jpg",
        imageAlt: "Aftermath of Hiroshima bombing showing destroyed city",
        imagePosition: "right"
      },
      {
        title: "Nagasaki: August 9, 1945",
        content: [
          "Three days later, another bomb called 'Fat Man' was dropped on Nagasaki. This was not the original target, but due to bad weather, the mission was redirected.",
          "The bomb exploded over the city, killing around 40,000 to 50,000 people instantly and causing similar destruction to what happened in Hiroshima."
        ],
        image: "/images/nagasaki-bombing.jpg",
        imageAlt: "Nagasaki bombing cloud and devastation",
        imagePosition: "left"
      },
      
      {
        title: "What Happened Next?",
        content: [
          "The explosions caused extreme destruction, fires, and radiation poisoning, which affected people for years.",
          "On August 15, Japan surrendered, and World War II officially ended on September 2, 1945, when the surrender was signed on the USS Missouri."
        ],
        image: "/images/survivors-aftermath.jpg",
        imageAlt: "Survivors walking through destroyed Hiroshima",
        imagePosition: "right"
      }
    ],
    quotes: [
      {
        text: "My God, what have we done?",
        author: "Robert Lewis, co-pilot of the Enola Gay"
      },
      {
        text: "I realize the tragic significance of the atomic bomb... It is an awful responsibility which has come to us.",
        author: "President Harry S. Truman, August 9, 1945"
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