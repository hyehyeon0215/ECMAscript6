// 기존 es5에서의 배열 합치기

let a = [1,2,3];
let b = [4,5,6];

const ab = a.concat(b);

console.log(ab); [1,2,3,3,4,5]

// 배열의 중복값을 제거하고 싶을 때

const numbers = [1, 1, 2, 2, 3, 4, 5];

const newNumber = numbers.filter((el, index)=> {
    // 필터에 의해서 밑에 있는 return nubers.indexOf(el) === index;을 true 값으로 반환되는 값만 모아서 새로운 배열을 만들어주는 것
    // 필터는 map과 양상이 비슷하지만 콜백함수를 통해서 새로운 배열을 만드는 것(걸러주는 것)/map은 콜백함수를 적용시키는 것
    return numbers.indexOf(el) === index;
})

console.log(newNumber);

/* 
filter(); -> 메소드는 주어진 배열의 값들을 순차적으로 접근하여 콜백함수를 통해 true 값을 반환하는 요소들을 기준으로 신규 배열을 만들어 반환함
map(); 메소드(내장함수 메소드) -> 5개의 요소를 판단한다면 결과로 5개의 결과 값이 도출
reduce(); -> 배열의 각 요소를 순차적으로 접근해서 콜백함수의 실행 값을 누적해서 결과 도출
이 세 메소드는 기본적으로 순차적으로 해당 값에 접근하는 방식으로 일을 처리함
*/


// 필터 - 콜백함수를 거쳐 true인 값만 <<걸러내어>> 새로운 배열 반환
// 맵 - 각 배열 값을 콜백함수를 <<적용시킴>> (콜백 함수 전과 배열 개수가 같음 반복문처럼 쓰임)
// 리듀스 - 콜백함수를 실행시켜 누적시킨 결과 값을 반환함 (콜백 전과 개수가 다를 수도 있음 (개수 이하)) -> 중복 값을 없앨 수 있음


let dup = [1, 2, 2, 3];

// const dup2 = dup.reduce((arr, cur)=>{없으면 추가 있으면 버림});

const dup2 = dup.reduce((arr, cur)=>arr.includes(cur) ? arr : [...arr, cur],[]);
// reduce((시작값, 각각의 요소들)=>{함수})

// arr = []
// cur = 1

// arr [1]

// arr [1]
// cur = 2

// arr [1,2]

// arr = [1,2]
// cur = 2

// arr = [1,2]
// 2는 탈락

// arr = [1,2]

// arr = [1,2]
// cur = 3
// arr = [1,2,3]


// console.log(dup2);




/* set 객체는 중복되지 않는 유일한 값들의 집합
set 객체는 동일한 값을 중복해서 포함할 수 없으며, 요소 순서는 의미가 없음
인덱스 요소를 접근할 수 없고, 따라서 수학적인 집합을 구현하기 위한 자료구조 */

const set = new Set();
console.log(set);


const set1 =new Set([1,2,3,3,3,4,4,4,5]);
console.log(set1);

// 배열로 값을 중복해서 제공하면 중복된 값을 제거한 고유 값으로 정렬함과 동시에 객체로 반환
// set은 객체로 만드는 메서드


const set2 = new Set("Hello");
console.log(set2);

// 문자열도 받아서 객체로 만들음 (중복 값 제거)


// const set3 = [...new set([1,2,2,3,4,4])];
// console.log(set3);

// set은 객체로만 반환이 되지만 값을 배열로 담아야 할 때 사용하는 방법은 전개연산자
// 중복을 제거할 해당 배열을 set으로 반환한 뒤 전개연산자를 이용하여 값을 풀어준 뒤 다시 []으로 감싸 배열로 할당



// 전개연산자를 통한 객체의 통합

const obj1 = {name: 'David', age: 20};
const obj2 = {name: 'Andy', address: 'seoul'};
const com = {...obj1, ...obj2};
console.log(com);

// 객체의 키 값은 유니크 한 값으로 중복을 허용하지 않음
// 따라서 객체가 병합될 때 뒤에 병합되는 값으로 앞의 값이 덮어 써지면서 병합이 됨
// 즉 키 값의 고유성이 지켜짐