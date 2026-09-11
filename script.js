document.addEventListener("DOMContentLoaded", () => {
    const glitchText = document.querySelector('.glitch');
    const originalText = glitchText.getAttribute('data-text');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    
    let iterations = 0;
    
    // Simulate a system boot-up text scramble effect
    const interval = setInterval(() => {
        glitchText.innerText = originalText.split('').map((letter, index) => {
            if(index < iterations) {
                return originalText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
        }).join('');
        
        if(iterations >= originalText.length){
            clearInterval(interval);
        }
        
        iterations += 1 / 3; // Controls the speed of the unscrambling
    }, 30);

    // Add subtle hover sound simulation (visual feedback) to buttons
    const buttons = document.querySelectorAll('.btn, .nav-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});