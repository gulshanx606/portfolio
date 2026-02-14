// Newsletter Subscription Handler
// Works across all pages - centralized code

function handleSubscribe() {
    var subscribeBtn = document.getElementById('subscribeBtn');
    var emailInput = document.getElementById('subscriberEmail');
    
    if (!subscribeBtn || !emailInput) {
        console.error('Newsletter form elements not found');
        return;
    }
    
    var btnText = subscribeBtn.querySelector('.btn-text');
    var btnLoader = subscribeBtn.querySelector('.btn-loader');
    var email = emailInput.value.trim();
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('subscribeMessage').textContent = '⚠️ Please enter a valid email address.';
        $('#subscribeModal').modal('show');
        return;
    }
    
    // Show loader with animation
    btnText.style.opacity = '0';
    setTimeout(function() {
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        btnLoader.style.visibility = 'visible';
        btnLoader.style.opacity = '1';
        subscribeBtn.style.opacity = '1';
    }, 150);
    subscribeBtn.disabled = true;
    subscribeBtn.style.cursor = 'not-allowed';
    
    // Send via EmailJS
    if (typeof emailjs !== 'undefined' && window.EMAILJS_CONFIG) {
        emailjs.send(
            window.EMAILJS_CONFIG.serviceId,
            window.EMAILJS_CONFIG.templateId,
            {
                name: 'New Subscriber',
                email: email,
                phone: 'N/A',
                service: 'Newsletter',
                message: 'New subscriber email: ' + email
            }
        ).then(function() {
            // Success - reset button
            btnLoader.style.display = 'none';
            btnText.style.display = 'inline-block';
            btnText.style.opacity = '1';
            subscribeBtn.disabled = false;
            subscribeBtn.style.cursor = 'pointer';
            subscribeBtn.style.opacity = '1';
            emailInput.value = '';
            document.getElementById('subscribeMessage').innerHTML = '🎉 <strong>Thank you!</strong><br>You have been subscribed to our newsletter.';
            $('#subscribeModal').modal('show');
        }).catch(function(error) {
            // Error - reset button
            btnLoader.style.display = 'none';
            btnText.style.display = 'inline-block';
            btnText.style.opacity = '1';
            subscribeBtn.disabled = false;
            subscribeBtn.style.cursor = 'pointer';
            subscribeBtn.style.opacity = '1';
            document.getElementById('subscribeMessage').textContent = '❌ Subscription failed. Please try again later.';
            $('#subscribeModal').modal('show');
        });
    } else {
        // EmailJS not configured
        btnLoader.style.display = 'none';
        btnText.style.display = 'inline-block';
        btnText.style.opacity = '1';
        subscribeBtn.disabled = false;
        subscribeBtn.style.cursor = 'pointer';
        subscribeBtn.style.opacity = '1';
        alert('EmailJS is not configured properly. Please check your setup.');
    }
}
