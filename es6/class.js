class MyClass {
    constructor(){
        this.a = 'a';
        this.getThis = () => {
            return this;
        };
    }
    getThis() {
        return this;
    }
    [Symbol.hasInstance](foo) {
        return foo instanceof Number;
    }
  }

const myClass = new MyClass();
console.log([1, 2, 3] instanceof new MyClass());

const fn = myClass.getThis;
console.log(fn().getThis());
