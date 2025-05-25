pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 353;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj355_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj355_onAppear_activeActionGroupIndex = -1;
var obj355_onAppear_runningActionsCount = 0;
var obj355_onAppear_loopCount = 0;

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
	
initAnimation_355();
function initAnimation_355()
{
    var targetObjectId = 355;
    var widthSCAnimationObject = 767;
    var heightSCAnimationObject = 1024;
    var framesPerSecond = 5;
    var howManyLoops = 0;
    var backToFirstFrame = false;
    var isAnimationInfinite = true;
    window.audio_animation_obj355 = $("#obj_audio_playAnimation355")[0];
    window.hasAudioTrack_obj355 = true
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj355_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
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
		
obj355_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj355_onAppear_activeActionGroupIndex = -1;
		$("#obj355").trigger("obj355_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 355) {
				console.warn("de-queueing event obj355." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj355").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj355_onAppear_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj355 
playAnimation_368();
function playAnimation_368() {
	var targetObjectId = "#obj355";
	var targetObject = $(targetObjectId)[0];
	window.obj355_onAppear_runningActionsCount = obj355_onAppear_runningActionsCount + 1;

	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj355_onAppear_runningActionsCount = window.obj355_onAppear_runningActionsCount - 1;

if (window.obj355_onAppear_runningActionsCount < 0) {
	window.obj355_onAppear_runningActionsCount = 0;
} else if (window.obj355_onAppear_runningActionsCount == 0) {
	obj355_onAppear_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj355 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj355;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj355;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);

	if (!isAnimationInfinite) {
		$("#obj355").one("obj355_animation_ended",function(event) {
		    window.obj355_onAppear_runningActionsCount = window.obj355_onAppear_runningActionsCount - 1;

if (window.obj355_onAppear_runningActionsCount < 0) {
	window.obj355_onAppear_runningActionsCount = 0;
} else if (window.obj355_onAppear_runningActionsCount == 0) {
	obj355_onAppear_actionGroup1();
}
		});
	}
 }






































};
obj355_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj355_onAppear_activeActionGroupIndex = -1;
		$("#obj355").trigger("obj355_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 355) {
				console.warn("de-queueing event obj355." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj355").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj355_onAppear_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		


















/*
 *
 *   obj355: Event Appear
 *
 */

$("#obj355").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(355, "onDisappear") || 
		pubcoder.isActionListRunning(355, "onAppear")) {
		console.warn("queueing event obj355." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 355, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj355_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj355_onAppear is still running");
	return;
}
var obj355_onAppear_runningActionsCount = 0;
var obj355_onAppear_loopCount = 0;
obj355_onAppear_actionGroup0();
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
	
$("#obj355").trigger('SCEventShow');
$("#obj370").trigger('SCEventShow');
$("#obj2005").trigger('SCEventShow');
	

});