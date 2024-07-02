document.addEventListener('DOMContentLoaded', function() {
    const clickableImages = document.querySelectorAll('.clickable-images > div');
    const overlay = document.getElementById('overlay');
    const backgroundGif = document.getElementById('backgroundGif');
    const clickedImage = document.getElementById('clickedImage');
    const popup2 = document.getElementById('popup2');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');

    clickableImages.forEach(image => {
        image.addEventListener('click', function() {
            const img = this.querySelector('img');

            // Set clicked image src
            clickedImage.src = img.src;

            // Hide other images and show overlay with background GIF
            clickableImages.forEach(otherImage => {
                if (otherImage !== image) {
                    otherImage.style.display = 'none';
                }
            });

            overlay.style.display = 'flex';

            // Enlarge the clicked image
            clickedImage.style.position = 'fixed';
            clickedImage.style.top = '50%';
            clickedImage.style.left = '50%';
            clickedImage.style.transform = 'translate(-50%, -50%) scale(2)';

            // Show popup2 after 3 seconds
            setTimeout(function() {
                popup2.style.display = 'block';
                overlay.style.display = 'none';

                // Determine which image was clicked
                if (image.classList.contains('image1')) {
                    video1.play();
                } else if (image.classList.contains('image2')) {
                    video2.play();
                } else if (image.classList.contains('image3')) {
                    video3.play();
                }
            }, 3000);

            // Reset image size and position after delay
            setTimeout(function() {
                clickedImage.style.transform = 'scale(1)';
                clickableImages.forEach(otherImage => {
                    otherImage.style.display = 'inline-block';
                });
            }, 6000);
        });
    });

    // Popup2 script
    popup2.addEventListener('click', function() {
        popup2.style.display = 'none';
    });

    // Popup script
    const popup = document.getElementById('popup');
    const clickableBackground = document.getElementById('clickableBackground');

    // Show popup when the script loads
    popup.style.display = 'block';

    // Hide popup on background click
    clickableBackground.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
