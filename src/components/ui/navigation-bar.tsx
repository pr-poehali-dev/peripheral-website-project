
import { Link } from "react-router-dom";
import { Heart, User, ShoppingCart } from "lucide-react";

export const NavigationBar = () => {
  return (
    <nav className="bg-primary px-4 py-3 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary-foreground">ПериферияПро</Link>
        
        <div className="flex space-x-6">
          <Link to="/" className="text-primary-foreground hover:text-gray-200 transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="text-primary-foreground hover:text-gray-200 transition-colors">
            Каталог
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/favorites" className="text-primary-foreground hover:text-gray-200 transition-colors">
            <Heart size={20} />
          </Link>
          <Link to="/profile" className="text-primary-foreground hover:text-gray-200 transition-colors">
            <User size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
