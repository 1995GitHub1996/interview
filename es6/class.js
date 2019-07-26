class MyClass {
    constructor(){
        this.a = 'a';
        this.getThis = () => {
            return this;
        };
    }
    sta() {
        console.log(this);
        console.log('this is static');
    }
    static getThis() {
        return this;
    }
    test() {
        console.log('test');
    }
    [Symbol.hasInstance](foo) {
        return foo instanceof Number;
    }
  }

const myClass = new MyClass();
console.log(myClass.test());


console.log([1, 2, 3] instanceof new MyClass());

const fn = myClass.getThis;
console.log(fn().getThis());                      // 调用实例的getThis的getThis方法， 而不是prototype上的getThis方法