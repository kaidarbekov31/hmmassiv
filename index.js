
// Домашнее задание
// Задание скидываем репозиторием обязательно!!!1) Дан некоторый массив. Объедините элементы этого массива в строку с разделителем '-'
// 2) Пользователь вводит строку(prompt). Разделите эту строку на слова и выведите их на экран.
// 3) Преобразуйте дату из формата гггг-мм-дд в формат дд.мм.гггг, используя split и join.
// 4) Напишите код, чтобы она выводила количество слов(не букв) во введенной строке.
// let usersRecords = [ {name: 'John', id: 123, marks : 98, pole: "mentor", age: 35 },
//           {name: 'Baba', id: 101, marks : 23, pole: "student", age: 12 },
//           {name: 'yaga', id: 200, marks : 45 , pole: "student", age: 18},
//           {name: 'Wick', id: 115, marks : 75 , pole: "mentor", age: 24} ] 
// 5) Получить имена студентов и вывести из в одну СТРОКУ
// 6) Получить студентов у которых marks больше 44 и добавить к ним еще 20 marks, т.е было 30 станет 50


1

// let letters = ['asd', 'fgh', 'hjk', 'tre'];
// let newlet = letters.join('-');
// console.log(letters);
// console.log(newlet);

// 2

// var inputString = prompt("Введите строку:");
// var words = inputString.split(" ");
// words.forEach(function (word) {
//     console.log(word);
// });


// 3
// let  originalDate =prompt('2024-03-06  др в таком формате');

// let  NewDate = originalDate.split("-");

// let  formattedate = NewDate.reverse().join(".");

// console.log(formattedate);

4

// let string  = prompt("Введите строку:");


// let  words = string.split(" ");

// let wordCount = words.length;


// console.log("Количество слов во введенной строке: " + wordCount);


5
// let usersRecords = [
//     {name: 'John', id: 123, marks: 98, pole: "mentor", age: 35},
//     {name: 'Baba', id: 101, marks: 23, pole: "student", age: 12},
//     {name: 'yaga', id: 200, marks: 45, pole: "student", age: 18},
//     {name: 'Wick', id: 115, marks: 75, pole: "mentor", age: 24}
// ];

// let studentNames = usersRecords
//     .filter((item) => item.pole === "student")
//     .map((item) => item.name);

// let NewstudentNames = studentNames.join(", ");

// console.log(NewstudentNames);

6
let usersRecords = [
    { name: 'John', id: 123, marks: 98, pole: "mentor", age: 35 },
    { name: 'Baba', id: 101, marks: 23, pole: "student", age: 12 },
    { name: 'yaga', id: 200, marks: 45, pole: "student", age: 18 },
    { name: 'Wick', id: 115, marks: 75, pole: "mentor", age: 24 }
];

let studentMarks = usersRecords.
filter(student => student.pole === "student" && student.marks > 44)
    .map(student => ({ ...student, marks: student.marks + 20 }));


console.log(studentMarks);