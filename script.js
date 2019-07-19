// /////////////////////////////////////////
// jQuery Triggers*****************////////
//////////////////////////////////////////

$(function() {
  //pinwheel loader
  $(window).on('load', () => {
    $('.loader .inner-loader').fadeOut(300, () => {
      $('.loader').fadeOut(500);
    });
  });

  // Navbar responsive function
  $('#nav').on('click', event => {
    let nav = document.getElementById('nav');
    if (nav.className === 'nav-list') {
      nav.className += ' responsive';
    } else {
      nav.className = 'nav-list';
    }
  });

  // navbar responsive
  $('.page-nav').click(function(event) {
    const targetElement = $(this).attr('href');
    const targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  });

  // Footer and copyright ************
  let d = new Date();
  $('#copyright').text(`Copyright \u00A9 ${d.getFullYear()}  Lourexel Zuniga`);
});
