// задание 1. 

let password = "пароль"         // пр. - "пароль" или "password"
alert(password)

let answer = String(prompt("введите пароль"));
    answer = answer.toLocaleLowerCase();

if (answer === "пароль" || answer === "password") {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

// задание 2.

let c = 5;

if ( c > 0 && c < 10 ) 
    {
    console.log("Верно");
    } else ( c < 0 && c > 10 ) 
    {
    console.log("Неверно");
}

// задание 3. 

let d = 112;
let e = 89;

if ( d > 100 || e < 100 ) 
    {
    console.log("Верно");
    } else ( d < 100 || e > 100 )
    {
    console.log("Неверно");
}

// задание 4.

let a = '2';
let b = '3';

alert(+2 + +3);

// задание 5.


let monthNumber = Number(prompt("введите номер с 1 по 12 что узнать к какому сезону в году относится данный месяц"));

switch (monthNumber) {
    case monthNumber = 1:
        console.log('1-й месяц (он же Январь) принадлежит к сезону «зима».');
        break;
    case monthNumber = 2:
        console.log('2-й месяц (он же Февраль) принадлежит к сезону «зима».');
        break;  
    case monthNumber = 3:
            console.log('3-й месяц (он же Март) принадлежит к сезону «весна».');
        break;        
    case monthNumber = 4:
            console.log('4-й месяц (он же Апрель) принадлежит к сезону «весна».');
        break;    
    case monthNumber = 5:
            console.log('5-й месяц (он же Май) принадлежит к сезону «весна».');
        break;    
    case monthNumber = 6:
            console.log('6-й месяц (он же Июнь) принадлежит к сезону «лето».');
        break;    
    case monthNumber = 7:
            console.log('7-й месяц (он же Июль) принадлежит к сезону «лето».');
        break;    
    case monthNumber = 8:
            console.log('8-й месяц (он же Август) принадлежит к сезону «лето».');
        break;    
    case monthNumber = 9:
            console.log('9-й месяц (он же Сентябрь) принадлежит к сезону «осень».');
        break; 
    case monthNumber = 10:
            console.log('10-й месяц (он же Октябрь) принадлежит к сезону «осень».');
        break;  
    case monthNumber = 11:
            console.log('11-й месяц (он же Ноябрь) принадлежит к сезону «осень».');
        break;    
    case monthNumber = 12:
            console.log('12-й месяц (он же Декабрь) принадлежит к сезону «зима».');
        break;    
               

    default:
        console.log("такого месяца не существует!");
        break;
}