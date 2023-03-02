const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// 돋보기를 클릭해도 포커스 가능
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

// focus태그가 클릭이 되면 클래스'focused' 가 추가 됨
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// 다시 클릭 되면 추가된 내용들이 사라짐
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2023
