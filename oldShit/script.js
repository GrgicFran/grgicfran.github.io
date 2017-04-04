var a = document.querySelectorAll(".skill");
var toggle = false;

function handleUpdate() {
    if (this.style.height == "100px") this.style.height = "35px";
    else this.style.height = "100px";
}

a.forEach(element => element.addEventListener('click', handleUpdate));