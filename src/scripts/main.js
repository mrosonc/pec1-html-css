import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
    duration: 700,
    easing: "ease-out",
    once: true
});

const toggleInfoButton = document.querySelector("#toggle-info");
const additionalInfo = document.querySelector("#info-adicional-portada");

if (toggleInfoButton && additionalInfo) {
    toggleInfoButton.addEventListener("click", () => {
        const isHidden = additionalInfo.hasAttribute("hidden");

        if (isHidden) {
            additionalInfo.removeAttribute("hidden");
            toggleInfoButton.textContent = "Ver menos";
            toggleInfoButton.setAttribute("aria-expanded", "true");
        } else {
            additionalInfo.setAttribute("hidden", "");
            toggleInfoButton.textContent = "Ver más";
            toggleInfoButton.setAttribute("aria-expanded", "false");
        }
    });
}
