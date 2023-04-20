// 돔 요소를 만들면서 동시에 스타일을 입히는 것을 styled component라고 함

let test = function(txt){console.log(txt)}
// 함수 선언형

function test1(){}
// 함수 표현형

let test2 = ()=>{}
// 화살표 함수


test("test");
test`test`;

// ecma6 문법에서 함수의 호출과 인수 값을 ``으로 처리하면 함수의 값이 배열로 반환된다
// 이것을 이용하여 DOM 요소를 만들 때 동시에 스타일 입히는 스타일 컴포넌트가 가능함


let main = document.querySelector("main");



// 태그 이름을 인수로 받아서 해당 태그를 생성하는 함수 제작

let makeDom = (tag)=>{
    let dom = document.createElement(tag);
    dom.innerText = 'Hello';
    // return dom;
    return (css)=>{
        dom.style[css.prop] = css.value;
        return dom;
    }
    // 지금까지 함수 리턴 값은 문자/숫자였지만, 함수 값으로 리턴할 수 있음
    // []는 패키징 .color = [css.prop] prop: 'color';
}

console.log(makeDom('h1'));


/* ()는 안에 매개변수 자리에 인수를 넣는 공간
리턴하는 함수 안에 인수를 넣으려면 ()를 한 번 더 옆에 써 주어야 함

component는 하나의 기능을 하는 단위
즉 예제 상 styled component는 tag 이름을 받아서 해당 태그를 만드는데
스타일도 동시에 입힐 수 있는 함수 안에 함수를 적용한 방법임*/


main.append(makeDom('h1')({prop: 'color', value: "blue"}));


/* makeDom(tag)() <- 반환된 함수를 호출하겠다는 의미
두 번째() 안에 인수를 넣으면 반환된 함수에 인수를 대입해서 최종 호출하겠다는 의미*/

/* 위 예제는 객체의 형태로 인수를 넣어서 호출하다 보니 속성, 값의 형태인 하나만 호출할 수 있음
만약 h1의 폰트 사이즈, 폰트 패밀리, 라인하이트, 컬러 등 한 번에 적용시켜 호출한다면
위 코드는 한계가 존재함*/

let main2 = document.querySelector(".main2");

let styled = (tag) => {
    let dom2 = document.createElement(tag);

    return (css) => {
        dom2.style = css[0];
        return dom2;
    }
}

let box = styled("div")`
        width : 100px;
        height : 100px;
        border-radius : 50%;
        background-color : aqua;`;
main2.append(box);

// 0420 1교시
/* 함수의 리턴 값을 함수로 반환해서 dom요소를 만드는 동시에 스타일을 입히는 구조를 만들어냄
``(백틱)을 사용하면 안에 있는 값이 세미콜론 단위로 끊어져 배열에 저장됨 */