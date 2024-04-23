// Set
// 고유한 값을 저장하는 자료구조, 값만 저장한다.
// 키를 저장하지는 않는다.
// 값이 중복되지ㅣ 않는 유일한 요소로만 구성된다.
// 값 추가, 검색, 삭제, 모든 값 제거, 존재 여부 확인
// 집합 


const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value3");
mySet.add("value4");
mySet.add("value5");

//console.log(mySet.size); //2
//console.log(mySet.has("value1")); //  true
//console.log(mySet.has("value2")); //true
//console.log(mySet.has("value3")); //false

//Iteratior, 반복
for (const value of mySet.values()) {
    console.log(value);
}