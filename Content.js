// settings:
let startHidden = false
let hideByOpacity = false // you can still interact with the interface by mousing over it
let enableStyles = false

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

// handle input
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

// detect interface version
if (document.getElementsByClassName("ytp-overlays-container").length) {
    document.body.classList.add("hypi-interface_2025");
} else {
    document.body.classList.add("hypi-interface_2015");
}

// refresh data after settings update
window.addEventListener("hypi_update", () => get_data());

// await until the UI is fully loaded before fetching initial data
waitForElm(".ytDislikeButtonViewModelHost").then(() => {
    get_data(true)
});

// get settings from local storage
const get_data = (initial = false) => {
    if (!chrome?.runtime?.id) return

    chrome.storage.local.get(null, (data) => {
        enableStyles = data["hypi-enable-styles"]
        if (enableStyles) {
            document.body.classList.add("hypi-enable-styles");
        } else {
            document.body.classList.remove("hypi-enable-styles");
        }

        Object.keys(data).forEach(key => {
            switch (key) {
                case "hypi-custom-shortcut":
                    shortcut = data[key]
                    break
                case "hypi-ctrlKey":
                    ctrlKey = data[key]
                    break;
                case "hypi-shiftKey":
                    shiftKey = data[key]
                    break;
                case "hypi-altKey":
                    altKey = data[key]
                    break;
                case "hypi-metaKey":
                    metaKey = data[key]
                    break;
                case "hypi-start-hidden":
                    startHidden = data[key]
                    break;
                case "hypi-enable-styles":
                    break;
                case "hypi-hide-by-opacity":
                    if (!controlsAreVisible) {
                        toggleControlsVisible();
                    }
                    hideByOpacity = data[key]
                    break;
                case "hypi-custom-ui-2025":
                    if (data[key]) {
                        document.body.classList.add("hypi-custom-ui-2025");
                    } else {
                        document.body.classList.remove("hypi-custom-ui-2025");
                    }
                    break
                case "hypi-custom-ui-2015":
                    if (data[key]) {
                        document.body.classList.add("hypi-unintrusive-dropshadow");
                    } else {
                        document.body.classList.remove("hypi-unintrusive-dropshadow");
                    }
                    break
                case "hiddenElements":
                    const hiddenElements = JSON.parse(data[key])
                    Object.keys(hiddenElements).forEach(elementSelector => {
                        document.querySelectorAll(elementSelector).forEach(element => {
                            if (hiddenElements[elementSelector].value && enableStyles) {
                                element.classList.add("hypi-hidden")
                            } else {
                                element.classList.remove("hypi-hidden")
                            }
                        })
                    })
                    break
                default:
                    console.warn("hypi unhandled input: ", key);
            }
        })
        if (initial) init()
    });
}

const init = () => {
    document.body.classList.add("hypi-ready");
    
    if (startHidden) {
        toggleControlsVisible();
    }
    
    var bottom = document.querySelector(".ytp-chrome-bottom")
    var dropShadow = document.createElement("div")
    dropShadow.classList.add("hypi-drop-shadow")
    bottom.appendChild(dropShadow)
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}