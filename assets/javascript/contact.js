window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.init('service_cdveqpt');
        emailjs.sendForm("Sean's Games", 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
            toggleThankYouMessage();
    });
}

function toggleThankYouMessage() {
    let html = `
            <p class="text-center fs-2">Thank you for leaving a message.</p>
            <div class="image-container text-center col-5 col-sm-4 col-lg-3">
                <img src="assets/images/bee-happy.png" alt="Doodle of a happy bee">
            </div>
            <div class="text-center my-2">
                <a href="index.html" class="return-btn btn btn-primary">Return to game</a>
            </div>`;
    document.getElementById('container').innerHTML = html;
}