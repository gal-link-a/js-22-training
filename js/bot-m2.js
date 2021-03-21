// // задача 1 -------------------------------

// function checkAge(age) {
//   if (age >= 18) { // Дополни эту строку
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));


// // задача 2 ---------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
  
//    if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   }  

//   return 'Доступ запрещен, неверный пароль!';
  
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('jqueryismyjam'));



// // задача 3 ----------------------

// function checkStorage(available, ordered) {
 
//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } 
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } 

//   return 'Заказ оформлен, с вами свяжется менеджер';
  
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));


// // задача 4----------------------

// const fruits =['яблоко', 'слива', 'груша','апельсин'];



// // задача 5 ----------------------

// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// // задача 6 ----------------------------

// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки

// fruits[1] = 'персик';
// fruits[3] = 'банан';


// // задача 7-----------------------

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;

// console.table(fruits);

// console.log(fruitsArrayLength);

// // задача 8-----------------

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// // задача 9 --------------------------

// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
    
// const startElement = array[0];
// const endElement = array [array.length-1]
//   return [startElement, endElement];

//     // Пиши код выше этой строки
// }
  
// console.log(getExtremeElements([1,2,3,4,5,6,7]));
// console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));
// console.log(getExtremeElements(['Марс', 'Венера', 'Земля']));


// // задача 10 ---------------------------------

// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
  
//   words = message.split(delimeter); 
  
//   // Пиши код выше этой строки
//   return words;
// }

// console.log(splitMessage('Манго спешит на поезд', ' '))

// // задача 11 -------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки

//  let inscript = message.split(' ');
//   let longAllWords = inscript.length;
//   let total = longAllWords * pricePerWord;
  
// return total ;
  
//   // Пиши код выше этой строки
// }

// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));

// // задача  12-------------------------------

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
 
//  string = array.join(delimeter);
 
//   // Пиши код выше этой строки
//   return string;
// }

// console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
// console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_'));


// // задача 13-----------------------------------

// function slugify(title) {
//   // Пиши код ниже этой строки
//     const wordSlug = title.toLowerCase().split(' ').join('-');
//     return wordSlug;
//    // Пиши код выше этой строки
// }
// console.log(slugify('Массивы для новичков'));
// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));

// // задача 14----------------------------------------

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1) ;
// const lastThreeEls = fruits.slice(-3);


// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// // задача 15---------------------------

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

// console.log(allClients);

// // задача 16 ---------------------------

// function makeArray(firstArray, secondArray, maxLength) { 

//     let newArray = firstArray.concat(secondArray);
//     if (newArray >= maxLength) {
//       return  newArray;
//         }
    
//   return newArray.slice(0, maxLength);
// }

// console.log( makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));

// // задача 17--------------------------

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }

// // задача 18------------------------

// function calculateTotal(number) {
//   // Пиши код ниже этой строки

// let sum =0
// for (i=0; i<=number; i+=1){
// sum += i;
// }
// return sum; 
//   // Пиши код выше этой строки
// }

// console.log(calculateTotal(24));

// // задача 19-------------------------

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i+=1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// // задача 20 --------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// for( let i = 0; i < order.length; i += 1){
//   total += order[i];}
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



// // задача 21-----------------------

// function findLongestWord(string) {
  
//     const words = string.split(' ');
    
//     let LongestWord = words[0];

//     for (let word of words) {
//         if (word.length > LongestWord.length) {
//             LongestWord = word;
//         }
//     }
//     return LongestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// // задача 22 --------------------------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// for(let i = min; i<= max; i +=1){
// numbers.push(i);
// }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(29, 34));



// // задача 23 ---------------------------

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const biggestNumber = [];
//   for (let number of numbers) {
//   if (number > value) {
//   biggestNumber.push(number);
//   }
//   }
//   return biggestNumber;

//   // Пиши код выше этой строки
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// // задача 24 ------------------

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }

// console.log(checkFruit('мандарин'));
// console.log(checkFruit('слива'));



// // задача 25 --------------

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// const totalElements = [];
//   for (const element of array1){
//   if (array2.includes(element)) {
//   totalElements.push(element)
//      }
//   }
//   return totalElements;

  
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements(['1', '2', '3'], ['2', '3']));


// // задача 26 --------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let element of order) {
//     total += element;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// // задача 27 --------------------

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let number of numbers){
  
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));


// // задача 28 --------------------


// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;



// //  задача 29----------------

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
// const numbers = [];
  
//   for(let i = start; i <= end; i += 1){
//     if ([i]%2===0) {
//         numbers.push(i);
//     }
//   }
  
//     return numbers;

    
//     // Пиши код выше этой строки
//   }


// console.log(getEvenNumbers(7, 25));




// // задача 30 --------------------

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//      break;
//   }
// }


// // задача 31-----------------

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//      return i;
//     }
//   }

//   return number;
//   // Пиши код выше этой строки
// }

// console.log(findNumber(16, 35, 7)); 

// // задача 32-------------

// function includes(array, value) {
//   // Пиши код ниже этой строки
//    for (const element of array) {
//       if(element === value){
//       return true;
//       }
// }
// return false;
  
//   // Пиши код выше этой строки
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
// console.log();