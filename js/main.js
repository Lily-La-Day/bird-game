

document.getElementById("Layer_11").style.opacity = 1



const handleFragmentClick = function(event) {
	const parentElement = event.target.parentElement
	if (parentElement.dataset.target == "fragment") {
		toggleVisibility(parentElement)
	}
}

const toggleVisibility = function(el) {
	if (el.style.opacity !== "0") {
		el.style.opacity = 0
	} else {
		el.style.opacity = 100
	}
}

document.addEventListener("click", handleFragmentClick)
