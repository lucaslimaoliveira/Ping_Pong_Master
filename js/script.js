window.onload = () => {
    const container = document.querySelector(".comparador");
    const slider = document.querySelector(".slider");
    const overlay = document.querySelector(".overlay");

    let ativo = false;

    const radius = 50;

    slider.addEventListener("mousedown", () => ativo = true);
    window.addEventListener("mouseup", () => ativo = false);

    window.addEventListener("mousemove", (e) => {
    if (!ativo) return;

    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const porcentagem = (x / rect.width) * 100;

    overlay.style.width = porcentagem + "%";
    slider.style.left = porcentagem + "%";

    let distEsquerda = x;
    let distDireita = rect.width - x;

    let menorDist = Math.min(distEsquerda, distDireita);

    let fator = Math.min(menorDist / radius, 1);

    let altura = rect.height * fator;
    let top = (rect.height - altura) / 2;

    slider.style.height = altura + "px";
    slider.style.top = top + "px";
    });
}