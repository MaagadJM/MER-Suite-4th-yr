$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    imageInput = $('#imageInput'), // Get the image input element
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });





  // -----------------  eto yung unang function pero yung imageInput hindi sumasabay sa pag hide sa overlay.  ------ // 

  // function hamburger_cross() {

  //   if (isClosed == true) {          
  //     overlay.hide();
  //     trigger.removeClass('is-open');
  //     trigger.addClass('is-closed');

  // trigger.addClass('#imageInput');
  // $('#imageInput').show(); // Show the image upload button when overlay is hidden

  //   isClosed = false;
  // } else {   
  //   overlay.show();
  //   trigger.removeClass('is-closed');
  //   trigger.addClass('is-open');

  // trigger.removeClass('#imageInput');
  // $('#imageInput').hide(); // Hide the image upload button when overlay is shown

  //       isClosed = true;
  //     }
  // }

  // -----------------  eto yung unang function pero yung imageInput hindi sumasabay sa pag hide sa overlay end. ------ //






  function hamburger_cross() {
    const imageInput = document.getElementById('imageInput'); // Get the image input element

    if (isClosed) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');

      imageInput.disabled = false; // Enable the input to show it

      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');

      imageInput.disabled = true; // Disable the input to hide it

      isClosed = true;
    }
  }











  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
});







function handleImageUpload(event) {
  const profileImage = document.getElementById('profileImage');
  const profileImageLabel = document.getElementById('profileImageLabel');
  const userIcon = document.getElementById('user-icon'); // Get the icon element
  const selectedImage = event.target.files[0];
  const imageURL = URL.createObjectURL(selectedImage);

  localStorage.setItem('uploadedPhoto', imageURL);

  profileImage.src = imageURL;
  anotherIcon.src = imageURL;

  // Hide the "Choose Profile Picture" label
  profileImageLabel.style.visibility = 'hidden';

  // Change the user icon to another Font Awesome icon when an image is uploaded
  userIcon.classList.remove('fa-circle-user'); // Remove the old class
  userIcon.classList.add('fa-user-check'); // Add the new class
}

window.onload = function () {
  const uploadedPhoto = localStorage.getItem('uploadedPhoto');
  const profileImage = document.getElementById('profileImage');
  const anotherIcon = document.getElementById('anotherIcon');
  const userIcon = document.getElementById('user-icon'); // Get the icon element

  if (uploadedPhoto) {
    profileImage.src = uploadedPhoto;
    anotherIcon.src = uploadedPhoto;

    // Change the user icon to another Font Awesome icon if an image is already uploaded
    userIcon.classList.remove('fa-circle-user');
    userIcon.classList.add('fa-user-check');
  } else {
    profileImage.src = 'path/to/default-user-icon.jpg';
    anotherIcon.src = 'path/to/default-user-icon.jpg';
  }
};




