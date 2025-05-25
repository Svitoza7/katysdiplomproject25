pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;



/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj154_onTap_activeActionGroupIndex = -1;
var obj154_onTap_runningActionsCount = 0;
var obj154_onTap_loopCount = 0;
var obj156_onTap_activeActionGroupIndex = -1;
var obj156_onTap_runningActionsCount = 0;
var obj156_onTap_loopCount = 0;
var obj158_onTap_activeActionGroupIndex = -1;
var obj158_onTap_runningActionsCount = 0;
var obj158_onTap_loopCount = 0;
var obj160_onTap_activeActionGroupIndex = -1;
var obj160_onTap_runningActionsCount = 0;
var obj160_onTap_loopCount = 0;
var obj162_onTap_activeActionGroupIndex = -1;
var obj162_onTap_runningActionsCount = 0;
var obj162_onTap_loopCount = 0;
var obj164_onTap_activeActionGroupIndex = -1;
var obj164_onTap_runningActionsCount = 0;
var obj164_onTap_loopCount = 0;
var obj166_onTap_activeActionGroupIndex = -1;
var obj166_onTap_runningActionsCount = 0;
var obj166_onTap_loopCount = 0;
var obj168_onTap_activeActionGroupIndex = -1;
var obj168_onTap_runningActionsCount = 0;
var obj168_onTap_loopCount = 0;
var obj170_onTap_activeActionGroupIndex = -1;
var obj170_onTap_runningActionsCount = 0;
var obj170_onTap_loopCount = 0;
var obj172_onTap_activeActionGroupIndex = -1;
var obj172_onTap_runningActionsCount = 0;
var obj172_onTap_loopCount = 0;
var obj174_onTap_activeActionGroupIndex = -1;
var obj174_onTap_runningActionsCount = 0;
var obj174_onTap_loopCount = 0;
var obj185_onTap_activeActionGroupIndex = -1;
var obj185_onTap_runningActionsCount = 0;
var obj185_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 

 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	

	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 

 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    

	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj154_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj154_onTap_activeActionGroupIndex = -1;
		$("#obj154").trigger("obj154_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 154) {
				console.warn("de-queueing event obj154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj154_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj154 
move_213();
function move_213() {
	window.obj154_onTap_runningActionsCount = obj154_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj154");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj154_onTap_runningActionsCount = window.obj154_onTap_runningActionsCount - 1;

if (window.obj154_onTap_runningActionsCount < 0) {
	window.obj154_onTap_runningActionsCount = 0;
} else if (window.obj154_onTap_runningActionsCount == 0) {
	obj154_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj154_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj154_onTap_activeActionGroupIndex = -1;
		$("#obj154").trigger("obj154_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 154) {
				console.warn("de-queueing event obj154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj154_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj154 
move_214();
function move_214() {
	window.obj154_onTap_runningActionsCount = obj154_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj154");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj154_onTap_runningActionsCount = window.obj154_onTap_runningActionsCount - 1;

if (window.obj154_onTap_runningActionsCount < 0) {
	window.obj154_onTap_runningActionsCount = 0;
} else if (window.obj154_onTap_runningActionsCount == 0) {
	obj154_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj154_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj154_onTap_activeActionGroupIndex = -1;
		$("#obj154").trigger("obj154_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 154) {
				console.warn("de-queueing event obj154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj154_onTap_activeActionGroupIndex = 2;
	











































};
obj156_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj156_onTap_activeActionGroupIndex = -1;
		$("#obj156").trigger("obj156_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 156) {
				console.warn("de-queueing event obj156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj156_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj156 
move_2037();
function move_2037() {
	window.obj156_onTap_runningActionsCount = obj156_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj156");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj156_onTap_runningActionsCount = window.obj156_onTap_runningActionsCount - 1;

if (window.obj156_onTap_runningActionsCount < 0) {
	window.obj156_onTap_runningActionsCount = 0;
} else if (window.obj156_onTap_runningActionsCount == 0) {
	obj156_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj156_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj156_onTap_activeActionGroupIndex = -1;
		$("#obj156").trigger("obj156_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 156) {
				console.warn("de-queueing event obj156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj156_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj156 
move_2038();
function move_2038() {
	window.obj156_onTap_runningActionsCount = obj156_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj156");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj156_onTap_runningActionsCount = window.obj156_onTap_runningActionsCount - 1;

if (window.obj156_onTap_runningActionsCount < 0) {
	window.obj156_onTap_runningActionsCount = 0;
} else if (window.obj156_onTap_runningActionsCount == 0) {
	obj156_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj156_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj156_onTap_activeActionGroupIndex = -1;
		$("#obj156").trigger("obj156_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 156) {
				console.warn("de-queueing event obj156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj156_onTap_activeActionGroupIndex = 2;
	











































};
obj158_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj158_onTap_activeActionGroupIndex = -1;
		$("#obj158").trigger("obj158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 158) {
				console.warn("de-queueing event obj158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj158_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj158 
move_202();
function move_202() {
	window.obj158_onTap_runningActionsCount = obj158_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj158");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj158_onTap_runningActionsCount = window.obj158_onTap_runningActionsCount - 1;

if (window.obj158_onTap_runningActionsCount < 0) {
	window.obj158_onTap_runningActionsCount = 0;
} else if (window.obj158_onTap_runningActionsCount == 0) {
	obj158_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj158_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj158_onTap_activeActionGroupIndex = -1;
		$("#obj158").trigger("obj158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 158) {
				console.warn("de-queueing event obj158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj158_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj158 
move_203();
function move_203() {
	window.obj158_onTap_runningActionsCount = obj158_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj158");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj158_onTap_runningActionsCount = window.obj158_onTap_runningActionsCount - 1;

if (window.obj158_onTap_runningActionsCount < 0) {
	window.obj158_onTap_runningActionsCount = 0;
} else if (window.obj158_onTap_runningActionsCount == 0) {
	obj158_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj158_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj158_onTap_activeActionGroupIndex = -1;
		$("#obj158").trigger("obj158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 158) {
				console.warn("de-queueing event obj158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj158_onTap_activeActionGroupIndex = 2;
	











































};
obj160_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj160_onTap_activeActionGroupIndex = -1;
		$("#obj160").trigger("obj160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 160) {
				console.warn("de-queueing event obj160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj160_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj160 
move_2045();
function move_2045() {
	window.obj160_onTap_runningActionsCount = obj160_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj160");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount < 0) {
	window.obj160_onTap_runningActionsCount = 0;
} else if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj160_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj160_onTap_activeActionGroupIndex = -1;
		$("#obj160").trigger("obj160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 160) {
				console.warn("de-queueing event obj160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj160_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj160 
move_2046();
function move_2046() {
	window.obj160_onTap_runningActionsCount = obj160_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj160");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount < 0) {
	window.obj160_onTap_runningActionsCount = 0;
} else if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj160_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj160_onTap_activeActionGroupIndex = -1;
		$("#obj160").trigger("obj160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 160) {
				console.warn("de-queueing event obj160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj160_onTap_activeActionGroupIndex = 2;
	











































};
obj162_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_onTap_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 162) {
				console.warn("de-queueing event obj162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj162_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj162 
move_207();
function move_207() {
	window.obj162_onTap_runningActionsCount = obj162_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj162");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj162_onTap_runningActionsCount = window.obj162_onTap_runningActionsCount - 1;

if (window.obj162_onTap_runningActionsCount < 0) {
	window.obj162_onTap_runningActionsCount = 0;
} else if (window.obj162_onTap_runningActionsCount == 0) {
	obj162_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj162_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_onTap_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 162) {
				console.warn("de-queueing event obj162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj162_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj162 
move_208();
function move_208() {
	window.obj162_onTap_runningActionsCount = obj162_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj162");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj162_onTap_runningActionsCount = window.obj162_onTap_runningActionsCount - 1;

if (window.obj162_onTap_runningActionsCount < 0) {
	window.obj162_onTap_runningActionsCount = 0;
} else if (window.obj162_onTap_runningActionsCount == 0) {
	obj162_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj162_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj162_onTap_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 162) {
				console.warn("de-queueing event obj162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj162_onTap_activeActionGroupIndex = 2;
	











































};
obj164_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj164_onTap_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 164) {
				console.warn("de-queueing event obj164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj164_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj164 
move_194();
function move_194() {
	window.obj164_onTap_runningActionsCount = obj164_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj164");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj164_onTap_runningActionsCount = window.obj164_onTap_runningActionsCount - 1;

if (window.obj164_onTap_runningActionsCount < 0) {
	window.obj164_onTap_runningActionsCount = 0;
} else if (window.obj164_onTap_runningActionsCount == 0) {
	obj164_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj164_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj164_onTap_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 164) {
				console.warn("de-queueing event obj164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj164_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj164 
move_195();
function move_195() {
	window.obj164_onTap_runningActionsCount = obj164_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj164");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj164_onTap_runningActionsCount = window.obj164_onTap_runningActionsCount - 1;

if (window.obj164_onTap_runningActionsCount < 0) {
	window.obj164_onTap_runningActionsCount = 0;
} else if (window.obj164_onTap_runningActionsCount == 0) {
	obj164_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj164_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj164_onTap_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 164) {
				console.warn("de-queueing event obj164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj164_onTap_activeActionGroupIndex = 2;
	











































};
obj166_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj166_onTap_activeActionGroupIndex = -1;
		$("#obj166").trigger("obj166_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 166) {
				console.warn("de-queueing event obj166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj166_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj166 
move_2041();
function move_2041() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj166");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;

if (window.obj166_onTap_runningActionsCount < 0) {
	window.obj166_onTap_runningActionsCount = 0;
} else if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj166_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj166_onTap_activeActionGroupIndex = -1;
		$("#obj166").trigger("obj166_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 166) {
				console.warn("de-queueing event obj166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj166_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj166 
move_2042();
function move_2042() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj166");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;

if (window.obj166_onTap_runningActionsCount < 0) {
	window.obj166_onTap_runningActionsCount = 0;
} else if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj166_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj166_onTap_activeActionGroupIndex = -1;
		$("#obj166").trigger("obj166_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 166) {
				console.warn("de-queueing event obj166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj166_onTap_activeActionGroupIndex = 2;
	











































};
obj168_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj168_onTap_activeActionGroupIndex = -1;
		$("#obj168").trigger("obj168_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 168) {
				console.warn("de-queueing event obj168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj168_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj168 
move_2039();
function move_2039() {
	window.obj168_onTap_runningActionsCount = obj168_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj168");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj168_onTap_runningActionsCount = window.obj168_onTap_runningActionsCount - 1;

if (window.obj168_onTap_runningActionsCount < 0) {
	window.obj168_onTap_runningActionsCount = 0;
} else if (window.obj168_onTap_runningActionsCount == 0) {
	obj168_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj168_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj168_onTap_activeActionGroupIndex = -1;
		$("#obj168").trigger("obj168_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 168) {
				console.warn("de-queueing event obj168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj168_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj168 
move_2040();
function move_2040() {
	window.obj168_onTap_runningActionsCount = obj168_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj168");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj168_onTap_runningActionsCount = window.obj168_onTap_runningActionsCount - 1;

if (window.obj168_onTap_runningActionsCount < 0) {
	window.obj168_onTap_runningActionsCount = 0;
} else if (window.obj168_onTap_runningActionsCount == 0) {
	obj168_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj168_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj168_onTap_activeActionGroupIndex = -1;
		$("#obj168").trigger("obj168_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 168) {
				console.warn("de-queueing event obj168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj168_onTap_activeActionGroupIndex = 2;
	











































};
obj170_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj170_onTap_activeActionGroupIndex = -1;
		$("#obj170").trigger("obj170_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 170) {
				console.warn("de-queueing event obj170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj170_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj170 
move_211();
function move_211() {
	window.obj170_onTap_runningActionsCount = obj170_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj170");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj170_onTap_runningActionsCount = window.obj170_onTap_runningActionsCount - 1;

if (window.obj170_onTap_runningActionsCount < 0) {
	window.obj170_onTap_runningActionsCount = 0;
} else if (window.obj170_onTap_runningActionsCount == 0) {
	obj170_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj170_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj170_onTap_activeActionGroupIndex = -1;
		$("#obj170").trigger("obj170_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 170) {
				console.warn("de-queueing event obj170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj170_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj170 
move_212();
function move_212() {
	window.obj170_onTap_runningActionsCount = obj170_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj170");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj170_onTap_runningActionsCount = window.obj170_onTap_runningActionsCount - 1;

if (window.obj170_onTap_runningActionsCount < 0) {
	window.obj170_onTap_runningActionsCount = 0;
} else if (window.obj170_onTap_runningActionsCount == 0) {
	obj170_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj170_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj170_onTap_activeActionGroupIndex = -1;
		$("#obj170").trigger("obj170_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 170) {
				console.warn("de-queueing event obj170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj170_onTap_activeActionGroupIndex = 2;
	











































};
obj172_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj172_onTap_activeActionGroupIndex = -1;
		$("#obj172").trigger("obj172_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 172) {
				console.warn("de-queueing event obj172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj172_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj172 
move_2043();
function move_2043() {
	window.obj172_onTap_runningActionsCount = obj172_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj172");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj172_onTap_runningActionsCount = window.obj172_onTap_runningActionsCount - 1;

if (window.obj172_onTap_runningActionsCount < 0) {
	window.obj172_onTap_runningActionsCount = 0;
} else if (window.obj172_onTap_runningActionsCount == 0) {
	obj172_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj172_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj172_onTap_activeActionGroupIndex = -1;
		$("#obj172").trigger("obj172_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 172) {
				console.warn("de-queueing event obj172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj172_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj172 
move_2044();
function move_2044() {
	window.obj172_onTap_runningActionsCount = obj172_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj172");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj172_onTap_runningActionsCount = window.obj172_onTap_runningActionsCount - 1;

if (window.obj172_onTap_runningActionsCount < 0) {
	window.obj172_onTap_runningActionsCount = 0;
} else if (window.obj172_onTap_runningActionsCount == 0) {
	obj172_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj172_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj172_onTap_activeActionGroupIndex = -1;
		$("#obj172").trigger("obj172_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 172) {
				console.warn("de-queueing event obj172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj172_onTap_activeActionGroupIndex = 2;
	











































};
obj174_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj174_onTap_activeActionGroupIndex = -1;
		$("#obj174").trigger("obj174_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 174) {
				console.warn("de-queueing event obj174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj174_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_239();
function goToPage_239() {
	window.obj174_onTap_runningActionsCount = obj174_onTap_runningActionsCount + 1;

	$("#anchor32")[0].click();
	window.obj174_onTap_runningActionsCount = window.obj174_onTap_runningActionsCount - 1;

if (window.obj174_onTap_runningActionsCount < 0) {
	window.obj174_onTap_runningActionsCount = 0;
} else if (window.obj174_onTap_runningActionsCount == 0) {
	obj174_onTap_actionGroup1();
}
}










































};
obj174_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj174_onTap_activeActionGroupIndex = -1;
		$("#obj174").trigger("obj174_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 174) {
				console.warn("de-queueing event obj174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj174_onTap_activeActionGroupIndex = 1;
	











































};
obj185_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj185_onTap_activeActionGroupIndex = -1;
		$("#obj185").trigger("obj185_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 185) {
				console.warn("de-queueing event obj185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj185_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj185 
move_196();
function move_196() {
	window.obj185_onTap_runningActionsCount = obj185_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj185");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj185_onTap_runningActionsCount = window.obj185_onTap_runningActionsCount - 1;

if (window.obj185_onTap_runningActionsCount < 0) {
	window.obj185_onTap_runningActionsCount = 0;
} else if (window.obj185_onTap_runningActionsCount == 0) {
	obj185_onTap_actionGroup1();
}
		}, 1);
	});
}







































};
obj185_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj185_onTap_activeActionGroupIndex = -1;
		$("#obj185").trigger("obj185_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 185) {
				console.warn("de-queueing event obj185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj185_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj185 
move_197();
function move_197() {
	window.obj185_onTap_runningActionsCount = obj185_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj185");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj185_onTap_runningActionsCount = window.obj185_onTap_runningActionsCount - 1;

if (window.obj185_onTap_runningActionsCount < 0) {
	window.obj185_onTap_runningActionsCount = 0;
} else if (window.obj185_onTap_runningActionsCount == 0) {
	obj185_onTap_actionGroup2();
}
		}, 1);
	});
}







































};
obj185_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj185_onTap_activeActionGroupIndex = -1;
		$("#obj185").trigger("obj185_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 185) {
				console.warn("de-queueing event obj185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj185_onTap_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj154: Event Touch Down
 *
 */

$("#obj154").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj154_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj154_onTap is still running");
	return;
}
var obj154_onTap_runningActionsCount = 0;
var obj154_onTap_loopCount = 0;
obj154_onTap_actionGroup0();
});


















/*
 *
 *   obj156: Event Touch Down
 *
 */

$("#obj156").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj156_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj156_onTap is still running");
	return;
}
var obj156_onTap_runningActionsCount = 0;
var obj156_onTap_loopCount = 0;
obj156_onTap_actionGroup0();
});


















/*
 *
 *   obj158: Event Touch Down
 *
 */

$("#obj158").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj158_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj158_onTap is still running");
	return;
}
var obj158_onTap_runningActionsCount = 0;
var obj158_onTap_loopCount = 0;
obj158_onTap_actionGroup0();
});


















/*
 *
 *   obj160: Event Touch Down
 *
 */

$("#obj160").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj160_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj160_onTap is still running");
	return;
}
var obj160_onTap_runningActionsCount = 0;
var obj160_onTap_loopCount = 0;
obj160_onTap_actionGroup0();
});


















/*
 *
 *   obj162: Event Touch Down
 *
 */

$("#obj162").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj162_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj162_onTap is still running");
	return;
}
var obj162_onTap_runningActionsCount = 0;
var obj162_onTap_loopCount = 0;
obj162_onTap_actionGroup0();
});


















/*
 *
 *   obj164: Event Touch Down
 *
 */

$("#obj164").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj164_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj164_onTap is still running");
	return;
}
var obj164_onTap_runningActionsCount = 0;
var obj164_onTap_loopCount = 0;
obj164_onTap_actionGroup0();
});


















/*
 *
 *   obj166: Event Touch Down
 *
 */

$("#obj166").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj166_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj166_onTap is still running");
	return;
}
var obj166_onTap_runningActionsCount = 0;
var obj166_onTap_loopCount = 0;
obj166_onTap_actionGroup0();
});


















/*
 *
 *   obj168: Event Touch Down
 *
 */

$("#obj168").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj168_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj168_onTap is still running");
	return;
}
var obj168_onTap_runningActionsCount = 0;
var obj168_onTap_loopCount = 0;
obj168_onTap_actionGroup0();
});


















/*
 *
 *   obj170: Event Touch Down
 *
 */

$("#obj170").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj170_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj170_onTap is still running");
	return;
}
var obj170_onTap_runningActionsCount = 0;
var obj170_onTap_loopCount = 0;
obj170_onTap_actionGroup0();
});


















/*
 *
 *   obj172: Event Touch Down
 *
 */

$("#obj172").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj172_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj172_onTap is still running");
	return;
}
var obj172_onTap_runningActionsCount = 0;
var obj172_onTap_loopCount = 0;
obj172_onTap_actionGroup0();
});


















/*
 *
 *   obj174: Event Touch Down
 *
 */

$("#obj174").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj174_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj174_onTap is still running");
	return;
}
var obj174_onTap_runningActionsCount = 0;
var obj174_onTap_loopCount = 0;
obj174_onTap_actionGroup0();
});


















/*
 *
 *   obj185: Event Touch Down
 *
 */

$("#obj185").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj185_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj185_onTap is still running");
	return;
}
var obj185_onTap_runningActionsCount = 0;
var obj185_onTap_loopCount = 0;
obj185_onTap_actionGroup0();
});




















































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});

$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj151").trigger('SCEventShow');
$("#obj154").trigger('SCEventShow');
$("#obj156").trigger('SCEventShow');
$("#obj158").trigger('SCEventShow');
$("#obj160").trigger('SCEventShow');
$("#obj162").trigger('SCEventShow');
$("#obj164").trigger('SCEventShow');
$("#obj166").trigger('SCEventShow');
$("#obj168").trigger('SCEventShow');
$("#obj170").trigger('SCEventShow');
$("#obj172").trigger('SCEventShow');
$("#obj174").trigger('SCEventShow');
$("#obj185").trigger('SCEventShow');
$("#obj189").trigger('SCEventShow');
$("#obj1987").trigger('SCEventShow');
	

});