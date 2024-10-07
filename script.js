function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const message = document.getElementById('message').value;

    // Prepare the data for sending
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        message: message,
    };

    // Send the email
    emailjs.send('service_ea5wbur', 'template_k63yx8d', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            // Show success message
            document.getElementById('response-message').innerText = 'Email sent successfully!';
            document.getElementById('response-message').style.display = 'block';
            document.getElementById('contact-form').reset(); // Reset form fields
        }, (error) => {
            console.error('FAILED...', error);
            // Show error message
            document.getElementById('response-message').innerText = 'Failed to send. Please try again.';
            document.getElementById('response-message').style.display = 'block';
        });
}
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Prepare the data for sending
    const templateParams = {
        name: name,
        email: email,
        address: address,
        phone: phone,
        message: message,
    };

    // Send the email
    emailjs.send('service_ea5wbur', 'template_k63yx8d', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            // Show success message
            document.getElementById('response-message').innerText = 'Email sent successfully!';
            document.getElementById('response-message').style.display = 'block';
            document.getElementById('contact-form').reset(); // Reset form fields
        }, (error) => {
            console.error('FAILED...', error);
            // Show error message
            document.getElementById('response-message').innerText = 'Failed to send email. Please try again.';
            document.getElementById('response-message').style.display = 'block';
        });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
