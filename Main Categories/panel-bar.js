document.addEventListener('DOMContentLoaded', () => {
    fetch('../panel-bar.html')  // Adjusted path here
        .then(response => response.text())
        .then(data => {
            document.getElementById('panel-bar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading panel bar:', error));
});
