//两个栈实现一个队列


class myQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push (value) {
    this.stack1.push(value);
  }

  pop () {
    if (this.stack2.length === 0) {
      if (this.stack1.length) {
        while (this.stack1.length) {
          this.stack2.push(this.stack1.pop());
        }
      } else {
        throw new Error('no value');
      }
    }
    console.log(this.stack2.pop());

  }

}


let myqueue = new myQueue();
myqueue.pop();


//------------------
几十个人
团队氛围
