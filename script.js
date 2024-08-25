function toggleDetails(button) {
    // Get the parent project item and the details div
    var projectItem = button.parentElement;
    var details = projectItem.querySelector('.project-details');
    
    // Toggle the expanded class to trigger the animation
    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        button.textContent = "Extend"; // Change button text
    } else {
        details.classList.add('expanded');
        button.textContent = "Minimize"; // Change button text
    }
}