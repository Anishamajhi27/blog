const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("search-button");
const blogList = document.getElementById("blog-section");

searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const blogLinks = blogList.getElementsByTagName("h2");

    for (let i = 0; i < blogLinks.length; i++) {
        const blogName = blogLinks[i].textContent.toLowerCase();

        if (blogName === searchTerm) {
            const blogURL = blogLinks[i].getAttribute("href");
            window.location.href = blogURL; // Open the matching blog
            return;
        }
    }

    // If no match is found, display an alert
    alert("Blog not found.");
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const blogPosts = document.querySelectorAll('.blog-post');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const modalTitle = document.querySelector('.modal-title');
const modalContent = document.querySelector('.modal-content');

blogPosts.forEach((post, index) => {
    post.addEventListener('click', () => {
        modalTitle.textContent = `Blog Post ${index + 1}`;
        modalContent.textContent = `This is the full content of Blog Post ${index + 1}.`;
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
const popularPosts = document.querySelectorAll('.post');
const fullBlogContent = document.getElementById('full-blog-content');

popularPosts.forEach(post => {
    post.addEventListener('click', () => {
        const postId = post.getAttribute('data-postid');
        const fullBlogText = getFullBlogText(postId);
        displayFullBlog(fullBlogText);
    });
});

function getFullBlogText(postId) {
    // In a real application, you would fetch the full blog content from a database or an API.
    // For this example, we're using a simple switch statement.
    switch (postId) {
        case '1':
            return 'Full content for Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        case '2':
            return 'Full content for Post 2. Integer euismod massa at est blandit, sed vestibulum ante lacinia.';
        case '3':
            return 'Full content for Post 3. Suspendisse potenti. Ut in ipsum sit amet neque feugiat pretium.';
        default:
            return 'Blog post not found.';
    }
}

function displayFullBlog(content) {
    fullBlogContent.innerHTML = content;
    fullBlogContent.style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // You can add your code here to handle form submission.
        // For this example, we'll display a success message.

        successMessage.textContent = "Message sent successfully!";
        contactForm.reset();
    });
});
