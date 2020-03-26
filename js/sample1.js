const counters = document.querySelectorAll('.counter');

const speed = 200 ;

counters.forEach(counter => {
    const updateCount = ()=>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText
        const inc = target / speed;
        if (count < target)
        {
        counter.innerText =  count + inc;
        setTimeout(updateCount,100);
        }
        else 
        {
            count.innerText = target;
        }
    }
    updateCount();
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow:3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});