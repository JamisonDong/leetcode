function Animal (name) {
  this.name = name;
}
Animal.prototype.sayName = function () {
  console.log('my name is', this.name);

}

function Dog (name, bread) {
  Animal.call(this, name);
  this.bread = bread;
}

Dog.prototype = Object.create(Animal.prototype);

// 在子类的原型上定义方法
Dog.prototype.bark = function () {
  console.log('Woof!');
}

Dog.prototype.constructor = Dog;

// 使用示例
var myDog = new Dog('Fido', 'Labrador');
myDog.sayName(); // 输出：My name is Fido
myDog.bark(); // 输出：Woof!