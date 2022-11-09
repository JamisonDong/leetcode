// Function.prototype.a = 1;
// Object.prototype.b = 2;
// function F () {
//   //
// }
// const f = new F();


// console.log(F.a) //1
// console.log(F.b) //2
// console.log(f.a) //undefined
// console.log(f.b) //2


var F = function () { };
Object.prototype.a = function () {
  console.log('a');
};
Function.prototype.b = function () {
  console.log('b');
}
var f = new F();
f.a(); //a
f.b(); //f.b is not a function
F.a(); //a
F.b() //b

/**
 * 1. f 并不是 Function 的实例，因为它本来就不是构造函数，调用的是 Function 原型链上的相关属性和方法，只能访问到 Object 原型链。所以 f.a() 输出 a  ，而 f.b() 就报错了。
2. F 是个构造函数，而 F 是构造函数 Function 的一个实例。因为 F instanceof  Object === true，F instanceof Function === true，由此可以得出结论：F 是 Object 和 Function 两个的实例，即 F 能访问到 a， 也能访问到 b。所以 F.a() 输出 a ，F.b() 输出 b。
 */