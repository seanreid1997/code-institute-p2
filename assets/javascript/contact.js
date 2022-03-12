document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // prevents default submit event
        emailjs.init("service_cdveqpt");
        emailjs.sendForm("Sean's Games", 'template_51zcr47', this)
            .then(function () {
                // success sending email
            }, function (error) {
                // error message
                console.log('FAILED...', error);
            });
        toggleThankYouMessage();
    });
});

/**
 * Removes the contact forme and displays a thank you message on the contact page after form submision
 */
function toggleThankYouMessage() {
    let html = `
            <div class="contact-message">
            <h1>Thank you for your feedback. Please feel free to try again.</h1>
            </div>
            <div class="btn btn-home">
            <a href="index.html">Home</a>
            </div>`;
    document.getElementById('container').innerHTML = html;
}