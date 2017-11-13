$(() => {
console.log('js connected!');
// set landing page to height of window
  const windowHeight = $(window).height();
  $('.land').css('height', windowHeight - 50);
  $('#scroll-div').css('padding-top', windowHeight - 140);



$('.project-info').each(function() {
    const projectsFadeIn = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7
    })
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
  });


 }); //end of jquery
