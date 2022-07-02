// 상단 패밀리사이트 
    let family = document.querySelector('.family')
    let faul = document.querySelector('.faul')

    family.addEventListener('click',function(){ //클릭하면 실제로 할 일
       faul.classList.toggle('d-none');
    });

//메인슬라이드
    let current = 0; //li 위치를 나타내는 변수
    showSlides(); //기본 첫 번째 li를 보여줌

    function showSlides(){
        let slides = document.querySelectorAll(".textSwiper > li");
        for (let i = 0; i < slides.length; i++){
            slides[i].style.opacity = "0"; //모든 li 감춤
        }
        current++; //다음 li로 이동
        if(current > slides.length) //마지막 li라면
            current = 1;//첫번째로 이동
            slides[current - 1].style.opacity = "1";//현재 위치 li표시
            setTimeout(showSlides, 800) //0.8초마다 showSlides()함수를 반복 실행

    }

//네비게이션
    let trigger = document.querySelector("#trigger")
    let inner = document.querySelector(".inner")
    let menuWrap = document.querySelector(".menuWrap")

    trigger.addEventListener('click', function(){
        inner.classList.toggle('naviStyle');
    })

//이미지 슬라이드
    let img = document.querySelector(".imgSlide > img");
    width = img.width;
    let forlength = document.querySelectorAll(".imgSlide > img");
    length = forlength.length
    let curPos = 0;
    let postion = 0;
    let prevBtn = document.querySelector(".prevBtn")
    let nextBtn = document.querySelector(".nextBtn")
    let imgSlide = document.querySelector(".imgSlide");
    
    // let lele = 0;
    // let i = 0;
    // function moveleft() {
    //     if (i < length - 1) {
    //         lele += 100;
    //         i++;
    //         imgSlide.style.transition = '.3s'
    //         setTimeout('moveleft()', 3000);
    //     } else {
    //         imgSlide.style.transition = '0s'
    //         lele = 0;
    //         i = 0;
    //         setTimeout('moveleft()', 0);
    //     }
    //      imgSlide.style.transform = `translateX("-" + ${lele} + "%")`;
    // }
    // moveleft();

    function prev(){
        if(curPos > 0){
            nextBtn.removeAttribute("disabled")
            postion += width;
            imgSlide.style.transform = `translateX(${postion}px)`;
            imgSlide.style.transition = '0.5s'
            curPos = curPos - 1;
        }
        if(curPos == 0){
            prevBtn.setAttribute('disabled', 'true')
        }
    }
    function next(){
        if(curPos < 3){
            prevBtn.removeAttribute("disabled")
            postion -= width;
            imgSlide.style.transform = `translateX(${postion}px)`;
            imgSlide.style.transition = '0.5s'
            curPos = curPos + 1;
        }
        if(curPos == 3){
            nextBtn.setAttribute('disabled', 'true')
        }
    }
    
    function init(){
    prevBtn.setAttribute('disabled', 'true')
    prevBtn.addEventListener("click", prev)
    nextBtn.addEventListener("click", next)
    nextBtn.setAttribute('disabled', 'true')
    }
    
    init();
    
//텍스트 애니메이션
    const pTag1 = document.querySelector('.first')

    //split은 문자열을 배열로 변환해줌
    const textArr1 = 'Fantastic.Art.New.Techno.Advanced.Symphonious.International.Area'.split ('.')

        function initTexts(element, textArray){
            //같은 내용을 뒤에 push해줌
            textArray.push(...textArray)
            for( let i = 0; i < textArray.length; i++){
                //각각의 단어를 for문으로 돌며 단어 뒤에 띄어쓰기 네번처리
                element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
            }
        }
    initTexts(pTag1, textArr1)


    let count1 = 0

        //marqueeText는 아래와 같이 움직일꺼야
        function marqueeText(count, element, direction){
            if(count > element.scrollWidth / 2){
                //만일 count가 element scrollWidth의 절반값 이상 이라면
                //count를 0으로 만들고 element도 원위치 시킨다
                element.style.transform = `translateX(0)`
                count = 0
            }
            //그게 아니라면 element를 count에 direction을 곱한만큼 이동시키고
            //count를 return시켜 다음 animate함수에 반영되도록 한다.
            element.style.transform = `translate(${count * direction}px)`
            return count
        }

    //c = 2
    //c = c+1
    //consol.log(c)==3

        function animate(){
            count1++

            count1 = marqueeText(count1, pTag1, -1)

            window.requestAnimationFrame(animate)
        }

    //스크롤 함수를 만들고 스크롤 시마다 더 빨리 흐르게 만든다
        function scrollHandler(){
            count1 += 15
        }
    window.addEventListener('scroll', scrollHandler)
    animate()




