

//Minesweeper constructor to represent the game
class Minesweeper {
	constructor(opts = {}) {
	  let loadedData = {};

	  if (hasLocalStorage && localStorage["minesweeper.data"]) {
		loadedData = JSON.parse(localStorage["minesweeper.data"]);
		this.loadGame = true;
	  }
  
	  Object.assign(
		this,
		{
		  grid: [], 
		  minesFound: 0,
		  falseMines: 0, 
		  status_msg: "Playing...",
		  playing: true,
		  movesMade: 0,
		  options: {
			rows: 8, 
			cols: 8,
			mines: 10 
		  }
		},
		{ options: opts },
		loadedData
	  );
  

	  let rows = this.options["rows"];
  
	  if (isNaN(rows)) {
		this.options["rows"] = 8;
	  } else if (rows < 3) {
		this.options["rows"] = 3;
	  } else if (rows > 19) {
		this.options["rows"] = 19;
	  }
  
	  let cols = this.options["cols"];
  
	  if (isNaN(cols)) {
		this.options["cols"] = 8;
	  } else if (cols < 3) {
		this.options["cols"] = 3;
	  } else if (cols > 19) {
		this.options["cols"] = 19;
	  }
  
	  if (isNaN(this.options["mines"])) {
		this.options["mines"] = 10;
	  }
	  if (this.options["mines"] < 0) {
		this.options["mines"] = 1;
	  } else if (
		this.options["mines"] >
		this.options["rows"] * this.options["cols"]
	  ) {
		this.options["mines"] = this.options["rows"] * this.options["cols"];
	  }
  
	  if (this.loadGame) {
		this.load();
	  } else {
		this.init();
	  }
	  this.save();
	}
  
	//setup the game grid
	init() {
	
	  for (let r = 0; r < this.options["rows"]; r++) {
		this.grid[r] = [];
		for (let c = 0; c < this.options["cols"]; c++) {
		  this.grid[r].push(new Cell({ xpos: c, ypos: r }));
		}
	  }
  
	  let assignedMines = 0;
	  while (assignedMines < this.options.mines) {
		var rowIndex = Math.floor(Math.random() * this.options.rows);
		var colIndex = Math.floor(Math.random() * this.options.cols);
	
		let cell = this.grid[rowIndex][colIndex];
		if (!cell.isMine) {
		  cell.isMine = true;
		  cell.value = "M";
		  assignedMines++;
		}
	  }
  
	
	  for (let r = 0; r < this.options["rows"]; r++) {
		for (let c = 0; c < this.options["cols"]; c++) {
		
		  if (!this.grid[r][c].isMine) {
			let mineCount = 0,
			  adjCells = this.getAdjacentCells(r, c);
			for (let i = adjCells.length; i--; ) {
			  if (adjCells[i].isMine) {
				mineCount++;
			  }
			}
  
			this.grid[r][c].value = mineCount;
		  }
		}
	  }
	  this.render();
	}
  
		load() {
	  for (let r = 0, r_len = this.grid.length; r < r_len; r++) {
		for (let c = 0, c_len = this.grid[r].length; c < c_len; c++) {
		  this.grid[r][c] = new Cell(this.grid[r][c]);
		}
	  }
  
	  this.render();
	}
  
	//construct the DOM representing the grid
	render() {
	  const gameContainer = document.getElementById("game_container");

	  gameContainer.innerHTML = "";
  
	  let content = "";
	  for (let r = 0; r < this.options.rows; r++) {
		content += '<div class="row">';
		for (let c = 0; c < this.options.cols; c++) {
		  let cellObj = this.grid[r][c];
  
		  let add_class = "",
			txt = "";
		  if (cellObj.isFlagged) {
			add_class = "flagged";
		  } else if (cellObj.isRevealed) {
			add_class = `revealed adj-${cellObj.value}`;
			txt = (!cellObj.isMine ? cellObj.value || "" : "");
		  }
  
		  content += `<div class="cell ${add_class}" data-xpos="${c}" data-ypos="${r}">${txt}</div>`;
		}
		content += "</div>";
	  }
  
	  gameContainer.innerHTML = content;
  

	  document.getElementById("new_rows").value = this.options["rows"];
	  document.getElementById("new_cols").value = this.options["cols"];
	  document.getElementById("new_mines").value = this.options["mines"];
  

	  document.getElementById("mine_count").textContent =
		this.options["mines"] - (this.falseMines + this.minesFound);
	  document.getElementById("moves_made").textContent = this.movesMade;
	  document.getElementById("game_status").textContent = this.status_msg;
	  document.getElementById("game_status").style.color = "black";
	}
  
