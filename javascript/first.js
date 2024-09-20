// console.log("Hello Lipika Roy");
// console.log("Nice to meet you");
// fullname = "Tony Stark";
// console.log(fullname);
// var age = 24;
// console.log(age);
// x = null;
// y= undefined;
// console.log(x);
// console.log(y);
// price = 99.89;
// console.log(price);
// radius = 34;
// console.log(radius);
// isFollow = false; 
// console.log(isFollow);
// fullName = 25;
// console.log(fullName);
// //Dynamic type(variable type is not to be specified)
// fullname = "Lipika roy";
// var fullNAme = "Rishika Roy";
// console.log(fullname);
// console.log(fullNAme);
// // Camel case only fullName for variabe names
// let name = "tony stark";
// console.log(name);
// let totalPrice = 1000;
// // let used to declare variables cannot be re-defined.
// // var can be re-declared
// const a=12;
// //const is used to declare constant variables
// {
//     let a= 5;
//     console.log(a);
//     //Not possible to assign the the same variable using let in the same block
// } 
// {
//     let a=10;
//     console.log(a);
// }
// let b= 24;
// console.log(typeof b);
// console.log(typeof isFollow);
// console.log(typeof name);
// console.log(typeof x);
// console.log(typeof y);
// const student = {
//     fullName : "Rahul Kumar",
//     age : 20,
//     cgpa : 8.2,
//     isPass : false
// };
// console.log(student);
// console.log(student.age);
// student["age"] = student["age"] +10 ;
// console.log(student.age);
// student["fullName"] = "Rajesh Sharma";
// console.log(student);
// const product = {
//     prodName : "Parker Joker Standard CT Ball Pen(Black)",
//     rating : 4,
//     price : 270,
//     offer : -1/20
// };
// console.log(product);

// const profile = {
//     Name : "Lipika Roy",
//     Post : 195,
//     followers : 569000,
//     following : 4,
//     isFollow : true
// };
// console.log(profile);
// console.log(typeof profile.Name);
// /* multi-line
// comment.*/
// // single line comment
// let l = 5;
// let m = 6;
// console.log("l+m=",l+m);
// console.log("l=",l,"& m=",m);
// console.log("l+l=",l++);
// console.log("l=",l);
// //post will change the value later after printing the output
// console.log("m+m=",m++);
// // ctrl + / to make all selected stmts comment
// // ctrl + up arrow to select thhe stmts
// console.log("++l",++l);
// //pre will change the value first & then it will print the value
// console.log("--m",--m);
// //pre decrement unary operator
// console.log("l %= 3", l %= 3);
// // === checks the value and the data type
// // !== not equal to and the data type
// console.log("c=",l+=14);
// d= l**2;
// console.log("d=",d);
// console.log("l===m",l===m);
// console.log("l!==m",l!==m);
// console.log("5<=3",5<=3);
// console.log("5>=3",5>=3);
// let age = 25;
// if(age>18){
//     console.log("You can vote");
// }
// if(age<18) {
//     console.log("you cannot vote");
// }


// // let color
// // if(mode === "dark-mode"){
// //     color = "black";
// // } else{
// //     color = "blue";
// // }
// //condition ? true output : false output
// console.log(age >18 ? "adult": "not adult");
// let num = prompt("enter a number:");
// if(num %5 === 0){
//     console.log("num is a multiple of 5");
// } else {
//     console.log("num is not a multiple of 5");
// }
// let score = prompt("Enter the score:")
// if(score >= 80) {
//     console.log("A grade");
//     } else if(score >= 70) {
//         console.log("B grade");
//         } else if(score >= 60) {
//             console.log("C grade");
//             } else if(score >= 50) {
//                 console.log("D grade");
//                 } else {
//                     console.log("F grade");
//                 }
// for (let i=1; i<=5; i++){
//     console.log("Lipika Roy");
// }
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum += i;
//     console.log(sum);
//     };

//     let str1 = "Rishika Roy";
//     for (let i of str1){
//         console.log(i);
//     }
// let length = 0;
// for (let i of str1) {
//     length++;
//     console.log(length);
// }
// let student ={
//     name : "Rahul Kumar",
//     age : 20,
//     cgpa : 7.5 ,
//     isPass : true,
// };

// for(let i in student){
//     console.log("Key=",i,"value=",student[i]);
// }

// for(i=0;i<=100;i++){
//     console.log(i);
// }

// for(i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let gamenum = 26;
// let usernum = prompt("Guess the game number:");
// while(usernum!=gamenum) {
//     prompt("not correct. guess again:")
// }
// console.log("Congratulations!!!!!!!!!!!!!");


