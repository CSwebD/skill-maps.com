<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    fetch('panel-nav.html') // Make sure this matches your file name
        .then(response => response.text())
        .then(data => {
            document.getElementById('panel-bar-placeholder').innerHTML = data;

            // Wait a moment for DOM insertion
            setTimeout(() => {
                const navToggle = document.getElementById('navToggle');
                const mobileMenu = document.getElementById('mobileMenu');

                if (navToggle && mobileMenu) {
                    navToggle.addEventListener('click', () => {
                        mobileMenu.classList.toggle('hidden');
                    });
                }
            }, 0);
        })
        .catch(error => console.error('Error loading panel bar:', error));
});

=======
document.addEventListener('DOMContentLoaded', () => {
    fetch('panel-nav.html') // Make sure this matches your file name
        .then(response => response.text())
        .then(data => {
            document.getElementById('panel-bar-placeholder').innerHTML = data;

            // Wait a moment for DOM insertion
            setTimeout(() => {
                const navToggle = document.getElementById('navToggle');
                const mobileMenu = document.getElementById('mobileMenu');

                if (navToggle && mobileMenu) {
                    navToggle.addEventListener('click', () => {
                        mobileMenu.classList.toggle('hidden');
                    });
                }
            }, 0);
        })
        .catch(error => console.error('Error loading panel bar:', error));
});

>>>>>>> c6c1c3b1e383bca6621f08454d7295c3a6b65d5b
