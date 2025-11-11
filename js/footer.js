<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
=======
document.addEventListener('DOMContentLoaded', () => {
    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
>>>>>>> c6c1c3b1e383bca6621f08454d7295c3a6b65d5b
