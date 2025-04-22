import { stories } from "@/data/stories";
import StoriesGrid from "@/components/StoriesGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="py-12 md:py-20 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Точка наблюдения
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground font-light">
            Фантастические истории об обычных людях. О том, как странное легко маскируется под привычное.
            И как многое может остаться незамеченным. Если не посмотреть чуть внимательнее.
          </p>
        </div>
      </header>

      <main className="flex-1 container px-4 pb-20">
        <StoriesGrid stories={stories} />
      </main>
      
      <footer className="py-8 border-t border-border/40 bg-card/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <div className="w-20 h-20 overflow-hidden rounded-full">
              <img 
                src="/author-photo.jpg" 
                alt="Иван Днепровский" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-base font-medium">
                Автор проекта - Иван Днепровский
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                (литературный редактор, автор озвучки)
              </p>
              <a 
                href="https://vk.com/ivan_dneprovsky" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.67 13.29 13.67C13 13.67 12.93 13.74 12.93 14.17V15.77C12.93 16.07 12.83 16.27 11.96 16.27C10.59 16.27 9.11 15.47 8.03 14.07C6.36 11.9 5.76 10.13 5.76 9.8C5.76 9.61 5.84 9.42 6.36 9.42H7.83C8.14 9.42 8.27 9.58 8.4 9.97C9.1 12.07 10.25 13.87 10.68 13.87C10.85 13.87 10.93 13.8 10.93 13.32V11.02C10.89 10.22 10.55 10.16 10.55 9.85C10.55 9.69 10.69 9.52 10.9 9.52H13.09C13.35 9.52 13.45 9.68 13.45 10.04V12.77C13.45 13.04 13.57 13.14 13.68 13.14C13.85 13.14 14 13.04 14.31 12.73C15.28 11.67 15.97 10.07 15.97 10.07C16.06 9.84 16.21 9.62 16.56 9.62H18.03C18.4 9.62 18.5 9.84 18.4 10.12C18.25 10.8 17.14 12.41 17.14 12.41C17 12.63 16.96 12.74 17.14 12.95C17.28 13.12 17.73 13.51 18.03 13.87C18.58 14.47 19.01 14.97 19.15 15.35C19.28 15.7 19.09 15.93 18.7 15.93L18.15 16.27Z" />
                </svg>
                ВКонтакте
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Альманах «Точка наблюдения»</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
