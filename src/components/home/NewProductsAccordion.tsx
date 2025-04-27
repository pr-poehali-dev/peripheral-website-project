
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  date: string;
};

const newProducts: Product[] = [
  {
    id: 1,
    name: "Игровая мышь BladeMaster Pro",
    description: "Высокоточный оптический сенсор, 16000 DPI, RGB-подсветка",
    price: 4990,
    date: "2025-04-15"
  },
  {
    id: 2,
    name: "Механическая клавиатура KeyForce TKL",
    description: "Переключатели Cherry MX Blue, алюминиевый корпус, RGB-подсветка",
    price: 8990,
    date: "2025-04-10"
  },
  {
    id: 3,
    name: "Игровые наушники Sonic Blast X7",
    description: "Виртуальный 7.1 звук, шумоподавление, RGB-подсветка",
    price: 6590,
    date: "2025-04-05"
  }
];

export const NewProductsAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full mb-8">
      <AccordionItem value="new-products">
        <AccordionTrigger className="text-xl font-semibold">
          Новинки
          <Badge variant="secondary" className="ml-2">New</Badge>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {newProducts.map((product) => (
              <div 
                key={product.id} 
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{product.name}</h3>
                  <Badge variant="outline">{new Date(product.date).toLocaleDateString("ru-RU")}</Badge>
                </div>
                <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                <div className="mt-4 font-bold">{product.price} ₽</div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NewProductsAccordion;
