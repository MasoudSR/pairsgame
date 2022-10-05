function startGame() {
    cardGenerator()
    document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", clickHandler);
    });
    
}

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

function cardGenerator(){
    const cardsPics = [1,2,3,4,5]
    const cards = []
    cardsPics.forEach((pic , index)=>{
        const card = document.createElement("div")
        card.classList.add("card")
        card.id=index
        card.innerHTML=`<p>${pic}</p>`
        cards.push(card)
    })
    cardsPics.forEach((pic , index)=>{
        const card = document.createElement("div")
        card.classList.add("card")
        card.id=index+5
        card.innerHTML=`<p>${pic}</p>`
        cards.push(card)
    })
    // shuffle(cards)
    cards.forEach(card=>{
        document.querySelector(".cards").appendChild(card)
    })
}

// function shuffle(cards){
//     let cardsIndex = cards.length

// }

startGame()