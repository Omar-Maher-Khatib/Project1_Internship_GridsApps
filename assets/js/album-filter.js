// Album Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const categoryValue = this.getAttribute('data-category');

            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Filter gallery items
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (categoryValue === 'all' || itemCategory === categoryValue) {
                    item.style.display = 'block';
                    // Add fade-in animation
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
