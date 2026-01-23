document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect
    const typewriters = document.querySelectorAll('.typewriter-text');
    
    typewriters.forEach(el => {
        const text = el.getAttribute('data-text') || el.innerText;
        el.innerText = ''; // Clear initial text
        el.style.opacity = 1; // Make visible
        
        // Preserve line breaks for 'white-space: pre-wrap' or manual splitting
        let i = 0;
        const speed = 50; // ms per char
        
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        // Only start if visible or immediately
        type();
    });
});
