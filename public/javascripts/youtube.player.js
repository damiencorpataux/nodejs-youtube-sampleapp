const id = window.location.pathname.split('/').splice(-1);

$(document).ready(function() {
  $('.video-container').html($('<iframe>', {
    width: '100%',
    height: '100%',
    src: 'https://www.youtube.com/embed/'+id+'?autoplay=1',
    frameborder: 0,
    allowfullscreen: true
  }));
});
