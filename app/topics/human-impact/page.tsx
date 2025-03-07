"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'
export default function HumanImpactPage() {
  const topicData: TopicProps = {
    title: "Human Impact of Hiroshima and Nagasaki",
    icon: "👤",
    heroImage: "/human-impact.jpg",
    heroAlt: "Survivors walking through the ruins of Hiroshima",
    introduction: "The atomic bombings of Hiroshima and Nagasaki caused unprecedented human suffering. Tens of thousands died instantly, while many more suffered from burns, radiation sickness, and long-term health effects. Survivors, known as hibakusha, faced lifelong challenges.",
    sections: [
      {
        title: "Immediate Deaths and Injuries",
        content: [
          "In Hiroshima, an estimated 70,000 to 80,000 people died instantly when the bomb exploded. In Nagasaki, around 40,000 to 50,000 people perished immediately.",
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
          "In the years after the bombings, many developed leukemia and other cancers due to prolonged radiation exposure. Birth defects and genetic damage also affected future generations."
        ],
        image: "/images/radiation-effects.jpg",
        imageAlt: "Medical treatment of atomic bomb survivors",
        imagePosition: "left"
      },
      {
        title: "Survivors’ Struggles (Hibakusha)",
        content: [
          "Hibakusha, the survivors of the bombings, faced discrimination in Japan due to fears of radiation exposure being contagious.",
          "Many suffered from chronic illnesses, psychological trauma, and societal exclusion, making it difficult to find jobs or marry."
        ],
        image: "/images/hibakusha.jpg",
        imageAlt: "Elderly hibakusha speaking about their experiences",
        imagePosition: "right"
      }
    ],
    quotes: [
      {
        text: "No one else should ever have to suffer as we have. This is our message to the world.",
        author: "Hibakusha testimony"
      },
      {
        text: "The world must not forget what happened in Hiroshima and Nagasaki. The only way to prevent it is to remember.",
        author: "Memorial inscription in Hiroshima"
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
