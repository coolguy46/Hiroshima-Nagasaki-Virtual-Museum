"use client";
import TopicPage from '@/components/TopicPage';
import { TopicProps } from '@/app/topics/type'
export default function HistoricalContextPage() {
  const topicData : TopicProps = {
    title: "Historical Context of Hiroshima and Nagasaki",
    icon: "📜",
    heroImage: "/historical-context.jpg",
    heroAlt: "World War II battle map",
    introduction: "The atomic bombings of Hiroshima and Nagasaki did not happen in isolation. They were the result of years of war, scientific advancements, and political decisions that shaped the course of history.",
    sections: [
      {
        title: "World War II and the Pacific Theater",
        content: [
          "By 1945, World War II had been raging for six years. The war in Europe ended in May, but Japan continued to fight in the Pacific.",
          "The United States, aiming to end the war quickly, sought strategies to force Japan’s surrender. However, Japan showed no signs of giving up despite heavy bombings and island battles."
        ],
        image: "/images/pacific-war.jpg",
        imageAlt: "Map of the Pacific Theater in World War II",
        imagePosition: "right"
      },
      {
        title: "The Manhattan Project",
        content: [
          "During the war, the U.S. secretly developed the atomic bomb under the Manhattan Project, fearing that Germany might build one first.",
          "Scientists, including Albert Einstein and J. Robert Oppenheimer, worked on the project, leading to the successful test of the first atomic bomb in July 1945."
        ],
        image: "/images/manhattan-project.jpg",
        imageAlt: "Scientists working on the Manhattan Project",
        imagePosition: "left"
      },
      {
        title: "Japan’s Refusal to Surrender",
        content: [
          "Despite suffering massive losses, Japan’s government refused the Allied demand for unconditional surrender in the Potsdam Declaration.",
          "Some leaders wanted to negotiate peace, but others insisted on fighting to the end. This deadlock contributed to the decision to use atomic bombs."
        ],
        image: "/images/japan-leaders-1945.jpg",
        imageAlt: "Japanese military leaders discussing strategy",
        imagePosition: "right"
      },
      {
        title: "The Decision to Drop the Bombs",
        content: [
          "U.S. leaders believed that using atomic bombs would force Japan to surrender without a costly invasion.",
          "On August 6 and 9, 1945, the U.S. dropped bombs on Hiroshima and Nagasaki, leading to Japan’s surrender days later. The decision remains controversial to this day."
        ],
        image: "/images/decision-to-bomb.jpg",
        imageAlt: "President Truman and military officials discussing the bombings",
        imagePosition: "left"
      }
    ],
    quotes: [
      {
        text: "Now I am become Death, the destroyer of worlds.",
        author: "J. Robert Oppenheimer, after the first atomic bomb test"
      },
      {
        text: "We call upon the government of Japan to proclaim now the unconditional surrender or face prompt and utter destruction.",
        author: "Potsdam Declaration, July 26, 1945"
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
