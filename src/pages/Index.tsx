import { StoriesGroupGrid } from "@/components/StoriesGrid";
import { GlobalPlaylist } from "@/components/GlobalPlaylist";
import { storyGroups } from "@/data/stories";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8 pb-[200px] space-y-12">
      <header className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Точка наблюдения</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Альманах "Точка наблюдения" - это сборник фантастических аудиорассказов об обычных людях. О том, как странное легко маскируется под привычное. И как многое может остаться незамеченным. Если не посмотреть чуть внимательнее.
        </p>
      </header>

      <main>
        <StoriesGroupGrid storyGroups={storyGroups} />
      </main>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center space-y-4">
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Вселенная «Точки наблюдения» продолжает расширяться. Мы ищем новых авторов и голоса, чтобы вместе рассказывать истории, которые могли бы остаться незамеченными. По всем вопросам обращаться к автору проекта.
        </p>
        <div className="flex flex-col items-center justify-center space-y-2 py-4">
          <p className="text-gray-600 dark:text-gray-400">
            Автор проекта - <span className="font-medium">Иван Днепровский</span>
          </p>
          <a 
            href="https://vk.com/ivan_dneprovsky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            https://vk.com/ivan_dneprovsky
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Точка наблюдения. Все права защищены.
        </p>
      </footer>

      <GlobalPlaylist />
    </div>
  );
};

export default Index;