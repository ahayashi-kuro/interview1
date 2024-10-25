document.addEventListener('DOMContentLoaded', function() {
    // Get all food items
    const foodItems = document.querySelectorAll('.food-item');

    // Add click event listener to each food item
    foodItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle a 'selected' class on click
            this.classList.toggle('selected');
        });
    });

    // Add hover effect to images
    const foodImages = document.querySelectorAll('.food-image');
    foodImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add a button to show/hide food descriptions
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Descriptions';
    toggleButton.id = 'toggle-descriptions';
    document.querySelector('.container').prepend(toggleButton);

    toggleButton.addEventListener('click', function() {
        const descriptions = document.querySelectorAll('.food-item p');
        descriptions.forEach(desc => {
            desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
        });
    });
});
