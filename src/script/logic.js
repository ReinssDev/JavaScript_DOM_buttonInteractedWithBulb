import { object } from "./config.js";

export const interactBulb = () => {
    // Nyalakan lampu
    object.buttonOn.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            object.bulb[index].src = '/src/assets/img/on.gif';
        });
    });

    // Matikan Lampu
    object.buttonOff.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            object.bulb[index].src = '/src/assets/img/off.gif';
        });
    });
}