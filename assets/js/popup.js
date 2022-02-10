
function popupEvent(el, content) {

    el.addEventListener("click", () => {
        content.style.display = "block";

    }, false);
}
function closePopup(window, content) {
    window.addEventListener("click", (e) => {
        if (e.target === content) {
            console.log('a');
            content.style.display = "none";
        }

    }, false);
}

popupEvent(document.getElementById("myBtn"), document.getElementById("details"));
closePopup(window, document.getElementById("details"));