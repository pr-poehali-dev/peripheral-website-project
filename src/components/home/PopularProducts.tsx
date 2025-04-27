
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Heart } from "lucide-react";

type PopularProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  imageUrl: string;
};

const popularProducts: PopularProduct[] = [
  {
    id: 101,
    name: "Logitech G Pro X Superlight",
    description: "Ультралегкая игровая мышь с беспроводным подключением",
    price: 12990,
    rating: 4.9,
    category: "Мыши",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 102,
    name: "SteelSeries Apex Pro TKL",
    description: "Механическая клавиатура с регулируемым актуатором",
    price: 16490,
    rating: 4.8,
    category: "Клавиатуры",
    imageUrl: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 103,
    name: "HyperX Cloud Alpha",
    description: "Игровая гарнитура с двухкамерными динамиками",
    price: 7990,
    rating: 4.7,
    category: "Наушники",
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60"
  }
];

export const PopularProducts = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Популярные товары</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
              </div>
              <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="mt-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-bold">{product.price} ₽</span>
              <button className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded hover:bg-primary/90 transition-colors">
                В корзину
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
