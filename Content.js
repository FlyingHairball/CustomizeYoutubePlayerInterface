// settings:
let startHidden = false
let hideByOpacity = false // you can still interact with the interface by mousing over it

let shortcut = "p"
let ctrlKey = false
let shiftKey = false
let altKey = false
let metaKey = false
// end of settings


let controlsAreVisible = true;
const toggleControlsVisible = () => {
    const playerControlElements = document.querySelectorAll(".ytp-chrome-top, .ytp-gradient-top, .ytp-chrome-bottom, .ytp-gradient-bottom, .ytp-overlays-container, .ytp-fullscreen-grid-expand-button");

    if (hideByOpacity) {
        playerControlElements.forEach(elem => elem.style.opacity = controlsAreVisible ? 0 : "");
    } else {
        playerControlElements.forEach(elem => elem.style.display = controlsAreVisible ? "none" : "");
    }

    controlsAreVisible = !controlsAreVisible;
}

document.addEventListener("keydown", function (event) {
        if (
            event.ctrlKey === ctrlKey &&
            event.shiftKey === shiftKey &&
            event.altKey === altKey &&
            event.metaKey === metaKey &&
            event.key.toLowerCase() === shortcut.toLowerCase()
        ) {
            toggleControlsVisible();
        }
} );

if (startHidden) {
    toggleControlsVisible();
}

// detect interface version
if (document.getElementsByClassName("ytp-overlays-container").length) {
    document.body.classList.add("ytp_interface_2025");
} else {
    document.body.classList.add("ytp_interface_2015");
}