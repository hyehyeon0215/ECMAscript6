/* // document.createElement("nodename");
// 보통 이 인수로 넣는 노드는 "문자열로 태그이름을 작성"
// createElement 이 메소드는 단일 매개변수 값을 받고, 필수로 받아야 한다 -> 요소 객체 생성

let h1 = document.createElement("h1");
let a = document.createElement("a");
let href = document.createAttribute('href'); //href=""
let target = document.createAttribute('target'); //target=""

href.nodeValue = 'http://www.naver.com'; //href="http://www.naver.com"
target.nodeValue = '_blank'; //target = "_blank"

a.setAttributeNode(href);
a.setAttributeNode(target);

// <a href="http://www.naver.com" target="_blank"></a>
// setAttribute("속성 이름", "속성에 넣을 값"); --> set과 create를 합친 것

a.innerText = "네이버";
// <a href="http://www.naver.com" target="_blank">네이버</a>

h1.append(a);
// h1 안쪽 마지막에 () 내용을 넣어달라는 메서드
// <h1><a href="http://www.naver.com" target="_blank">네이버</a></h1>

document.body.append(h1);
// 위에서 만든 코드를 body 태그 안에 넣음

// 여기까지가 node를 생성하여 동적 dom을 만드는 방법
// 어렵고 복잡하지만 알고는 있어야 함 */








//2. 문자열을 innerHTML로 조합하여 dom 생성

// let href = "https://www.naver.com";
// let target = "_blank";
// let txt = "네이버";
// let tags = '';

// tags += '<h1>';
// tags += '<a href=' + href + ' target=' + target + '>' + txt + '</a>';
// {/* <a href="http://www.naver.com" target="_blank"></a> */}
// tags += '</h1>';
// console.log(tags);

// document.body.innerHTML = tags;









// 3. 템플릿 리터럴을 활용하여 객체 형식의 dom 형성 방법 --> 실무적
// 실무에서는 자료가 여러 개인 경우 객체나 배열로 바인딩 해야 합니다
//  또한 문자열 안에 변수를 넣는 경우 ecma6 문법인 템플릿 리터럴을 사용합니다

// let domInfo = {
//     href : "http://www.naver.com",
//     target : "blank",
//     txt : "네이버"
// }

// let tags = `<h1><a href="${domInfo.href}" target="${domInfo.target}">${domInfo.txt}</a></h1>`;

// console.log(tags);
// document.body.innerHTML = tags;








// 4. dom을 반복해서 생성해야 하는 경우 (실무에서 많이 사용됨)

let domInfo = [{
    href : "http://www.naver.com",
    target : "blank",
    txt : "네이버"
},{
    href : "http://www.nate.com",
    target : "blank",
    txt : "네이트"
},{
    href : "http://www.google.com",
    target : "blank",
    txt : "구글"
}]
// 객체 배열


let tags = '';
// map 반복에서는 두 가지의 매개변수 자리가 존재함
// 각각의 개체를 의미하는 el과 반복을 도는 index라는 매개변수가 필요함
// 반복 대상에 따라서 어느 하나의 매개 변수는 쓰지 않을 때도 있지만, 지운다면 에러가 발생
// 그렇기 때문에 지우진 않고, 쓰지 않아서 el에 색상이 변경되는 것을 피하기 위해서 _로 표현하기도 함(사용 안 할 땐 무조건 _)
domInfo.map(function(_, index){
    return tags += 
        `<h1>
            <a href="${domInfo[index].href}" target="${domInfo[index].target}">${domInfo[index].txt}</a>
        </h1>`;
})

document.body.innerHTML = tags;
// el 이름은 바꿀 수 있음
