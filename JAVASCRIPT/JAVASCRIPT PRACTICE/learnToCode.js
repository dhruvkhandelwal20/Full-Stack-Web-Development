// var name = "Dhruv";
// var age = 22;
// var decimalNumber = 456.7;

// var message = "Hi, My Name is " + name + " and I'm " + age + " years old!";

// var firstName = "Dhruv";
// var lastName = "Khandelwal";
// var dateOfBirth = "20-09-2000";
// var age = 22;
// var profileImgUrl = "profilePicture.jpg";

// var loginWelcomeMessage =
//   "Welcome, " + firstName + ". Happy " + age + "nd birthday!";

// console.log(loginWelcomeMessage);


// var sum = 10 + 15;
// console.log(sum);

// var numbers = [60, 70, 80, 90, 100];
// for(var index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }

// var length, breadth, area;
// function areaOfRectangle(length, breadth){
//     area = length * breadth;
//     console.log(area);
// }

// areaOfRectangle(7, 5);

// var student = {
//     firstName: "Dhruv",
//     lastName: "Khandelwal",
//     age: 22
// }

// console.log(student.firstName);
// console.log(student.lastName);

// var studentOne = {
//     firstName: "Dhruv",
//     lastName: "Khandelwal",
//     age: 22,
//     greeting: function() {
//         return "Hi, I'm " + this.firstName + " & My Age is: " + this.age;  
//     }
// }
// This is keyword which refers to the property inside an Object.
// console.log(studentOne.greeting());

// var studentTwo = new Object();
// studentTwo.firstName = "Kanishk";
// studentTwo.lastName = "Khandelwal";
// studentTwo.age = 19;

// var studentThree = {};

// studentThree.firstName = "DK";
// studentThree.age = 22;

// const students = [];
// students.push(studentOne, studentTwo, studentThree);
// console.log(students);

// console.log(studentOne);


// Acting as a Constructor
// Constructor is a block of code that is used to create or initialize multiple objects using same piece of code.
// function Students(first, last, age){
//     this.firstName = first;
//     this.lastName  = last;
//     this.age = age;
//     this.greeting = function(){
//         return "Hi, I'm " + this.firstName + " & I'm " + this.age + " years old.";  
//     }
// }

// var s1 = new Students("Dhruv", "Khandelwal", 22);
// var s2 = new Students("Kanishk", "Khandelwal", 19);

// console.log(s1);
// console.log(s1.greeting());

// var students = [];
// students.push(new Students("Dhruv", "Khandelwal", 22));
// students.push(new Students("Kanishk", "Khandelwal", 19));
// students.push(new Students("Raj", "Khandelwal", 23));

// var newStudent = students[0];
// FOR - IN LOOP
// for(let key in newStudent){
//     console.log(newStudent[key]);
// }

// console.log(students);

// for(let index = 0; index < students.length; index++){
//     let student = students[index];
//     console.log(student.greeting());
// }