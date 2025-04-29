import { Story } from "./StoryCard";
import StoryCard from "./StoryCard";
import { StoryGroup } from "@/data/stories";

interface StoriesGridProps {
  stories: Story[];
  title?: string;
}

interface StoriesGroupGridProps {
  storyGroups: StoryGroup[];
}

export const StoriesGroupGrid = ({ storyGroups }: StoriesGroupGridProps) => {
  return (
    <div className="space-y-16">
      {storyGroups.map((group, index) => (
        <div key={index} className="space-y-8">
          <h2 className="text-2xl font-bold text-primary/80 text-center">{group.title}</h2>
          <StoriesGrid stories={group.stories} />
        </div>
      ))}
    </div>
  );
};

const StoriesGrid = ({ stories, title }: StoriesGridProps) => {
  return (
    <div className="space-y-8">
      {title && <h2 className="text-2xl font-bold text-primary/80 text-center">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {stories.map((story) => (
          <div key={story.id} className="animate-fade-in" style={{ animationDelay: `${story.id * 100}ms` }}>
            <StoryCard story={story} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesGrid;
