const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_p0j46bb";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Mensaje enviado!");
    },
    (err) => {
      btn.value = "Enviar Mensaje";
      alert(JSON.stringify(err));
    }
  );
});
