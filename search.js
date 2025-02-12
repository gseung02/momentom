const search = document.querySelector('.search>input');
const searchIcon = document.querySelector('.search>i');

// Enter 키로 검색
search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && search.value.trim() !== '') {
        const searchQuery = encodeURIComponent(search.value.trim());
        window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }
});

// 검색 아이콘 클릭으로 검색
searchIcon.addEventListener('click', () => {
    if (search.value.trim() !== '') {
        const searchQuery = encodeURIComponent(search.value.trim());
        window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }
});

// 포커스 시 자동 선택
search.addEventListener('focus', () => {
    search.select();
});