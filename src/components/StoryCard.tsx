import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AudioPlayer from "./AudioPlayer";

export interface Story {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  audioSrc: string;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isYandexDisk = story.audioSrc.includes('disk.yandex.ru');
  const isGoogleDrive = story.audioSrc.includes('drive.google.com');
  
  // Преобразуем ссылку Google Drive в прямую ссылку для аудиоплеера
  const getDirectGoogleDriveUrl = (url: string) => {
    const idMatch = url.match(/\/d\/(.+?)\/view/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
    }
    return url;
  };
  
  const audioSourceUrl = isGoogleDrive ? getDirectGoogleDriveUrl(story.audioSrc) : story.audioSrc;

  return (
    <>
      <div 
        className="group cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[3/4] overflow-hidden rounded-md shadow-xl relative">
          <img 
            src={story.coverImage} 
            alt={story.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold tracking-tight">{story.title}</h3>
            <p className="text-white/80 text-sm">{story.author}</p>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl tracking-tight">{story.title}</DialogTitle>
            <DialogClose className="absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100">
              <X className="h-4 w-4" />
              <span className="sr-only">Закрыть</span>
            </DialogClose>
          </DialogHeader>
          <div className="flex flex-col gap-4 items-center">
            <img 
              src={story.coverImage} 
              alt={story.title} 
              className="w-full max-w-[250px] rounded-md shadow-md"
            />
            <div className="text-center mb-2">
              <h3 className="text-lg font-medium tracking-tight">{story.title}</h3>
              <p className="text-sm text-muted-foreground">{story.author}</p>
            </div>
            
            {isYandexDisk ? (
              <div className="text-center">
                <p className="mb-4">Чтобы послушать рассказ, перейдите по ссылке на Яндекс.Диск:</p>
                <Button asChild>
                  <a href={story.audioSrc} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Открыть аудиозапись <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            ) : (
              <AudioPlayer audioSrc={audioSourceUrl} title={`${story.title} - ${story.author}`} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StoryCard;
