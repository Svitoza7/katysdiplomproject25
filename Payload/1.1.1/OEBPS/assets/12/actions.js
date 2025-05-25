pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 333;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
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
var obj700_onTap_activeActionGroupIndex = -1;
var obj700_onTap_runningActionsCount = 0;
var obj700_onTap_loopCount = 0;

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
	
$("#obj336").SCWidget().init();  

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
		
obj700_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj700_onTap_activeActionGroupIndex = -1;
		$("#obj700").trigger("obj700_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 700) {
				console.warn("de-queueing event obj700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj700_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1030();
function playAudioFile_1030() {
	window.obj700_onTap_runningActionsCount = obj700_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1030")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1030");
			$("#obj_audio_playSoundFile1030").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj700_onTap_runningActionsCount = window.obj700_onTap_runningActionsCount - 1;

if (window.obj700_onTap_runningActionsCount < 0) {
	window.obj700_onTap_runningActionsCount = 0;
} else if (window.obj700_onTap_runningActionsCount == 0) {
	obj700_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj700_onTap_runningActionsCount = window.obj700_onTap_runningActionsCount - 1;

if (window.obj700_onTap_runningActionsCount < 0) {
	window.obj700_onTap_runningActionsCount = 0;
} else if (window.obj700_onTap_runningActionsCount == 0) {
	obj700_onTap_actionGroup1();
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
				window.obj700_onTap_runningActionsCount = window.obj700_onTap_runningActionsCount - 1;

if (window.obj700_onTap_runningActionsCount < 0) {
	window.obj700_onTap_runningActionsCount = 0;
} else if (window.obj700_onTap_runningActionsCount == 0) {
	obj700_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj700_onTap_runningActionsCount = window.obj700_onTap_runningActionsCount - 1;

if (window.obj700_onTap_runningActionsCount < 0) {
	window.obj700_onTap_runningActionsCount = 0;
} else if (window.obj700_onTap_runningActionsCount == 0) {
	obj700_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_703();
function runjs_703() {
	window.obj700_onTap_runningActionsCount = obj700_onTap_runningActionsCount + 1;


	$("#obj336").SCWidget().reset(); $("#obj336").SCWidget().start(); 
	
	setTimeout(function() {
		window.obj700_onTap_runningActionsCount = window.obj700_onTap_runningActionsCount - 1;

if (window.obj700_onTap_runningActionsCount < 0) {
	window.obj700_onTap_runningActionsCount = 0;
} else if (window.obj700_onTap_runningActionsCount == 0) {
	obj700_onTap_actionGroup1();
}
	}, 1);
}














};
obj700_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj700_onTap_activeActionGroupIndex = -1;
		$("#obj700").trigger("obj700_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 700) {
				console.warn("de-queueing event obj700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj700_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj700: Event Touch Down
 *
 */

$("#obj700").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj700_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj700_onTap is still running");
	return;
}
var obj700_onTap_runningActionsCount = 0;
var obj700_onTap_loopCount = 0;
obj700_onTap_actionGroup0();
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
	
$("#obj334").trigger('SCEventShow');
$("#obj336").trigger('SCEventShow');
$("#obj349").trigger('SCEventShow');
$("#obj700").trigger('SCEventShow');
$("#obj1999").trigger('SCEventShow');
	

});