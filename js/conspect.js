// const friends = ['Mango','Poly', 'Kiwi','Ajax'];
// // console.log(friends. length);

// console.table(friends);


// friends[1] = 'ghjghj';

// console.table(friends);

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);


// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b)


// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// // console.table(friends);

// // const lastIndex = friends.length - 1;

// // for (let i = 0; i <= lastIndex; i+=1 ) {
// //     friends[i] += '-1';
// // }

// for (let friend of friends) { 
//     console.log(friend);
// }
// // console.table(friends);


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25]
// let total = 0; 


// for (let i = 0; i < cart.length; i += 1) { 
    
//     console.log(cart[i]);
// total += cart[i];
// }
// console.log('Total: ', total);


//---------------------------------------------------------
// НАХОЖДЕНИЕ НАИБОЛЬШЕГО ЧИСЛА

// const numbers = [15, 88, 93, 7, 3, 25, 16, 105];
// let biggestNamber = numbers[0];
// for (const number of numbers) { 
//     if (number > biggestNamber) { 
//         biggestNamber = number;
//     }
// }
// console.log('biggestNamber: ', biggestNamber);
// ________________________________________________________




// const logItems = function (items) { 
// for (const item of items) {
//     console.log(item)
// }
// }

// logItems([15, 12, 48, 5]);
// logItems(['Eghjh', 'gubh', 'ggjk']);

// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
  
//   words = message.split(delimeter);
  
//   // Пиши код выше этой строки
//   return words;
// }

// console.log(splitMessage('Манго спешит на поезд', ''));
// console.log(splitMessage('Манго спешит на поезд', ' '))

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно']

// const numbers = [7, 12, 54, 8, 53, 22, 4, 6, 8, 15, 64, 72, 85, 102];
// let total = 0;

// for (let i = 0; i <numbers.length; i+=1) {
//   console.log(numbers[i]);
  
//   if (numbers[i] % 2 === 0) {
//     console.log('Чётное!!!')
//     total += numbers[i];
//   }
// }
// console.log('Total:  ', total);


// const logins = ['m4ngoDoge','','k1widab3st', 'ghjghjgjhg', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';

// const message = logins.includes(loginToFind) ?
//   `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;
// console.log(message);

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//   } else {
//     console.log('Операция снятия средств проведена.');
//   }
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.


// const a = { x: 1, y: 2,};
// const b = a;
// const c = { x: 3, f: 5,};

// console.log(a === b);

// const e = {
//     ...a,
//     name: 'Mango',
//     ...b,
//     ...c,
// }

// console.log(e);