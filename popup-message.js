function fadeIn(element, milliSeconds) {
    const begin = new Date() - 0;

    let id = setInterval(function () {
        let current = new Date() - begin;
        if (current > milliSeconds) {
            clearInterval(id);
            current = milliSeconds;
        }
        element.style.opacity = current / milliSeconds;
    }, 10);
}

function fadeOut(element, milliSeconds) {
    const begin = new Date() - 0;

    let id = setInterval(function () {
        let current = new Date() - begin;
        if (current > milliSeconds) {
            clearInterval(id);
            current = milliSeconds;
            element.style.display = "none";
            element.parentNode.removeChild(element);
        }
        element.style.opacity = 1 - (current / milliSeconds);
    }, 10);
}

function popupMessage(message) {
    let p = document.createElement("p");
    let newContent = document.createTextNode(message);
    p.appendChild(newContent);
    p.className = 'alert-notice';
    p.style.opacity = 0;

    document.body.insertAdjacentElement('afterbegin', p);

    fadeIn(p, 600);
    fadeOut(p, 2000);
}
