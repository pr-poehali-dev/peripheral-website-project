
import { useEffect, useRef } from "react";

type Article = {
  id: number;
  title: string;
  author: string;
  previewText: string;
  date: string;
};

const expertArticles: Article[] = [
  {
    id: 1,
    title: "Как выбрать идеальную механическую клавиатуру",
    author: "Алексей Петров",
    previewText: "Подробный гид по переключателям, раскладкам и материалам для выбора идеальной клавиатуры под ваши задачи.",
    date: "2025-04-22"
  },
  {
    id: 2,
    title: "Игровые мыши: на что обращать внимание",
    author: "Марина Соколова",
    previewText: "Разбираемся в сенсорах, DPI, форм-факторах и других важных параметрах игровых мышей.",
    date: "2025-04-18"
  },
  {
    id: 3,
    title: "Мониторы для работы и игр: что нужно знать",
    author: "Дмитрий Иванов",
    previewText: "Сравнение технологий матриц, время отклика, частота обновления и другие важные характеристики.",
    date: "2025-04-12"
  },
  {
    id: 4,
    title: "Выбираем аудиоустройства для геймера",
    author: "Сергей Васильев",
    previewText: "Какие наушники лучше для разных жанров игр и как настроить звук для максимального погружения.",
    date: "2025-04-08"
  },
  {
    id: 5,
    title: "Эргономика рабочего места: советы специалиста",
    author: "Елена Смирнова",
    previewText: "Как организовать рабочее пространство, чтобы избежать проблем со здоровьем при длительной работе за компьютером.",
    date: "2025-04-05"
  }
];

// Дублируем статьи для бесконечной прокрутки
const extendedArticles = [...expertArticles, ...expertArticles];

export const ExpertsScrollList = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.7; // пикселей за кадр
    const totalWidth = scrollContainer.scrollWidth;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      
      // Если дошли до половины (до дубликатов), возвращаемся в начало
      if (scrollPosition >= totalWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    // Запускаем анимацию
    animationId = requestAnimationFrame(scroll);
    
    // Останавливаем прокрутку при наведении
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div className="w-full mb-8">
      <h2 className="text-xl font-semibold mb-4">Статьи экспертов</h2>
      
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto pb-4 scrollbar-hide"
      >
        <div className="flex space-x-4 min-w-max">
          {extendedArticles.map((article, index) => (
            <div 
              key={`${article.id}-${index}`} 
              className="border-l-4 border-blue-500 pl-4 py-3 pr-4 rounded-r-lg bg-white hover:bg-gray-50 transition-colors w-80 flex-shrink-0"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{article.title}</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-2">{new Date(article.date).toLocaleDateString("ru-RU")}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{article.previewText}</p>
              <div className="mt-2 text-sm font-medium text-blue-600">Автор: {article.author}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertsScrollList;
