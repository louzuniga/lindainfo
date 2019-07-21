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

// Google sheets for email about stories
const TO_ADDRESS = 'louzuniga86@gmail.com';

function doPost(e) {
  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    MailApp.sendEmail(
      TO_ADDRESS,
      'Contact Form Submitted',
      JSON.stringify(e.parameters)
    );
    // return json success results
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success', data: JSON.stringify(e.parameters) })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // if error return this
    Logger.log(error);
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', error: e })
    ).setMimeType(ContentService.MimeType.JSON);
  }
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
