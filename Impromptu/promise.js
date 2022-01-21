class PromiseM {
    constructor(process) {
        this.status = 'pending'
        this.msg = ''
        process(this.resolve.bind(this), this.reject.bind(this))
        return this
    }
    resolve(val) {
        this.status = 'fulfilled'
        this.msg = val
    }
    reject(err) {
        this.status = 'rejected'
        this.msg = err
    }
    then(fufilled, reject) {
        if (this.status === 'fulfilled') {
            fufilled(this.msg)
        }
        if (this.status === 'rejected') {
            reject(this.msg)
        }
    }
}


var mm = new PromiseM(function (resolve, reject) {
    resolve('123');
});
mm.then(function (success) {
    console.log(success);
}, function () {
    console.log('fail!');
});