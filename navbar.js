document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.navbar-links');
    const overlay = document.querySelector('.navbar-overlay');
    const body = document.body;

    // Function to close mobile menu
    function closeMenu() {
        navLinks.classList.remove('active');
        toggleButton.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Function to open mobile menu
    function openMenu() {
        navLinks.classList.add('active');
        toggleButton.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('menu-open');
    }

    // Toggle mobile menu with animation
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', closeMenu);

    // Handle dropdown toggles on mobile
    const dropdownToggles = document.querySelectorAll('.navbar-links .dropdown > a');
    dropdownToggles.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth < 768) {
                e.preventDefault();
                const dropdown = link.parentElement;

                // Close other dropdowns
                dropdownToggles.forEach(otherLink => {
                    if (otherLink !== link) {
                        otherLink.parentElement.classList.remove('open');
                    }
                });

                dropdown.classList.toggle('open');
            }
        });
    });

    // Close mobile menu on window resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu();
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Update footer timestamp
    const footer = document.getElementById("last-updated");
    if (footer) {
        footer.textContent = "2026-01-088 16:48:42";
    }
});
