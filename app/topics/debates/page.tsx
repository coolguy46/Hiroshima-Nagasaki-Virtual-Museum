"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'
export default function DebatesPage() {
  const topicData : TopicProps= {
    title: "Debates on Hiroshima and Nagasaki",
    icon: "⚖️",
    heroImage: "/debate-hiroshima-nagasaki.jpg",
    heroAlt: "Debate on the atomic bombings",
    introduction: "The decision to drop atomic bombs on Hiroshima and Nagasaki remains one of the most debated topics in history. Some argue it was necessary to end World War II quickly, while others believe it was unnecessary and inhumane.",
    sections: [
      {
        title: "Argument: The Bombings Were Necessary",
        content: [
          "Supporters of the decision argue that the bombings forced Japan to surrender, preventing a long and deadly invasion.",
          "An invasion of Japan could have caused millions of deaths on both sides, so using the bombs was seen as a way to end the war quickly and save lives overall."
        ],
        image: "/images/decision-to-bomb.jpg",
        imageAlt: "Military leaders discussing war strategies",
        imagePosition: "right"
      },
      {
        title: "Argument: The Bombings Were Unjustified",
        content: [
          "Critics argue that Japan was already close to surrendering, and the bombings caused unnecessary civilian suffering.",
          "They believe that alternatives, such as demonstrating the bomb’s power on an uninhabited area or continuing conventional warfare, could have ended the war without using nuclear weapons."
        ],
        image: "/images/nagasaki-bombing.jpg",
        imageAlt: "Civilians suffering after the bombing",
        imagePosition: "left"
      },
      
    ],
    quotes: [
      {
        text: "The final and terrible war crime of the United States was the atomic bombing of Japan.",
        author: "Historian Howard Zinn"
      },
      {
        text: "The greatest thing from our standpoint was that it ended the war.",
        author: "President Harry S. Truman"
      }
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
