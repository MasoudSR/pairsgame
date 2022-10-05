function startGame() {
	document.querySelector(".cards").innerText = "";
	cardGenerator();
	document.querySelectorAll(".card").forEach((card) => {
		card.addEventListener("click", clickHandler);
	});
}

function cardGenerator() {
	const cardsPics = [
		"/images/troll black3.png",
		"/images/troll crazy.png",
		"/images/troll phone.png",
		"/images/trollsadbed1.png",
		"/images/trollthug2.png",
	];
	const cards = [];
	cardsPics.forEach((pic, index) => {
		const card = document.createElement("div");
		card.classList.add("card");
		card.innerHTML = `<img src="${pic}" alt="${pic}"></img>`;
		cards.push(card);
	});
	cardsPics.forEach((pic, index) => {
		const card = document.createElement("div");
		card.classList.add("card");
		card.innerHTML = `<img src="${pic}" alt="${pic}"></img>`;
		cards.push(card);
	});
	shuffle(cards);
	cards.forEach((card) => {
		document.querySelector(".cards").appendChild(card);
	});
}

function shuffle(cards) {
	let currentIndex = cards.length;
	let randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
	}
}

let selected = "";

function clickHandler(event) {
	event.target.childNodes[0].style.visibility = "visible";
	if (selected.length === 0) {
		// first card chosen
		selected = event.target;
	} else {
		// second card chosen
		if (selected.innerHTML === event.target.innerHTML) {
			correctChoice(event);
		} else {
			wrongChoice(event);
		}
	}
}

function correctChoice(event) {
	event.target.style.pointerEvents = "none";
	selected.style.pointerEvents = "none";
	selected = "";
}

function wrongChoice(event) {
	const temp = selected;
	setTimeout(() => {
		event.target.childNodes[0].style.visibility = "hidden";
		temp.childNodes[0].style.visibility = "hidden";
	}, 1000);
	selected = "";
}

startGame();
