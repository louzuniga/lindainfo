// Navbar navigate to different pages
function openPage(e, pageSection) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(pageSection).style.display = 'block';
  e.currentTarget.className += ' active';
}
// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

// Initialize and add the map
function initMap() {
  // The location
  let YS = { lat: 39.804705, lng: -83.890151 };
  // The map, centered at the location
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: YS
  });
  // The marker, positioned at the location
  let marker = new google.maps.Marker({ position: YS, map: map });
}

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
