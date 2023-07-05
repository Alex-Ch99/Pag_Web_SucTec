const boton = document.querySelector(".whatsapp__logo");
const chats = document.querySelector(".chats");

boton.addEventListener("click", () => {
  chats.classList.toggle("activo");
});
