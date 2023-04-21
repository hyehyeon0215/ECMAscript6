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


    const MyInfo = (obj) => {`제 이름은 ${obj.name}이고 ${obj.age}살이며 직업은 ${obj.job}입니다`};

    console.log(David({name: "홍길동", age: 20, job: '개발자'}));

