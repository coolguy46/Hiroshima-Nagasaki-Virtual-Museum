"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'
export default function HumanImpactPage() {
  const topicData: TopicProps = {
    title: "Human Impact of Hiroshima and Nagasaki",
    icon: "👤",
    heroImage: "/images/hibakusha.jpg",
    heroAlt: "Black-and-white portrait of a woman",
    introduction: "The atomic bombings of Hiroshima and Nagasaki caused unprecedented human suffering. Tens of thousands died instantly, while many more suffered from burns, radiation sickness, and long-term health effects. Survivors, known as hibakusha, faced lifelong challenges.",
    sections: [
      {
        title: "Immediate Deaths and Injuries",
        content: [
          "Tens of thousands of people died on the day of each bombing. By the end of 1945, Hiroshima City estimates about 140,000 deaths and Nagasaki City estimates about 74,000 deaths.",
          "Many more were severely injured, suffering from burns, blindness, and severe trauma due to the explosion and heatwave."
        ],
        image: "/images/hiroshima-bombing.jpg",
        imageAlt: "Aftermath of Hiroshima bombing with survivors in ruins",
        imagePosition: "right"
      },
      {
        title: "Radiation Sickness and Long-Term Effects",
        content: [
          "Survivors suffered from acute radiation sickness, which caused nausea, hair loss, internal bleeding, and death in the following weeks.",
          "In the years after the bombings, radiation exposure increased survivors' risk of leukemia and other cancers. Studies have not found a statistically significant increase in inherited birth defects among their children."
        ],
        image: "/images/radiation-effects.jpg",
        imageAlt: "Map showing fire and blast damage in Hiroshima",
        imagePosition: "left"
      },
      {
        title: "Survivors’ Struggles (Hibakusha)",
        content: [
          "Hibakusha, the survivors of the bombings, faced discrimination in Japan due to fears of radiation exposure being contagious.",
          "Many suffered from chronic illnesses, psychological trauma, and societal exclusion, making it difficult to find jobs or marry."
        ],
        image: "/images/hibakusha.jpg",
        imageAlt: "Black-and-white portrait of a woman",
        imagePosition: "right"
      }
    ],
    relatedTopics: [
      {
        title: "The Bombings",
        description: "Learn about the events of August 6 and 9, 1945, in Hiroshima and Nagasaki.",
        href: "/topics/bombings",
        icon: "💥"
      },
      {
        title: "Global Impact",
        description: "Understand how the bombings changed international politics and nuclear policies.",
        href: "/topics/global-impact",
        icon: "🌍"
      },
      {
        title: "Debates on the Bombings",
        description: "Explore the ongoing discussions about the necessity and ethics of using atomic bombs.",
        href: "/topics/debates",
        icon: "⚖️"
      }
    ],
  };

  return <TopicPage topic={topicData} />;
}
