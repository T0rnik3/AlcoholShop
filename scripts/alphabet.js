
//  Generate alphabet links dynamically
for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const link = document.createElement('a');
    link.classList.add('alphabet-link');
    link.href = '#';
    link.setAttribute('data-letter', letter.toLowerCase());
    link.textContent = letter;
    document.querySelector('.alphabet-container').appendChild(link);
}