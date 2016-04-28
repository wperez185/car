$(document).ready(function() {
  $(".left-bulb, .right-bulb, .fl-bulb, .fr-bulb").hover(function(){
          $(".left-bulb, .right-bulb, .fl-bulb, .fr-bulb").css("background", "#3498db");
      },
      function(){
          $(".left-bulb, .right-bulb, .fl-bulb, .fr-bulb").css("background", "#FFF");
      });
});
