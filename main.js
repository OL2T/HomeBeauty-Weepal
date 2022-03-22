// Học Javascript cơ bản
// 1. Khai báo biến
// var fullName = 'Lam Tan Tai';
// alert(fullName);
// 2. Hàm built-in
// a. Console
// var fullName = 'Lam Tan Tai'
// console.log(fullName);
// setTimeout(function() {
//   alert('Thong Bao')
// },2000)
// setInterval(function() {
//   console.log('Thong bao' + Math.random())
// }, 3000)
// 3. Toán tử
// var a = 2 *2;
// console.log(a);
// var b =5;
// if (a < b){
//   console.log('Sai')
// }
// else{
//   console.log('Dung')
// }
// var number = 10
// var a = ++number * 3 - number-- * 2
// var b = number++ * 2 - --number * 3
// console.log(a);
// console.log(b);
// console.log(a+b);
// Nối chuỗi 20/03/2022
// var firstName = 'Lam'
// var lastName = 'Tai'
// var fullName = firstName +' '+ lastName
// console.log(fullName);
//Toán tử so sánh
// var a = 1
// var b = 2
// if(a!=b){
//   console.log('Dieu kien dung!');
// } else{
//   console.log('Dieu kien sai!');
// }
//1.===
// var a=1
// var b='2'
// // console.log(a===b);
// //2. !==
// console.log(a!==b);
// Boolean
// var age = 20 
// var canBuyAlcohol = age>=18
// console.log(canBuyAlcohol);
// If-else (Ngoài 6 cái này điều kiện = true)
// - 0
// - false
// - undefined
// - NaN
// - null
// - '' - ""
// Toán tử Logic
// var a = 1
// var b = 2
// var c = 3
// if (!(a>0)){
//   console.log('Dung');
// } else{
//   console.log('Sai');
// }
//Kiểu dữ liệu
// Kiểu dữ liệu Nguyên thủy
//1. Number
// var a = 1;
// var b = 2;
// var c = 3;
// //2. String
// var fullName = 'Lam \'Tai'
// //3. Symbol
// var id = Symbol('id') //unique
// var id2 = Symbol('id')
// console.log(id == id2);
// Kiểu dữ liệu phức tạp
//1. Function
// var myFunction = function(){
//   alert('Goi function');
// }
// myFunction()
//2.Object
// var myObject = {
//   name: 'Lam Tai',
//   age: 22,
//   phoneNumber: '0981210174',
// };
// // console.log('myObject',myObject);
// var myArray = [
//   'Lam',
//   'Tai',
//   'Nhi'
//   // console.log(myArray);
// ];
// console.log(typeof myArray);
// var result = 'A' || 'B' || 'C' || 'D';
// Create Function
//myFunction
// function showBox(){
//   alert(1+2);
// }
// showBox();
// function myTest (){
//   var myString = '';
//   for(var param of arguments){
//     myString += `${param} ` 
//   }
//   console.log(myString);
// }
// myTest('abc','e','r');
// function triple (x) {
//   return 3*x;
// }
// var result = triple(3)
// console.log(result);
// var string = 'Hoc JS tai F8!'
// // // // Cut string
// // // // console.log(string.replace(/JS/g,'Javascript'));
// console.log(string.toUpperCase());
// function getLength(content) {
//   return content.length
// }
// console.log(getLength('JavaScript'));
// console.log(getLength('Hello World'));
// function getUpperCaseName(name){
//   return name.toUpperCase()
// }
// console.log(getUpperCaseName('Lam Tan Tai'));
// var age = 18;
// var PI = 3.14546456456
// console.log( PI.toFixed(2));
// function isNumber (value){
//   if(typeof value == 'string'){
//     return false;
//   }
//   else{
//     return true;
//   }
// }
// console.log(isNumber(898988));
// console.log(isNumber('acs'));
// ------------------------------ ARRAY ---------------------------
//1. Create
// var languages = [
//     'JavaScript',
//     'PHP',
//     'C/C++'
// ];
// console.log(languages);
// // console.log(Array.isArray(languages));
// 2. Truy Xuat Mang
// console.log(languages.length);
// console.log(languages[2]);
//3. Work
//a.To String 
// console.log(languages.toString());
//b.Join 
// console.log(languages.join(' - '));
//c.Pop (Xóa phần tử cuối mảng và trả về phần đã xóa)
// console.log(languages.pop());
//d.Push (Thêm 1 hoặc nhiều phần tử vào cuối mảng và tăng độ dài mảng)
// console.log(languages.push('Java'));
//e.Shift (Xóa phần tử đầu mảng và trả về phần đã xóa)
// console.log(languages.shift());
//f.Unshift (Thêm 1 hoặc nhiều phần tử vào đầu mảng và tăng độ dài mảng)
// console.log(languages.unshift('Java'));
//g.Splicing (Xóa, cắt, chèn phần tử mới vào mảng)
// languages.splice(1, 1, 'Java')
//h.Concat (Nối 2 array)
// var languages2 = [
//     'Java',
//     'HTML'
// ]
// console.log(languages.concat(languages2));
// //i.Slicing
// console.log(languages.slice('-2', '-1'));
// ------------------------------ OBJECT ---------------------------
// var myKey = 'address'
// var myInfo = {
//     name: 'Lam Tan Tai',
//     age: 22,
//     phoneNumber: '0981210174',
//     [myKey]: 'TP.HCM, VN',
//     getName: function() {
//         return this.name;
//     },
//     getAge: function() {
//         return this.age;
//     },
// };
// console.log(myInfo.getAge());
// ----- OBJECT CONSTRUCTOR ------------
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.lastName} ${this.firstName}`
//     }
// }
// // -------- OBJECT PROTOTYPES -------------
// User.prototype.className = 'F8';
// User.prototype.getClassName = function() {
//     return this.className
// }
// //-----------------------------------------
// var author = new User('Tai', 'Lam', 'Avatar');
// var user = new User('Nhi', 'Chau', 'Avatar');
// author.title = 'Hoc cc hoc quai'
// user.comment = 'Abc'
// console.log(author.className);
// console.log(user.getClassName());
//--------- DATE OBJECT ---------------------
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(`${day}/${month}/${year}`);
// ------------ MATH OBJECT --------------
// var random = Math.floor(Math.random() * 100)
// if (random < 50) {
//     console.log('Thanh cong');
// }
// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
// ]
// console.log(bonus[random]);
//--------------- LỆNH RẼ NHÁNH / TOÁN TỬ 3 NGÔI  ------------
// ---- IF/ELSE ------
// var date = 2
// if (date == 2) {
//     console.log('Hom nay la thu 2');
// } else if (date == 3) {
//     console.log('Hom nay la thu 3');
// } else if (date == 4) {
//     console.log('Hom nay la thu 4');
// }
// ----- SWITCH --------
// var date = 2
// switch (date) {
//     case 2:
//         console.log('Hom nay la thu 2');
//         break;
//     case 3:
//         console.log('Hom nay la thu 3');
//         break;
//     case 4:
//         console.log('Hom nay la thu 4');
//         break;
//     case 5:
//         console.log('Hom nay la thu 5');
//         break;
// }
//--------- TOAN TU 3 NGOI ----------
// var course = {
//         name: 'JS',
//         coin: 0,
//     }
// if (course.coin > 0) {
//     console.log(`${course.coin} Coin`);
// } else {
//     console.log('Mien phi');
// }
// var rs = course.coin > 0 ? `${course.coin} Coin` : 'Mien phi'
// console.log(rs);
// var a = 1
// var b = 2
// var c = a > 0 ? a : b
// console.log(c);
// ------------------------------- VONG LAP --------------------------
// --------- For --------
// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }
// --------- For 3 --------------
// var myArray = [
//     'JavaScript',
//     'PHP',
//     'Java',
//     'C/C++',
// ]
// var arrayLength = myArray.length
// for (var i = 0; i < arrayLength; i++) {
//     // console.log(i);
//     console.log(myArray[i]);
// }
// ------- FOR/IN -------
// var myInfo = {
//     name: 'Lam Tan Tai',
//     age: 22,
//     phoneNumber: '0981210174',
// }
// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }
// ------- FOR OF ----------
// var myInfo = {
//     name: 'Lam Tan Tai',
//     age: 22,
//     phoneNumber: '0981210174',
// }
// var getKey = Object.keys(myInfo);
// var getValue = Object.values(myInfo)
// for (value of getValue) {
//     console.log(value);
// }
// ------------ WHILE ---------------
// var myArray = [
//     'JavaScript',
//     'PHP',
//     'Java',
//     'C/C++',
// ]
// var lengthArray = myArray.length
// var i = 0
// while (i < lengthArray) {
//     console.log(myArray[i]);
//     i++
// }
// ------------- DO WHITE --------------
// var i = 0
// do {
//     i++
//     console.log(i);
// } while (i < 10);
// -----------------BREAK - CONTINUE ---------------------
// for (var i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     console.log(i);
// }
// --------------- VÒNG LẶP LỒNG NHAU -------------
// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ]
// for (var i = 0; i < myArray.length; i++) {
//     // console.log(myArray[i]);
//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
// }
// ------ EXAMPLES -------------
// for (var i = 100; i >= 0; i--) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }
// ------------------------- ĐỆ QUY -----------------
// Xóa các phần tử trùng lặp trong mảng và xuất ra mảng đó (Filter có sẵn)
// var array = ['a', 'b', 'c', 'a', 'b', 'c']
// console.log([...(new Set(array))]);
// 1.Countdown
// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return countDown(num - 1)
//     }
//     return num
// }
// countDown(3)
// 2.Xóa các phần tử trong mảng không dùng filter có sẵn bằng đệ quy
// function loop(start, end, callBack) {
//     if (start < end) {
//         callBack(start)
//         return loop(start + 1, end, callBack)
//     }
// }
// var array = ['Javascript', 'PHP', 'Java']
// loop(0, array.length, function(index) {
//     console.log(array[index]);
// })
// 3. Giai thua
// 3.1 Loop
// function giaiThua(number) {
//     var output = 1;
//     for (var i = number; i > 0; i--) {
//         output = output * i
//     }
//     return output;
// }
// console.log(giaiThua(6));
//3.2 De quy
// function giaiThua(number) {
//     if (number > 0) {
//         return number * giaiThua(number - 1)
//     }
//     return 1;
// }
// console.log(giaiThua(6));