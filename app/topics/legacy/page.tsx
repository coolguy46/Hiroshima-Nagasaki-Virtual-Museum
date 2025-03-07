"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'
export default function LegacyCommemorationPage() {
  const topicData: TopicProps = {
    title: "Legacy and Commemoration of Hiroshima and Nagasaki",
    icon: "🕊️",
    heroImage: "/legacy-memorial.jpg",
    heroAlt: "Hiroshima Peace Memorial with paper cranes",
    introduction: "The bombings of Hiroshima and Nagasaki left a profound impact on the world, leading to ongoing efforts for remembrance, education, and nuclear disarmament. Survivors and activists continue to share their stories, ensuring that history is never forgotten.",
    sections: [
      {
        title: "Memorials and Museums",
        content: [
          "Hiroshima and Nagasaki have established peace museums and memorials to educate visitors about the destruction and suffering caused by the bombings.",
          "The Hiroshima Peace Memorial Park and the Nagasaki Atomic Bomb Museum serve as powerful reminders of the tragic events and advocate for a world without nuclear weapons."
        ],
        image: "/images/hiroshima-memorial.jpg",
        imageAlt: "Hiroshima Peace Memorial Park",
        imagePosition: "right"
      },
      
      
      {
        title: "Annual Commemorations and Peace Ceremonies",
        content: [
          "Every year on August 6 and 9, Hiroshima and Nagasaki hold peace ceremonies to honor victims and promote messages of peace.",
          "These events include moments of silence, floating lanterns, and speeches by survivors and world leaders."
        ],
        image: "/images/peace-ceremony.jpg",
        imageAlt: "Lanterns floating on a river in memory of atomic bomb victims",
        imagePosition: "left"
      }
    ],
    quotes: [
      {
        text: "We must never forget Hiroshima and Nagasaki. The memory of the past must guide us towards a peaceful future.",
        author: "Ban Ki-moon, former UN Secretary-General"
      },
      {
        text: "Hiroshima and Nagasaki are not just about history. They are a warning for the future.",
        author: "Setsuko Thurlow, atomic bomb survivor and activist"
      }
    ],
    relatedTopics: [
      {
        title: "Human Impact",
        description: "Explore the effects of the bombings on survivors and their families.",
        href: "/topics/human-impact",
        icon: "👤"
      },
      {
        title: "Global Impact",
        description: "Understand how the bombings influenced international policies and conflicts.",
        href: "/topics/global-impact",
        icon: "🌍"
      },
      {
        title: "Debates on the Bombings",
        description: "Examine the ethical and strategic discussions surrounding the use of atomic weapons.",
        href: "/topics/debates",
        icon: "⚖️"
      }
    ],
  };

  return <TopicPage topic={topicData} />;
}