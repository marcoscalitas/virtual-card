//Add class on element by event
function addClassBy(buttonId, elementId, eventName, className) {
    const button = document.getElementById(buttonId);
    const element = document.getElementById(elementId);

    button.addEventListener(eventName, () => {
        element.classList.toggle(className);
    });
}
// show and hide menu button icons
addClassBy('btn-mobile', 'open-menu-icon', 'click', 'is-none')
addClassBy('btn-mobile', 'close-menu-icon', 'click', 'is-none')

