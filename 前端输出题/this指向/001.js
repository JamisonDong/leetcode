
function foo () {
  console.log(this.a); //undefined | v8  输出2
}

function doFoo () {
  console.log(this.a); //1
  foo();
}

var obj = {
  a: 1,
  doFoo: doFoo
};

var a = 2;
obj.doFoo()