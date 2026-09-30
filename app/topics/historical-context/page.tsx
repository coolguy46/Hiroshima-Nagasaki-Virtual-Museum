"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'
export default function HistoricalContextPage() {
  const topicData : TopicProps = {
    title: "Historical Context of Hiroshima and Nagasaki",
    icon: "📜",
    heroImage: "/images/pacific-war.jpg",
    heroAlt: "Map of the Pacific Theater in World War II",
    introduction: "The atomic bombings of Hiroshima and Nagasaki did not happen in isolation. They were the result of years of war, scientific advancements, and political decisions that shaped the course of history.",
    sections: [
      {
        title: "World War II and the Pacific Theater",
        content: [
          "By 1945, World War II had been raging for six years. The war in Europe ended in May, but Japan continued to fight in the Pacific.",
          "The United States sought ways to end the war and force Japan’s surrender. Japanese leaders were divided: some explored a negotiated end to the war, while others wanted to continue fighting."
        ],
        image: "/images/pacific-war.jpg",
        imageAlt: "Map of the Pacific Theater in World War II",
        imagePosition: "right"
      },
      {
        title: "The Manhattan Project",
        content: [
          "During the war, the U.S. secretly developed the atomic bomb under the Manhattan Project, fearing that Germany might build one first.",
          "J. Robert Oppenheimer directed the Los Alamos laboratory. Albert Einstein did not work on the Manhattan Project; he had signed a 1939 letter warning President Roosevelt that Germany might develop an atomic bomb. The first atomic bomb was tested in July 1945."
        ],
        image: "/images/manhattan-project.jpg",
        imageAlt: "The Trinity test device before detonation",
        imagePosition: "left"
      },
      {
        title: "Japan’s Refusal to Surrender",
        content: [
          "Despite suffering massive losses, Japan’s government did not accept the Allied demand for surrender in the Potsdam Declaration.",
          "Some leaders wanted to negotiate peace, but others insisted on fighting to the end. This deadlock contributed to the decision to use atomic bombs."
        ],
        image: "/images/japan-leaders-1945.jpg",
        imageAlt: "Portrait of Emperor Hirohito",
        imagePosition: "right"
      },
      {
        title: "The Decision to Drop the Bombs",
        content: [
          "U.S. leaders believed that using atomic bombs would force Japan to surrender without a costly invasion.",
          "On August 6 and 9, 1945, the U.S. dropped bombs on Hiroshima and Nagasaki, leading to Japan’s surrender days later. The decision remains controversial to this day."
        ],
        image: "/images/decision-to-bomb.jpg",
        imageAlt: "President Harry S. Truman speaking at a desk",
        imagePosition: "left"
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
        title: "The Science Behind the Bombs",
        description: "Discover how the atomic bombs worked and their devastating effects.",
        href: "/topics/technical-details",
        icon: "🔬"
      },
      {
        title: "Debates on the Bombings",
        description: "Explore the ongoing debates about the ethics and necessity of using atomic bombs.",
        href: "/topics/debates",
        icon: "⚖️"
      }
    ],
  };

  return <TopicPage topic={topicData} />;
}
