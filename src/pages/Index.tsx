import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const serverBuilds = [
    {
      id: 1,
      title: "Survival Plus",
      description: "Расширенная сборка для выживания с уникальными плагинами",
      price: "2,500 ₽",
      features: [
        "50+ плагинов",
        "Кастомные предметы",
        "Экономика",
        "Защита регионов",
      ],
      image: "/img/5cbd5597-c9c4-4118-b1ed-d5807d5f73e1.jpg",
      popular: true,
    },
    {
      id: 2,
      title: "PvP Arena",
      description: "Боевая сборка для PvP с арен и турнирами",
      price: "3,200 ₽",
      features: ["Арены", "Турниры", "Кастомное оружие", "Статистика"],
      image: "/img/6f09e5b3-7ea6-40e5-ab77-dee467108763.jpg",
      popular: false,
    },
    {
      id: 3,
      title: "Creative World",
      description: "Творческий мир с инструментами для строительства",
      price: "1,800 ₽",
      features: ["WorldEdit", "Plots", "Кастомные блоки", "Сохранения"],
      image: "/img/0e08cd0d-cbe4-4afe-87e0-961a6f5617ce.jpg",
      popular: false,
    },
  ];

  const demoServers = [
    {
      name: "Survival Demo",
      ip: "demo1.minecraft-builds.ru",
      players: "24/100",
      status: "online",
      ping: "15ms",
    },
    {
      name: "PvP Demo",
      ip: "demo2.minecraft-builds.ru",
      players: "18/50",
      status: "online",
      ping: "12ms",
    },
    {
      name: "Creative Demo",
      ip: "demo3.minecraft-builds.ru",
      players: "8/30",
      status: "online",
      ping: "18ms",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-minecraft-green rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-dark-bg" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-minecraft-green">
                MineCraft Builds
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#catalog"
                className="hover:text-minecraft-green transition-colors"
              >
                Каталог
              </a>
              <a
                href="#demo"
                className="hover:text-minecraft-green transition-colors"
              >
                Демо
              </a>
              <a
                href="#instructions"
                className="hover:text-minecraft-green transition-colors"
              >
                Инструкции
              </a>
              <a
                href="#contact"
                className="hover:text-minecraft-green transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-minecraft-green hover:bg-minecraft-green/90 text-dark-bg font-medium">
              Заказать сборку
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-minecraft-green to-minecraft-orange bg-clip-text text-transparent">
              Профессиональные сборки серверов Minecraft
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Готовые сборки с плагинами, настройка под заказ, техническая
              поддержка и система лицензий для вашего идеального сервера
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-minecraft-green hover:bg-minecraft-green/90 text-dark-bg font-medium"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать сборку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-dark-bg"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Попробовать демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "Package",
                title: "Готовые сборки",
                description: "Протестированные сборки с плагинами",
              },
              {
                icon: "Settings",
                title: "Настройка под заказ",
                description: "Индивидуальная настройка и консультация",
              },
              {
                icon: "Shield",
                title: "Техподдержка",
                description: "Поддержка и регулярные обновления",
              },
              {
                icon: "Key",
                title: "Система лицензий",
                description: "Защищенная система активации",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-700 border-gray-600 hover:border-minecraft-green/50 transition-colors"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-minecraft-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-minecraft-green"
                    />
                  </div>
                  <CardTitle className="text-minecraft-green">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-minecraft-green mb-4">
              Каталог сборок
            </h3>
            <p className="text-xl text-gray-300">
              Выберите готовую сборку или закажите индивидуальную
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serverBuilds.map((build) => (
              <Card
                key={build.id}
                className="bg-gray-800 border-gray-700 hover:border-minecraft-green/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={build.image}
                    alt={build.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {build.popular && (
                    <Badge className="absolute top-4 right-4 bg-minecraft-orange text-dark-bg">
                      Популярно
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-minecraft-green">
                    {build.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {build.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {build.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-minecraft-green/50 text-minecraft-green"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-bold text-minecraft-green">
                        {build.price}
                      </span>
                      <Button className="bg-minecraft-green hover:bg-minecraft-green/90 text-dark-bg">
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Servers */}
      <section id="demo" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-minecraft-green mb-4">
              Демо-серверы
            </h3>
            <p className="text-xl text-gray-300">
              Попробуйте наши сборки в действии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {demoServers.map((server, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-minecraft-green">
                      {server.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-minecraft-green rounded-full animate-pulse"></div>
                      <span className="text-sm text-minecraft-green">
                        Online
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">IP:</span>
                      <code className="text-minecraft-green bg-gray-800 px-2 py-1 rounded text-sm">
                        {server.ip}
                      </code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Игроки:</span>
                      <span className="text-minecraft-green">
                        {server.players}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Пинг:</span>
                      <span className="text-minecraft-green">
                        {server.ping}
                      </span>
                    </div>
                    <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/90 text-dark-bg">
                      Подключиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section id="instructions" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-minecraft-green mb-4">
              Инструкции
            </h3>
            <p className="text-xl text-gray-300">
              Все что нужно знать для запуска сервера
            </p>
          </div>

          <Tabs defaultValue="installation" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800 border-gray-700">
              <TabsTrigger
                value="installation"
                className="data-[state=active]:bg-minecraft-green data-[state=active]:text-dark-bg"
              >
                Установка
              </TabsTrigger>
              <TabsTrigger
                value="configuration"
                className="data-[state=active]:bg-minecraft-green data-[state=active]:text-dark-bg"
              >
                Настройка
              </TabsTrigger>
              <TabsTrigger
                value="plugins"
                className="data-[state=active]:bg-minecraft-green data-[state=active]:text-dark-bg"
              >
                Плагины
              </TabsTrigger>
              <TabsTrigger
                value="support"
                className="data-[state=active]:bg-minecraft-green data-[state=active]:text-dark-bg"
              >
                Поддержка
              </TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="mt-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-minecraft-green">
                    Установка сборки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-minecraft-green rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">
                        1
                      </div>
                      <p className="text-gray-300">Скачайте архив с сборкой</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-minecraft-green rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">
                        2
                      </div>
                      <p className="text-gray-300">
                        Распакуйте файлы на сервер
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-minecraft-green rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">
                        3
                      </div>
                      <p className="text-gray-300">
                        Запустите start.bat или start.sh
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="configuration" className="mt-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-minecraft-green">
                    Настройка сервера
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Подробные инструкции по настройке server.properties,
                    плагинов и разрешений.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="plugins" className="mt-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-minecraft-green">
                    Управление плагинами
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Как добавлять, удалять и настраивать плагины в вашей сборке.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="mt-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-minecraft-green">
                    Техническая поддержка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Способы получения помощи и решение частых проблем.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-minecraft-green mb-4">
              Связаться с нами
            </h3>
            <p className="text-xl text-gray-300">
              Закажите индивидуальную сборку или получите консультацию
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h4 className="text-2xl font-heading font-semibold text-minecraft-green mb-6">
                Форма заказа
              </h4>
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Textarea
                  placeholder="Опишите какая сборка вам нужна"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-32"
                />
                <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/90 text-dark-bg">
                  Отправить заказ
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-heading font-semibold text-minecraft-green mb-6">
                Контактная информация
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="Mail"
                    size={20}
                    className="text-minecraft-green"
                  />
                  <span className="text-gray-300">
                    support@minecraft-builds.ru
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-minecraft-green"
                  />
                  <span className="text-gray-300">
                    Telegram: @minecraft_builds
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-minecraft-green"
                  />
                  <span className="text-gray-300">Поддержка: 24/7</span>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="text-lg font-heading font-semibold text-minecraft-green mb-4">
                  Способы оплаты
                </h5>
                <div className="grid grid-cols-3 gap-4">
                  {["CreditCard", "Smartphone", "Globe"].map((icon, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 p-4 rounded-lg text-center"
                    >
                      <Icon
                        name={icon}
                        size={24}
                        className="text-minecraft-green mx-auto mb-2"
                      />
                      <span className="text-sm text-gray-300">
                        {icon === "CreditCard"
                          ? "Карты"
                          : icon === "Smartphone"
                            ? "СБП"
                            : "Криптовалюта"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-minecraft-green rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-dark-bg" />
              </div>
              <span className="text-xl font-heading font-bold text-minecraft-green">
                MineCraft Builds
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 MineCraft Builds. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
