// задание 1.

let a; 
a = 10;
alert(a); 

let b;
b = 20;
alert(b);

// задание 2.

let c;
c = 2007
alert(c)

// задание 3.

let userName = "Brandon";
alert(userName);

// задание 4.

let $a,$b;
$a = 10;
$b = 2;
result1 = $a + $b;
result2 = $a - $b;
result3 = $a * $b;
result4 = $a / $b;
alert(result1);
alert(result2);
alert(result3);
alert(result4);

// задание 5.

let a1,b1;
a1 = 2;
b1 = 5;
result5 = a1 ** b1
alert(result5)

// задание 6.

let a2,b2;
a2 = 9;
b2 = 2;
result6 = a2 % b2;
alert(result6);

 // задание 7.

let num = 1;                
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// задание 8.

let age = Number(prompt("сколько вам лет?"));  

// задание 9.0

const user1 = {
    name: 'Nikita',
	age: 28,
    isAdmin: true
}

// Задание 9.1 

const user2 = {
    name: 'Nikita',
	age: 28,
    isAdmin: true, 
    user2.cityofresidence = true
}

// Задание 9.2

const user3 = {
    name: 'Nikita',
	born: 1995,
    isAdmin: true,
    user3.cityofresidence = true
}

// Задание 9.3

const user4 = {
    name: 'Nikita',
	born: 1995,
    isAdmin: true, 
    user4.cityofresidence = true,
    delete user4[`cityofresidence`]
}

// Задание 9.4

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(info);

// задание 10.

let name1 = prompt("Введите ваше имя?");
alert(`привет, ${name1}!`);