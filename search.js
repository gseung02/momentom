const searchForm = document.getElementById('search');
const searchInput = document.querySelector('#search>input');
const searchIcon = document.querySelector('#search>i');

// 서치 이벤트 내용
const searchEvent = () => {
  const query = searchInput.value.trim(); // 입력된 검색어 가져오기
  
  if (query) {
  // 구글 검색 URL 생성
  let googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  // 새 탭에서 구글 검색 열기
  window.open(googleSearchURL, '_blank');
  }
  searchInput.value = '';
}

// 폼 제출 이벤트 처리
searchForm.addEventListener('submit', (e) => {
  e.preventDefault(); // 폼 제출 시 페이지 새로 고침 방지
  searchEvent();
});
// 아이콘 클릭 이벤트 처리
searchIcon.addEventListener('click',(e) => {
  e.preventDefault();
  searchEvent();
});