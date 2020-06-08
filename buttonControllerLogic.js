function _selectNextEvent() {
	console.log("Next event button pressed");
					//Get current event index
		var currentIndex = mainData.eventObjects.indexOf(currentEvent);
		var totalNumberOfEvents = mainData.eventObjects.length;
		if(currentIndex >= totalNumberOfEvents-1) {
			console.log("Already at end of event list");
		} else {
			var results = document.getElementsByClassName("selectedEventIcon");
			console.log(results);
			if(results.length != 1) {
				console.log("Catastrophic problem here");
			} else {
				var primary = results[0];
				console.log(primary);
				var newPrimary = {target: primary.nextElementSibling};
				console.log(newPrimary);
				selectEvent(newPrimary);
			}
			//Need to get sibling object
			// selectEvent({target:{dataObject:}})
		}
}

function _selectPreviousEvent() {
	var currentIndex = mainData.eventObjects.indexOf(currentEvent);
	if(currentIndex <= 0) {
		console.log("can't go any further");
	} else {
		var results = document.getElementsByClassName("selectedEventIcon");
		console.log(results);
		if(results.length != 1) {
			console.log("Catastrophic problem here");
		} else {
			var primary = results[0];
			console.log(primary);
			var newPrimary = {target: primary.previousElementSibling};
			console.log(newPrimary);
			selectEvent(newPrimary);
		}
	}
}

function _selectNextVideo() {
	// console.log("Selecting new video...");
	var currentIndex = currentEvent.videoObjects.indexOf(currentPoint);
	var numberOfVideos = currentEvent.videoObjects.length;

	if(currentIndex >= numberOfVideos -1) {
			console.log("Already at end of video list, select next event?");
			_selectNextEvent()
	} else {
		currentPoint = currentEvent.videoObjects[currentIndex+1];
		resetView();
	}
}

function _selectPreviousVideo() {
	console.log("Selecting prev video...");
	var currentIndex = currentEvent.videoObjects.indexOf(currentPoint);
	var numberOfVideos = currentEvent.videoObjects.length;

	if(currentIndex <= 0) {
			console.log("Already at end of video list, select previous event?");
			_selectPreviousEvent();
	} else {
		currentPoint = currentEvent.videoObjects[currentIndex-1];
		resetView();
	}
}