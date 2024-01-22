
//모달 창 뜨게하기
const modal = document.querySelector('#modal');
const openModal=document.querySelector(".subs-btn");
const closeModal = document.querySelector(".modal-btn");
openModal.addEventListener('click', function() {
    modal.style.display = "flex";
})
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
})


//다운로드 버튼 구현
document.querySelector('.download-btn-2').addEventListener('click', function() {
    // 이미지의 URL을 가져옴
    var imageUrl = document.querySelector('.top-img').src;

    // 가상의 링크 엘리먼트 생성
    var downloadLink = document.createElement('a');

    // 다운로드 링크의 속성 설정
    downloadLink.href = imageUrl;
    downloadLink.download = 'cat_image.jpg';

    // 링크를 클릭하여 다운로드를 시작
    downloadLink.click();
});

//로고 누르면 새로고침
document.querySelectorAll('.logoLink').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 동작 방지 (링크의 href로 이동하는 것을 막음)
        location.reload(); // 페이지 새로고침
    });
});

//마우스 오버 시 스크롤 버튼 이미지 변환
const scrollImg=document.querySelector(".scroll-btn");

scrollImg.addEventListener('mouseover',(event)=>{
    scrollImg.src="img/scroll-top-btn-2.png";
});
scrollImg.addEventListener('mouseout',(event)=>{
    scrollImg.src="img/scroll-top-btn-1.png";
});

//스크롤 버튼 클릭 시 상단 이동
const scrollTopBtn = document.querySelector(".scroll-btn");

scrollTopBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

//고양이 이미지 클릭 시 원본 사진 보기
const clickImg = document.querySelector(".photo-list");
function handleImageClick(event) {
    const imageUrl = event.target.src;
    window.open(imageUrl);
}

for (var i = 0; i < clickImg.length; i++) {
    clickImg[i].addEventListener('click', handleImageClick());
}