$(document).ready(function(){
    console.log('jquery fonctionne');

    $("button").click(function(){
      console.log('le click a été detecté');
      $("button").css('flex-direction', 'column-reverse');


  });

  });