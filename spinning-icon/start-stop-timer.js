var _this = this;
var counter = 1;
var id = null;


this.updateCounter = function() {
	counter = counter++;
	var display = counter * 2;
	_this.ui.get("counterText").setText("("+ display + " secs)");
}

this.startTimer = function() {

	id = setInterval(_this.updateCounter,  2000); 
}

this.stopTimer = function() {

	clearInterval(id);
	counter = 1;
	id = null;
}
