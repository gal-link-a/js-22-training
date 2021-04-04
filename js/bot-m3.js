
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

// // Замени объявления переменных 
// // highYesterday, highToday, highTomorrow и highIcon 
// // одной операцией деструктуризации свойств объекта 
// // highTemperatures. 
// // Задай значение по умолчанию для highIcon - 
// // строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {yesterday:highYesterday,
//        today:highToday,
//        tomorrow:highTomorrow,
//        icon:highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//       } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Задача 24--------------------------------------------

// // Выполнить рефакторинг цикла 

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// // for (const color of colors) {
// //   hexColors.push(color.hex);
// //   rgbColors.push(color.rgb);
// }

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// Задача 25--------------------------------------------

// Мы получили прогноз погоды на два дня,
// с минимальными и максимальными температурами,
// а также необязательными иконками.
// Замени объявления всех переменных одной операцией
// деструктуризации свойств объекта forecast.
// Задай значение по умолчанию для иконок,
// переменных todayIcon и tomorrowIcon -
// строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;


// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const {
//     today: {low: lowToday, high: highToday, icon:todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
//     tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}
// } = forecast;


// Задача 26--------------------------------------------

// Паттерн Объект настроек
// Функция calculateMeanTemperature(forecast)
// принимает один параметр forecast -
// объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных
// todayLow, todayHigh, tomorrowLow и tomorrowHigh
// одной операцией деструктуризации свойств объекта forecast.

// function calculateMeanTemperature(forecast) {
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;

//     const {
//     today:{low:todayLow, high:todayHigh},
//     tomorrow:{low:tomorrowLow, high:tomorrowHigh}  
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));


// Задача 27--------------------------------------------

// В переменной scores хранится массив результатов тестирования.
// Используя распыление и методы Math.max() и Math.min()
// дополни код так, чтобы в переменной bestScore был самый высокий балл,
// а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);



// Задача 28--------------------------------------------

// В переменных firstGroupScores, secondGroupScores и thirdGroupScores
// хранятся результаты тестирования отдельных групп.
// Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);



// Задача 29--------------------------------------------

// В конструкторе можно создавать новые тесты,
// для которых есть настройки по умолчанию которые хранятся
// в переменной defaultSettings.Во время создания теста,
// все или часть настроек можно переопределить,
// они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста,
// необходимо взять настройки по умолчанию и поверх них
// применить переопределённые настройки.
// Дополни код так, чтобы в переменной finalSettings
// получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings,...overrideSettings};



// Задача 30--------------------------------------------

// Напиши функцию makeTask(data) которая принимает один параметр data - 
// объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, 
// не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, 
// значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, 
// а остальные два, category и priority, могут отсутствовать.
// Тогда, в новом объекте задачи, в свойствах category и priority
// должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// const taskData = {

//     category,
//     priority,
//   completed,
//     ...data,
//   }
//   // Пиши код выше этой строки
// return taskData;

// }

// console.log(makeTask({}));
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));


// Задача 31--------------------------------------------

// Используя операцию rest дополни код функции add() так,
// чтобы она принимала любое количество аргументов,
// считала и возвращала их сумму.


// function add(...args) {
//     let totalPrice = 0;

//   for (const arg of args) {
//    totalPrice += arg;
//   }

//   return totalPrice;

// }

//   console.log(add(15,27));
//   console.log(add(12, 4, 11, 48));
//   console.log(add(74, 11, 62, 46, 12, 36));



// Задача 32-------------------------------------------- 

// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов,
// которые больше чем заданное число.
// Это число должно быть первым параметром функции.

// function addOverNum(number,...args) {
//     let total = 0;

//     for (const arg of args) {
//         if ( arg > number ){
//     total += arg;
//     }
// }

//   return total;
//   // Пиши код выше этой строки
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// Задача 33--------------------------------------------

// Задача.Массив совпадений
// Функция findMatches() принимает произвольное количество аргументов.
// Первым аргументом всегда будет массив чисел,
// а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches,
// в котором будут только те аргументы, начиная со второго,
// оторые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// должна вернуть массив[1, 2], потому
// что только они есть в массиве первого аргумента.

// Пиши код ниже этой строки
// function findMatches(firstArg, ...args) {
//   const matches = []; // Не изменяй эту строку
// for (const arg of args) {
// if (firstArg.includes(arg)){
// matches.push(arg);
// }
// }

//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));


// Задача 34--------------------------------------------

// Добавь объекту bookShelf ещё два метода, которые пока 
//что будут возвращать просто строки по аналогии с getBooks() 
//и addBook(bookName).
//Метод removeBook(bookName) будет удалять книгу по имени. 
//Возвращает строку 'Удаляем книгу <имя книги>', где < имя книги > 
//это значение параметра bookName.
//Метод updateBook(oldName, newName) будет обновлять название 
//книги на новое.Возвращает строку 'Обновляем книгу <старое имя> 
//на < новое имя > ', где < старое имя > и < новое имя > это 
//значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//   return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   }

//   // Пиши код выше этой строки
// };

// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));



// Задача 35-------------------------------------------

// Дополни метод updateBook(oldName, newName) так, чтобы он 
//изменял название книги с oldName на newName в свойстве books. 
//Используй indexOf() для того, чтобы найти нужный элемент массива, 
//и splice() для того чтобы заменить этот элемент.

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
	
// 	const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//      return this.books;
	
//     // Пиши код выше этой строки
//   },
// };


// bookShelf.updateBook('Мгла', 'Хроники подземелий');
// console.log(bookShelf.books);

// bookShelf.updateBook('Последнее королевство', 'Дюна');
// console.log(bookShelf.books);




// Задача 36--------------------------------------------

// К нам обратилась владелица лавки зелий «У старой жабы» и 
//заказала программу для ведения инвентаря - добавления, удаления, 
//поиска и обновления зелий.Добавь объекту atTheOldToad свойство 
//potions, значением которого сделай пустой массив.


// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };


// console.log(atTheOldToad);



// Задача 37--------------------------------------------

// Добавь объекту atTheOldToad метод getPotions(), который 
//просто возвращает значение свойства potions.

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions(){
//   return this.potions;
//   }
  
//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.getPotions());


// Задача 38-------------------------------------------

// Дополни метод addPotion(potionName) так, чтобы он 
//добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     return this.potions;
    
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.addPotion('Невидимка'));


// Задача 39--------------------------------------------

// Дополни метод removePotion(potionName) так, чтобы он удалял 
//зелье potionName из массива зелий в свойстве potions.

// 1. var
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     return this.potions
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));


// 2.var
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionName, 1);
//     return this.potions;

//   },
// };

// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));



// Задача 40--------------------------------------------

// Дополни метод updatePotionName(oldName, newName) так, 
//чтобы он обновлял название зелья с oldName на newName, в 
//массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//  const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//      return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));


// Задача 41--------------------------------------------

// Заказчица хочет чтобы каждое зелье было представлено не 
//только именем, но и ценой, а в будущем может быть и другими 
//характеристиками.Поэтому теперь в свойстве potions будет храниться 
//массив объектов со следующими свойствами.

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const { potions } = this;
    
    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (potionName === potion.name) {
        potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (oldName === potion.name) {
        potion.name = newName;
      }
    }
  }
};

// console.log(atTheOldToad.getPotions());
// // console.table(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// // console.log(atTheOldToad.removePotion('Зелье скорости'));
// // console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));




