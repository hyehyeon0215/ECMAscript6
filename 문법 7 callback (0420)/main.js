/* 어떤 코드를 바로 실행하지 않고 일정 시간 딜레이 한 후에 실행해야 하는 경우가 있음 
이럴 때는 setTimeout이라는 내장 함수
첫 번째 인수는 콜백함수, 두 번째 인수는 시간(밀리 초 단위)
*/


// setTimeout(() => console.log("2초 후에 실행됩니다"), 2000);

// setTimeout(콜백함수, 시간);

function test(delay, callback) {
    setTimeout(()=>{
        callback();
    },delay)
}

// test(() => {console.log("콜백"), 1000});


/* 
동기식 방식과 비동기식 방식

동기식 방식은 직렬형으로 A작업이 끝나야지만 후속으로 B작업으로 처리할 수 있는 방법
이 방법은 대략적으로 처리되는 일의 시작과 끝나는 시간을 짐작할 수 있음

비동기식 방식은 병렬형으로 작업에 참여하는 주체만큼 동시에 작업이 시작될 수 있음
이 방법은 어떤 주체가 처리를 마칠지를 가늠할 수 없기 때문에 일의 시작과 끝을 짐작할 수 없음

따라서 반드시 A작업이 마치고 B작업이 실행되어야 하는 경우에는 무조건 동기식 방법을 채택해야 함
*/



/* // 순서 1. 스타트 콘솔문 실행(js)
console.log("start");


// 순서 2. test 함수 호출(js) -> settimeout이 web api에 전달(js)
// 정의한 콘솔문이 js에 전달됨 (web api)
test(()=> {
    console.log("콜백1");
}, 0);
// 순서 3. test 함수 호출(js) -> settimeout이 web api에 전달(js)
// 정의한 콘솔문이 js에 전달됨 (web api)
test(()=> {
    console.log("콜백2");
}, 0);
// 순서 4. test 함수 호출(js) -> settimeout이 web api에 전달(js)
// 정의한 콘솔문이 js에 전달됨 (web api)
test(()=> {
    console.log("콜백3");
}, 0);


// 순서 5. 엔드 콘솔문 실행
console.log("end"); */

/* 위 코드가 만약 자바스크립트 엔진에서만 작동하는 작업이라면 동기적으로 실행이 됨
예상대로 스타트 - 테스트함수들 - 엔드 순으로 됐을 것

하지만 settimeout은 web API와 분담하는 작업이기 때문에 비동기적으로 실행이 됨*/



console.log("start");

test(2000, ()=>{console.log("콜백1");
    test(2000, ()=>{console.log("콜백2");
        test(2000, ()=>{console.log("콜백3"); console.log("end");})
    })
})


// 콜백함수 : 함수가 종료되는 시점에 다시 함수를 호출하여서 동기적으로 실행할 수 있게 하는 방법
// 단점: 코드가 난잡함, 보기 불편해서 유지보수가 어려워 사용하기 힘듦
// 하지만 콜백은 그럼에도 사용함 복잡한 코드에서는 다른 방법을 차용하고, 단순 그 다음으로 연결될 동기적 상황에서는 콜백을 애용함

/* 
따라서 동기적 작동방식 1단계: 콜백함수
2단계: promise
3단계: async await*/

