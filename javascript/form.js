$(document).ready(function() {
  $('#customer').on('click',function() {
    if($('#customer').hasClass('active')) {
      // Nothing needs to be done
    }
    else {
      $('#form').css('height','725px');
      $('#vendor').removeClass('active');
      $('#customer').addClass('active');
      $('.first_form').css('display','block');
      $('.second_form').css('display','none');
    }
  });

  $('#vendor').on('click',function() {
    if($('#vendor').hasClass('active')) {
      // Nothing needs to be done
    }
    else {
      $('#form').css('height','700px');
      $('#customer').removeClass('active');
      $('#vendor').addClass('active');
      $('.first_form').css('display','none');
      $('.second_form').css('display','block');
    }
  });
});
