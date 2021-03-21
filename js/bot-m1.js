// // задача 10

// function makeMessage(name, price) {
//     // Пиши код ниже этой строки
//     const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
//     // Пиши код выше этой строки
//     return message;
// }
// console.log(makeMessage ('Радар',6150));
// console.log(makeMessage ('Сканер',3500));
// console.log(makeMessage ('Реактор',8000));
// console.log(makeMessage ('Двигатель',4070));


// // задача 11

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Пиши код ниже этой строки
//   const totalPrice = orderedQuantity *  pricePerItem;

//   // Пиши код выше этой строки
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));
// console.log(calculateTotalPrice(5467,5));

// // задача 12

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Пиши код ниже этой строки

//  const message = `Вы заказали дроидов на сумму ${orderedQuantity *+ pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//   // Пиши код выше этой строки
//   return message;
// };
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// // задача 13

// function isAdult(age) {
//   // Пиши код ниже этой строки
//   const passed = age>=18;

//   // Пиши код выше этой строки
//   return passed;
// };

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// // задача 14

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
//   const isMatch = password === SAVED_PASSWORD;

//   // Пиши код выше этой строки
//   return isMatch;
// };
// console.log(isValidPassword('mangodab3st'));
// console.log(isValidPassword('kiwirul3z'));
// console.log(isValidPassword('jqueryismyjam'));

// // задача 15

// function checkAge(age) {
//   let message;

//   if (age>=18) { // Дополни эту строку
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// // задача 16

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if (ordered > available) {
// message = 'На складе недостаточно товаров!';
// }
//   else { 
//  message = 'Заказ оформлен, с вами свяжется менеджер';   
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// // задача 18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
// const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits){
//   message = 'Недостаточно средств на счету!'
//   }
//   else message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`
  
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// // задача 19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));



// // задача 20

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//   message = 'В заказе еще нет товаров';
//   }
//   else if (ordered > available) {
//   message = 'Слишком большой заказ, на складе недостаточно товаров!';
//   }
//   else {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
//   }
    
    
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// // задача 21

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; 

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// // задача 22

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent('pro'));
// console.log(checkIfCanAccessContent('starter'));
// console.log(checkIfCanAccessContent('vip'));
// console.log(checkIfCanAccessContent('free'));

// // задача 23

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;; // Дополни эту строку

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// // задача 24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
  
//   if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
//   }
//   else if (totalSpent >= 20000) {
//   discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 5000) {
//   discount = BRONZE_DISCOUNT;
//   }
//   else {
//   discount = BASE_DISCOUNT;
//   }
  
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// // задача 25

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//  message = ordered > available? 'На складе недостаточно товаров!': 'Заказ оформлен, с вами свяжется менеджер';
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// // задача 26

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Пиши код ниже этой строки
// message = password === ADMIN_PASSWORD? 'Доступ разрешен': 'Доступ запрещён, неверный пароль!';
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));

// // задача 27

// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case  'starter':// Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case  'professional':// Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case  'organization':// Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }

// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));

// // задача 28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//  switch (password) {
//   case null:
//    message = 'Отменено пользователем!';
//     break;

//   case ADMIN_PASSWORD:
//     message = 'Добро пожаловать!';
//     break;

//   default:
//     message = 'Доступ запрещён, неверный пароль!';
// }
//   return message;
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// // задача 29

// // Функция getShippingCost(country) должна проверять возможность доставки товара
// // в страну пользователя(параметр country) и возвращать сообщение о результате
// // хранящееся в переменной message.Обязательно используй инструкцию switch.

// // Формат возвращаемой строки Доставка в < страна > будет стоить < цена > кредитов,
// //     где вместо < страна > и < цена > необходимо подставить соотвествующие значения.

// // Список стран и стоимость доставки:

// // Китай - 100 кредитов
// // Чили - 250 кредитов
// // Австралия - 170 кредитов
// // Ямайка - 120 кредитов
// // Из списка видно, что доставка есть не везде.
// // Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

// function getShippingCost(country) {
//   let message;
//   let cost;
//   // Пиши код ниже этой строки
//     switch (country) {
//       case 'Китай':
//         cost = 100;
//         message = `Доставка в ${country} будет стоить ${cost} кредитов`
//         break;
      
//       case 'Чили':
//         cost = 250;
//         message = `Доставка в ${country} будет стоить ${cost} кредитов`
//         break;
      
//       case 'Австралия':
//         cost = 170;
//         message = `Доставка в ${country} будет стоить ${cost} кредитов`
//         break;
      
//       case 'Ямайка':
//         cost = 120;
//         message = `Доставка в ${country} будет стоить ${cost} кредитов`
//         break;
      
//       default:
//         message = 'Извините, в вашу страну доставки нет'

//      }

//   // Пиши код выше этой строки
//   return message;
// }
// console.log(getShippingCost('Китай'));
// console.log(getShippingCost('Таиланд'));

// // задача 30

// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

//   return message;
// }
// console.log(getNameLength('Poly'));
// console.log(getNameLength('Halyna'));

// // задача 31

// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Пиши код выше этой строки

// console.log(courseTopic[7]);
// console.log(courseTopic[courseTopic.length - 1]);

// // задача 32

// function getSubstring(string, length) {
//   const substring = string.slice (0,length) // Дополни эту строку

//   return substring;
// }

// console.log(getSubstring('Привет мир', 3));

// // задача 33

// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
// if (message.length <= maxLength) {
// result = message;
// }
//   else {result = message.slice(0, maxLength) + '...';}  
// // Пиши код выше этой строки
//   return result;
// }

// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));

// // задача 34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Дополни эту строку
//   return normalizedInput;
// }

// console.log(normalizeInput('Привет мир'));
// console.log(normalizeInput('Это НЕ СпаМ'));

// // задача 35

// function checkForName(fullName, name) {
//  const result = fullName.includes( name); // Дополни эту строку
//   return result;
// }

// console.log(checkForName('Егор Колбасов', 'Егор'));
// console.log(checkForName('Егор Колбасов', 'егор'));
// console.log(checkForName('Вадим Некрасов', 'Вадим'));

// задача 36

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')
//   // Пиши код выше этой строки
//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
