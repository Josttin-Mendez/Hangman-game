const logoTitleDark = document.querySelector(".logo-title-dm"); //logo principal en modo oscuro
const logoTitleLight = document.querySelector(".logo-title"); //logo principal en modo claro
const btnSwitch = document.querySelector("#switch-mode"); //boton de cambio de modo
const socialIconContentLight = document.querySelector(".social-icon-content"); //iconos de redes sociales en modo claro
const socialIconContentDark = document.querySelector(
  ".social-icon-content-dark-mode"
); //iconos de redes sociales en modo oscuro
const nameFooter = document.querySelector(".name-footer"); //nombre del footer en modo claro
const nameFooterDark = document.querySelector(".name-footer-dm"); //nombre del footer en modo oscuro

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  if (
    logoTitleLight.classList.contains("disabled") &&
    socialIconContentLight.classList.contains("disabled") &&
    nameFooter.classList.contains("disabled")
  ) {
    logoTitleLight.classList.remove("disabled");
    logoTitleDark.classList.remove("active");
    socialIconContentLight.classList.remove("disabled");
    socialIconContentDark.classList.remove("active");
    nameFooter.classList.remove("disabled");
    nameFooterDark.classList.remove("active");

    logoTitleLight.classList.add("active");
    logoTitleDark.classList.add("disabled");
    socialIconContentLight.classList.add("active");
    socialIconContentDark.classList.add("disabled");
    nameFooter.classList.add("active");
    nameFooterDark.classList.add("disabled");
  } else {
    logoTitleLight.classList.remove("active");
    logoTitleDark.classList.remove("disabled");
    socialIconContentLight.classList.remove("active");
    socialIconContentDark.classList.remove("disabled");
    nameFooter.classList.remove("active");
    nameFooterDark.classList.remove("disabled");

    logoTitleLight.classList.add("disabled");
    logoTitleDark.classList.add("active");
    socialIconContentLight.classList.add("disabled");
    socialIconContentDark.classList.add("active");
    nameFooter.classList.add("disabled");
    nameFooterDark.classList.add("active");
  }

  // Guardamos el estado del modo oscuro en el localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", true);
  } else {
    localStorage.setItem("darkMode", false);
  }
});

//*!<-------------- obtener Modo del Local Storage -------------->*/

//obtenemos el modo actual del localStorage

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
  if (
    logoTitleLight.classList.contains("disabled") &&
    socialIconContentLight.classList.contains("disabled") &&
    nameFooter.classList.contains("disabled")
  ) {
    logoTitleLight.classList.remove("disabled");
    logoTitleDark.classList.remove("active");
    socialIconContentLight.classList.remove("disabled");
    socialIconContentDark.classList.remove("active");
    nameFooter.classList.remove("disabled");
    nameFooterDark.classList.remove("active");

    logoTitleLight.classList.add("active");
    logoTitleDark.classList.add("disabled");
    socialIconContentLight.classList.add("active");
    socialIconContentDark.classList.add("disabled");
    nameFooter.classList.add("active");
    nameFooterDark.classList.add("disabled");
  } else {
    logoTitleLight.classList.remove("active");
    logoTitleDark.classList.remove("disabled");
    socialIconContentLight.classList.remove("active");
    socialIconContentDark.classList.remove("disabled");
    nameFooter.classList.remove("active");
    nameFooterDark.classList.remove("disabled");

    logoTitleLight.classList.add("disabled");
    logoTitleDark.classList.add("active");
    socialIconContentLight.classList.add("disabled");
    socialIconContentDark.classList.add("active");
    nameFooter.classList.add("disabled");
    nameFooterDark.classList.add("active");
  }
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}
