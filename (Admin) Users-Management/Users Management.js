// $(document).ready(function () {
//   var trigger = $('.hamburger'),
//       overlay = $('.overlay'),
//      isClosed = false;

//     trigger.click(function () {
//       hamburger_cross();      
//     });

//     function hamburger_cross() {

//       if (isClosed == true) {          
//         overlay.hide();
//         trigger.removeClass('is-open');
//         trigger.addClass('is-closed');
//         isClosed = false;
//       } else {   
//         overlay.show();
//         trigger.removeClass('is-closed');
//         trigger.addClass('is-open');
//         isClosed = true;
//       }
//   }
  
//   $('[data-toggle="offcanvas"]').click(function () {
//         $('#wrapper').toggleClass('toggled');
//   });  
// });



function submitForm() {
  // Check if the text field is filled
  if ($('#inputText').val().trim() === '') {
    $('#inputText').addClass('is-invalid');
    return;
  }

  // If the text field is filled, submit the form
  $('#myForm').submit();
}



  // JavaScript to handle the "Restore" button
  $(document).ready(function () {
    $('#restoreBtn').click(function () {
      document.getElementById('resetForm').reset();
    });
  });