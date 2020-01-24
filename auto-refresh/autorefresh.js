var _this = this;
var autoRefresh = false;
var autoRefreshInterval = 10;
var refreshActive = false;
var refreshInitNeeded = true;
var intervalID = -1;
var logON = false;

this.initAutoRefresh = function() {

	if (logON)
		console.log("initAutoRefresh()");
	
	if (refreshInitNeeded) {
		_this.ui.get("refreshInt").setValue(autoRefreshInterval);
		_this.ui.get("refreshCheckbox").setChecked(true);
		_this.setAutoRefresh();
		refreshInitNeeded = false;
		
	}
}

this.setAutoRefresh = function() {
	
	var autoRefresh = _this.ui.get("refreshCheckbox").isChecked();
	autoRefreshInterval = _this.ui.get("refreshInt").getValue() * 60000;
	
	if (autoRefresh) {
		_this.ui.get("refreshInt").show();
		_this.ui.get("refreshIntLabel").show();
		_this.ui.get("refreshIcon").show();
	
	}
	else {
		_this.ui.get("refreshInt").hide();
		_this.ui.get("refreshIntLabel").hide();
		_this.ui.get("refreshIcon").hide();
	}
		
	if (refreshActive) {
	
		_this.stopAutoRefresh(intervalID);
	}
	
	if (autoRefreshInterval < 60000) {
			
		autoRefreshInterval = 60000;
		_this.ui.get("refreshInt").setValue(autoRefreshInterval);		
	}
	
	if (autoRefresh) {
	
		intervalID = _this.startAutoRefresh(autoRefreshInterval)
	}
				
}

this.startAutoRefresh = function(interval) {
	var id = setInterval(_this.refresh,interval); 
	refreshActive = true;
	console.log("Auto Refresh ON (" + interval + ")");

	return id;
}

this.stopAutoRefresh = function(intervalId) {


	clearInterval(intervalId);
	refreshActive = false;
	console.log("Auto Refresh OFF");

}

this.refresh = function() {

	if (logON)
		console.log("refresh()");
	_this.getCounts();
}
