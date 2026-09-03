let userName = prompt("Как вас зовут?", "Гость");
let isReady = confirm(`${userName}, вы готовы просмотреть форму?`);

if (isReady) {
    alert(`Отлично, ${userName}! Нажмите ОК для перехода к форме.`);
} else {
    alert("Вы нажали 'Отмена', но форму мы вам всё равно покажем :)");
}


const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    resetErrors();

    let isValid = true;
    const usernameValue = document.getElementById('username').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const passwordValue = document.getElementById('password').value.trim();

    if (usernameValue.length < 3) {
        showError('usernameError');
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        showError('emailError');
        isValid = false;
    }

    if (passwordValue.length < 6) {
        showError('passwordError');
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        console.log("Данные отправлены:", { usernameValue, emailValue, passwordValue });
    }
});

function showError(errorId) {
    document.getElementById(errorId).style.display = 'block';
}

function resetErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.style.display = 'none');
    document.getElementById('successMessage').style.display = 'none';
}