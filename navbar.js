document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const dropdownToggles = document.querySelectorAll('.navbar-links .dropdown > a');
    dropdownToggles.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = link.parentElement;
                dropdown.classList.toggle('open');
            }
        });
    });

    const footer = document.getElementById("last-updated");
    if (footer) {
        footer.textContent = "2025-09-24 14:16:01";
    }
});

