import { stories } from "@/data/stories";
import StoriesGrid from "@/components/StoriesGrid";
import { Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="py-12 md:py-20 text-center">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="w-8 h-8" strokeWidth={1.5} />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Точка наблюдения
            </h1>
            <Eye className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Фантастические истории об обычных людях. О том, как странное легко маскируется под привычное.
            И как многое может остаться незамеченным. Если не посмотреть чуть внимательнее.
          </p>
        </div>
      </header>

      <main className="flex-1 container px-4 pb-20">
        <StoriesGrid stories={stories} />
      </main>
      
      <footer className="py-6 border-t border-border/40">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Альманах «Точка наблюдения»</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
