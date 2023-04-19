// 디폴트 파라미터 - 인수를 넣지 않고 함수를 호출하였을 때를 대비하여 개발자가 디폴트 값을 미리 지정하는 코드
// ecma6 이전에는 손수 코드를 작성했어야 했음 

// function info(name) {
//     console.log(name)
// }

// info(); 

// 4-8 undefined 에러

// function intro(name) {
//     // if(name === undefined) name = " David";
//     // return "My name is" + name;
//     name = name === undefined ? " David" : name;
//     return "My name is" + name;
// }

// intro() 함수를 호출할 때 인수를 넣으면 if문은 무시되고 바로 리턴을 만나서 인수가 출력된 결과 반환
// 인수가 없다면 if문을 거쳐서 name에 'David'라는 디폴트 값이 적용됨

console.log(intro());
console.log(intro("오은택"));

// 단락회로 평가 (단축평가)

// && \\ (and, or)의 경우 논리 연산자를 이용한 논리 평가를 이용해서 단축적인 코드 작성을 하는 방법

// A&&B -> A와 B가 모두 참이어야 참이다라는 논리평가인데 이것을 조건문으로 이용할 수 있습니다
// 즉 A가 참인지 거짓인지에 따라서 && 뒤에 있는 B가 평가될지 안 될지가 결정됩니다
// A가 거짓이면 바로 종료, A가 참이면 B가 실행됩니다

// 단점 단락회로평가를 if문 혹은 삼항 연산자를 대체할 경우 논리적으로나 실용적으로는 문제가 없지만, 협업에서 문제가 발생합니다 따라서 가급적 삼항 연산자를 이용하고 단락회로평가는 지양하는 편입니다

console.log("cat" && "dog");
// cat이라는 문자열은 문제가 없는 자료형이기 때문에 true으로 인식함 따라서 &&는 논리평가 한 뒤에 뒤에 오는 dog를 출력함


function intro(name) {
    !name && (name = 'David');
    return "My name is " + name;
}
console.log(intro());
