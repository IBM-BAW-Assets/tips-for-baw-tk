this.showHideFilters = function() {
 
 	_this.ui.get("filterSection").setVisible(true);
 	
 	if (_this.ui.get("filterSection").isLoaded()) {
 		
 		if (_this.ui.get("btnShowFilter").getText() === "Show Filter") {
 			
 			_this.initAutoRefresh();
 			_this.getCounts();
 			_this.ui.get("filterLayout").setVisible(true);
 			_this.ui.get("btnShowFilter").setText("Hide Filter");
 			_this.ui.get("btnShowFilter").setIcon("arrow-up");
 		}
 		else {
 			
 			_this.ui.get("filterLayout").setVisible(false,true);
 			_this.ui.get("btnShowFilter").setText("Show Filter");
 			_this.ui.get("btnShowFilter").setIcon("arrow-down");				
 		}
 	}	
 	else {
 	
 		_this.ui.get("filterSection").lazyLoad(0,true);	
 	}
 }

