// 단축 속성명 : property shorthand
const name = "abc";
const age = "30";

// key -value, 같으면 생략가능
const obj = {name, age};
const obj1 = {name : name, age : age};

// 전체구문 = Spread operator
// destructuring과 함께 가장 많이 사용되는 es6문법 중 하나!
// let arr = [1,2,3];

// let newArr = [...arr, 4];
// console.log(arr);
// console.log(newArr);

// 객체
let user = {
    name: "abc",
    age: 30
};

let user2 = {...user};

console.log(user);
console.log(user2);

// 나머지 매개변수(rest parameter)

function exampeFunc(a, b, c, ...args) {
    console.log(a, b, c);
    console.log(...args); // args ... 이 있으면 매개변수로 저장, ...이 없으면 배열 형태로 저장
}
// exampeFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
const testValue = "안녕하세요";
console.log(`hello world ${testValue}`);
console.log(`
    hello,
        my name is javascript!!!
        good!`

);
