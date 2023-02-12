document.getElementById('submit-btn').addEventListener('click', function () {
    const email = document.getElementById('user-email');
    const emailValue = email.value;
    // console.log(emailValue);
    const password = document.getElementById('user-password');
    const passwordValue = password.value;
    // console.log(passwordValue);
    if (emailValue === 'ijaz.hossain1@gmail.com' && passwordValue === 'born2win') {
        // console.log('valid user');
        window.location.href = 'bank.html';
    } else {
        // console.log('invalid user');
        alert('Wrong Information')
    }
})