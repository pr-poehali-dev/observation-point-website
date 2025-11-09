import { useState, useEffect } from "react";
import { Story } from "@/components/StoryCard";
import { storyGroups } from "@/data/stories";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export const GlobalPlaylist = () => {
  const allStories: (Story & { seasonTitle: string })[] = storyGroups.flatMap(
    (group) =>
      group.stories.map((story) => ({
        ...story,
        seasonTitle: group.title,
      }))
  );

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const currentStory = allStories[currentTrackIndex];

  const getGoogleDrivePreviewUrl = (driveUrl: string) => {
    const fileIdMatch = driveUrl.match(/\/d\/([^/]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return driveUrl;
  };

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
  };

  const playNext = () => {
    if (currentTrackIndex < allStories.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const playPrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-gray-800 text-white shadow-2xl border-t border-gray-700 z-[35]">
      <div className="w-full max-w-full lg:max-w-[50%] px-3 md:px-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-2 md:py-3 gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
              <img
                src={currentStory.coverImage}
                alt={currentStory.title}
                className="w-10 h-10 md:w-12 md:h-12 rounded object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-xs md:text-sm truncate">
                  {currentStory.title}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-400 truncate">
                  {currentStory.author}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-0.5 md:gap-1 flex-shrink-0">
              <button
                onClick={playPrevious}
                disabled={currentTrackIndex === 0}
                className={cn(
                  "p-1 md:p-1.5 rounded-full hover:bg-gray-700 transition-colors",
                  currentTrackIndex === 0 && "opacity-30 cursor-not-allowed"
                )}
              >
                <Icon name="SkipBack" size={16} className="md:w-[18px] md:h-[18px]" />
              </button>

              <button
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="p-1 md:p-1.5 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Icon name="ListMusic" size={16} className="md:w-[18px] md:h-[18px]" />
              </button>

              <button
                onClick={playNext}
                disabled={currentTrackIndex === allStories.length - 1}
                className={cn(
                  "p-1 md:p-1.5 rounded-full hover:bg-gray-700 transition-colors",
                  currentTrackIndex === allStories.length - 1 &&
                    "opacity-30 cursor-not-allowed"
                )}
              >
                <Icon name="SkipForward" size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
            </div>
          </div>

          <div className="w-full pb-2">
            <iframe
              key={currentTrackIndex}
              src={getGoogleDrivePreviewUrl(currentStory.audioSrc)}
              className="w-full h-12 md:h-14 border-0 rounded"
              allow="autoplay"
            />
          </div>

          {showPlaylist && (
            <div className="border-t border-gray-700 max-h-48 md:max-h-64 overflow-y-auto">
              <div className="py-2">
                {allStories.map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => playTrack(index)}
                    className={cn(
                      "w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-1.5 md:py-2 hover:bg-gray-700 transition-colors text-left",
                      index === currentTrackIndex && "bg-gray-700"
                    )}
                  >
                    <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={story.coverImage}
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-medium truncate">
                        {story.title}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-400 truncate">
                        {story.author}
                      </p>
                    </div>
                    {index === currentTrackIndex && (
                      <Icon name="Volume2" size={14} className="text-green-400 flex-shrink-0 md:w-4 md:h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};