	//returns an array of cells adjacent to the row,col passed in
	getAdjacentCells(row, col) {
	  let results = [];
	  for (
		let rowPos = row > 0 ? -1 : 0;
		rowPos <= (row < this.options.rows - 1 ? 1 : 0);
		rowPos++
	  ) {
		for (
		  let colPos = col > 0 ? -1 : 0;
		  colPos <= (col < this.options.cols - 1 ? 1 : 0);
		  colPos++
		) {
		  results.push(this.grid[row + rowPos][col + colPos]);
		}
	  }
	  return results;
	}
  
	//reveal a cell
	revealCell(cell) {
	  if (!cell.isRevealed && !cell.isFlagged && this.playing) {
		const cellElement = cell.getElement();
  
		cell.isRevealed = true;
		cellElement.classList.add("revealed" , `adj-${cell.value}`);
		cellElement.textContent = (! cell.isMine ? cell.value || "" : "");
  
		if (cell.isMine) {
		  this.status_msg = "Sorry, you lost!";
		  this.playing = false;
		  document.getElementById("game_status").textContent = this.status_msg;
		  document.getElementById("game_status").style.color = "#EE0000";
		} else if (!cell.isFlagged && cell.value == 0) {
		   const adjCells = this.getAdjacentCells(cell.ypos, cell.xpos);
		  for (let i = 0, len = adjCells.length; i < len; i++) {
			this.revealCell(adjCells[i]);
		  }
		}
	  }
	}
  



	gridToString() {
	  let result = "";
	  for (let r = 0, r_len = this.grid.length; r < r_len; r++) {
		for (let c = 0, c_len = this.grid[r].length; c < c_len; c++) {
		  result += this.grid[r][c].value + " ";
		}
		result += "\n";
	  }
	  return result;
	}
  
	//save the game object to localstorage
	save() {
	  if (!hasLocalStorage) {
		return false;
	  } else {
		let data = JSON.stringify(this);
		localStorage["minesweeper.data"] = data;
	  }
	}
  }
  

  class Cell {
	constructor({
	  xpos,
	  ypos,
	  value = 0,
	  isMine = false,
	  isRevealed = false,
	  isFlagged = false
	}) {
	  Object.assign(this, {
		xpos,
		ypos,
		value, 
		isMine,
		isRevealed,
		isFlagged
	  });
	}
  
	getElement() {
	  return document.querySelector(
		`.cell[data-xpos="${this.xpos}"][data-ypos="${this.ypos}"]`
	  );
	}
  }
  
  //create a new game
  function newGame(opts = {}) {
	game = new Minesweeper(opts);
  }
  
  window.onload = function() {

	document
	  .getElementById("new_game_button")
	  .addEventListener("click", function() {
		const opts = {
		  rows: parseInt(document.getElementById("new_rows").value, 10),
		  cols: parseInt(document.getElementById("new_cols").value, 10),
		  mines: parseInt(document.getElementById("new_mines").value, 10)
		};
  
		if (hasLocalStorage) {
		  localStorage.clear();
		}
  
		newGame(opts);
	  });
  

	document
	  .getElementById("game_container")
	  .addEventListener("click", function(e) {
		const target = e.target;
  
		if (target.classList.contains("cell")) {
		  const cell =
			game.grid[target.getAttribute("data-ypos")][
			  target.getAttribute("data-xpos")
			];
  
		  if (!cell.isRevealed && game.playing) {
			game.movesMade++;
			document.getElementById("moves_made").textContent = game.movesMade;
			game.revealCell(cell);
			game.save();
		  }
		}
	  });
  

  
	//attach click to cheat button
	document.getElementById("cheat_button").addEventListener("click", function() {
	  console.log(game.gridToString());
	});
  

	//create a game
	newGame();
  };

  
  var game;
  
  const hasLocalStorage = (function() {
	try {
	  return "localStorage" in window && window["localStorage"] !== null;
	} catch (e) {
	  return false;
	}
  })();
  