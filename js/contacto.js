const btn = document.getElementById("button");
const mensajeEnviado = document.getElementById("mensaje-enviado");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Guardar el texto original del botón
  const btnTextOriginal = btn.value;

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_p0j46bb";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar Mensaje";

      // Mostrar el mensaje de "Mensaje enviado"
      mensajeEnviado.style.display = "block";

      // Después de 3 segundos, ocultar el mensaje de nuevo y limpiar el formulario
      setTimeout(function () {
        mensajeEnviado.style.display = "none";

        // Limpieza manual del formulario
        const form = document.getElementById("form");
        const inputs = form.querySelectorAll("input, textarea");

        inputs.forEach((input) => {
          input.value = "";
        });

        // Restaurar el texto original del botón
        btn.value = btnTextOriginal;
      }, 3000);
    },
    (err) => {
      btn.value = "Enviar Mensaje";
      alert(JSON.stringify(err));
    }
  );
});
