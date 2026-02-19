// ==========================================
// 1. Projects Data (Add your projects here)
// ==========================================
const projects = [
    {
        title: "متجر إلكتروني",
        description: "متجر متكامل لبيع المنتجات الرقمية، يدعم الدفع الإلكتروني وتصميم متجاوب.",
        image: "https://via.placeholder.com/400x300/1e293b/d4af37?text=E-Commerce",
        previewLink: "#", // Link to live site
        codeLink: "#"     // Link to GitHub (optional)
    },
    {
        title: "تطبيق إدارة مهام",
        description: "تطبيق ويب يساعد الفرق على تنظيم المهام وزيادة الإنتاجية.",
        image: "https://via.placeholder.com/400x300/1e293b/d4af37?text=Task+Manager",
        previewLink: "#",
        codeLink: "#"
    },
    {
        title: "صفحة هبوط منتج",
        description: "صفحة هبوط تعريفية لمنتج تقني جديد مع رسوم متحركة جذابة.",
        image: "https://via.placeholder.com/400x300/1e293b/d4af37?text=Landing+Page",
        previewLink: "#",
        codeLink: "#"
    },
    // Add more projects here...
];

// ==========================================
// 2. Render Projects
// ==========================================
const projectsContainer = document.getElementById('projects-container');

function renderProjects() {
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div style="margin-top: 15px;">
                    <a href="${project.previewLink}" class="btn btn-primary btn-sm" target="_blank">معاينة</a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(card);
    });
}

// Call render function
document.addEventListener('DOMContentLoaded', renderProjects);


// ==========================================
// 3. Update Year & Mobile Menu
// ==========================================
// Update Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon from bars to times
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
