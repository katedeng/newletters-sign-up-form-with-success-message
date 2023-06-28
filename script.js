const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const subButton = document.getElementById ('sub-button');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const email = emailInput.value;
    const spanEmail = document.getElementById('span-email-placeholder');

    if (validateEmail(email)) {
        const encodedEmail = encodeURIComponent(email);
        window.location.href = `success message.html?email=${encodedEmail}`;
    }else {
        const errorEmail = document.querySelector('em');
        errorEmail.textContent = "Valid email required";
        errorEmail.style.color = "red";
        emailInput.style.border = "1px solid #ff6257"
        emailInput.style.color = "#ff6257";
        emailInput.style.backgroundColor = "#ff6257";
    }
})

function validateEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

function alert() {
    window.location.href = 'index.html';
}