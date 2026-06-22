/**
 * Avion Steel Group Inc - Custom Interactive Scripts
 * Features: Image Lightbox with Keyboard Nav, Dynamic Category Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. Projects Filter Logic
    // ---------------------------------------------------------
    const filterButtons = document.querySelectorAll('.projects-filter-btn');
    const projectItems = document.querySelectorAll('.custom-projects-item');

    if (filterButtons.length > 0 && projectItems.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });

                // Update lightbox items based on what is currently visible
                initializeLightboxSources();
            });
        });
    }

    // ---------------------------------------------------------
    // 2. Lightbox Modal Logic
    // ---------------------------------------------------------
    // Inject Lightbox HTML dynamically if it doesn't exist in the DOM
    let lightbox = document.getElementById('custom-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'custom-lightbox';
        lightbox.className = 'custom-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content-wrapper">
                <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
                <button class="lightbox-prev" aria-label="Previous Image">&#10094;</button>
                <img class="lightbox-image" src="" alt="Enlarged view">
                <button class="lightbox-next" aria-label="Next Image">&#10095;</button>
                <div class="lightbox-caption"></div>
                <div class="lightbox-counter"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentImages = []; // Array of { src, caption }
    let currentIndex = 0;

    // Helper to extract visible items that should open in the lightbox
    function initializeLightboxSources() {
        currentImages = [];
        
        // 1. Check if we are on the gallery page
        const galleryItems = document.querySelectorAll('.custom-gallery-item');
        if (galleryItems.length > 0) {
            galleryItems.forEach((item, index) => {
                const src = item.getAttribute('data-src');
                const img = item.querySelector('img');
                const caption = img ? img.getAttribute('alt') : 'Avion Steel Gallery';
                currentImages.push({ src, caption, element: item });
                
                // Remove previous event listeners by cloning or direct reference
                item.onclick = (e) => {
                    e.preventDefault();
                    openLightbox(index);
                };
            });
            return;
        }

        // 2. Check if we are on the projects page
        const visibleProjectItems = document.querySelectorAll('.custom-projects-item:not(.hidden)');
        if (visibleProjectItems.length > 0) {
            visibleProjectItems.forEach((item, index) => {
                const clickArea = item.querySelector('.custom-project-image-wrapper');
                const btnArea = item.querySelector('.custom-project-btn');
                const img = item.querySelector('.custom-project-image');
                const src = img ? img.getAttribute('src') : '';
                const title = item.querySelector('.custom-project-title');
                const caption = title ? title.textContent.trim() : 'Avion Steel Project';
                
                currentImages.push({ src, caption });

                const triggerOpen = (e) => {
                    e.preventDefault();
                    openLightbox(index);
                };

                if (clickArea) clickArea.onclick = triggerOpen;
                if (btnArea) btnArea.onclick = triggerOpen;
            });
        }
    }

    // Open Lightbox
    function openLightbox(index) {
        if (currentImages.length === 0) return;
        currentIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable page scrolling
    }

    // Close Lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable page scrolling
        setTimeout(() => {
            if (lightboxImg) lightboxImg.src = '';
        }, 300);
    }

    // Update Lightbox image & meta
    function updateLightboxContent() {
        if (currentIndex < 0) currentIndex = currentImages.length - 1;
        if (currentIndex >= currentImages.length) currentIndex = 0;

        const activeImg = currentImages[currentIndex];
        if (activeImg) {
            lightboxImg.src = activeImg.src;
            lightboxCaption.textContent = activeImg.caption;
            lightboxCounter.textContent = `${currentIndex + 1} of ${currentImages.length}`;
        }
    }

    // Navigation events
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex--;
        updateLightboxContent();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex++;
        updateLightboxContent();
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
            closeLightbox();
        }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentIndex--;
            updateLightboxContent();
        } else if (e.key === 'ArrowRight') {
            currentIndex++;
            updateLightboxContent();
        }
    });

    // Initialize triggers on page load
    initializeLightboxSources();
});
