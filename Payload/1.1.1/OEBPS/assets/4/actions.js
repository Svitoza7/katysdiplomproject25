pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 125;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj262_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj262_onAppear_activeActionGroupIndex = -1;
var obj262_onAppear_runningActionsCount = 0;
var obj262_onAppear_loopCount = 0;
var obj962_onTap_activeActionGroupIndex = -1;
var obj962_onTap_runningActionsCount = 0;
var obj962_onTap_loopCount = 0;

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
	
initAnimation_262();
function initAnimation_262()
{
    var targetObjectId = 262;
    var widthSCAnimationObject = 499;
    var heightSCAnimationObject = 576;
    var framesPerSecond = 2;
    var howManyLoops = 0;
    var backToFirstFrame = false;
    var isAnimationInfinite = true;
    window.audio_animation_obj262 = $("#")[0];
    window.hasAudioTrack_obj262 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj262_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
}

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
		
obj262_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj262_onAppear_activeActionGroupIndex = -1;
		$("#obj262").trigger("obj262_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 262) {
				console.warn("de-queueing event obj262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj262_onAppear_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj262 
playAnimation_270();
function playAnimation_270() {
	var targetObjectId = "#obj262";
	var targetObject = $(targetObjectId)[0];
	window.obj262_onAppear_runningActionsCount = obj262_onAppear_runningActionsCount + 1;

	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj262_onAppear_runningActionsCount = window.obj262_onAppear_runningActionsCount - 1;

if (window.obj262_onAppear_runningActionsCount < 0) {
	window.obj262_onAppear_runningActionsCount = 0;
} else if (window.obj262_onAppear_runningActionsCount == 0) {
	obj262_onAppear_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj262 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj262;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj262;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);

	if (!isAnimationInfinite) {
		$("#obj262").one("obj262_animation_ended",function(event) {
		    window.obj262_onAppear_runningActionsCount = window.obj262_onAppear_runningActionsCount - 1;

if (window.obj262_onAppear_runningActionsCount < 0) {
	window.obj262_onAppear_runningActionsCount = 0;
} else if (window.obj262_onAppear_runningActionsCount == 0) {
	obj262_onAppear_actionGroup1();
}
		});
	}
 }






































};
obj262_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj262_onAppear_activeActionGroupIndex = -1;
		$("#obj262").trigger("obj262_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 262) {
				console.warn("de-queueing event obj262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj262_onAppear_activeActionGroupIndex = 1;
	











































};
obj962_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj962_onTap_activeActionGroupIndex = -1;
		$("#obj962").trigger("obj962_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 962) {
				console.warn("de-queueing event obj962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj962_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_990();
function playAudioFile_990() {
	window.obj962_onTap_runningActionsCount = obj962_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile990")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile990");
			$("#obj_audio_playSoundFile990").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj962_onTap_runningActionsCount = window.obj962_onTap_runningActionsCount - 1;

if (window.obj962_onTap_runningActionsCount < 0) {
	window.obj962_onTap_runningActionsCount = 0;
} else if (window.obj962_onTap_runningActionsCount == 0) {
	obj962_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj962_onTap_runningActionsCount = window.obj962_onTap_runningActionsCount - 1;

if (window.obj962_onTap_runningActionsCount < 0) {
	window.obj962_onTap_runningActionsCount = 0;
} else if (window.obj962_onTap_runningActionsCount == 0) {
	obj962_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj962_onTap_runningActionsCount = window.obj962_onTap_runningActionsCount - 1;

if (window.obj962_onTap_runningActionsCount < 0) {
	window.obj962_onTap_runningActionsCount = 0;
} else if (window.obj962_onTap_runningActionsCount == 0) {
	obj962_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj962_onTap_runningActionsCount = window.obj962_onTap_runningActionsCount - 1;

if (window.obj962_onTap_runningActionsCount < 0) {
	window.obj962_onTap_runningActionsCount = 0;
} else if (window.obj962_onTap_runningActionsCount == 0) {
	obj962_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj962_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj962_onTap_activeActionGroupIndex = -1;
		$("#obj962").trigger("obj962_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 962) {
				console.warn("de-queueing event obj962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj962_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_964();
function goToPage_964() {
	window.obj962_onTap_runningActionsCount = obj962_onTap_runningActionsCount + 1;

	$("#anchor20")[0].click();
	window.obj962_onTap_runningActionsCount = window.obj962_onTap_runningActionsCount - 1;

if (window.obj962_onTap_runningActionsCount < 0) {
	window.obj962_onTap_runningActionsCount = 0;
} else if (window.obj962_onTap_runningActionsCount == 0) {
	obj962_onTap_actionGroup2();
}
}










































};
obj962_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj962_onTap_activeActionGroupIndex = -1;
		$("#obj962").trigger("obj962_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 962) {
				console.warn("de-queueing event obj962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj962_onTap_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





































/*
 *
 *   obj262: Event Appear
 *
 */

$("#obj262").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(262, "onDisappear") || 
		pubcoder.isActionListRunning(262, "onAppear")) {
		console.warn("queueing event obj262." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 262, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj262_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj262_onAppear is still running");
	return;
}
var obj262_onAppear_runningActionsCount = 0;
var obj262_onAppear_loopCount = 0;
obj262_onAppear_actionGroup0();
});
























/*
 *
 *   obj962: Event Touch Down
 *
 */

$("#obj962").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj962_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj962_onTap is still running");
	return;
}
var obj962_onTap_runningActionsCount = 0;
var obj962_onTap_loopCount = 0;
obj962_onTap_actionGroup0();
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
	
$("#obj133").trigger('SCEventShow');
$("#obj262").trigger('SCEventShow');
$("#obj960").trigger('SCEventShow');
$("#obj962").trigger('SCEventShow');
$("#obj987").trigger('SCEventShow');
$("#obj1981").trigger('SCEventShow');
	

});