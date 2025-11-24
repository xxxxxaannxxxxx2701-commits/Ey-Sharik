<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Эй, Шарик! - Зоомагазин</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        :root {
            --primary: #9C27B0;
            --primary-dark: #7B1FA2;
            --secondary: #E91E63;
            --accent: #FF4081;
            --light: #f9f9f9;
            --dark: #333;
            --gray: #777;
            --light-purple: #F3E5F5;
        }
        
        body {
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            padding: 15px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 28px;
            font-weight: bold;
            display: flex;
            align-items: center;
        }
        
        .logo i {
            margin-right: 10px;
            font-size: 32px;
        }
        
        nav ul {
            display: flex;
            list-style: none;
        }
        
        nav ul li {
            margin-left: 20px;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            padding: 8px 15px;
            border-radius: 4px;
            transition: background-color 0.3s;
            display: flex;
            align-items: center;
        }
        
        nav ul li a i {
            margin-right: 5px;
        }
        
        nav ul li a:hover, nav ul li a.active {
            background-color: rgba(255,255,255,0.2);
        }
        
        .cart-count {
            background-color: var(--accent);
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            margin-left: 5px;
        }
        
        /* Main Content Styles */
        main {
            padding: 30px 0;
            min-height: calc(100vh - 160px);
        }
        
        .page {
            display: none;
            animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .page.active {
            display: block;
        }
        
        h1 {
            margin-bottom: 20px;
            color: var(--primary-dark);
            text-align: center;
            font-size: 2.5rem;
        }
        
        h2 {
            margin: 30px 0 15px;
            color: var(--dark);
            border-bottom: 2px solid var(--primary);
            padding-bottom: 5px;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(156, 39, 176, 0.8), rgba(123, 31, 162, 0.8)), url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 80px 20px;
            border-radius: 10px;
            margin-bottom: 40px;
        }
        
        .hero h1 {
            color: white;
            font-size: 3rem;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
        }
        
        .btn {
            display: inline-block;
            background-color: var(--secondary);
            color: white;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s, transform 0.3s;
        }
        
        .btn:hover {
            background-color: #C2185B;
            transform: translateY(-3px);
        }
        
        /* Product Grid */
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
            margin-top: 20px;
        }
        
        .product-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .product-info {
            padding: 20px;
        }
        
        .product-name {
            font-weight: bold;
            font-size: 1.2rem;
            margin-bottom: 10px;
            color: var(--primary-dark);
        }
        
        .product-price {
            color: var(--accent);
            font-weight: bold;
            font-size: 1.3rem;
            margin-bottom: 10px;
        }
        
        .product-description {
            font-size: 14px;
            color: var(--gray);
            margin-bottom: 15px;
            height: 60px;
            overflow: hidden;
        }
        
        .add-to-cart {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            font-weight: bold;
            transition: background-color 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .add-to-cart i {
            margin-right: 8px;
        }
        
        .add-to-cart:hover {
            background-color: var(--primary-dark);
        }
        
        /* Category Section */
        .categories {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 40px 0;
        }
        
        .category {
            flex: 0 0 23%;
            text-align: center;
            margin-bottom: 20px;
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s;
            cursor: pointer;
        }
        
        .category:hover {
            transform: translateY(-5px);
            background-color: var(--light-purple);
        }
        
        .category.active {
            background-color: var(--light-purple);
            border: 2px solid var(--primary);
        }
        
        .category i {
            font-size: 50px;
            margin-bottom: 15px;
            color: var(--primary);
        }
        
        .category h3 {
            color: var(--primary-dark);
        }
        
        /* Category Filter */
        .category-filter {
            display: flex;
            justify-content: center;
            margin: 30px 0;
            flex-wrap: wrap;
        }
        
        .filter-btn {
            background: white;
            border: 2px solid var(--primary);
            color: var(--primary);
            padding: 10px 20px;
            margin: 5px 10px;
            border-radius: 30px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
        }
        
        .filter-btn:hover, .filter-btn.active {
            background: var(--primary);
            color: white;
        }
        
        /* Footer Styles */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 40px 0 20px;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .footer-section {
            flex: 1;
            min-width: 250px;
            margin-bottom: 20px;
        }
        
        .footer-logo {
            font-size: 24px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .footer-logo i {
            margin-right: 10px;
            font-size: 28px;
        }
        
        .footer-links a {
            display: block;
            color: #ddd;
            margin-bottom: 10px;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: var(--primary);
        }
        
        .social-icons {
            display: flex;
            margin-top: 15px;
        }
        
        .social-icons a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background-color: rgba(255,255,255,0.1);
            border-radius: 50%;
            margin-right: 10px;
            color: white;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        
        .social-icons a:hover {
            background-color: var(--primary);
        }
        
        .copyright {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #555;
            font-size: 14px;
            color: #ccc;
        }
        
        /* Cart Styles */
        .cart-items {
            margin-top: 20px;
        }
        
        .cart-item {
            display: flex;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            align-items: center;
        }
        
        .cart-item-image {
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-right: 20px;
            border-radius: 8px;
        }
        
        .cart-item-details {
            flex-grow: 1;
        }
        
        .cart-item-name {
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 1.1rem;
        }
        
        .cart-item-price {
            color: var(--accent);
            font-weight: bold;
        }
        
        .cart-item-quantity {
            display: flex;
            align-items: center;
        }
        
        .quantity-btn {
            background-color: #f0f0f0;
            border: none;
            width: 35px;
            height: 35px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .quantity-input {
            width: 50px;
            text-align: center;
            margin: 0 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 8px;
            font-weight: bold;
        }
        
        .remove-item {
            background-color: #f44336;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 15px;
        }
        
        .cart-total {
            margin-top: 30px;
            text-align: right;
            font-size: 1.5rem;
            font-weight: bold;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        
        .checkout-btn {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
            font-size: 1.1rem;
            font-weight: bold;
            width: 100%;
            transition: background-color 0.3s;
        }
        
        .checkout-btn:hover {
            background-color: var(--primary-dark);
        }
        
        /* Contact Form */
        .contact-form {
            max-width: 700px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: var(--primary-dark);
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .form-group textarea {
            height: 150px;
            resize: vertical;
        }
        
        .submit-btn {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: bold;
            width: 100%;
            transition: background-color 0.3s;
        }
        
        .submit-btn:hover {
            background-color: var(--primary-dark);
        }
        
        /* About Page */
        .about-content {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            line-height: 1.8;
        }
        
        .about-content p {
            margin-bottom: 20px;
        }
        
        .team {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 40px;
        }
        
        .team-member {
            flex: 0 0 30%;
            text-align: center;
            margin-bottom: 30px;
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .team-member i {
            font-size: 60px;
            color: var(--primary);
            margin-bottom: 15px;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                text-align: center;
            }
            
            nav ul {
                margin-top: 15px;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            nav ul li {
                margin: 5px 10px;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
            
            .category {
                flex: 0 0 48%;
            }
            
            .cart-item {
                flex-direction: column;
                text-align: center;
            }
            
            .cart-item-image {
                margin-right: 0;
                margin-bottom: 15px;
            }
            
            .cart-item-quantity {
                margin-top: 15px;
            }
            
            .team-member {
                flex: 0 0 100%;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-dog"></i>
                    Эй, Шарик!
                </div>
                <nav>
                    <ul>
                        <li><a href="#" class="nav-link active" data-page="home"><i class="fas fa-home"></i> Главная</a></li>
                        <li><a href="#" class="nav-link" data-page="products"><i class="fas fa-shopping-bag"></i> Товары</a></li>
                        <li><a href="#" class="nav-link" data-page="cart"><i class="fas fa-shopping-cart"></i> Корзина <span class="cart-count">0</span></a></li>
                        <li><a href="#" class="nav-link" data-page="about"><i class="fas fa-info-circle"></i> О нас</a></li>
                        <li><a href="#" class="nav-link" data-page="contact"><i class="fas fa-envelope"></i> Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    
    <main>
        <div class="container">
            <!-- Главная страница -->
            <div id="home" class="page active">
                <div class="hero">
                    <h1>Эй, Шарик!</h1>
                    <p>Всё для ваших пушистых, пернатых и хвостатых друзей! Корма, игрушки, аксессуары и забота от всей души.</p>
                    <a href="#" class="btn nav-link" data-page="products">Перейти к покупкам</a>
                </div>
                
                <h2>Категории товаров</h2>
                <div class="categories">
                    <div class="category" data-category="cats">
                        <i class="fas fa-cat"></i>
                        <h3>Для кошек</h3>
                        <p>Корм, лотки, игрушки</p>
                    </div>
                    <div class="category" data-category="dogs">
                        <i class="fas fa-dog"></i>
                        <h3>Для собак</h3>
                        <p>Корм, поводки, миски</p>
                    </div>
                    <div class="category" data-category="birds">
                        <i class="fas fa-kiwi-bird"></i>
                        <h3>Для птиц</h3>
                        <p>Клетки, корм, игрушки</p>
                    </div>
                    <div class="category" data-category="fish">
                        <i class="fas fa-fish"></i>
                        <h3>Для рыбок</h3>
                        <p>Аквариумы, корм, декор</p>
                    </div>
                </div>
                
                <h2>Популярные товары</h2>
                <div class="products-grid" id="home-products">
                    <!-- Товары будут добавлены через JavaScript -->
                </div>
            </div>
            
            <!-- Страница товаров -->
            <div id="products" class="page">
                <h1>Все товары</h1>
                
                <div class="category-filter">
                    <button class="filter-btn active" data-category="all">Все товары</button>
                    <button class="filter-btn" data-category="cats">Для кошек</button>
                    <button class="filter-btn" data-category="dogs">Для собак</button>
                    <button class="filter-btn" data-category="birds">Для птиц</button>
                    <button class="filter-btn" data-category="fish">Для рыбок</button>
                    <button class="filter-btn" data-category="rodents">Для грызунов</button>
                </div>
                
                <div class="products-grid" id="all-products">
                    <!-- Товары будут добавлены через JavaScript -->
                </div>
            </div>
            
            <!-- Корзина -->
            <div id="cart" class="page">
                <h1>Корзина</h1>
                <div class="cart-items" id="cart-items-container">
                    <!-- Товары в корзине будут добавлены через JavaScript -->
                </div>
                <div class="cart-total">
                    Итого: <span id="total-price">0</span> руб.
                </div>
                <button class="checkout-btn">Оформить заказ</button>
            </div>
            
            <!-- О нас -->
            <div id="about" class="page">
                <h1>О нашем зоомагазине</h1>
                <div class="about-content">
                    <p>Зоомагазин "Эй, Шарик!" был основан в 2025 году с целью предоставления качественных товаров для домашних животных по доступным ценам. Мы понимаем, что питомцы - это полноценные члены семьи, и они заслуживают самого лучшего.</p>
                    <p>Мы гордимся тем, что предлагаем широкий ассортимент продукции для кошек, собак, грызунов, птиц и других домашних питомцев. Все наши товары проходят тщательный отбор и соответствуют высоким стандартам качества.</p>
                    <p>Наша команда состоит из опытных ветеринаров и зоотехников, которые всегда готовы проконсультировать вас по вопросам ухода за вашими любимцами. Мы регулярно проводим обучающие семинары и мероприятия для владельцев животных.</p>
                    <p>Мы постоянно расширяем ассортимент и следим за новинками на рынке товаров для животных. Наша цель - сделать покупки удобными и приятными для вас и ваших питомцев.</p>

                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Контакты -->
            <div id="contact" class="page">
                <h1>Контакты</h1>
                <div class="contact-form">
                    <div class="form-group">
                        <label for="name">Ваше имя</label>
                        <input type="text" id="name" placeholder="Введите ваше имя">
                    </div>
                    <div class="form-group">
                        <label for="email">Ваш email</label>
                        <input type="email" id="email" placeholder="Введите ваш email">
                    </div>
                    <div class="form-group">
                        <label for="subject">Тема</label>
                        <select id="subject">
                            <option value="">Выберите тему</option>
                            <option value="question">Вопрос о товаре</option>
                            <option value="delivery">Доставка</option>
                            <option value="return">Возврат</option>
                            <option value="other">Другое</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Сообщение</label>
                        <textarea id="message" placeholder="Введите ваше сообщение"></textarea>
                    </div>
                    <button class="submit-btn">Отправить</button>
                </div>
                <div style="margin-top: 40px; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <h2>Наши контакты</h2>
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; margin-top: 20px;">
                        <div style="flex: 0 0 48%; margin-bottom: 20px;">
                            <p><i class="fas fa-map-marker-alt" style="color: var(--primary); margin-right: 10px;"></i> <strong>Адрес:</strong> г. Москва, ул. Пушкинская, д. 15</p>
                            <p><i class="fas fa-phone" style="color: var(--primary); margin-right: 10px;"></i> <strong>Телефон:</strong> +7 (999) 502-14-18</p>
                        </div>
                        <div style="flex: 0 0 48%; margin-bottom: 20px;">
                            <p><i class="fas fa-envelope" style="color: var(--primary); margin-right: 10px;"></i> <strong>Email:</strong> info@eysharik.ru</p>
                            <p><i class="fas fa-clock" style="color: var(--primary); margin-right: 10px;"></i> <strong>Режим работы:</strong> Пн-Вс: 9:00-21:00</p>
                        </div>
                    </div>
                    <div id="map" style="height: 300px; background: #eee; border-radius: 10px; margin-top: 20px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                        <i class="fas fa-map" style="font-size: 50px; color: var(--gray); margin-bottom: 15px;"></i>
                        <p>Интерактивная карта</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <i class="fas fa-dog"></i>
                        Эй, Шарик!
                    </div>
                    <p>Лучший зоомагазин для ваших питомцев. Широкий ассортимент, качественные товары и доступные цены.</p>
                </div>
                <div class="footer-section">
                    <h3>Категории</h3>
                    <div class="footer-links">
                        <a href="#" class="nav-link" data-page="products"><i class="fas fa-cat"></i> Для кошек</a>
                        <a href="#" class="nav-link" data-page="products"><i class="fas fa-dog"></i> Для собак</a>
                        <a href="#" class="nav-link" data-page="products"><i class="fas fa-kiwi-bird"></i> Для птиц</a>
                        <a href="#" class="nav-link" data-page="products"><i class="fas fa-fish"></i> Для рыбок</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Полезные ссылки</h3>
                    <div class="footer-links">
                        <a href="#" class="nav-link" data-page="home"><i class="fas fa-home"></i> Главная</a>
                        <a href="#" class="nav-link" data-page="about"><i class="fas fa-info-circle"></i> О нас</a>
                        <a href="#" class="nav-link" data-page="contact"><i class="fas fa-envelope"></i> Контакты</a>
                        <a href="#"><i class="fas fa-shipping-fast"></i> Доставка и оплата</a>
                        <a href="#"><i class="fas fa-undo"></i> Возврат товара</a>
                    </div>
                </div>
            </div>
            <div class="copyright">
                &copy; 2025 Зоомагазин "Эй, Шарик!". Все права защищены.
            </div>
        </div>
    </footer>
    
    <script>
        // Данные товаров
        const products = [
            {
                id: 1,
                name: "Сухой корм для кошек Premium SIRIUS 1,5кг",
                price: 1155,
                description: "Сбалансированный корм для взрослых кошек с лососем и рисом",
                image: "https://avatars.mds.yandex.net/get-mpic/11520282/2a000001954e96a1ab72b06284408b5e7485/orig",
                category: "cats"
            },
            {
                id: 2,
                name: "Сухой корм для собак Дарлинг",
                price: 1652,
                description: "Питательный корм для взрослых собак всех пород, с птицей и овощами, 2кг. ",
                image: "https://avatars.mds.yandex.net/get-mpic/1853752/2a0000018b1749316f0ff8f46c168db2c78a/orig",
                category: "dogs"
            },
            {
                id: 3,
                name: "Аквариум 50л с подсветкой",
                price: 8800,
                description: "Стеклянный аквариум с LED-подсветкой и крышкой",
                image: "https://i.pinimg.com/736x/5b/25/9d/5b259d7ea1a31b827b30a40be88ffd35--aquarium-design-aquarium-ideas.jpg",
                category: "fish"
            },
            {
                id: 4,
                name: "Когтеточка для кошек с домиком",
                price: 2799,
                description: "Многоуровневая когтеточка с мягкими домиками",
                image: "https://avatars.mds.yandex.net/i?id=4a12f09ffc7e6f6fa2ad7083e262cdf0_l-12480668-images-thumbs&n=13",
                category: "cats"
            },
            {
                id: 5,
                name: "Поводок-рулетка для собак",
                price: 299,
                description: "Прочный поводок с удобной ручкой",
                image: "https://avatars.mds.yandex.net/i?id=eca8a557b79c843afc7efb103a1f20a9_l-9842162-images-thumbs&n=13",
                category: "dogs"
            },
            {
                id: 6,
                name: "Беговое колесо для грызунов",
                price: 300,
                description: "Беговое колесо для хомяков и мышей, диаметр 20см",
                image: "https://avatars.mds.yandex.net/i?id=a02aea5055285edeacfc24c0c569bf76_l-9227066-images-thumbs&n=13",
                category: "rodents"
            },
            {
                id: 7,
                name: "Клетка для птиц с жердочками",
                price: 4200,
                description: "Просторная клетка для попугаев и других птиц с аксессуарами",
                image: "https://avatars.mds.yandex.net/get-mpic/16294320/2a00000197355be91c5f7e3268e099188a86/optimize",
                category: "birds"
            },
            {
                id: 8,
                name: "Лакомства для собак TiTBiT",
                price: 450,
                description: "Вкусные мясный косточки для собак с бараниной",
                image: "https://ir.ozone.ru/s3/multimedia-n/6175952255.jpg",
                category: "dogs"
            },
            {
                id: 9,
                name: "Наполнитель для кошачьего туалета Счастливые лапки",
                price: 600,
                description: "Древесный наполнитель, 8л, с нейтрализатором запаха",
                image: "https://cdn1.ozone.ru/s3/multimedia-w/6305773916.jpg",
                category: "cats"
            },
            {
                id: 10,
                name: "Шампунь для собак гипоаллергенный, 270мл",
                price: 281,
                description: "Гипоаллергенный шампунь для чувствительной кожи",
                image: "https://ir.ozone.ru/s3/multimedia-v/c600/6108346783.jpg",
                category: "dogs"
            },
            {
                id: 11,
                name: "Набор мисок для корма",
                price: 350,
                description: "Керамические миски, 2 шт., одинакового размера",
                image: "https://avatars.mds.yandex.net/get-mpic/3916156/img_id8311871478860166383.jpeg/orig",
                category: "dogs"
            },
            {
                id: 12,
                name: "Лежанка для кошек с бортиками",
                price: 1300,
                description: "Мягкая лежанка с высокими бортиками",
                image: "https://m.media-amazon.com/images/I/51rMOap5MHL._AC_UL960_QL65_.jpg",
                category: "cats"
            },
            {
                id: 13,
                name: "Игрушка для кошек с кошачьей мятой",
                price: 259,
                description: "Мягкая игрушка с кошачьей мятой для активных игр",
                image: "https://avatars.mds.yandex.net/i?id=0424591e33f466d9cd93b3681d2cfce2_sr-15260219-images-thumbs&n=13",
                category: "cats"
            },
            {
                id: 14,
                name: "Ошейник для собак с GPS-трекером",
                price: 3200,
                description: "Умный ошейник с GPS-трекером и мониторингом активности, красной и чёрной расцветкой",
                image: "https://avatars.mds.yandex.net/i?id=9236773ac4c2ed6cc07578b466b03ad3_l-10137006-images-thumbs&n=13",
                category: "dogs"
            },
            {
                id: 15,
                name: "Корм для попугаев Premium MIX",
                price: 550,
                description: "Сбалансированный корм для попугаев с фруктами и орехами",
                image: "https://zoomag.ru/images/thumbnails/715/500/detailed/9524/fd4be4d0a2f217083f084a504a0e58bb.jpg",
                category: "birds"
            },
            {
                id: 16,
                name: "Фильтр для аквариума",
                price: 1350,
                description: "Внутренний фильтр для аквариумов до 80-100 литров",
                image: "https://avatars.mds.yandex.net/get-mpic/12025833/2a0000018cab26ebe6d15c22eea50a4caca8/optimize",
                category: "fish"
            },
            {
                id: 17,
                name: "Кормушка-поилка HAMTARO для хомяка",
                price: 450,
                description: "3в1 кормушка, поилка, и место где можно передохнуть",
                image: "https://avatars.mds.yandex.net/get-mpic/5236108/2a00000193a3e0fe57be38f156ef6197f135/orig",
                category: "rodents"
            },
            {
                id: 18,
                name: "Клетка для грызунов",
                price: 1099,
                description: "Вместительная клетка для всех видов грызунов",
                image: "https://avatars.mds.yandex.net/get-mpic/7721414/img_id4530328061068952997.jpeg/orig",
                category: "rodents"
            }
        ];

        // Корзина
        let cart = [];
        let currentCategory = 'all';

        // Функция для отображения товаров
        function displayProducts(container, productList) {
            container.innerHTML = '';
            
            // Фильтрация товаров по категории
            let filteredProducts = productList;
            if (currentCategory !== 'all') {
                filteredProducts = productList.filter(product => product.category === currentCategory);
            }
            
            if (filteredProducts.length === 0) {
                container.innerHTML = '<p style="text-align: center; padding: 30px; grid-column: 1 / -1;">Товары в этой категории временно отсутствуют</p>';
                return;
            }
            
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${product.price} руб.</div>
                        <div class="product-description">${product.description}</div>
                        <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i> Добавить в корзину</button>
                    </div>
                `;
                container.appendChild(productCard);
            });
            
            // Добавляем обработчики событий для кнопок "Добавить в корзину"
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Функция для добавления товара в корзину
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCartDisplay();
            updateCartCount();
            alert(`Товар "${product.name}" добавлен в корзину!`);
        }

        // Функция для обновления отображения корзины
        function updateCartDisplay() {
            const cartItemsContainer = document.getElementById('cart-items-container');
            const totalPriceElement = document.getElementById('total-price');
            
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 30px;">Ваша корзина пуста</p>';
                totalPriceElement.textContent = '0';
                return;
            }
            
            let totalPrice = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                totalPrice += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price} руб. x ${item.quantity} = ${itemTotal} руб.</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">Удалить</button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
            
            totalPriceElement.textContent = totalPrice;
            
            // Добавляем обработчики событий для кнопок изменения количества
            document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    updateQuantity(productId, -1);
                });
            });
            
            document.querySelectorAll('.quantity-btn.increase').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    updateQuantity(productId, 1);
                });
            });
            
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    const newQuantity = parseInt(this.value);
                    setQuantity(productId, newQuantity);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }

        // Функция для обновления количества товара в корзине
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    cart = cart.filter(item => item.id !== productId);
                }
                updateCartDisplay();
                updateCartCount();
            }
        }

        // Функция для установки определенного количества товара
        function setQuantity(productId, quantity) {
            if (quantity <= 0) {
                cart = cart.filter(item => item.id !== productId);
            } else {
                const item = cart.find(item => item.id === productId);
                if (item) {
                    item.quantity = quantity;
                }
            }
            updateCartDisplay();
            updateCartCount();
        }

        // Функция для удаления товара из корзины
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartDisplay();
            updateCartCount();
        }

        // Функция для обновления счетчика корзины
        function updateCartCount() {
            const cartCount = document.querySelector('.cart-count');
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Функция для переключения между страницами
        function switchPage(pageId) {
            // Скрываем все страницы
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Показываем выбранную страницу
            document.getElementById(pageId).classList.add('active');
            
            // Обновляем активную ссылку в навигации
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.nav-link[data-page="${pageId}"]`).classList.add('active');
            
            // Если переходим на страницу товаров, обновляем отображение
            if (pageId === 'products') {
                const productsGrid = document.getElementById('all-products');
                displayProducts(productsGrid, products);
            }
            
            // Если переходим на главную, показываем только первые 6 товаров
            if (pageId === 'home') {
                const homeProductsGrid = document.getElementById('home-products');
                const featuredProducts = products.slice(0, 6);
                displayProducts(homeProductsGrid, featuredProducts);
            }
        }

        // Функция для фильтрации товаров по категории
        function filterProducts(category) {
            currentCategory = category;
            
            // Обновляем активную кнопку фильтра
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`.filter-btn[data-category="${category}"]`).classList.add('active');
            
            // Обновляем отображение товаров
            const productsGrid = document.getElementById('all-products');
            displayProducts(productsGrid, products);
        }

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            // Отображаем популярные товары на главной
            const homeProductsGrid = document.getElementById('home-products');
            const featuredProducts = products.slice(0, 6);
            displayProducts(homeProductsGrid, featuredProducts);
            
            // Добавляем обработчики событий для навигации
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageId = this.getAttribute('data-page');
                    switchPage(pageId);
                });
            });
            
            // Добавляем обработчики для категорий на главной странице
            document.querySelectorAll('.category').forEach(category => {
                category.addEventListener('click', function() {
                    const categoryType = this.getAttribute('data-category');
                    switchPage('products');
                    setTimeout(() => {
                        filterProducts(categoryType);
                    }, 100);
                });
            });
            
            // Добавляем обработчики для кнопок фильтрации
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    filterProducts(category);
                });
            });
            
            // Обработчик для кнопки оформления заказа
            document.querySelector('.checkout-btn').addEventListener('click', function() {
                if (cart.length === 0) {
                    alert('Корзина пуста!');
                } else {
                    alert('Заказ оформлен! Спасибо за покупку! Мы свяжемся с вами в ближайшее время для подтверждения заказа.');
                    cart = [];
                    updateCartDisplay();
                    updateCartCount();
                    switchPage('home');
                }
            });
            
            // Обработчик для формы контактов
            document.querySelector('.submit-btn').addEventListener('click', function() {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (name && email && subject && message) {
                    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('subject').value = '';
                    document.getElementById('message').value = '';
                } else {
                    alert('Пожалуйста, заполните все поля формы.');
                }
            });
        });
    </script>
</body>
</html>