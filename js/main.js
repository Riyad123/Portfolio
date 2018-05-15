
  // preloader
  $(window).load(function(){
    $('.loading').css("display","none");
  })




$(document).ready(function(){
    
    

    
    
    
    
    
    
    
    
    //for scroll
    
    
      $(window).scroll(function(){
        var y = $(this).scrollTop();
        if(y >=150){
            $('.header').addClass('fixedHeader');
            $(".logoName").attr('src','img/logo/logoReverse.png');
            
            $(".nav label").css("color","black");
        }
        else{
            $('.header').removeClass('fixedHeader');
             $(".logoName").attr('src','img/logo/logo.png');
            
             $(".nav label").css("color","white");
        }
            
    });
    
    
   
    
   // for typed js
    
    
    var typed = new Typed(".typing", {
            strings: ["Web Designer", "Web Developer", "Web Debugger", "WordPress Expert"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 300,
            smartBackspace: false,
            loop: true,
        });
    
    
    
    
    
    
    
    
    
    
})