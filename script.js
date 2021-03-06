
const game = () => {

 let currentPlayer = "X"

 const handleCellPlayed = function() {
  	document.addEventListener('click', function(event) {
		if(event.target.tagName.toUpperCase() == 'DIV') {
			event.target.innerHTML = `<p>${currentPlayer}</p>`;
			let index = event.target.className;
			gameboard.board[index] = currentPlayer;
			handlePlayerChange();
			checkWinner();
			console.log(gameboard.board)
  		}
  	})
  }

  const handlePlayerChange = function() {
  	currentPlayer = currentPlayer === "X" ? "O" : "X"
  }

 const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
 ];

 const checkWinner = function() {
 	let roundWon = false;
 	let winner = "no winner";
 	let draw = !gameboard.board.includes("block")
 	for (let i = 0; i < 8; i++) {
		let winCondition = winningConditions[i];
		let a = gameboard.board[winCondition[0]];
		let b = gameboard.board[winCondition[1]];
		let c = gameboard.board[winCondition[2]];
 		if (a === "X" && b === "X" && c === "X") {
 			roundWon = true;
 			winner = "X"
 		} else if ( a === "0" && b === "O" && c === "0") {
 			roundWon = true;
 			winner = "O";
 		} else if ( draw ) {
 			roundWon = true;
 			winner = "draw"

 		}

 	}

 	if (roundWon) {
 		let statusMessage
 		if( winner === "X" || winner === "O") {
 			statusMessage = `${winner} has won the game!`
 		} else statusMessage = "It's a draw" 
 		document.querySelector(".status").textContent = statusMessage;
 	}

 }

	return { handleCellPlayed }
};


const gameboard = (() => {
	const board = []
	const createBoard = function() {
		const main = document.querySelector(".gameboard")
		for(let i=0; i < 9; i++) {
			let block = document.createElement("div");
			block.classList.add(i);
			board.push("block");
			main.appendChild(block);
		}
		return board
	}

	return { createBoard, board } 

})();

gameboard.createBoard()
const round1 = game()
round1.handleCellPlayed()