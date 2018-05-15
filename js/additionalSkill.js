$(document).ready(function(){
    
    $(".additional").waypoint(function(){
       ToxProgress.create();
       ToxProgress.animate();
        
        
        $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1500,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
        
    },{
        offset: "90%"
    });
    
    
    
})