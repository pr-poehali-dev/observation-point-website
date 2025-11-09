import { useState, useRef, useEffect } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentStory = allStories[currentTrackIndex];

  const getEmbedUrl = (driveUrl: string) => {
    const fileIdMatch = driveUrl.match(/\/d\/([^/]+)/);
    if (fileIdMatch) {
      return `https://docs.google.com/uc?export=open&id=${fileIdMatch[1]}`;
    }
    return driveUrl;
  };

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const playNext = () => {
    if (currentTrackIndex < allStories.length - 1) {
      playTrack(currentTrackIndex + 1);
    }
  };

  const playPrevious = () => {
    if (currentTrackIndex > 0) {
      playTrack(currentTrackIndex - 1);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(0);
    setDuration(0);
    audio.load();

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Ошибка воспроизведения:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-gray-800 text-white shadow-2xl border-t border-gray-700 z-40">
      <div className="w-full max-w-full md:max-w-[50%] px-4">
        <div className="flex flex-col">
          <div className="w-full pt-2">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
              <span className="w-10 text-right">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0"
              />
              <span className="w-10">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pb-3 gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img
                src={currentStory.coverImage}
                alt={currentStory.title}
                className="w-12 h-12 rounded object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-xs truncate">
                  {currentStory.title}
                </h3>
                <p className="text-xs text-gray-400 truncate">
                  {currentStory.author}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={playPrevious}
                disabled={currentTrackIndex === 0}
                className={cn(
                  "p-1.5 rounded-full hover:bg-gray-700 transition-colors",
                  currentTrackIndex === 0 && "opacity-30 cursor-not-allowed"
                )}
              >
                <Icon name="SkipBack" size={18} />
              </button>

              <button
                onClick={togglePlayPause}
                className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
              >
                {isPlaying ? (
                  <Icon name="Pause" size={20} />
                ) : (
                  <Icon name="Play" size={20} />
                )}
              </button>

              <button
                onClick={playNext}
                disabled={currentTrackIndex === allStories.length - 1}
                className={cn(
                  "p-1.5 rounded-full hover:bg-gray-700 transition-colors",
                  currentTrackIndex === allStories.length - 1 &&
                    "opacity-30 cursor-not-allowed"
                )}
              >
                <Icon name="SkipForward" size={18} />
              </button>

              <button
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="p-1.5 rounded-full hover:bg-gray-700 transition-colors ml-1"
              >
                <Icon name="ListMusic" size={18} />
              </button>
            </div>
          </div>

          {showPlaylist && (
            <div className="border-t border-gray-700 max-h-64 overflow-y-auto">
              <div className="py-2">
                {allStories.map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => playTrack(index)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-colors text-left",
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
                      <p className="text-sm font-medium truncate">
                        {story.title}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {story.author}
                      </p>
                    </div>
                    {index === currentTrackIndex && isPlaying && (
                      <Icon name="Volume2" size={16} className="text-green-400 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <audio
        ref={audioRef}
        src={getEmbedUrl(currentStory.audioSrc)}
        onEnded={playNext}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="metadata"
        crossOrigin="anonymous"
      />
    </div>
  );
};