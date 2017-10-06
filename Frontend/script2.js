$( document ).ready(function() {

  $("#check").hide();

  setTimeout(function(){ 
    
    $("#asset-card1").fadeIn();
    

    setTimeout(function(){ 
      $("#asset-card1").fadeOut();
      $("#check").fadeIn();
    }, 5000);
  }, 500);
});


