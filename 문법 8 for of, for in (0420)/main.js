let colors = ['red', 'green', 'blue'];

colors.map((el)=>{console.log(el)});
// map은 무조건 배열만


for (let el of colors) {console.log(el)};
// for of는 유사배열, 문자열도 가능

let h1 = document.querySelector("h1");
let txt = h1.innerText;
let tags = '';

h1.innerText = '';
for(let el of txt){tags += `<span>${el}</span>`}

// 배열을 반복하는 내용


// 객체 배열


let student = {
    name : 'andy',
    age : 40,
    isMale : true,
    hobby : 'reading'
}

for(let el in student){console.log(student[el])};
// for in 반복문은 객체를 반복 돌면서 탐색시 key 값이 아닌 el 즉 각각의 요소를 의미하는 변수로 탐색하여 반복합니다 <-- 주의