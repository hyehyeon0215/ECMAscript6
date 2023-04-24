// 일반 함수는 하나의 값 또는 0개의 값 반환

// 하지만 제너레이터를 사용하면 여러 개의 값을 필요에 따라서 하나씩 변환(yield) 할 수 있음
// 즉 원하는 시점에서 순차적으로 동기적으로 호출하면서 반환하는 게 가능합니다

// 제너레이터를 사용하는 환경은 대규모 프로젝트에서만 가능

// 제너레이터 함수는 제너레이터 객체를 생성함
// 결과 값이 {value: 'test1', done: false}와 같은 객체 형태로 나오게 됨
// 이 결과 값의 객체를 iterable object라고 하는데 기존의 객체와 아주 살짝 다름

// next()는 제너레이터의 주요 메서드입니다
// next()로 제너레이터를 호출하면 가장 가까이에 있는 yield를 만날 때까지 실행하다가
// yield를 만나면 실행을 멈추고 산출하고자 하는 값을 반환
// {value: 'test1', done: false} <-- 이런 식으로 yield로 불러온 함수의 밸류와 함수 실행 여부를 도출
// value -> 산출 값, 해당 함수의 결과 값
// done -> 함수의 코드가 실행되었는지 여부

// 결과적으로 제너레이터는 함수의 동기적 호출이 주요 목적


// let generator = gernerateSequence();
// console.log(generator);


function test1() {
    return 'test1';
}

function test2() {
    return 'test2';
}

function test3() {
    return 'test3';
}

// function *generator
function* generator() {
    yield test1();
    yield test2();
    yield test3();
}

const result = generator();

const a = result.next();
console.log(a);
// {value: 'test1', done: false}


const b = result.next();
console.log(b);

const c = result.next();
console.log(c);

const d = result.next();
console.log(d);