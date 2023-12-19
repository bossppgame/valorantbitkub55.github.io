function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // ตรวจสอบ username และ password ในระบบ (ในที่นี้ให้เป็นตัวอย่างเท่านั้น)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
}
