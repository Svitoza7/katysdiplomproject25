pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 294;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
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
var obj313_onShow_activeActionGroupIndex = -1;
var obj313_onShow_runningActionsCount = 0;
var obj313_onShow_loopCount = 0;
var obj319_onAppear_activeActionGroupIndex = -1;
var obj319_onAppear_runningActionsCount = 0;
var obj319_onAppear_loopCount = 0;
var obj324_onAppear_activeActionGroupIndex = -1;
var obj324_onAppear_runningActionsCount = 0;
var obj324_onAppear_loopCount = 0;

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
		
obj313_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj313_onShow_activeActionGroupIndex = -1;
		$("#obj313").trigger("obj313_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 313) {
				console.warn("de-queueing event obj313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj313_onShow_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj313 
rotate_317();
function rotate_317() {
	window.obj313_onShow_runningActionsCount = obj313_onShow_runningActionsCount + 1;

	
	var targetObjectId = "#obj313";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj313';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-359.3501';
	var rotationSpeed = 60;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_317_completed(); }

	//TweenMax.to(targetObjectId, 60, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_317_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_317_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_317_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_317_completed() {
	setTimeout(function() {
		window.obj313_onShow_runningActionsCount = window.obj313_onShow_runningActionsCount - 1;

if (window.obj313_onShow_runningActionsCount < 0) {
	window.obj313_onShow_runningActionsCount = 0;
} else if (window.obj313_onShow_runningActionsCount == 0) {
	obj313_onShow_actionGroup1();
}
	}, 1);
}





























};
obj313_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj313_onShow_activeActionGroupIndex = -1;
		$("#obj313").trigger("obj313_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 313) {
				console.warn("de-queueing event obj313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj313_onShow_activeActionGroupIndex = 1;
	











































};
obj319_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj319_onAppear_activeActionGroupIndex = -1;
		$("#obj319").trigger("obj319_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 319) {
				console.warn("de-queueing event obj319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj319_onAppear_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj319 
scale_331();
function scale_331() {
	window.obj319_onAppear_runningActionsCount = obj319_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj319";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj319';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.5';
	var scaleYValue = '1.5';
	var effectDuration = '20';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_331_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_331_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_331_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_331_completed() {
	setTimeout(function() {
		window.obj319_onAppear_runningActionsCount = window.obj319_onAppear_runningActionsCount - 1;

if (window.obj319_onAppear_runningActionsCount < 0) {
	window.obj319_onAppear_runningActionsCount = 0;
} else if (window.obj319_onAppear_runningActionsCount == 0) {
	obj319_onAppear_actionGroup1();
}
	}, 1);
}

























};
obj319_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj319_onAppear_activeActionGroupIndex = -1;
		$("#obj319").trigger("obj319_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 319) {
				console.warn("de-queueing event obj319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj319_onAppear_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj319 
scale_332();
function scale_332() {
	window.obj319_onAppear_runningActionsCount = obj319_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj319";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj319';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '20';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_332_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_332_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_332_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_332_completed() {
	setTimeout(function() {
		window.obj319_onAppear_runningActionsCount = window.obj319_onAppear_runningActionsCount - 1;

if (window.obj319_onAppear_runningActionsCount < 0) {
	window.obj319_onAppear_runningActionsCount = 0;
} else if (window.obj319_onAppear_runningActionsCount == 0) {
	obj319_onAppear_actionGroup2();
}
	}, 1);
}

























};
obj319_onAppear_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj319_onAppear_activeActionGroupIndex = -1;
		$("#obj319").trigger("obj319_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 319) {
				console.warn("de-queueing event obj319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj319_onAppear_activeActionGroupIndex = 2;
	











































};
obj324_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj324_onAppear_activeActionGroupIndex = -1;
		$("#obj324").trigger("obj324_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 324) {
				console.warn("de-queueing event obj324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj324_onAppear_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj324 
rotate_329();
function rotate_329() {
	window.obj324_onAppear_runningActionsCount = obj324_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj324";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj324';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '358.6237';
	var rotationSpeed = 30;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_329_completed(); }

	//TweenMax.to(targetObjectId, 30, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_329_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_329_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_329_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_329_completed() {
	setTimeout(function() {
		window.obj324_onAppear_runningActionsCount = window.obj324_onAppear_runningActionsCount - 1;

if (window.obj324_onAppear_runningActionsCount < 0) {
	window.obj324_onAppear_runningActionsCount = 0;
} else if (window.obj324_onAppear_runningActionsCount == 0) {
	obj324_onAppear_actionGroup1();
}
	}, 1);
}





























};
obj324_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj324_onAppear_activeActionGroupIndex = -1;
		$("#obj324").trigger("obj324_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 324) {
				console.warn("de-queueing event obj324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj324_onAppear_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























/*
 *
 *   obj313: Event Show
 *
 */

$("#obj313").bind('SCEventShow', function(event) {
	if (window.obj313_onShow_activeActionGroupIndex != -1) {
	console.warn("action list window.obj313_onShow is still running");
	return;
}
var obj313_onShow_runningActionsCount = 0;
var obj313_onShow_loopCount = 0;
obj313_onShow_actionGroup0();
});




























/*
 *
 *   obj319: Event Appear
 *
 */

$("#obj319").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(319, "onDisappear") || 
		pubcoder.isActionListRunning(319, "onAppear")) {
		console.warn("queueing event obj319." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 319, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj319_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj319_onAppear is still running");
	return;
}
var obj319_onAppear_runningActionsCount = 0;
var obj319_onAppear_loopCount = 0;
obj319_onAppear_actionGroup0();
});





































/*
 *
 *   obj324: Event Appear
 *
 */

$("#obj324").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(324, "onDisappear") || 
		pubcoder.isActionListRunning(324, "onAppear")) {
		console.warn("queueing event obj324." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 324, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj324_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj324_onAppear is still running");
	return;
}
var obj324_onAppear_runningActionsCount = 0;
var obj324_onAppear_loopCount = 0;
obj324_onAppear_actionGroup0();
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
	
$("#obj295").trigger('SCEventShow');
$("#obj313").trigger('SCEventShow');
$("#obj319").trigger('SCEventShow');
$("#obj322").trigger('SCEventShow');
$("#obj324").trigger('SCEventShow');
$("#obj1996").trigger('SCEventShow');
	

});