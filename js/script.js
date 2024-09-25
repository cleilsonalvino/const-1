document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('burger');
    const menu = document.getElementById('menu')

    const updateBackground = () => {
        if (navbar.checked) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    };

    updateBackground();

    navbar.addEventListener('change', updateBackground);
});
