var obj = {
  say: function () {
    var f1 = () => {
      console.log("1111", this);
    }
    f1();
  },
  pro: {
    getPro: () => {
      console.log(this);
    }
  }
}
var o = obj.say;
o(); //window
obj.say(); //obj
obj.pro.getPro(); //window