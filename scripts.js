let timer = 30
setInterval(()=>{
timer--
document.querySelector(".timer").innerText=timer
timer===0 && loseHandler()
},1000)

function loseHandler(){
	alert("time out you lose")
	startGame()
}

let correctNumber = 0;

function startGame() {
	timer = 30
	correctNumber = 0;
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
		card.innerHTML = `<div class="front"></div><div class="back"><img src="${pic}" alt="${pic}"></div>`;
		cards.push(card);
	});
	cardsPics.forEach((pic, index) => {
		const card = document.createElement("div");
		card.classList.add("card");
		card.innerHTML = `<div class="front"></div><div class="back"><img src="${pic}" alt="${pic}"></div>`;
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

let firstChoice = "";

function clickHandler(event) {
	event.currentTarget.classList.add("flip");
	if (firstChoice.length === 0) {
		// first card chosen
		firstChoice = event.currentTarget;
	} else {
		// second card chosen
		let secondChoice = event.currentTarget;
		if (firstChoice.innerHTML === secondChoice.innerHTML) {
			correctChoice(event, secondChoice);
		} else {
			wrongChoice(event, secondChoice);
		}
	}
}


function correctChoice(event, secondChoice) {
	secondChoice.style.pointerEvents = "none";
	firstChoice.style.pointerEvents = "none";
	firstChoice = "";
	correctNumber++;
	correctNumber === 5 && winHandler();
}

function winHandler() {
	setTimeout(() => {
		alert("you win");
		startGame();
	}, 500);
}

function wrongChoice(event, secondChoice) {
	const temp = firstChoice;
	setTimeout(() => {
		secondChoice.classList.remove("flip");
		temp.classList.remove("flip");
	}, 800);
	firstChoice = "";
}

startGame();
