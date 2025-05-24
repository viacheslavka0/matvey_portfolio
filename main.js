let form = document.getElementById("myForm");
let status1 = document.getElementById("status");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    surname: form.surname.value,
    name: form.name.value,
    email: form.email.value,
    tel: form.tel.value,
    service: form.service.value
  };
  try {
    await fetch("https://script.google.com/macros/s/AKfycbxO_-p9iFwWRG4_-mCjU-rtSbJpx-Pj7viMtCC4DZ0GWd93fvs-vf8sblJDtXQX26xf/exec", {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    status1.textContent = "Отправлено!";
    form.reset();
  } catch (err) {
    console.log(err);
    status1.textContent = "Ошибка отправки";
  }
});




/*

// Арифматические действие
console.log(10%3);
console.log(100-20)


let a=5;
let b=11;
a=12
b=10
console.log(a*b)
a=a+10 //a=22
b=15-b //b=5
b=b+(b+b)*2; //25


let name1=prompt("Как вас зовут?")
 console.log("Привет, ", name1, "! Как дела?");
 


let a = Number(prompt("Введите длину"));
let b = Number(prompt("Введите ширину"));
console.log("3+4");

console.log((a + b) * 2);
//Периметр-30
//Площадь-80
let c = Number(prompt("Введите год рождения"));
console.log("В 2050 вам будет ", 2050 - c)
let m = Number(prompt("Введите ширину"));
console.log("Перевод времен", 60 * b);
//В одной минуте - 60
//Количество минут - 5

//Введите ваш вес (кг): 70
//Вам нужно пить 2.1 литра воды в день.
let weight =  Number(prompt("Введите свой вес в кг: "));
console.log("Вам нужно пить ", weight*30/1000 , "литра воды в день"); 



// Задача 2


let age = 16;
if (age < 18) {
    console.log(" Вы несовершеннолетний")
}
// Запрашиватся у пользователя температуру воды
let temperature = parseFloat(prompt("Введите температуру воды в градусах Цельсия:"));

// Проверяем температуру и выводим соответствующее сообщение

if (temperature < 0) {
    console.log("Вода замерзла");
} else if (temperature >= 0 && temperature < 100) {
    console.log("Вода в жидком состоянии");
} else if (temperature >= 100) {
    console.log("Вода кипит!");
} else {
    console.log("Некорректный ответ.");
}
let number = parseInt(prompt("Введите число:"));


if (number % 3 === 0 && number % 5 === 0) {
    console.log("Число кратно и 3, и 5");
} else if (number % 3 === 0) {
    console.log("Число кратно 3");
} else if (number % 5 === 0) {
    console.log("Число кратно 5");
} else {
    console.log("Число не кратно 3 и 5");
}




let login = prompt("Введите логин");
let password = prompt("Введите пароль");
if (login == "admin" && password == "1234") {
    alert("Доступ разрешен");
}
else if (login == "admin" && password != "1234") {
    alert("Неверный пароль");
}
else { alert("Нет доступа");
} 

let color=prompt ("Введите цвет светофора")
if (color === "зеленый") {
    console.log("Можно идти!");
} else if (color === "желтый" || color == "красный") {
    console.log("Стой!");
} else {
    console.log("Ошибка! Такого цвета нет на светофоре.");
}
let q = prompt("Введите число:");


alert("Последняя цифра: " + (Number(number) % 10));
let d = Number(prompt("Пожалуйста, введите ваш возраст:"));


if (возраст >= 18 && возраст < 65) {
    console.log("Добро пожаловать в клуб!");
} else {
    console.log("Вход запрещен.");
}
let t = Number(prompt("Введите первое число:"));
let p = Number(prompt("Введите второе число:"));

if (a > b) {
    console.log("Первое число больше второго");
} else if (b > a) {
    console.log("Второе число больше первого");
} else {
    console.log("Числа равны");
}
//Найдите сумму чисел от 0 до N. Значение N вводится с клавиатуры. (N=10; Summ = 0+1+2+3+4+5+6+7+8+9+10

let N = Number(prompt("Введите число N"));
let sum = 0;
for (let i=0; i<N; i++){
    sum=sum+i;
    //sum+=i;
}
console.log(sum);


let v = Number(prompt("Введите число N:"));
let sum = 1; // Переменная для хранения суммы

for (let i = 1; i <= v; i++) { // Перебираем числа от 0 до N
    if (i % 2 == 0) { // Проверяем, четное ли число
        sum = sum * i; // Если четное, добавляем к сумме
    }
}

console.log("Сумма четных чисел от 0 до " + v + " равна: " + sum); // Выводим результат
//У пользователя запрашивают количество чисел N. Затем пользователь сам вводит числа с клавиатуры. Нужно найти самое большое число
//Введите число: 5
// 190
//9
//2000
//23
//44
//Самое большое число - 2000

let n = Number(prompt("Введите число:"));
for (let i = 0; i <= 20; i++) {// i++ i=i+1
    console.log(n, "*", i,"=",n*i);
}


//console.log(n, '*', 1, '=', n * 1); //5 * 1 = 5
//console.log(n, "*", 2, "=", n * 2);

let o = Number(prompt("Введите число")); //Вывод чисел в обратном порядке
for (let i = o; i >= 0; i--) {
    console.log(i)
}


let n = Number(prompt("Сколько чисел вы хотите ввести?"));


let evenSum = 0, oddSum = 0;

for (let i = 1; i <= n; i++) {
    let number = Number(prompt(Введите число ${i}:));

    if (number % 2 === 0) {
        evenSum += number;
    } else {
        oddSum += number;
    }
}


console.log(Сумма четных чисел: ${evenSum});
console.log(Сумма нечетных чисел: ${oddSum});
let i = 10; 


while (i >= 1) {
    console.log(i); 
    i--; 
}


console.log("Старт!");
             
let students = ["Соня", "Катя", "Макс", "Саша"];
let chzh = [10,593,-33,0, -10];
let lol = 0;
console.log(students);
console.log(students[2]);
console.log(students[students.legth-1]); //выводд элемента масива

//основные операции с масивами
student.push("Настя"); //добавить элемент в конец массива
student.unshift("Кирилл"); //добавить элемент в начало масива

/*
for (let i=0; i<100; i++){
    let numbers = [10,593,-33,0,-10];
let sum = 0;
for (let i=0;i<numbers.length;i++){
    sum+=numbers[i];
}}
console.log(sum);
let fruits = ["Яблоко", "Банан", "Апельсин", "Груша", "Киви"];

alert(fruits[fruits.length - 1]); 

console.log(fruits[2]); 

fruits.pop(); 

fruits.unshift("Манго");

console.log(fruits);
/*

const numbers = [-5, 12, 0, -1, 8, -3, 7, -10, 4, -2];


const negativeNumbers = numbers.filter(num => num < 0);


console.log("Все числа:", numbers);
console.log("Отрицательные числа:", negativeNumbers);
let numbers = [12, 7, -3, 25, 10]; 

let max = numbers[0]; 
let min = numbers[0]; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i]; 
    if (numbers[i] < min) min = numbers[i];  
}

let diff = max - min; 
*/
/*
console.log("Максимум: " + max);
console.log("Минимум: " + min);
console.log("Разница: " + diff);

let colors = ["Line", "Aqua", "Tan", "Salmon"];
let button = document.getElementById("changeColor");
let colors = ["Lime", "Aqua", "Tan", "Salmon", "Purple"];
let button = document.getElementById("changeColor");
let index = 0;
*/
/*
button.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[index];
    index++;
    if (index > colors.length - 1) {
        index = 0;
    }
});
*/














































