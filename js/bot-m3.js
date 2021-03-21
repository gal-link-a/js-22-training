
// // задача 1-------------

// const apartment = {
// imgUrl:'https://via.placeholder.com/640x480',
// descr:'Просторная квартира в центре',
// rating: 4,
// price: 2153,
// tags:['premium', 'promoted', 'top']  
// };


// // задача 2------------------

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner:{
//     name:'Генри',
//     phone:'982-126-1588',
//     email:'henry.carter@aptmail.com', 
//     },
// };
  

// // задача 3------------------------------------------------

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки



// // задача 4---------------------------------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки

// // задача 5-------------------------------------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

// // задача 6------------------------------------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');


// // задача 7-----------------------------------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
// country:'Ямайка',
//  city:'Кингстон', 
// }




// // задача 8----------------------------------------------

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
// name,
// price,
// image,
// tags 
// };

// console.log(product.name);
// console.log(product.tags);


// // задача 9--------------------------------------------

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = { 
//   [emailInputName]:'henry.carter@aptmail.com',
//   [passwordInputName]:'jqueryismyjam'
//   };

// console.log(credentials.email);
// console.log(credentials.password);


// // задача 10--------------------------------------------

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment){
// keys.push(key);
//  values.push(apartment[key]); 

// }

// console.log(keys);
// console.log(values);


// // задача 11----------------------------------------------

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//  }
//   // Пиши код выше этой строки
// }


// // задача 12-----------------------------------------------

// function countProps(object) {
//   let propCount = 0;

// for (const key in object) {
  
// if (object.hasOwnProperty(key)){
//  propCount+=1;
  
// }
// }

//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


// // задача 13--------------------------------------------------------

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key])
// }

// console.log(values);


// задача 14---------------------------------------------------

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
  
  
//     const keys = Object.keys(object);
//  for (const key of keys) {
  
//    propCount += 1;
  
// }


//   return propCount;
//   // Пиши код выше этой строки
// }

// console.log(countProps({}));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));




// задача 15--------------------------------------------------

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// задача 16--------------------------------------------------

// Напиши функцию countTotalSalary(salaries)
// которая принимает объект зарплат,
// где имя свойства это имя сотрудника,
// а значение свойства это зарплата.
// Функция должна рассчитать общую сумму
// зарплат сотрудников и вернуть её.
// Используй переменную totalSalary
// для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
  
//     const values = Object.values(salaries);
//     // получаем массив всех значений
//     console.log(values);
    
//     for (const value of values) {
//         totalSalary += value;
//     }
//     // перебираем значения и плюсуем их к тоталу 
  
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// задача 17--------------------------------------------------

// Перебери массив объектов colors
// используя цикл for...of.
// Добавь в массив hexColors значения свойств hex,
// а в массив rgbColors значения свойств rgb
// из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// // перебираем и добавляем цвета в пустые массивы

// console.log('HEX: ',hexColors);
// console.log('RGB: ',rgbColors );


// задача 18--------------------------------------------------

// Напиши функцию getProductPrice(productName)
// которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name)
// в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден,
// функция должна возвращать null.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
      
//       if (product.name === productName) {
         
//           return product.price;
//       }
//   }
  
//     return null;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Двигатель'));

// задача 19--------------------------------------------------

// Напиши функцию getAllPropValues(propName)
// которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства
// с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем,
// функция должна вернуть пустой массив.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const propValues = [];
//     for (const product of products) {
//         const keys = Object.keys(product);
//         for (const key of keys) {
//             if (key === propName) {
//                 propValues.push(product[propName]);
//             }
//         }
//     }
//     return propValues;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));


// задача 20--------------------------------------------------

// Общая стоимость товаров.

// Напиши функцию calculateTotalPrice(productName)
// которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара
// с таким именем из массива products.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
    
//     let totalPrice = 0;
    
//     for (const product of products)  {
//         // перебираю for ...of чтоб получить доступ к объектам

//         const values = Object.values(product);
//         // получаю массив значений product

//         if (values.includes(productName)) {
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;
// }

// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));


// Задача 21 ------------------------------

// Деструктуризация объектов

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow} =highTemperatures

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Задача 22--------------------------------------------
// Значание по умолчанию

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday,today,tomorrow,icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}= highTemperatures



// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// Задача 23--------------------------------------------


// Задача 24--------------------------------------------


// Задача 25--------------------------------------------


// Задача 26--------------------------------------------


// Задача 27--------------------------------------------


// Задача 28--------------------------------------------


// Задача 29--------------------------------------------


// Задача 30--------------------------------------------


// Задача 31--------------------------------------------


// Задача 32-------------------------------------------- 


