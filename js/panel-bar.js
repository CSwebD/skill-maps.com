<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    fetch('../panel-bar.html')  // Adjusted path here
        .then(response => response.text())
        .then(data => {
            document.getElementById('panel-bar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading panel bar:', error));
});
=======
document.addEventListener('DOMContentLoaded', () => {
    fetch('../panel-bar.html')  // Adjusted path here
        .then(response => response.text())
        .then(data => {
            document.getElementById('panel-bar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading panel bar:', error));
});
>>>>>>> c6c1c3b1e383bca6621f08454d7295c3a6b65d5b
