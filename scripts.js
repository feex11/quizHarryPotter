document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".magic-container");
    const numParticles = 100;
  
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
  
      // posição inicial aleatória
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
  
      // delay aleatório para variação
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
  
      // tamanho aleatório
      const size = Math.random() * 6 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
  
      container.appendChild(particle);
    }
  });
  