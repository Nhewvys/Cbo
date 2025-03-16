function loading(target, value) {
    const loadingIcon = document.createElement("i");
    loadingIcon.className = "fa-solid fa-spinner fa-spin";
    target.innerHTML = value;
    target.disabled = true;
    target.prepend(loadingIcon);
}

function loadingHide(target, value) {
    target.innerHTML = value;
    target.disabled = false;
}
