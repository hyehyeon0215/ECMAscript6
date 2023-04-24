// filter를 활용하여 최대/최소 값을 구하는 코드
// Math() 함수와 Math.max(), Math.min();
// 이것을 사용하여 배열에 담긴 여러 값 중 최대, 최소를 구할 수 있음
// 그러려면 배열의 원소 하나하나에 접근하여 Math.max(), Math.min()의 인수로 넣어주면 됨
// 이런 방법으로 es5에서 사용하는 apply()와 es6에서 사용하는 전개연산자 이용 학습




// es5 apply()를 사용한 방법
// const arr = [1,2,3,4,5];
// const max = Math.max.apply(null, arr);
// const min = Math.min.apply(null, arr);

// console.log(max);
// console.log(min);




// apply()는 매개변수로 함수에서 사용할 this 객체와 호출하는 함수를 입력 받음
// this 객체는 추후 문법으로 학습

// 위의 코드에서 함수 내부에서 사용할  this 객체가 없기 때문에 null 사용

// es5에서는 apply()라는 함수 호출 메서드를 사용하여 각 배열의 값을 접근
// 즉 불변성 유지를 달성한 상태에서 배열을 복사하는 방법이 없었기 때문에 함수 개별의 값을 따로 불러 사용하는
// 번거로움이 있었음




// es6 전개연산자를 사용한 방법
// const maxV = Math.max(...arr);
// const minV = Math.min(...arr);
// console.log(maxV);
// console.log(minV);

// 전개연산자를 사용하여 불변성을 유지한 채 인수 값으로 arr을 직접 넣어주면 끝나는 쉽고 가독성 좋은 방법



const guys = [
    { name: 'YD', money: 500000 },
    { name: 'Bill', money: 500000 },
    { name: 'Mark', money: 400000 },
    { name: 'Andy', money: 300000 },
    { name: 'Roky', money: 200000 },
    { name: 'Kan', money: 100000 },
    { name: 'Sam', money: 100000 }
];

const rich = guys.filter((el, _) =>{
    const max = Math.max(...guys.map(el => el.money));
    return el.money === max;
});

// == 값만 똑같으면 같음 === 자료형도 구분해서 완전히 똑같아야 함

console.log(rich);

/* Math.max를 사용하는데 필요한 값은 guys 안의 각 객체의 money 값을 비교해야 함
따라서 guys.map(el => el.money)으로 guys 각 개체의 money 값을 순차적으로 접근하여 복사하고, Math.max에 인수로 담도록 하는 코드*/


const poor = guys.filter((el, _)=>{
    const min = Math.min(...guys.map(el => el.money));
    return el.money === min;
});

console.log(poor);
