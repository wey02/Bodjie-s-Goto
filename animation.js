
const bgAnimations = document.querySelectorAll('.bgAnimation');
const numberOfColorBoxes = 400;

bgAnimations.forEach(bgAnimation => {
    for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        bgAnimation.appendChild(colorBox);
    }
});
