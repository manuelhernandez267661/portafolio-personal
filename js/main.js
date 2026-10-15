const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navegacion-principal");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.querySelector(".sr-only").textContent = isExpanded ? "Abrir menú" : "Cerrar menú";
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector(".sr-only").textContent = "Abrir menú";
      navigation.classList.remove("is-open");
    }
  });
}
