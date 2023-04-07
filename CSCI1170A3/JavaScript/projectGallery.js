function openInfo(event) {
	let info = event.target.nextElementSibling;
	info.classList.remove("info-container-invisible");
	info.classList.add("info-container");
}

function closeInfo(event) {
	let infoPanels = document.querySelectorAll(".info-container");
	for (let i = 0; i < infoPanels.length; i++) {
		infoPanels[i].classList.remove("info-container");
		infoPanels[i].classList.add("info-container-invisible");
	}
}

let galleryImgs = document.querySelectorAll(".project-image");
for (let i = 0; i < galleryImgs.length; i++) {
	galleryImgs[i].addEventListener("click", openInfo);
}
let infoContainers = document.querySelectorAll(".info-container-invisible");
for (let i = 0; i < infoContainers.length; i++) {
	infoContainers[i].addEventListener("click", closeInfo);
}