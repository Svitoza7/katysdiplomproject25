pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 792;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj1002_onTap_activeActionGroupIndex = -1;
var obj1002_onTap_runningActionsCount = 0;
var obj1002_onTap_loopCount = 0;

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
		
obj1002_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1002_onTap_activeActionGroupIndex = -1;
		$("#obj1002").trigger("obj1002_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1002) {
				console.warn("de-queueing event obj1002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1002_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1004();
function goToPage_1004() {
	window.obj1002_onTap_runningActionsCount = obj1002_onTap_runningActionsCount + 1;

	$("#anchor29")[0].click();
	window.obj1002_onTap_runningActionsCount = window.obj1002_onTap_runningActionsCount - 1;

if (window.obj1002_onTap_runningActionsCount < 0) {
	window.obj1002_onTap_runningActionsCount = 0;
} else if (window.obj1002_onTap_runningActionsCount == 0) {
	obj1002_onTap_actionGroup1();
}
}











//	action: playAudioFile
playAudioFile_1020();
function playAudioFile_1020() {
	window.obj1002_onTap_runningActionsCount = obj1002_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1020")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1020");
			$("#obj_audio_playSoundFile1020").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1002_onTap_runningActionsCount = window.obj1002_onTap_runningActionsCount - 1;

if (window.obj1002_onTap_runningActionsCount < 0) {
	window.obj1002_onTap_runningActionsCount = 0;
} else if (window.obj1002_onTap_runningActionsCount == 0) {
	obj1002_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1002_onTap_runningActionsCount = window.obj1002_onTap_runningActionsCount - 1;

if (window.obj1002_onTap_runningActionsCount < 0) {
	window.obj1002_onTap_runningActionsCount = 0;
} else if (window.obj1002_onTap_runningActionsCount == 0) {
	obj1002_onTap_actionGroup1();
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
				window.obj1002_onTap_runningActionsCount = window.obj1002_onTap_runningActionsCount - 1;

if (window.obj1002_onTap_runningActionsCount < 0) {
	window.obj1002_onTap_runningActionsCount = 0;
} else if (window.obj1002_onTap_runningActionsCount == 0) {
	obj1002_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj1002_onTap_runningActionsCount = window.obj1002_onTap_runningActionsCount - 1;

if (window.obj1002_onTap_runningActionsCount < 0) {
	window.obj1002_onTap_runningActionsCount = 0;
} else if (window.obj1002_onTap_runningActionsCount == 0) {
	obj1002_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1002_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1002_onTap_activeActionGroupIndex = -1;
		$("#obj1002").trigger("obj1002_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1002) {
				console.warn("de-queueing event obj1002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1002_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj1002: Event Touch Down
 *
 */

$("#obj1002").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1002_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1002_onTap is still running");
	return;
}
var obj1002_onTap_runningActionsCount = 0;
var obj1002_onTap_loopCount = 0;
obj1002_onTap_actionGroup0();
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
	
$("#obj811").trigger('SCEventShow');
$("#obj826").trigger('SCEventShow');
$("#obj824").trigger('SCEventShow');
$("#obj968").trigger('SCEventShow');
$("#obj1002").trigger('SCEventShow');
$("#obj1984").trigger('SCEventShow');
	

});