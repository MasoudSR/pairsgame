function restartGame() {
	document.querySelector(".cards").innerText = "";
	cardGenerator()
	gameStarted = false
}

function startTimer() {
	let time = 30;
	timer = setInterval(() => {
		time--;
		document.querySelector(".timer").innerText = time;
		time === 0 && loseHandler(timer);
		correctNumber === 5 && clearInterval();
	}, 1000);
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
	document.querySelectorAll(".card").forEach((card) => {
		card.addEventListener("click", clickHandler);
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

let gameStarted = false
let firstChoice = "";

function clickHandler(event) {
	if (!gameStarted){
		gameStarted = true
		correctNumber = 0;
		startTimer()
	}
	event.currentTarget.classList.add("flip");
	if (firstChoice.length === 0) {
		// first card chosen
		firstChoice = event.currentTarget;
	} else {
		// second card chosen
		let secondChoice = event.currentTarget;
		if (firstChoice.innerHTML === secondChoice.innerHTML) {
			correctChoice(secondChoice);
		} else {
			wrongChoice(secondChoice);
		}
	}
}

let correctNumber = 0;

function correctChoice(secondChoice) {
	secondChoice.style.pointerEvents = "none";
	firstChoice.style.pointerEvents = "none";
	firstChoice = "";
	correctNumber++;
	correctNumber === 5 && winHandler();
}

function winHandler() {
	clearInterval(timer);
	setTimeout(() => {
		alert("you win");
		restartGame();
	}, 500);
}

function wrongChoice(secondChoice) {
	const temp = firstChoice;
	setTimeout(() => {
		secondChoice.classList.remove("flip");
		temp.classList.remove("flip");
	}, 800);
	firstChoice = "";
}

function loseHandler() {
	clearInterval(timer);
	alert("time out you lose");
	restartGame();
}


cardGenerator();
// startGame();
