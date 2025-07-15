// 1.Ways to print in javascript
//console.log("Hello World");
//alert("This for alert");
//document.write("This is document write");

//const { createElement } = require("react");

// 2.jvascript console API
//console.log("Hello World", 4 + 6, "Another log");
//alert("This for alert");
//document.write("This is document write");
//console.warn("This is warning");
// onsole.error("This is an error");

// 3.JavaScript Variables
// What are variables? - Containers to store data values
var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);

// 4.Data types in JavaScripts
//numbers
var num1 = 455;
var num2 = 56.46;

//String
var str1 = "This is a string"
var str2 = "This is also a string"

//objects
var marks = {
    ravi: 54,
    naba: 56,
    Sonu: 43
}
//console.log(marks)
//Booleans
var a = true;
var b = false;
//console.log(a,b);

//var und=undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);
/*
At a very high level,There are two types of data types in JavaScript
1.Primitive data types:undefined, null, number, string, boolean,symbol
2.Reference data types:Arrays and objects
*/

var arr = [1, 2, "naba", 3, 4, 5]
//console.log(arr)

// Operators in javaScript
//Arithmatic Operator
var a = 35;
var b = 23;
// console.log("The value of a + b is", a + b);
// console.log("The value of a - b is", a - b);
// console.log("The value of a * b is", a * b);
// console.log("The value of a / b is", a / b);

// Assignment Operators
// var c=b;
// c += 2;
// c -= 2;
// console.log(c);

// Comparison Operator
var x = 36;
var y = 46;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

// Logical Operator

// Logical AND Operator
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)

// Logical OR Operator
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
// console.log(false || true)

// Logical NOT Operator
// console.log(!true)
// console.log(!false)

// Function in javaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;

}
// DRY= Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 20);
//console.log(c1,c2);

// Conditionals in JavaScripts
var age = 10;
//single if statement 
// if(age>18){
//     console.log("You can watching 18+ movie")
// }

// if-else ststement
// if (age > 18) {
//     console.log("You can watching 18+ movie");
// }
// else {
//     console.log("You cannot watching 18+ movie");
// }

// if-else Ladder
// if(age>32){
//     console.log("You are not a kid");
// }
// else if(age>26){
//     console.log("You are not a kid");
// }
// else if(age>22){
//     console.log("22 You are not a kid");
// }
// else if(age>18){
//     console.log("18 You are not a kid");
// }
// else{
//     console.log("You are like just a kid");
// }
// console.log("End of ladder");

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 0;
// const ac = 0;
// ac++;
// ac = ac + 1;

// let j=0;
// while(j<arr.length){
//    console.log(arr[j]);
//    j++; 
// }
//var arr = [1, 2, 3, 4, 5, 6, 7];

// let j=0;
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// continue and break statement
var arr = [1, 2, 3, 4, 5, 6, 7];
// for(var i=0;i<arr.length;i++){
//     if(i==3){
//         //break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// let myArr=["Fan","Camera",34,null,true];
// // Array Methods
// console.log(myArr.length);
// //myArr.pop()
// //myArr.push("Naba");
// // myArr.shift()
// //console.log(myArr.unshift("Naba"));
// const newLen=myArr.unshift("Naba");
// console.log(newLen);
// console.log(myArr);

// Strings Methods in JavaScript
let myString = "I am playing football in 5pm";
// console.log(myString.length);
// console.log(myString.indexOf("football"));
// console.log(myString.lastIndexOf("Playing"));

//console.log(myString.slice(1, 10));
// d=myString.replace("football","cricket");
// d=myString.replace("5pm","4pm");
// console.log(d,myString)

// let myDate=new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

// DOM Manipulation 
// let elem=document.getElementById('click')
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
//console.log(elemClass);
//elemClass[0].style.backgroundColor = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByName('div');
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> remove all elements  

// Selecting using Query
// sel=document.querySelector('.container');
// console.log(sel)
// sel=document.querySelectorAll('.container');
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload=function(){
//     console.log('The document was loaded');
// }

// Events in JavaScript
//  firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container");
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container");
// })
// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
//     console.log("Mouse down when clicked on container");
// })

// Arrow Function
// function sum(a,b){
//     return a+b;
// }
// sum=(a,b)=>{
//     return a+b;
// }
// SetTimeout and setinterval
// logkaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b> Set interval firaes"
//     console.log("I am your log");
// }
//setTimeout(logkaro,5000);
// use clearInterval clear timeout to cancle setInterval/setTimeout
//clr=setInterval(logkaro,3000);

// JavaScript localsorage
// localstorage.removeItem('name')
//localStorage.clear();

// Json
// obj={name:"naba",length:1, a:{this:'tha"t'}}
// jso=JSON.stringify(obj)
// console.log(typeof jso)
// console.log(jso)
// parsed=JSON.parse('{"name":"naba","length":1,"a":{"this":"that"}}')
// console.log(parsed);

// Template literals - Backticks
// a=34;
// console.log(`This is my $:{a}`)
