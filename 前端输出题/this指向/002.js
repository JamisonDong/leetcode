var a = 10
var obj = {
  a: 20,
  say: () => {
    console.log(this.a)
  }
}
obj.say() //10

var anotherObj = { a: 30 }
obj.say.apply(anotherObj) //10 apply也无法改变箭头函数不绑定this的特性


var a = 10
var obj = {
  a: 20,
  say () {
    console.log(this.a)  //20
  }
}
obj.say()
var anotherObj = { a: 30 }
obj.say.apply(anotherObj)//30