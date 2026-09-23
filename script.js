const banner = document.getElementById('div_banner');
const bannerImg = document.getElementById('foto_banner');

const intensidade = 50;
const suavidade = 0.08; // quanto menor, mais suave (e mais "atrasado")

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
let currentScale = 1;
let targetScale = 1;

banner.addEventListener('mousemove', (e) => {
    const rect = banner.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    targetX = -x * intensidade;
    targetY = -y * intensidade;
    targetScale = 1.1;
});

banner.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    targetScale = 1;
});

function animar() {
    currentX += (targetX - currentX) * suavidade;
    currentY += (targetY - currentY) * suavidade;
    currentScale += (targetScale - currentScale) * suavidade;

    bannerImg.style.transform = `scale(${currentScale}) translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animar);
}

animar();

const h1 = document.getElementById("h1")

h1.addEventListener('click', (e) =>{
    const resumo = document.getElementById("resumo")

})



