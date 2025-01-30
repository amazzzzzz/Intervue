document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    // Loop through each FAQ item
    faqItems.forEach(item => {
        // Initially hide all answers
        item.querySelector('.faq-answer').style.display = 'none';

        // Add a click event listener to each FAQ question
        item.querySelector('.faq-question').addEventListener('click', () => {
            // Toggle the display of the answer when the question is clicked
            const answer = item.querySelector('.faq-answer');
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block'; // Show the answer
            } else {
                answer.style.display = 'none'; // Hide the answer
            }
        });
    });
});
