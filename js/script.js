//js
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
//aos
AOS.init({
  offset: 100,
  delay: 0,
  duration: 1000,
  easing: 'linear',

});



//jq
$(document).ready(function(){

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

});