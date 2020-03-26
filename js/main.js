$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
			setInterval(function(){
                console.log("active");
                $('.toast').toggleClass("show");
            },2000)
  
            var winheight  = $(window).height();
           
            var docheight = $(document).height();
            var maxheight = docheight -winheight;
            
            $('progress').attr('max',maxheight);
            lazyLoad();
               
             });
            var lazyloadImages = document.querySelectorAll('img.lazy');
            console.log(lazyloadImages.length);
            var lazyloadThrottleTimeout ;
            function lazyLoad(){
            if(lazyloadThrottleTimeout)
            {
                clearTimeout(lazyloadThrottleTimeout);
            }
            lazyloadThrottleTimeout = setTimeout(function(){     
            var scrollTop = window.pageYOffset;
           
            lazyloadImages.forEach( function(img){ 
             // console.log(img.getAttribute('data-src')) ;
               img.setAttribute('src',img.getAttribute('data-src'));

               
            });
                },200); }
                
            if(lazyloadImages.length==0){
                    console.log("lazyloadImages  "+ lazyloadImages.length)
                    document.removeEventListener("scroll",lazyLoad);
                    window.removeEventListener("resize",lazyLoad);
                    window.removeEventListener("orientationChange", lazyLoad);
                  }

            $(document).on('scroll', function() {
                lazyLoad();
                    value = $(window).scrollTop() ;
                // console.log("scroll position "+ value);
                    $('progress').attr('value', value);
            });