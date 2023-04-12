/*
JavaScript의 첫걸음은
JavaScript로 동작을 넣어줄 대상을
변수로 담는 것
*/

// 햄버거 버튼 동작을 위한 변수
let btnCall = document.querySelector(".btnCall");
// 모바일 메뉴가 동작하기 위한 변수
let menuMo = document.querySelector(".menuMo");

btnCall.onclick = function(e) {
    e.preventDefault(); // a 태그의 링크 중복 방지
    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
}