document.addEventListener("DOMContentLoaded", () => {
    const blogPosts = [
        {
            title: "Another Post",
            date: "August 29, 2024",
            content: "Chatgpt rules"
        },               
        {
            title: "This is my blog",
            date: "August 29, 2024",
            content: "This is both an exercise in web dev and also in writing for myself!"
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
