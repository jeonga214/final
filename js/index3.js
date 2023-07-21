
const elSSubNav = document.querySelectorAll('.content_index .whole_nav a'),
    elSSuCon = document.querySelectorAll('.content_index .whole_content>div');

    const elSSubNav2 = document.querySelector('.detail_content .top_nav');
    const elSSubNav3 = document.querySelector('.detail_content .top_nav2');

    let product = [
        {keyword:'전체,도시락,샌드위치/햄버거,주먹밥/김밥'},
        {keyword:'전체,튀김류,베이커리,즉석커피'},
        {keyword:'전체,스낵/비스켓,빵/디저트,껌/초콜릿/캔디'},
        {keyword:'전체,아이스크림'},
        {keyword:'전체,가공식사,안주류,식재료'},
        {keyword:'전체,음료,아이스드링크,유제품'},
        {keyword:'전체,취미/레저,의약외품,신변잡화,생활잡화'},
    ]
    let product2 = [
        {keyword:'전체,할인증정상품,최신등록순,낮은 가격순,높은 가격순'},
    ]

    let numm = 0;

    elSSubNav.forEach(function(but,key){
        //leftnav 초록 초기
        elSSubNav[0].classList.add('act');
        //topnav 생성 초기
        elSSubNav2.innerHTML ='';
        let arrKey2 = product[0].keyword.split(',');
        arrKey2.forEach(function(v){
        elSSubNav2.innerHTML +=`<a>${v}</a>`;
        })
        //bottom nav 생성 초기
        elSSubNav3.innerHTML ='';
        let arrKey3 = product2[0].keyword.split(',');
        arrKey3.forEach(function(v){
        elSSubNav3.innerHTML +=`<a>${v}</a>`;
        })

        but.onclick = function(){
            //leftnav클릭시 초록
            elSSubNav[numm].classList.remove('act');
            this.classList.add('act');

            numm = key;

            //topnav생성
            elSSubNav2.innerHTML ='';
            
            let arrKey = product[numm].keyword.split(',');
            arrKey.forEach(function(v){
            elSSubNav2.innerHTML +=`<a>${v}</a>`;

            })
            //bottomnav생성
            elSSubNav3.innerHTML ='';
            let arrKey3 = product2[0].keyword.split(',');
            arrKey3.forEach(function(v){
            elSSubNav3.innerHTML +=`<a>${v}</a>`;
            })

            //topnav클릭시 검정
            const elTopNav = document.querySelectorAll('.top_nav >a');

            let num2=0;
            elTopNav.forEach(function(v,k){
                elTopNav[0].classList.add('active');
                v.onclick = function(){
                    elTopNav[num2].classList.remove('active');
                    this.classList.add('active');

                    num2 = k;

                    elTopNav2.forEach(function(v,k){
                        elTopNav2[num3].classList.remove('active');
                        elTopNav2[0].classList.add('active');
                        v.onclick = function(){
                            elTopNav2[num3].classList.remove('active');
                            this.classList.add('active');

                            num3 = k;
                        }
                    });


                    
                }
            });

            //bottomnav클릭시 검정
            const elTopNav2 = document.querySelectorAll('.top_nav2 >a');

            let num3=0;
            elTopNav2.forEach(function(v,k){
                elTopNav2[num3].classList.remove('active');
                elTopNav2[0].classList.add('active');
                v.onclick = function(){
                    elTopNav2[num3].classList.remove('active');
                    this.classList.add('active');

                    num3 = k;
                }
            });


        }
    })



//-------------------------------------------


const elResult = document.querySelectorAll('.search_money input'),
elInput = document.querySelectorAll('.search_radio input');

elInput.forEach(function(v,k){
    v.onclick = function(){

        elResult[0].value = v.value.split(",")[0];
        elResult[1].value = v.value.split(",")[1];

    }
});

//-------------------------------------------데이터 


$.ajax({
    url:"./data.json",
    success:function(data){
        let a = '';
        $.each(data.items,function(key,value){
            a += `<div class="miss">
                    <div class="d-2-1">
                        <a href="#">
                            <img src="${value.detail}" alt="도시락">
                            <div>
                                <p>${value.name}</p>
                                <strong>${value.price}</strong><span>원</span>
                            </div>
                            <div class="tag">
                                <img src="${value.tag}" alt="">
                            </div>
                        </a>
                    </div>
                </div>`;
        })
        $('.d').html(a);

    },
    error:function(){}
});

//-------------------------------------------초기 topnav 검정



const elTopNav = document.querySelectorAll('.top_nav >a');


let num2=0;
elTopNav.forEach(function(v,k){
    elTopNav[0].classList.add('active');
    v.onclick = function(){
        elTopNav[num2].classList.remove('active');
        this.classList.add('active');

        num2 = k;
        
        elTopNav2.forEach(function(v,k){
            elTopNav2[num3].classList.remove('active');
            elTopNav2[0].classList.add('active');
            v.onclick = function(){
                elTopNav2[num3].classList.remove('active');
                this.classList.add('active');

                num3 = k;
            }
        });


    }
});

//-------------------------------------------초기 bottomnav 검정
const elTopNav2 = document.querySelectorAll('.top_nav2 >a');
let num3=0;
elTopNav2.forEach(function(v,k){
    elTopNav2[num3].classList.remove('active');
    elTopNav2[0].classList.add('active');
    v.onclick = function(){
        elTopNav2[num3].classList.remove('active');
        this.classList.add('active');

        num3 = k;
    }
});



//-------------------------------------------초기화

function test() {
    var obj = document.getElementsByName('i');
    var obj2 = document.getElementsByName('ii');
    for (var a = 0; a < obj.length; a++) {
        obj[a].checked = false;
    }
    for (var b = 0; b < obj2.length; b++) {
        obj2[b].value = null;
    }
}


//-------------------------------------------

