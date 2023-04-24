// Destructure assignment

// 기존의 배열, 객체는 존재한 상태여야 함

const arr = ['red', 'green', 'blue'];

// 기존의 방법으로 배열, 객체에서 해당 값을 뽑아내어 변수로 담고자 한다면
// 하나하나의 값을 변수로 선언하고 배열, 객체에서 탐색해서 할당해야 했음
/* const red = arr[0];
const green = arr[1];
const blue = arr[2]; */

// 비구조화할당, 구조분해할당

const [red, green, blue] = arr;
// 오리지널 배열이 존재하는 상태에서 변수명을 배열 형태로 받고 배열 이름을 대입해서
// 배열 값을 담기만 함
// 이때 배열의 순서에 맞춰서 구조를 오프 하고 할당하는 것에 주의
// 배열의 탐색은 인덱스(순서)를 기준으로 하기 때문에 순서가 중요했지만 객체 탐색은 키 값으로 하기 때문에, 객체는 변수 지정이 불가하고 키 값을 그대로 사용해야 함



// const student = {
//     name : 'David',
//     age : 40,
//     address : "Seoul"
// }

// const { name, age, address } = student;

// 비구조화할당의 장점
/* 변수 할당을 반복할 필요 없이 한곳에 선언하기 때문에 코드 단축과 가독성이 더 좋음 -> 유지보수 용이 */
// 디폴트 파라미터 설정이 가능하기 때문에 실무에서 자주 사용함
// 또한 js 라이브러리인 리액트, 뷰 등의 문법체계에서는 기본적으로 사용되는 문법이기 때문에 프론트엔드에서는 잘 알아야 함


// [{}, {}, {}] = 객체배열 => js에서는 자료들을 저장하는 방식을 json이라고 함


const studentInfo = [
    {
        name : "David",
        age : 40,
        isMale : true
    },
    {
        name : "Emily",
        age : 20,
        isMale : false
    },
    {
        name : "Paul",
        age : 30,
        isMale : true
    }]

    // 객체배열에서 자료를 탐색할 때
    const name1 = studentInfo[0].name;
    console.log(name1);


    // const [David, Emily, Paul] = studentInfo;
    // const {name} = David;
    // console.log(name);


    const styles = {
        size: {
            width: 300,
            height: 200
        },
        color: {
            fontColor: 'red',
            bgColor: 'blue'
        }
    }

    const {size : {width, height}, color : {fontColor, bgColor}} = styles;

    // 비구조화할당을 사용하는 궁극적인 목적은, 코드의 가독성을 높이고, 디폴트 파라미터를 설정하기 위한 방법으로 사용함


    // const MyInfo = (obj) => {`제 이름은 ${obj.name}이고 ${obj.age}살이며 직업은 ${obj.job}입니다`};
    // console.log(David({name: "홍길동", age: 20, job: '개발자'}));
    // 오류 코드







/*     const myInfo = (name, age, job, hobby) => `제 이름은 ${name}이고 나이는 ${age}이며 직업은 ${job}입니다 그리고 ${hobby}을 좋아합니다`;
    // {} 안에 ``(백틱)을 사용하게 되면 {} 때문에 백틱이 무시가 됨
    // ``을 {}로 묶으면 인수 안에 인수를 넣는 형태가 되기 때문에 undefind가 됨

    console.log(myInfo('홍길동', 20, '개발자', '게임'));

    // 실무에서 가장 중요한 것은 협업이기 때문에, 걸림돌이 되는 것은 지양해야 함 */
    // 안 씀





/* const myInfo = (obj) => `제 이름은 ${obj.name}이고 나이는 ${obj.age}이며 직업은 ${obj.job}입니다 그리고 ${obj.hobby}을 좋아합니다`;

// obj란 함수를 호출하는 곳에서 인수를 객체로 넣어주는데, 그 넣는 인수 객체를 받아주는 매개변수라고 할 수 있음
// obj는 변수이고 변수 안 각각의 키 값으로 들어가 있는 값들을 꺼내어 각 해당하는 부분에
// name, age, job 등이 들어가야 하므로 각각의 값에 obj.name 등으로 객체 안의 값을 불러와야 합니다

console.log(myInfo({
    name: '홍길동',
    age: 20,
    job: '개발자',
    hobby: '게임'
}));

// (매개변수를 객체로 바인딩 한 방식)
단점: 코드의 가독성이 떨어지고, 디폴트 파라미터를 넣을 수 없음
안 씀 */





const myInfo = ({name, age, job='무직', hobby}) => `제 이름은 ${name}이고 나이는 ${age}이며 직업은 ${job}입니다 그리고 ${hobby}을 좋아합니다`;

console.log(myInfo({
    name: '홍길동',
    age: 20,
    job: '개발자',
    hobby: '게임'
}));

// 비구조화할당
// 코드의 가독성을 높이기 위하여 obj를 객체를 구조분해할당으로 매개변수 자리에 넣어줌으로 바로 해당 키 값을 알 수 있고,
// 값을 넣는 구간에도 obj.name처럼 불필요한 변수를 사용하지 않고 직관적인 값을 넣어 줄 수 있음
// 또한 구조분해할당으로 넣는 매개변수 자리에 디폴트 파라미터를 넣어 줄 수도 있음