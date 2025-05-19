document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const bars = [
    document.getElementById("bar1"),
    document.getElementById("bar2"),
    document.getElementById("bar3"),
  ];

  btn?.addEventListener("click", () => {
    const isOpen = menu.classList.contains("hidden");

    // Animación del menú
    if (isOpen) {
      menu.classList.remove("hidden");
      setTimeout(() => {
        menu.classList.remove("scale-y-0");
        menu.classList.remove("opacity-0");
      }, 10);
    } else {
      menu.classList.add("scale-y-0");
      menu.classList.add("opacity-0");
      setTimeout(() => {
        menu.classList.add("hidden");
      }, 300);
    }

    // Animación del botón hamburguesa a X
    if (isOpen) {
      bars[0].style.transform = "translateY(10px) rotate(45deg)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "translateY(-10px) rotate(-45deg)";
    } else {
      bars[0].style.transform = "";
      bars[1].style.opacity = "";
      bars[2].style.transform = "";
    }
  });
});