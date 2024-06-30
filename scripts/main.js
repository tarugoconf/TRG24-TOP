// Menu
document.body.addEventListener("click", () => {
  document.body.classList.remove("has-navbar-open");
});

document.getElementById("menu-button").addEventListener("click", (ev) => {
  document.body.classList.toggle("has-navbar-open");
  ev.stopPropagation();
});
document.getElementById("menu").addEventListener("click", (ev) => {
  ev.stopPropagation();
  setTimeout(() => {
    document.body.classList.remove("has-navbar-open");
  }, 100);
});

document.querySelectorAll("button[data-open]").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.dataset.open;
    const target = document.getElementById(id);
    target.showModal();
    history.replaceState(null, null, `#${id}`);
  });
});

document.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.dataset.close;
    const target = id ? document.getElementById(id) : el.closest("dialog");
    target.close();

    if (location.hash === `#${target.id}`) {
      history.replaceState(null, null, document.location.pathname);
    }
  });
});

// Init dialog
document.querySelector("dialog:target")?.showModal();

addEventListener("popstate", () => {
  const element = document.querySelector(":target");
  if (!element) {
    return;
  }

  if (element.tagName === "DIALOG" && element.open === false) {
    element.showModal();
  }
});