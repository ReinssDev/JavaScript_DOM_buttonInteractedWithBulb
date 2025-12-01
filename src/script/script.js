const object = {
    bulb: document.getElementById('bulb'),
    buttonOn: document.getElementById('btn-on'),
    buttonOff: document.getElementById('btn-off')
}

object.buttonOn.addEventListener('click', (e) => {
    e.preventDefault();
    object.bulb.src = '/src/assets/img/on.gif'
});

object.buttonOff.addEventListener('click', (e) => {
    e.preventDefault();
    object.bulb.src = '/src/assets/img/off.gif';
});