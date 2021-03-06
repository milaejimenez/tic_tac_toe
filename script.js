
const player = () => {

 let currentPlayer = "X"

 const handleCellPlayed = function() {
  	document.addEventListener('click', function(event) {
		if(event.target.tagName.toUpperCase() == 'DIV') {
			event.target.innerHTML = `<p>${currentPlayer}</p>`;
			let index = event.target.className;
			game.board[index] = currentPlayer;
			handlePlayerChange();
			checkWinner();
			console.log(game.board)
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
 	for (let i = 0; i < 8; i++) {
		let winCondition = winningConditions[i];
		let a = game.board[winCondition[0]];
		let b = game.board[winCondition[1]];
		let c = game.board[winCondition[2]];
 		if (a === "X" && b === "X" && c === "X") {
 			roundWon = true;
 			winner = "X"
 		} if ( a === "0" && b === "O" && c === "0") {
 			roundWon = true;
 			winner = "O";
 		}
 	}

 }

return { handleCellPlayed }

};


const game = (() => {
	const board = []
	const createBoard = function() {
		const main = document.querySelector(".gameboard")
		for(let i=0; i < 9; i++) {
			let block = document.createElement("div");
			block.classList.add(i);
			board.push(block);
			main.appendChild(block);
		}
		return board
	}

	return { createBoard, board } 

})();

game.createBoard()
const player1 = player()
player1.handleCellPlayed()