// задание 1.

let q = 0;

while (q < 2) {
console.log("привет");
q++;
}

// задание 2.

let i = 0;

while (i < 6) {
	console.log(i);
	i++;
}

// задание 3.

let b = 7, n = 27;

while (b <= n) {
    console.log(b);
    b++;
}

// задание 4. 

const obj = {
  name : "Коля", salary : 200,
  name : "Вася", salary : 300,
  name : "Петя", salary : 400,

}

for (let name in obj) {
    console.log(`${obj.name} — зарплата ${obj.salary} долларов.`);
}
    
// задание 5.

let a = 1000;
let num = 0;
while (a > 50) {
  a /= 2;
  num++;
}
 
console.log(a);
console.log(num);

// задание 6. (вариант 1)


let dayNumber = +prompt('Введите число первой пятницы месяца');

while (dayNumber <= 31) {
    if (1 <= dayNumber && dayNumber <= 3) {
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
    }
    else if (4 <= dayNumber && dayNumber <= 7) {
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
    }
    
    else {
        console.log(`На сегодня нет задач.`);
    }

    break;
}


 // Задание 6 (вариант 2)


let dayNumber2 = +prompt('Введите число первой пятницы месяца');
for ( ; dayNumber2 <= 31; dayNumber2+=7) { 
	if (dayNumber2 % 5 == 0) { 
		continue; 
	}
	console.log(`Сегодня пятница, ${dayNumber2}-е число. Необходимо подготовить отчет.`);
}




