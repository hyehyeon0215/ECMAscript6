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

// console.log(intro());
// console.log(intro("오은택"));

// 단락회로 평가 (단축평가)

// && || (and, or)의 경우 논리 연산자를 이용한 논리 평가를 이용해서 단축적인 코드 작성을 하는 방법

// A&&B -> A와 B가 모두 참이어야 참이다라는 논리평가인데 이것을 조건문으로 이용할 수 있습니다
// 즉 A가 참인지 거짓인지에 따라서 && 뒤에 있는 B가 평가될지 안 될지가 결정됩니다
// A가 거짓이면 바로 종료, A가 참이면 B가 실행됩니다

// 단점 단락회로평가를 if문 혹은 삼항 연산자를 대체할 경우 논리적으로나 실용적으로는 문제가 없지만, 협업에서 문제가 발생합니다 따라서 가급적 삼항 연산자를 이용하고 단락회로평가는 지양하는 편입니다

// console.log("cat" && "dog");
// // cat이라는 문자열은 문제가 없는 자료형이기 때문에 true으로 인식함 따라서 &&는 논리평가 한 뒤에 뒤에 오는 dog를 출력함


// console.log("cat" || "dog");
// // 

// function intro(name) {
//     !name && (name = 'David');
//     return "My name is " + name;
// }
// console.log(intro());




// () 안의 논리평가에서 거짓이 아닌 참을 추적
//  nmae이 존재하면 참으로 인식하기 때문에 존재하는 name 을 반환해서 사용하고 name이 없으면 거짓으로 인식해서 참을 찾기 위해서 다음 ||을 넘어 진행이 되는데 우리가 'david'라고 참을 정확하게
// 디폴트 값으로 적용하였기 때문에 name이 없으면 참으로 인식될 'david'를 적용합니다

// function intro(name) {
//     return 'my name is ' + (name || 'david');
// }
// console.log(intro());





//  --------------* ecma6 문법 *-----------------
// 매개변수 자리에 디폴트 값을 바로 지정

// function intro(name = "David") {
//     return "My name is " + name;
// }
// console.log(intro());


// 매개변수가 2개 이상인 경우에도 디폴트 파라미터가 가능하다 (장점)

// function game(){}
// let game2 = function(){}

// let intro = function(name = 'David', interests = "Game"){
//     return "My Name is " + name + " and I Love " + interests + '.'
// }
// console.log(intro());

// 매개변수가 여러 개인 경우 매개변수 자리에 , 연결해서 작성 가능합니다 (88-93)
// name = "David", interests = "Game"
// name, interests가 존재한다면 그것을 그대로 사용하고, 없으면 = 이후의 값을 디폴트 값으로 사용


// let intro = function(name = 'David', interests = "Game"){
//     return `My Name is ${name} and I Love ${interests}.`
// }
// console.log(intro());

// // 템플릿 리터럴 (백틱 사용)






let defaults = {name: "David", interests : "Game"};

let intro = function(opt = defaults) {
    // opt는 intro({name: "오은택", interests: "reading book"}) 이곳에서
    // { name: "오은택", interests: "reading book"}이 객체를 의미합니다 즉 매개변수로 써준 값을 대신한다
    // 따라서 opt.name은 객체로 인수 값을 적은 내용에서 키 값이 name인 값이 적용되는 것
    // opt.interests는 객체로 인수 값을 적은 내용에서 키 값이 interests인 값이 적용됨
    return `My Name is ${opt.name} and I Love ${opt.interests}.`
}

console.log(intro());
console.log(intro({ name: "오은택", interests: "reading book"}));