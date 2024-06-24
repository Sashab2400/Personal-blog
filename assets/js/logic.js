const darkModeToggle = document.querySelector('.dark-mode');

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform any necessary form validation

    // Get the form data
    const formData = new FormData(form);

    // Store the form data in localStorage
    localStorage.setItem('formData', JSON.stringify(Object.fromEntries(formData)));

    // Redirect to the posts page
    window.location.href = 'blog.html'; // Replace 'posts.html' with the actual URL of your posts page
});