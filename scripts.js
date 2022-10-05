const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	card.addEventListener("click", clickHandler);
});

let selected = "";

function clickHandler(event) {
    event.target.childNodes[0].style.visibility="visible"
	if (selected.length === 0) {
		selected = event.target;
	} else {
		if (selected.innerText === event.target.innerText) {
            event.target.style.pointerEvents="none"
            selected.style.pointerEvents="none"
			selected = "";
		} else {
            const temp = selected
            setTimeout(()=>{
                event.target.childNodes[0].style.visibility="hidden"
                temp.childNodes[0].style.visibility="hidden"
            },1000)
            selected = "";
		}
	}
}
