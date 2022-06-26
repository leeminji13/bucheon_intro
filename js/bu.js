// 상단 패밀리사이트 
    let family = document.querySelector('.family')
    let faul = document.querySelector('.faul')

    family.addEventListener('click',function(){
        //클릭하면 실제로 할 일
       faul.classList.toggle('d-none');
    });



