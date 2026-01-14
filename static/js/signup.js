
document.addEventListener('DOMContentLoaded', function () {
    // ===== Flash Messages =====
    const alerts = document.querySelectorAll(".flash-messages .alert");
    alerts.forEach((alert, i) => {
        // Show alert with slight delay
        setTimeout(() => {
            alert.classList.add("show");
        }, i * 150);

        // Hide alert after 2 seconds
        setTimeout(() => {
            alert.classList.remove("show");
            alert.classList.add("hide");

            // Remove from DOM after animation
            setTimeout(() => alert.remove(), 500);
        }, 2000 + i * 150);
    });

    const closeButton = document.querySelector('.close-btn');
    const popupContainer = document.querySelector('.popup-container');

    if (closeButton && popupContainer) {
        closeButton.addEventListener('click', function () {
            popupContainer.style.display = 'none';
        });
    }


    const backButton = document.querySelector('.btn-back');
    if (backButton) {
        backButton.addEventListener('click', function () {
            window.history.back();
        });
    }
});
