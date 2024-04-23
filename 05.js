// 일급객체로서의 함수
const person = {
    name: "john",
    age: 31,
    isMarried: true,

    // 여기에서는 화살표 함수를 쓰면 안됨
    // sayHello: () => {
    //    console.log(`hello, my name is  ${this.name}`);
    // }
    sayHello: function () {
        // console.log('hello, my name is ' + this.name);
       console.log(`hello, my name is  ${this.name}`);
    }
};

person.sayHello();
