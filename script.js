const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const generateBtn = document.getElementById('generate-btn');
const resultBg = document.getElementById('result-bg');
const gradientDirection = document.querySelector('input[name="direction"]:checked');
const gradientTypeSelect = document.getElementById('gradient-type');

generateBtn.addEventListener('click', generateBackground);

function generateBackground() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const direction = gradientDirection.value;
    const gradientType = gradientTypeSelect.value;

    let gradientStyle;

    if (gradientType === 'linear') {
        switch (direction) {
            case 'horizontal':
                gradientStyle = `linear-gradient(to right, ${color1}, ${color2})`;
                break;
            case 'vertical':
                gradientStyle = `linear-gradient(to bottom, ${color1}, ${color2})`;
                break;
            case 'diagonal':
                gradientStyle = `linear-gradient(to bottom right, ${color1}, ${color2})`;
                break;
            default:
                gradientStyle = `linear-gradient(to right, ${color1}, ${color2})`;
        }
    } else if (gradientType === 'radial') {
        gradientStyle = `radial-gradient(${color1}, ${color2})`;
    }

    resultBg.style.background = gradientStyle;
}
