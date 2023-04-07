function confirmSubmition(event) {
    if (!confirm("Are you sure you want to submit")) {
        event.preventDefault();
    }
}

console.log("test")
let submitbutton = document.querySelector("form")
submitbutton.addEventListener("submit", confirmSubmition);