// let str = "     Apna College    ";
// console.log(str[1]);
// console.log(length.str);

// let sentence = `This is a template literal ${1+2+3}`;
// console.log(sentence);
// console.log(typeof sentence);

// let obj = {
//     item : "pen",
//     price : 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} Rs`;
// console.log(output);

// console.log("Lipika \n Roy");
// console.log("Lipika \t Roy");
// console.log( str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());

// let str2 = "0123456";
// console.log(str2.slice(1,4));
// console.log(str2.concat(str1));
// console.log(str2.replace(3,5));

// let marks = [96,75,48,83,36];
// console.log(marks);
// console.log(marks.length);

// for (let idx = 0; idx<marks.length; idx++){
//     console.log(marks[idx]);
// };

// for(let el of marks){
//     console.log(el);
// }

// let cities = ['Delhi','MP', "UP", "HP"];
// for(let i of cities){
//     console.log(i.toLowerCase());
// }

// let a1 = [85,97,44,37,76,60]
// let sum1 = 0;
// for(let i of a1){
//     sum1 += i;
// }
// console.log(sum1);
// let avg = sum1/ a1.length;
// console.log(`avg marks of the class is ${avg}`);

// let arr = [250,645,300,900,50];

// for(let i=0; i<arr.length; i++){
//     let offer = arr[i] / 10;
//     arr[i] -= offer;
// }
// console.log(arr);

// let food = ["potato", "apple", "litchi", "tomato"];
// console.log(food);
// let deleted = food.pop();
// console.log(food);
// console.log(`deleted: ${deleted}`);
// let add = food.push("burger","chips","paneer");
// console.log(food.toString());

// console.log(food.concat(arr));
 
// console.log(food.unshift("french-fries"));
// console.log(arr);
// console.log(food.shift());
// console.log(food.slice(0,4));

// let a2 = [1,2,3,4,5,6,7];
// a2.splice(2,2,101,102);
// console.log(a2);
// a2.splice(2,0,101);
// /* splice(index where new element has to be added,
//            number of items to be deleted, value of items to
//            be added) */
// a2.splice(3,1,101);
// console.log(a2);

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies.shift());
// console.log(companies);
// console.log(companies.splice(1,1,"Ola"));
// console.log(companies);
// console.log(companies.push("Amazon"));
// console.log(companies);

function myFunction() {
    console.log("Hiiiiii!!!!!");
    console.log("Welcome to my function");
    console.log("We are learning JS!");
}
myFunction();
myFunction();

function sum(x,y) {
// x, y -> local variable(scope only inside the function)
    s = x+y;
    return s;
}
const arrowsum = (a,b) => {
    console.log(a+b);
};
let val = sum(2,3);
console.log(val);

function mul() {
    return a*b;
}
const arrowmul = (a,b) => {
    console.log(a*b);
};


function countVowels(str) {
    for(const char of str){
       let count =0;
       if(char === "a" ||
          char === "e" || 
          char === "i"|| 
          char === "o"|| 
          char ==="u")
       { count++;
       }
        }
        console.log(count);
    
}

const countVow = (str) =>{
    let count = 0;
    for(const char of str){
        if(char === "a" ||
           char === "e" || 
           char === "i"|| 
           char === "o"|| 
           char ==="u")
        { count++;
        }
         }
         console.log(count);}

let arr = ["pune","delhi","mumbai"];
arr.forEach(function printVal(val)
{
    //val is value for each element
    console.log(val.toUpperCase());
});

let num = [1,2,3,4];
num.forEach((val) => {
    console.log(val**2);
});

let newArr = num.filter ((val) => {
    return val %2 === 0;

});
console.log(newArr);

let output = num.reduce((res,curr) => {
    return res + curr;
});
console.log(output);

let arr1 = [5,6,2,1,9]
const out = arr1.reduce((prev,curr) => {
    return prev > curr ? prev : curr
});
console.log(out);

let arr2= [87,64,98,99,86]
for(let o of arr2){
    if (o > 90)
        console.log(o);
}

let n = prompt("Enter a number :");
let arr3= [];
for (let i = 0; i < n; i++) {
    arr3[i] = i+1;
}
console.log ("the array is:",arr3);
let t = arr3.reduce((prev,curr) => {
    return prev + curr;
});
console.log("the sum is:",t);

let p = arr3.reduce((prev,curr) => {
    return prev * curr;
});
console.log("the product is:",p);





