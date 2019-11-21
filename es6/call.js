
function Dog() {
    this.name = 'hani';
    this.speak = 'wangwang';
    this.test = (() => {
        console.log(this.speak);
    });
   
}

const dog = new Dog();
Dog.prototype.pro = function () {
    console.log(this.name);
};

console.log(dog.toString());
console.log(dog.pro());

console.log(dog.hasOwnProperty('toString'));

