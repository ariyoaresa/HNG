const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const subject = form.elements['subject'].value.trim();
    const message = form.elements['message'].value.trim();

    const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    if (!name) {
        formStatus.innerHTML = "<p>Name is missing</p>";
        return;
    } else if (!email) {
        formStatus.innerHTML = "<p>Email is missing</p>";
        return;
    } else if (!subject) {
        formStatus.innerHTML = "<p>Subject is missing</p>";
        return;
    } else if (!message) {
        formStatus.innerHTML = "<p>Message is missing</p>";
        return;
    } else if(!emailRegex.test(email)){
        formStatus.innerHTML = "<p>Invalid email format</p>";
        return;
    }

    // If all fields are filled, you can safely proceed (e.g., send to backend)
    formStatus.innerHTML = "<p class='success-message'>Form submitted successfully!</p>";
    console.log({ name, email, subject, message });

    // Clear form fields
    form.elements['name'].value = '';
    form.elements['email'].value = '';
    form.elements['subject'].value = '';
    form.elements['message'].value = '';
});
