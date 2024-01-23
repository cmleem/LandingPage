
//카카오맵 지도 생성하기
var mapContainer = document.getElementById('map'); // 지도를 표시할 div
mapOption = {
    center: new kakao.maps.LatLng(37.5666103, 126.9783882), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption);




//카카오맵 지도에 사용자 컨트롤 올리기
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.5666103, 126.9783882), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
function setMapType(maptype) {
    var roadmapControl = document.getElementById('btnRoadmap');
    var skyviewControl = document.getElementById('btnSkyview');
    if (maptype === 'roadmap') {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
    }
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}




//카카오맵 마커 생성하기
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.5666103, 126.9783882), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다
var markerPosition  = new kakao.maps.LatLng(37.5666103, 126.9783882);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);




//모달 창 뜨게하기
const modal = document.querySelector('#modal');
const openModal=document.querySelector(".subs-btn");
const closeModal = document.querySelector(".modal-btn");
// openModal.addEventListener('click', function() {
//     modal.style.display = "flex";
// })
// closeModal.addEventListener('click', function() {
//     modal.style.display = "none";
// })
//이메일 입력 필수 기능
const submitBtn = document.querySelector(".subs-btn");
const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const email = document.querySelector("#email-value");
function emailValidChk(email){
    if(!emailRegex.test(email)){
        return false;
    }else{
        return true;
    }
}
function handleBtn(){
    const inputValue = email.value;
    if(!emailValidChk(inputValue)){
        alert('올바른 형식의 이메일을 입력하세요.');
        location.reload();
    }
    else{
        openModal.addEventListener('click', function() {
            modal.style.display = "flex";
        })
        closeModal.addEventListener('click', function() {
            modal.style.display = "none";
            location.reload();
        })
    }
}
submitBtn.addEventListener('click', handleBtn);



//상단 콘텐츠 다운로드 버튼 구현
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



//Copy URL 버튼 구현
const copyBtn = document.querySelector(".download-btn-1");
function copyUrl(){
    let url = window.location.href;

    navigator.clipboard.writeText(url).then(()=>{
        alert("URL이 복사되었습니다.");
    });
}
copyBtn.addEventListener('click',copyUrl);



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




//무한 스크롤
const imageList = document.querySelector(".photo-list");
const moreBtn = document.querySelector(".more-btn");
let pageToFetch = 1;
async function fetchImages(pageNum){
    try {
        const response = await fetch('https://picsum.photos/v2/list?page='+pageNum+'&limit=10');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);

        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas){
    datas.forEach((item)=>{
        imageList.innerHTML += "<a href=''><img src="+ item.download_url +" onclick=\"window.open(this.src)\"></a>";
    });
}
moreBtn.addEventListener('click', function () {
    window.addEventListener('scroll', () => {
        // 스크롤이 상단으로부터 얼마나 이동했는지 알아야 한다. (뷰포트 높이 + 스크를된 길이)
        // 화면에 로딩된 페이지의 전체 높이를 알아야 한다.
        // 뷰포트 높이 + 스크롤된 길이 + 5~10px === 화면에 로딩된 페이지의 전체 높이

        if (window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight) {
            fetchImages(pageToFetch++);
        }
    })
});






