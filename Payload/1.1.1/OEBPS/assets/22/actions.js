pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 680;
pubcoder.page.title = pubcoder.page.title || "22";
pubcoder.page.number = pubcoder.page.number || 22;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj685_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj685_onAppear_activeActionGroupIndex = -1;
var obj685_onAppear_runningActionsCount = 0;
var obj685_onAppear_loopCount = 0;
var obj697_onTap_activeActionGroupIndex = -1;
var obj697_onTap_runningActionsCount = 0;
var obj697_onTap_loopCount = 0;

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
	
initAnimation_685();
function initAnimation_685()
{
    var targetObjectId = 685;
    var widthSCAnimationObject = 499;
    var heightSCAnimationObject = 576;
    var framesPerSecond = 2;
    var howManyLoops = 0;
    var backToFirstFrame = false;
    var isAnimationInfinite = true;
    window.audio_animation_obj685 = $("#")[0];
    window.hasAudioTrack_obj685 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj685_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
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
	
(function (){
	const objId = "obj683";

	const config = {
		appdata: {
			checksum: "B014BF955317CE277271F0DC6EE81834",
			assessmentID: "fillInTheGaps683",
			assessmentCategory: ""
		},
		options: {
			displayCorrectAlongTheWay: true
		}
	};
	
	var controller = new SCFillInTheGaps(objId, config);
	pubcoder.controllers.SCFillInTheGaps = pubcoder.controllers.SCFillInTheGaps || {};
	pubcoder.controllers.SCFillInTheGaps[objId] = controller;
	pubcoder.controllers.all[objId] = controller;

})();

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
		
obj685_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj685_onAppear_activeActionGroupIndex = -1;
		$("#obj685").trigger("obj685_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 685) {
				console.warn("de-queueing event obj685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj685_onAppear_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj685 
playAnimation_691();
function playAnimation_691() {
	var targetObjectId = "#obj685";
	var targetObject = $(targetObjectId)[0];
	window.obj685_onAppear_runningActionsCount = obj685_onAppear_runningActionsCount + 1;

	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj685_onAppear_runningActionsCount = window.obj685_onAppear_runningActionsCount - 1;

if (window.obj685_onAppear_runningActionsCount < 0) {
	window.obj685_onAppear_runningActionsCount = 0;
} else if (window.obj685_onAppear_runningActionsCount == 0) {
	obj685_onAppear_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj685 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj685;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj685;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);

	if (!isAnimationInfinite) {
		$("#obj685").one("obj685_animation_ended",function(event) {
		    window.obj685_onAppear_runningActionsCount = window.obj685_onAppear_runningActionsCount - 1;

if (window.obj685_onAppear_runningActionsCount < 0) {
	window.obj685_onAppear_runningActionsCount = 0;
} else if (window.obj685_onAppear_runningActionsCount == 0) {
	obj685_onAppear_actionGroup1();
}
		});
	}
 }






































};
obj685_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj685_onAppear_activeActionGroupIndex = -1;
		$("#obj685").trigger("obj685_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 685) {
				console.warn("de-queueing event obj685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj685_onAppear_activeActionGroupIndex = 1;
	











































};
obj697_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj697_onTap_activeActionGroupIndex = -1;
		$("#obj697").trigger("obj697_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 697) {
				console.warn("de-queueing event obj697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj697_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1032();
function playAudioFile_1032() {
	window.obj697_onTap_runningActionsCount = obj697_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1032")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1032");
			$("#obj_audio_playSoundFile1032").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount < 0) {
	window.obj697_onTap_runningActionsCount = 0;
} else if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount < 0) {
	window.obj697_onTap_runningActionsCount = 0;
} else if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
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
				window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount < 0) {
	window.obj697_onTap_runningActionsCount = 0;
} else if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount < 0) {
	window.obj697_onTap_runningActionsCount = 0;
} else if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_699();
function runjs_699() {
	window.obj697_onTap_runningActionsCount = obj697_onTap_runningActionsCount + 1;


	pubcoder.controllers.SCFillInTheGaps["obj683"].reset(); 
	
	setTimeout(function() {
		window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount < 0) {
	window.obj697_onTap_runningActionsCount = 0;
} else if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
	}, 1);
}














};
obj697_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj697_onTap_activeActionGroupIndex = -1;
		$("#obj697").trigger("obj697_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 697) {
				console.warn("de-queueing event obj697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj697_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























































/*
 *
 *   obj685: Event Appear
 *
 */

$("#obj685").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(685, "onDisappear") || 
		pubcoder.isActionListRunning(685, "onAppear")) {
		console.warn("queueing event obj685." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 685, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj685_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj685_onAppear is still running");
	return;
}
var obj685_onAppear_runningActionsCount = 0;
var obj685_onAppear_loopCount = 0;
obj685_onAppear_actionGroup0();
});





/*
 *
 *   obj697: Event Touch Down
 *
 */

$("#obj697").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj697_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj697_onTap is still running");
	return;
}
var obj697_onTap_runningActionsCount = 0;
var obj697_onTap_loopCount = 0;
obj697_onTap_actionGroup0();
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
	
$("#obj681").trigger('SCEventShow');
$("#obj683").trigger('SCEventShow');
$("#obj685").trigger('SCEventShow');
$("#obj697").trigger('SCEventShow');
$("#obj2026").trigger('SCEventShow');
	

});