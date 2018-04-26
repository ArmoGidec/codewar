function Event() {
    let subscribes = [];
    this.subscribe = function(...funcs) {
        for (let func of funcs) {
            if (typeof func === 'function') subscribes.push(func);
        }
        return funcs.length;
    };

    this.emit = function(...args) {
        console.log(args);
        that = this;
        subscribes.forEach(func => {
            func.apply(that, args);
        });

    };

    this.unsubscribe = function(...funcs) {
        for (let func of funcs) {
            if ((i = subscribes.lastIndexOf(func)) !== -1) subscribes.splice(i, 1);
        }
        return funcs.length;
    };

    return this;
}
