// Interactive button
document.getElementById('clickMe').addEventListener('click', function() {
    const messages = [
        '🎉 Thanks for clicking!',
        '🚀 Deployment successful!',
        '✨ You\'re awesome!',
        '💡 GitHub Actions is powerful!',
        '🌟 Continuous Deployment is cool!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a notification
    const notification = document.createElement('div');
    notification.textContent = randomMessage;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2c3e50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        animation: slideIn 0.5s ease-out;
        z-index: 9999;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
});

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

console.log('🚀 Website deployed with GitHub Actions!');