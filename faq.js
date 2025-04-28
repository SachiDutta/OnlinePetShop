document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        // Toggle Active State
        faqItem.classList.toggle('active');
    });
});
