document.addEventListener("DOMContentLoaded", () => {
  const flechas = document.querySelectorAll(".flecha, .fuera");

  // Crear botón
  const boton = document.createElement("button");
  boton.textContent = "Encender Ciclo";
  boton.style.margin = "20px";
  boton.style.padding = "10px 20px";
  boton.style.fontSize = "16px";
  boton.style.backgroundColor = "#00ffcc";
  boton.style.color = "#111";
  boton.style.border = "none";
  boton.style.borderRadius = "5px";
  boton.style.cursor = "pointer";
  boton.style.fontWeight = "bold";
  document.body.insertBefore(boton, document.body.children[1]);

  let encendido = false;

  boton.addEventListener("click", () => {
    flechas.forEach(flecha => {
      flecha.style.animationPlayState = encendido ? "paused" : "running";
    });

    encendido = !encendido;
    boton.textContent = encendido ? "Apagar Ciclo" : "Encender Ciclo";
  });

  // Inicialmente pausado
  flechas.forEach(flecha => {
    flecha.style.animationPlayState = "paused";
  });
});

