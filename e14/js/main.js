$(document).ready(function() {
    // run function on initial page load
    clickDemo();
});

function clickDemo() {
  $('#topSquare').click(function(){
    $('#topSquare').toggleClass('rotate');
});
  $('#bottomSquare').click(function(){
    $('#topSquare').removeClass('off');
});
}