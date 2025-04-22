import { Story } from "./StoryCard";
import FlipCard from "./FlipCard";

interface StoriesGridProps {
  stories: Story[];
}

const StoriesGrid = ({ stories }: StoriesGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {stories.map((story) => (
        <div key={story.id} className="animate-fade-in">
          <FlipCard story={story} />
        </div>
      ))}
    </div>
  );
};

export default StoriesGrid;