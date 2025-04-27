
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
  },
  {
    id: 4,
    name: "Коврик для мыши MegaPad XXL",
    description: "Размер 120x60 см, тканевая поверхность, прорезиненное основание",
    price: 2490,
    date: "2025-04-03"
  },
  {
    id: 5,
    name: "Веб-камера CrystalCam 4K",
    description: "Разрешение 4K, автофокус, встроенный микрофон с шумоподавлением",
    price: 7990,
    date: "2025-04-01"
  }
];

export const NewProductsScrollList = () => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Новинки</h2>
        <Badge variant="secondary">New</Badge>
      </div>
      
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex space-x-4 min-w-max">
          {newProducts.map((product) => (
            <div 
              key={product.id} 
              className="border rounded-lg p-4 hover:shadow-md transition-shadow w-64 flex-shrink-0"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{product.name}</h3>
                <Badge variant="outline">{new Date(product.date).toLocaleDateString("ru-RU")}</Badge>
              </div>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
              <div className="mt-4 font-bold">{product.price} ₽</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProductsScrollList;
