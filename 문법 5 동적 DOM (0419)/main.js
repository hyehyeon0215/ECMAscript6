// document.createElement("nodename");
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