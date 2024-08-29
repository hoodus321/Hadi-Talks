document.addEventListener("DOMContentLoaded", () => {
    const blogPosts = [
        {
            title: "Welcome to My Blog",
            date: "August 29, 2024",
            content: "This is the first post on my new blog! Stay tuned for more updates."
        },
        {
            title: "Another Post",
            date: "September 5, 2024",
            content: "Here’s another interesting post about something exciting!"
        }
    ];

    const blogPostsSection = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <small>${post.date}</small>
            <p>${post.content}</p>
        `;

        blogPostsSection.appendChild(postElement);
    });
});
