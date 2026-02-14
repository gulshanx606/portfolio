$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                service: {
                    required: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                phone: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                service: {
                    required: "please select a service"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                // Prevent multiple submissions
                var $form = $(form);
                var $submitBtn = $('#sendBtn');
                var $btnText = $submitBtn.find('.btn-text');
                var $btnLoader = $submitBtn.find('.btn-loader');
                
                // Show loader, hide text, disable button
                $btnText.hide();
                $btnLoader.show();
                $submitBtn.prop('disabled', true);
                
                // Send email to owner using EmailJS
                emailjs.sendForm(
                    window.EMAILJS_CONFIG.serviceId,
                    window.EMAILJS_CONFIG.templateId,
                    form
                ).then(function(response) {
                    // Removed: console.log('Owner notification sent!', response.status);
                    
                    // Send auto-reply to visitor (optional - if autoReplyTemplateId is configured)
                    if (window.EMAILJS_CONFIG.autoReplyTemplateId) {
                        emailjs.send(
                            window.EMAILJS_CONFIG.serviceId,
                            window.EMAILJS_CONFIG.autoReplyTemplateId,
                            {
                                name: $form.find('[name="name"]').val(),
                                email: $form.find('[name="email"]').val(),
                                phone: $form.find('[name="phone"]').val(),
                                service: $form.find('[name="service"]').val(),
                                message: $form.find('[name="message"]').val()
                            }
                        ).then(function() {
                            // Removed: console.log('Auto-reply sent to visitor!');
                        }).catch(function(err) {
                            console.warn('Auto-reply failed (non-critical):', err);
                        });
                    }
                    
                    // Reset button state
                    $btnLoader.hide();
                    $btnText.show();
                    $submitBtn.prop('disabled', false);
                    
                    // Reset form
                    $form[0].reset();
                    
                    // Show success modal
                    $('#successModal').modal('show');
                    
                }, function(error) {
                    // Removed: console.log('FAILED...', error);
                    
                    // Reset button state
                    $btnLoader.hide();
                    $btnText.show();
                    $submitBtn.prop('disabled', false);
                    
                    // Show error modal with message
                    $('#errorMessage').text(error.text || 'Network error. Please check your internet connection and try again.');
                    $('#errorModal').modal('show');
                });
            }
        })
    })
        
 })(jQuery)
})