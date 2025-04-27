
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Star, Copy, Check } from "lucide-react";
import { useState } from "react";
import NavigationBar from "@/components/ui/navigation-bar";

const Profile = () => {
  const [copied, setCopied] = useState(false);

  // Пример данных пользователя
  const user = {
    id: "USR-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
    name: "Иванов Иван Иванович",
    role: "Пользователь",
    rating: 4.7,
    photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    registrationDate: new Date(2023, 5, 12)
  };

  const copyId = () => {
    navigator.clipboard.writeText(user.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Создаем звездочки для рейтинга
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star className="h-5 w-5 text-yellow-400" />
          <Star className="absolute top-0 left-0 h-5 w-5 fill-yellow-400 text-yellow-400 overflow-hidden" style={{ clipPath: "inset(0 50% 0 0)" }} />
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Личный кабинет</h1>
        
        <div className="max-w-3xl mx-auto">
          <Card className="w-full shadow-lg">
            <CardHeader className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
              <Avatar className="h-28 w-28 border-4 border-white shadow-md">
                <AvatarImage src={user.photoUrl} alt={user.name} />
                <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="mt-4 sm:mt-0 text-center sm:text-left">
                <CardTitle className="text-2xl mb-1">{user.name}</CardTitle>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {user.role}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 cursor-pointer hover:bg-secondary/10 transition-colors" onClick={copyId}>
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    ID: {user.id}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-1">
                  Рейтинг: <span className="flex ml-1">{renderStars(user.rating)}</span>
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-medium mb-2">Дата регистрации</h3>
                  <p>{user.registrationDate.toLocaleDateString('ru-RU')}</p>
                </div>
                
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-medium mb-2">Последняя активность</h3>
                  <p>{new Date().toLocaleDateString('ru-RU')}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-4">Статистика</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-lg font-bold">0</p>
                    <p className="text-sm text-muted-foreground">Отзывов</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-lg font-bold">0</p>
                    <p className="text-sm text-muted-foreground">Заказов</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-lg font-bold">5</p>
                    <p className="text-sm text-muted-foreground">В избранном</p>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-center sm:justify-end border-t pt-6">
              <p className="text-sm text-muted-foreground">
                Уникальный идентификатор: <span className="font-mono">{user.id}</span>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
