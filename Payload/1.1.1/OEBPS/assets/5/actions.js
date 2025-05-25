pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 271;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj747_onTap_activeActionGroupIndex = -1;
var obj747_onTap_runningActionsCount = 0;
var obj747_onTap_loopCount = 0;
var obj750_onTap_activeActionGroupIndex = -1;
var obj750_onTap_runningActionsCount = 0;
var obj750_onTap_loopCount = 0;
var obj753_onTap_activeActionGroupIndex = -1;
var obj753_onTap_runningActionsCount = 0;
var obj753_onTap_loopCount = 0;
var obj756_onTap_activeActionGroupIndex = -1;
var obj756_onTap_runningActionsCount = 0;
var obj756_onTap_loopCount = 0;
var obj759_onTap_activeActionGroupIndex = -1;
var obj759_onTap_runningActionsCount = 0;
var obj759_onTap_loopCount = 0;

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
		
obj747_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj747_onTap_activeActionGroupIndex = -1;
		$("#obj747").trigger("obj747_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 747) {
				console.warn("de-queueing event obj747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj747_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_877();
function goToPage_877() {
	window.obj747_onTap_runningActionsCount = obj747_onTap_runningActionsCount + 1;

	$("#anchor23")[0].click();
	window.obj747_onTap_runningActionsCount = window.obj747_onTap_runningActionsCount - 1;

if (window.obj747_onTap_runningActionsCount < 0) {
	window.obj747_onTap_runningActionsCount = 0;
} else if (window.obj747_onTap_runningActionsCount == 0) {
	obj747_onTap_actionGroup1();
}
}










































};
obj747_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj747_onTap_activeActionGroupIndex = -1;
		$("#obj747").trigger("obj747_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 747) {
				console.warn("de-queueing event obj747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj747_onTap_activeActionGroupIndex = 1;
	











































};
obj750_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj750_onTap_activeActionGroupIndex = -1;
		$("#obj750").trigger("obj750_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 750) {
				console.warn("de-queueing event obj750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj750_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_878();
function goToPage_878() {
	window.obj750_onTap_runningActionsCount = obj750_onTap_runningActionsCount + 1;

	$("#anchor24")[0].click();
	window.obj750_onTap_runningActionsCount = window.obj750_onTap_runningActionsCount - 1;

if (window.obj750_onTap_runningActionsCount < 0) {
	window.obj750_onTap_runningActionsCount = 0;
} else if (window.obj750_onTap_runningActionsCount == 0) {
	obj750_onTap_actionGroup1();
}
}










































};
obj750_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj750_onTap_activeActionGroupIndex = -1;
		$("#obj750").trigger("obj750_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 750) {
				console.warn("de-queueing event obj750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj750_onTap_activeActionGroupIndex = 1;
	











































};
obj753_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj753_onTap_activeActionGroupIndex = -1;
		$("#obj753").trigger("obj753_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 753) {
				console.warn("de-queueing event obj753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj753_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_880();
function goToPage_880() {
	window.obj753_onTap_runningActionsCount = obj753_onTap_runningActionsCount + 1;

	$("#anchor25")[0].click();
	window.obj753_onTap_runningActionsCount = window.obj753_onTap_runningActionsCount - 1;

if (window.obj753_onTap_runningActionsCount < 0) {
	window.obj753_onTap_runningActionsCount = 0;
} else if (window.obj753_onTap_runningActionsCount == 0) {
	obj753_onTap_actionGroup1();
}
}










































};
obj753_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj753_onTap_activeActionGroupIndex = -1;
		$("#obj753").trigger("obj753_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 753) {
				console.warn("de-queueing event obj753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj753_onTap_activeActionGroupIndex = 1;
	











































};
obj756_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj756_onTap_activeActionGroupIndex = -1;
		$("#obj756").trigger("obj756_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 756) {
				console.warn("de-queueing event obj756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj756_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_795();
function goToPage_795() {
	window.obj756_onTap_runningActionsCount = obj756_onTap_runningActionsCount + 1;

	$("#anchor26")[0].click();
	window.obj756_onTap_runningActionsCount = window.obj756_onTap_runningActionsCount - 1;

if (window.obj756_onTap_runningActionsCount < 0) {
	window.obj756_onTap_runningActionsCount = 0;
} else if (window.obj756_onTap_runningActionsCount == 0) {
	obj756_onTap_actionGroup1();
}
}










































};
obj756_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj756_onTap_activeActionGroupIndex = -1;
		$("#obj756").trigger("obj756_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 756) {
				console.warn("de-queueing event obj756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj756_onTap_activeActionGroupIndex = 1;
	











































};
obj759_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj759_onTap_activeActionGroupIndex = -1;
		$("#obj759").trigger("obj759_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 759) {
				console.warn("de-queueing event obj759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj759_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_881();
function goToPage_881() {
	window.obj759_onTap_runningActionsCount = obj759_onTap_runningActionsCount + 1;

	$("#anchor27")[0].click();
	window.obj759_onTap_runningActionsCount = window.obj759_onTap_runningActionsCount - 1;

if (window.obj759_onTap_runningActionsCount < 0) {
	window.obj759_onTap_runningActionsCount = 0;
} else if (window.obj759_onTap_runningActionsCount == 0) {
	obj759_onTap_actionGroup1();
}
}










































};
obj759_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj759_onTap_activeActionGroupIndex = -1;
		$("#obj759").trigger("obj759_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 759) {
				console.warn("de-queueing event obj759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj759_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj747: Event Touch Down
 *
 */

$("#obj747").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj747_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj747_onTap is still running");
	return;
}
var obj747_onTap_runningActionsCount = 0;
var obj747_onTap_loopCount = 0;
obj747_onTap_actionGroup0();
});


















/*
 *
 *   obj750: Event Touch Down
 *
 */

$("#obj750").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj750_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj750_onTap is still running");
	return;
}
var obj750_onTap_runningActionsCount = 0;
var obj750_onTap_loopCount = 0;
obj750_onTap_actionGroup0();
});


















/*
 *
 *   obj753: Event Touch Down
 *
 */

$("#obj753").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj753_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj753_onTap is still running");
	return;
}
var obj753_onTap_runningActionsCount = 0;
var obj753_onTap_loopCount = 0;
obj753_onTap_actionGroup0();
});


















/*
 *
 *   obj756: Event Touch Down
 *
 */

$("#obj756").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj756_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj756_onTap is still running");
	return;
}
var obj756_onTap_runningActionsCount = 0;
var obj756_onTap_loopCount = 0;
obj756_onTap_actionGroup0();
});


















/*
 *
 *   obj759: Event Touch Down
 *
 */

$("#obj759").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj759_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj759_onTap is still running");
	return;
}
var obj759_onTap_runningActionsCount = 0;
var obj759_onTap_loopCount = 0;
obj759_onTap_actionGroup0();
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
	
$("#obj744").trigger('SCEventShow');
$("#obj747").trigger('SCEventShow');
$("#obj750").trigger('SCEventShow');
$("#obj753").trigger('SCEventShow');
$("#obj756").trigger('SCEventShow');
$("#obj759").trigger('SCEventShow');
$("#obj762").trigger('SCEventShow');
	

});