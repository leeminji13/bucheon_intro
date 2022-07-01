// 상단 패밀리사이트 
    let family = document.querySelector('.family')
    let faul = document.querySelector('.faul')

    family.addEventListener('click',function(){
        //클릭하면 실제로 할 일
       faul.classList.toggle('d-none');
    });

//메인스와이퍼
    let current = 0;
    //li 위치를 나타내는 변수
    showSlides();
    //기본 첫 번째 li를 보여줌

    function showSlides(){
        let slides = document.querySelectorAll(".textSwiper > li");
        for (let i = 0; i < slides.length; i++){
            slides[i].style.opacity = "0";
            //모든 li 감춤
        }
        current++;
        //다음 li로 이동
        if(current > slides.length) //마지막 li라면
            current = 1;//첫번째로 이동
            slides[current - 1].style.opacity = "1";//현재 위치 li표시
            setTimeout(showSlides, 800)//0.8초마다 showSlides()함수를 반복 실행

    }

//네비게이션
    let trigger = document.querySelector("#trigger")
    let inner = document.querySelector(".inner")
    let menuWrap = document.querySelector(".menuWrap")

    trigger.addEventListener('click', function(){
        inner.classList.toggle('naviStyle');
    })




