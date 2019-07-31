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

///////////////////////////////////////////
// Story Modal*****************///////////
//////////////////////////////////////////
let tyModal = document.getElementById('tyModal');

// Get the button that opens the modal
let btn = document.getElementById('ty-btn');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('ty-close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  tyModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  tyModal.style.display = 'none';
  location.reload();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    tyModal.style.display = 'none';
  }
};

// /////////////////////////////////////////
// Image Zoom Modal*****************////////
//////////////////////////////////////////
// zoom image modal
let images = document.querySelectorAll('#zoom-img img'),
  modal = document.querySelector('.modal');

// Loops through the all the images selected...
images.forEach(function(image) {
  // When the image is clicked...
  image.addEventListener('click', function(event) {
    modal.innerHTML =
      '<div class="modal-content"><img src="' +
      event.target.src +
      '"><br><span>' +
      event.target.alt +
      '</span></div>';
    modal.style.display = 'block';
  });
});

// When the user clicks somewhere in the "modal" area it automatically closes itself
modal.addEventListener('click', function() {
  this.style.display = 'none';
});

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

  // Stories Read more Read less
  $('.story-hide').hide();
  $('.read-more').show();

  $('.read-more').click(() => {
    $('.story-hide').toggle();
    $('.read-more').text(' ...Show less');

    // $('.read-more').text() === ' ...Show more'
    //   ? $('.read-more').text(' ...Show more')
    //   : $('.read-more').text(' ...Show less');
  });

  // Footer and copyright ************
  let d = new Date();
  $('#copyright').text(`Copyright \u00A9 ${d.getFullYear()}  Lourexel Zuniga`);
});
