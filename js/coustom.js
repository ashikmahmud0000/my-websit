$(function(){
          // stkey header/
          $(Window).scroll(function(){
                     var scrolling = $(this).scrollTop();

                     if(scrolling > 200){
                                $('.navbar').addClass('bg');
                     }
                     else{
                                $('.navbar').removeClass('bg');
                     };  
          });
          // banner header/
          $('.banner_text_slider').slick({
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     autoplay: true,
                     autoplaySpeed: 2000,
                     arrows:false,
                   });
            // servics_slider
           $('.team_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
            speed:1500,
            responsive: [{
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,}
              }]
          });
                   
           // filter/
                     var containerEl = document.querySelector('.mixitupaaa');
                      var mixer = mixitup(containerEl);

        





})