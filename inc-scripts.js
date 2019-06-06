
/*---- WOOD --*/
var wood = 0;

function collectWood(number) {
	wood = wood + number;
	document.getElementById('wood').innerHTML = wood;
}

/*---- MULTITOOL ----*/
var tool = 0;
var toolCost = 10;
function createTool() {
	var toolCost = Math.floor( 10 * Math.pow(1.1,tool ));
	if ( wood >= toolCost ) {
		tool = tool + 1;
		wood = wood - toolCost;
		document.getElementById('tool').innerHTML = ++tool;
		document.getElementById('wood').innerHTML = ++wood;
	};
	var nextToolCost = Math.floor(10 * Math.pow(1.1, tool));
	document.getElementById('toolCost').innerHTML = nextToolCost;
}

/*---- FIRE ----*/
var fire = 0;
var fireCost = 10;
function createFire() {
	var fireCost = Math.floor( 10 * Math.pow(1, fire));
	if ( wood >= fireCost ) {
		fire = fire + 10;
		wood = wood - fireCost;
		document.getElementById('fire').innerHTML = fire;
		document.getElementById('wood').innerHTML = wood;
	};
	var nextFireCost = Math.floor(10 * Math.pow(1, fire));
	document.getElementById('fireCost').innerHTML = nextFireCost;
}
function fireButtonText() {
	if ( fire >= 1 ) {
		document.getElementById('fireButton').innerText = 'Stoke the fire';
	} else {
		document.getElementById('fireButton').innerText = 'Start a fire';
	}

}
function fireCountDown() {
	if ( fire >= 1 ) {
		fire = --fire;
	}
	document.getElementById('fire').innerHTML = fire;
}

/*----- ORE ------*/
var ore = 0;

function mineOre() {
	if ( tool >= 10 ) {
		ore = ore + 1;
		document.getElementById('ore').innerHTML = ore;	
		document.getElementById('oreTotal').style.display = 'block';
		document.getElementById('oreButton').style.display = 'inline';
	}
}

window.setInterval(function(){
	collectWood(tool);
	fireCountDown();
	fireButtonText();
	mineOre()
}, 1000);