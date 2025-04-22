import { useState, useEffect } from "react";
import { Story } from "./StoryCard";
import AudioPlayer from "./AudioPlayer";

interface FlipCardProps {
  story: Story;
}

const FlipCard = ({ story }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  // Проверяем загрузку аудио при первом рендере
  useEffect(() => {
    const audio = new Audio(story.audioSrc);
    
    audio.addEventListener('canplaythrough', () => {
      setIsAudioLoaded(true);
    });
    
    audio.addEventListener('error', () => {
      console.warn(`Аудио ${story.audioSrc} не загружено`);
      setIsAudioLoaded(true); // Все равно позволяем перевернуть карточку
    });
    
    // Начинаем загрузку
    audio.load();
    
    return () => {
      audio.removeEventListener('canplaythrough', () => setIsAudioLoaded(true));
      audio.removeEventListener('error', () => setIsAudioLoaded(true));
    };
  }, [story.audioSrc]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full h-full perspective-1000">
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Передняя сторона карточки */}
        <div 
          className={`absolute backface-hidden w-full h-full ${
            isFlipped ? "pointer-events-none" : "pointer-events-auto"
          }`}
          onClick={handleFlip}
        >
          <div className="aspect-[3/4] overflow-hidden rounded-md shadow-xl relative group">
            <img 
              src={story.coverImage} 
              alt={story.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">{story.title}</h3>
              <p className="text-white/80 text-sm">{story.author}</p>
            </div>
          </div>
        </div>

        {/* Задняя сторона карточки */}
        <div 
          className={`absolute backface-hidden rotate-y-180 w-full h-full rounded-md overflow-hidden shadow-xl ${
            isFlipped ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="w-full h-full bg-card text-card-foreground flex flex-col p-4">
            <button 
              onClick={handleFlip}
              className="self-end mb-2 text-primary hover:text-secondary transition-colors"
            >
              ← Вернуться
            </button>
            <div className="flex-grow flex flex-col items-center justify-center gap-4">
              <img 
                src={story.coverImage} 
                alt={story.title} 
                className="w-1/2 max-w-[150px] rounded-md shadow-md"
              />
              <div className="text-center mb-2">
                <h3 className="text-lg font-medium">{story.title}</h3>
                <p className="text-sm text-muted-foreground">{story.author}</p>
              </div>
              {isAudioLoaded ? (
                <AudioPlayer audioSrc={story.audioSrc} title={`${story.title} - ${story.author}`} />
              ) : (
                <div className="text-center p-4">
                  <p>Загрузка аудио...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;