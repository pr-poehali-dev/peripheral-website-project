
import NavigationBar from "@/components/ui/navigation-bar";
import NewProductsScrollList from "@/components/home/NewProductsAccordion";
import ExpertsScrollList from "@/components/home/ExpertsAccordion";
import PopularProducts from "@/components/home/PopularProducts";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavigationBar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">ПериферияПро</h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Всё для вашего комфорта и производительности
          </p>
          
          <NewProductsScrollList />
          <ExpertsScrollList />
          <PopularProducts />
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">ПериферияПро</h3>
              <p className="text-gray-400">© 2025 Все права защищены</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">О нас</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Контакты</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Доставка</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
