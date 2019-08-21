	//Form Controls
	$('.form-control')
	.val('')
	.on("focusin", function(){
		$(this).parent('.form-group').addClass('form-group-focus');
	})
	.on("focusout", function(){
		if($(this).val().length === 0) {
			$(this).parent('.form-group').removeClass('form-group-focus');
		}
	});
// Contact form validator
$(function () {

  $('#contact-form').validator();

  $('#contact-form').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
      var url = "contact_form/contact_form.php";

      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data)
        {
          var messageAlert = 'alert-' + data.type;
          var messageText = data.message;

          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
          if (messageAlert && messageText) {
            $('#contact-form').find('.messages').html(alertBox);
            $('#contact-form')[0].reset();
          }
        }
      });
      return false;
    }
  });
});
// /Contact form validator
