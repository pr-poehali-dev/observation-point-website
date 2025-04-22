import { Story } from "./StoryCard";
import StoryCard from "./StoryCard";

interface StoriesGridProps {
  stories: Story[];
}

const StoriesGrid = ({ stories }: StoriesGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoriesGrid;
