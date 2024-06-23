document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        alert('Please complete all fields before submitting the form.');
        return;
    }

    // Get existing posts from localStorage or initialize an empty array
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Create a new post object
    const newPost = {
        username: username,
        title: title,
        content: content
    };

    // Add the new post to the posts array
    posts.push(newPost);

    // Save the updated posts array back to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect to the blog page
    window.location.href = 'blog.html';
});
});