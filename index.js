
document.addEventListener("DOMContentLoaded", () => {
  const flechas = document.querySelectorAll(".flecha");
  const boton = document.getElementById("boton");

  let encendido = false;

  boton.addEventListener("click", () => {
    flechas.forEach(flecha => {
      flecha.classList.toggle("pausada", encendido);
    });

    encendido = !encendido;
    boton.textContent = encendido ? "⛔ Apagar Ciclo" : "🔁 Encender Ciclo";
  });
});
