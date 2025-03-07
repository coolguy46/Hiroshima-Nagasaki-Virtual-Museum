export type TopicProps = {
    title: string;
    icon: string;
    heroImage: string;
    heroAlt: string;
    introduction: string;
    sections: {
      title: string;
      content: string[];
      image?: string;
      imageAlt?: string;
      imagePosition?: 'left' | 'right';
    }[];
    quotes: {
      text: string;
      author: string;
    }[];
    relatedTopics: {
      title: string;
      description: string;
      href: string;
      icon: string;
    }[];
  };
  