const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * -15;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});let isFlipped = false;

function flipPage() {
    const book = document.querySelector('.book');
    if (isFlipped) {
        book.style.transform = 'rotateY(0deg)';
    } else {
        book.style.transform = 'rotateY(180deg)';
    }
    isFlipped = !isFlipped;
}
