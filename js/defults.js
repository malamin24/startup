$(document).ready(function(){
    $(".toggole").click(function(){
      $(".menu").animate(
        {
        'margin-left': "-3%"
        }
      );
        
    });
    
  });
  $(document).ready(function(){
    $(".menu").click(function(){
      $(".menu").animate(
        {
        'margin-left': "-120%"
        }
      );
        
    });
    
  });



  $(document).ready(function(){
    $(".slider_left_arrow").click(function(){
      $(".slider").animate({
        left: '+=-50%',
        trnslate: 'slow',
      });
        
    });
    $(".slider_right_arrow").click(function(){
      $(".slider").animate({
        left: '+=+50%',
        trnslate: 'slow',
      }
      );
        
    });
    
  });
