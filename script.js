let currentIndexImage = 0;
let autoScrollIntervalImage;

// Function to scroll the gallery to the right
function scrollRight(section) {
    const gallery = document.getElementById(section);
    const galleryItems = gallery.querySelectorAll('.gallery-item');
    const totalItems = galleryItems.length;

    if (currentIndexImage < totalItems - 1) {
        currentIndexImage++;
    } else {
        currentIndexImage = 0; // Loop back to the first item when reaching the end
    }
    gallery.style.transform = `translateX(-${currentIndexImage * 100}%)`;
}

// Function to scroll the gallery to the left
function scrollLeft(section) {
    const gallery = document.getElementById(section);
    const galleryItems = gallery.querySelectorAll('.gallery-item');
    const totalItems = galleryItems.length;

    if (currentIndexImage > 0) {
        currentIndexImage--;
    } else {
        currentIndexImage = totalItems - 1; // Loop back to the last item when reaching the start
    }
    gallery.style.transform = `translateX(-${currentIndexImage * 100}%)`;
}

// Auto-scroll functionality for images
function startAutoScrollImages() {
    autoScrollIntervalImage = setInterval(() => {
        scrollRight('imageGallery');
    }, 2000); // Auto-scroll every 3 seconds
}

// Stop auto-scroll when manually interacting with the gallery
function stopAutoScrollImages() {
    clearInterval(autoScrollIntervalImage);
}

// Restart auto-scroll when no interaction is detected
function restartAutoScrollImages() {
    stopAutoScrollImages();
    startAutoScrollImages();
}

// Initialize auto-scroll when the page loads
window.onload = function() {
    startAutoScrollImages();
};

// let currentIndex = 0;

// function scrollRight() {
//     const gallery = document.getElementById('imageGallery');
//     const galleryItems = gallery.querySelectorAll('.gallery-item');
//     const totalItems = galleryItems.length;

//     if (currentIndex < totalItems - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0; // Loop back to the first item
//     }

//     gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function scrollLeft() {
//     const gallery = document.getElementById('imageGallery');
//     const galleryItems = gallery.querySelectorAll('.gallery-item');
//     const totalItems = galleryItems.length;

//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = totalItems - 1; // Loop back to the last item
//     }

//     gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
// }


// let currentIndexImage = 0;
// let currentIndexUpdate = 0;
// let autoScrollIntervalImage;
// let autoScrollIntervalUpdate;

// function scrollRight(section) {
//     const gallery = document.getElementById(section);
//     const galleryItems = gallery.querySelectorAll('.gallery-item, .card-item');
//     const totalItems = galleryItems.length;

//     if (section === 'imageGallery') {
//         if (currentIndexImage < totalItems - 1) {
//             currentIndexImage++;
//         } else {
//             currentIndexImage = 0; // Loop back to the first item
//         }
//         gallery.style.transform = `translateX(-${currentIndexImage * 100}%)`;
//     } else if (section === 'updateGallery') {
//         if (currentIndexUpdate < totalItems - 1) {
//             currentIndexUpdate++;
//         } else {
//             currentIndexUpdate = 0; // Loop back to the first item
//         }
//         gallery.style.transform = `translateX(-${currentIndexUpdate * 100}%)`;
//     }
// }

// function scrollLeft(section) {
//     const gallery = document.getElementById(section);
//     const galleryItems = gallery.querySelectorAll('.gallery-item, .card-item');
//     const totalItems = galleryItems.length;

//     if (section === 'imageGallery') {
//         if (currentIndexImage > 0) {
//             currentIndexImage--;
//         } else {
//             currentIndexImage = totalItems - 1; // Loop back to the last item
//         }
//         gallery.style.transform = `translateX(-${currentIndexImage * 100}%)`;
//     } else if (section === 'updateGallery') {
//         if (currentIndexUpdate > 0) {
//             currentIndexUpdate--;
//         } else {
//             currentIndexUpdate = totalItems - 1; // Loop back to the last item
//         }
//         gallery.style.transform = `translateX(-${currentIndexUpdate * 100}%)`;
//     }
// }

// Auto-scroll functionality for images

