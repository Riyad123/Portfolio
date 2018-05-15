$(window).load(function() {
    
    
    $("#professional-skill").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,         
        autoPlay: {
            enable: true,
            interval: 3000,
            pauseOnHover: true
        } ,    
        
        
        
          responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1,
                itemsToScroll: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: { 
                changePoint:800,
                visibleItems: 3,
                itemsToScroll: 1
            }
        },
        
    });
    
    
});