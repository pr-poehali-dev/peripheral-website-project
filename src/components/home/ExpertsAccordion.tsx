
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

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
  }
];

export const ExpertsAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full mb-8">
      <AccordionItem value="expert-articles">
        <AccordionTrigger className="text-xl font-semibold">
          Статьи экспертов
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pt-2">
            {expertArticles.map((article) => (
              <div 
                key={article.id} 
                className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{article.title}</h3>
                  <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString("ru-RU")}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{article.previewText}</p>
                <div className="mt-2 text-sm font-medium text-blue-600">Автор: {article.author}</div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExpertsAccordion;
