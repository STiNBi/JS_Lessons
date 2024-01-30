//Завдання 1.


let rating = 0;
let cosac = '';

let ask = prompt('(3 + 5 = ...)      a)9;  b)8;  c)5')
if (ask === 'b') {
    console.log('Вірно!')
    rating++;
}
let ask1 = prompt('(Путін хуйло?)    напиши: так або ні')
if (ask1 === 'так') {
    console.log('МОЛОДЧИНА! СПРАВЖНІЙ КОЗАК!')
    ask1 = 1;
    rating++;
}
else if (ask1 !== 'так') {
    console.log('ПО ТЕБЕ ЇДУТЬ!')
}
let ask2 = prompt('(10 + 5/2 = ...)      a)12.5;  b)13;  c)11')
if (ask2 === 'a' || ask2 === 'а') {
    console.log('Вірно!')
    rating++;
}
let ask3 = prompt('(число пі = ...)')
if (ask3 == 3.14 || ask3 == '3,14') {
    console.log('Вірно!')
    rating++;
}
let ask4 = prompt('(2 + 2 * 3 = ...)      a)12;  b)6;  c)8')
if (ask4 === 'c' || ask4 === 'с') {
    console.log('Вірно!')
    rating++;
}
let ask5 = prompt('(99 - 19 = ...)      a)68;  b)80;  c)70')
if (ask5 === 'b' || ask5 === 'b') {
    console.log('Вірно!')
    rating++;
}
let ask6 = prompt('(Сонце на англійській)')
if (ask6.toLowerCase() === 'sun') {
    console.log('Вірно!')
    rating++;
}
let ask7 = prompt('(3 + 24 = ...)      a)27;  b)28;  c)26')
if (ask7 === 'a' || ask7 === 'а') {
    console.log('Вірно!')
    rating++;
}
let ask8 = prompt('(3 - 5 = ...)      a)2;  b)-2;  c)-3')
if (ask8 === 'b') {
    console.log('Вірно!')
    rating++;
}
let ask9 = prompt('(Слава Україні! - як відповісти на гасло?)')
if (ask9.toLowerCase() === 'героям слава!' || ask9.toLowerCase() === 'героям слава') {
    console.log('Вірно!')
    rating++;
}
if (ask1 == 1) {
    cosac = 'СПРАВЖНІЙ КОЗАК'   
}
else if (ask1 !== 1) {
    cosac = 'ТИ МОСКАЛЬ, ТІКАЙ З СЕЛА!!!'   
}
if (rating >= 0 && rating <= 2){
    console.log(`Оцінка: ${rating}  ${cosac} статус: НЕУК!`)
}
else if (rating >= 3 && rating <= 5){
    console.log(`Оцінка: ${rating}  ${cosac} статус: таке собі`)
}
else if (rating >= 6 && rating <= 8){
    console.log(`Оцінка: ${rating}  ${cosac} статус: добрe!`)
}
else if (rating >= 9 && rating <= 10){
    console.log(`Оцінка: ${rating}  ${cosac} статус: відмінник!`)
}






//Завдання 2.

// let userName;
// let userPassword;
// let userAdmin = 'STiNBi';
// let passwordAdmin = '123';
// let user1 = 'Maks';
// let user1Password = 'Maks123';
// let user2 = 'Taras';
// let user2Password = 'Taras123';
// let user3 = 'Oleg';
// let user3Password = 'Oleg123';

// userName = prompt('login');
// if (userName == userAdmin) {
//     console.log('ADMIN');
//     userPassword = prompt('Admin password');
//     if (userPassword == passwordAdmin) {
//         console.log('Welcome Admin!');
//     }
//     else {
//         console.log('invalid password');
//     }
// }
// else if (userName == user1) {
//     console.log(`user ${user1}`);
//     userPassword = prompt('Password');
//     if (userPassword == user1Password){
//         console.log(`Welcome user ${user1}!`);
//     }
//     else {
//         console.log('invalid password');
//     }
// }
// else if (userName == user2) {
//     console.log(`user ${user2}`);
//     userPassword = prompt('Password');
//     if (userPassword == user2Password){
//         console.log(`Welcome user ${user2}!`);
//     }
//     else {
//         console.log('invalid password');
//     }
// }
// else if (userName == user3) {
//     console.log(`user ${user2}`);
//     userPassword = prompt('Password');
//     if (userPassword == user3Password){
//         console.log(`Welcome user ${user3}!`);
//     }
//     else {
//         console.log('invalid password');
//     }
// }
// else if (userName == null) {
//     console.log('вхід скасованоь');
// }
// else {
//     console.log('invalid login!');
// }





//Завдання 3.

// let month;
// month = prompt('Введіть число місяця')
// if (month == 1){
//     console.log('January')
// }
// else if(month == 2){
//     console.log('February')
// }
// else if(month == 3){
//     console.log('March')
// }
// else if(month == 4){
//     console.log('April')
// }
// else if(month == 5){
//     console.log('May')
// }
// else if(month == 6){
//     console.log('June')
// }
// else if(month == 7){
//     console.log('July')
// }
// else if(month == 8){
//     console.log('August')
// }
// else if(month == 9){
//     console.log('September')
// }
// else if(month == 10){
//     console.log('October')
// }
// else if(month == 11){
//     console.log('November')
// }
// else if(month == 12){
//     console.log('December')
// }
// else {
//     console.log('Невідомий місяць')
// }









//Завдання на уроці

// let zero = prompt('Введіть щось');

// if (zero > 0 || zero == '+') {
//     console.log('додатнє число')
// }
// else if (zero == null) {
//     console.log('ви скасували вхід')
// }
// else if (zero < 0 || zero == '-') {
//     console.log('відємне число')
// }
// else if (zero === '') {
//     console.log('ви не ввели текст')
// }
// else if (zero == 0 || zero == 'zero') {
//     console.log('Ви ввели 0 або zero')
// }
// else{
//     console.log('ви ввели текст')
// }
