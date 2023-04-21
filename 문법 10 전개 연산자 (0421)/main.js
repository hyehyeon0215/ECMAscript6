let num1 = '326526236'; //문자열로 된 자료 값
let num2 = num1; //그 자료 값을 복사

console.log(num1);
console.log(num2);
//복사 대상과 복사된 값이 모두 잘 적용되어 있음
// 잘 적용되었는지 확인
num1= '231515';
// num1을 재정의 하고 콘솔을 찍어 보면 num1만 바뀌어 있는 것을 확인할 수 있음
// 이를 통해 num2는 완전한 복사가 이루어진 것으로 알 수 있음
console.log(num1);
console.log(num2);


let arr1 = [1,2,3]; //배열로 된 자료 값
let arr2 = arr1; //그 자료 값을 복사한 것

console.log(arr1);
console.log(arr2);

arr1[0] = 0;

console.log(arr1);
console.log(arr2);

/* 
자료 형태는 원시형과 참조형이 있음
원시형 = 문자열, 참조형 = 배열
참조형의 자료 값은 단순 복사로는 온전하게 복사할 수 없음
참조형의 자료는 주소의 값만 복사되기 때문에 원본이 변하면 복사된 값도 변하게 됨

따라서 다른 복사 방법이 필요함

중요!!
불변성: 기존 자료가 복사, 변형, 이동 등의 변화가 있을 때 변화 이전과 변화 이후의 자료가
서로 영향을 미치지 않는 성질 (독립적인 개체가 되어야 한다는 의미)

DOM이란? body 안의 내용이 브라우저에 의해서 해석되어져서 구현되는 내용
DOM에는 2가지 종류가 있음

리얼돔/가상돔

리얼돔 = 실제로 존재하는 돔, html에 작성함으로 구현된 돔, js로 만들어질 돔
가상돔 = js가 메모리상에서 가상으로 작성하는 돔

js에서는 이런 자료의 복사와 이동이 빈번하게 발생함
따라서 이 과정에서 이전 자료의 불변성은 매우 중요한 개념이 됨

결국 복사는 깊이 있는 복사가 필요함
*/


let arr3 = [1,2,3];
let arr4 = [...arr3];

// 전개 연산자 ...

console.log(arr3);
console.log(arr4);

arr3 = [0,2,3];

console.log(arr3);
console.log(arr4);

// 참조하는 arr3의 배열 값을 바꿔도 arr4의 값은 바뀌지 않음

let arr5 = [...arr3, 7];
console.log(arr5);

let arr6 = [...arr3, ...arr4];
console.log(arr6);


/* 
배열이란 기존의 값이 패키징 되어 있는 상태임
전개연산자로 배열을 쓰게 되면 패키징 되어 있는 값을 바로 사용할 수 있도록
패키징으로부터 꺼내 펼쳐 놓음을 의미
하지만 전개연산자 자체로는 값을 바로 사용할 수 있는 형태는 아니고, 새롭게 옮겨 담을 패키징을 한 뒤에 사용 가능
*/

console.log(arr1);
console.log(...arr1);

// 전개연산자로 객체 값을 추가할 수 있음

const obj = {
    name : "David",
    age : 20
}

const newObj = {...obj, address : "seoul"};

console.log(obj);
console.log(newObj);