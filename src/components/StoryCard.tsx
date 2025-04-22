import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
            <h3 className="text-white text-xl font-bold">{story.title}</h3>
            <p className="text-white/80 text-sm">{story.author}</p>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">{story.title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 items-center">
            <img 
              src={story.coverImage} 
              alt={story.title} 
              className="w-full max-w-[250px] rounded-md shadow-md"
            />
            <div className="text-center mb-2">
              <h3 className="text-lg font-medium">{story.title}</h3>
              <p className="text-sm text-muted-foreground">{story.author}</p>
            </div>
            <AudioPlayer audioSrc={story.audioSrc} title={`${story.title} - ${story.author}`} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StoryCard;
