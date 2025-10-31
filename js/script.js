<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-btn');
    const submenus = document.querySelectorAll('.submenu');
    const isMobile = () => window.innerWidth <= 768;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const submenu = document.getElementById(target);

            // Check if the submenu is already open
            const isOpen = submenu.style.display === 'block';

            // Hide all submenus first
            submenus.forEach(sub => {
                sub.style.display = 'none';
                if (isMobile()) {
                    sub.parentElement.appendChild(sub); // Reset submenu to original container
                }
            });

            // Toggle submenu for the clicked button
            if (!isOpen) {
                submenu.style.display = 'block';

                // On mobile, move submenu directly below the clicked button
                if (isMobile()) {
                    button.insertAdjacentElement('afterend', submenu);
                }
            }
        });
    });
});
=======
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-btn');
    const submenus = document.querySelectorAll('.submenu');
    const isMobile = () => window.innerWidth <= 768;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const submenu = document.getElementById(target);

            // Check if the submenu is already open
            const isOpen = submenu.style.display === 'block';

            // Hide all submenus first
            submenus.forEach(sub => {
                sub.style.display = 'none';
                if (isMobile()) {
                    sub.parentElement.appendChild(sub); // Reset submenu to original container
                }
            });

            // Toggle submenu for the clicked button
            if (!isOpen) {
                submenu.style.display = 'block';

                // On mobile, move submenu directly below the clicked button
                if (isMobile()) {
                    button.insertAdjacentElement('afterend', submenu);
                }
            }
        });
    });
});
>>>>>>> c6c1c3b1e383bca6621f08454d7295c3a6b65d5b
