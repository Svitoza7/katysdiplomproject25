pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 274;
pubcoder.page.title = pubcoder.page.title || "10";
pubcoder.page.number = pubcoder.page.number || 10;
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
var obj279_onShow_activeActionGroupIndex = -1;
var obj279_onShow_runningActionsCount = 0;
var obj279_onShow_loopCount = 0;
var obj297_onTap_activeActionGroupIndex = -1;
var obj297_onTap_runningActionsCount = 0;
var obj297_onTap_loopCount = 0;
var obj290_onTap_activeActionGroupIndex = -1;
var obj290_onTap_runningActionsCount = 0;
var obj290_onTap_loopCount = 0;
var obj306_onShow_activeActionGroupIndex = -1;
var obj306_onShow_runningActionsCount = 0;
var obj306_onShow_loopCount = 0;

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
		
obj279_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj279_onShow_activeActionGroupIndex = -1;
		$("#obj279").trigger("obj279_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 279) {
				console.warn("de-queueing event obj279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj279_onShow_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj279 
rotate_283();
function rotate_283() {
	window.obj279_onShow_runningActionsCount = obj279_onShow_runningActionsCount + 1;

	
	var targetObjectId = "#obj279";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj279';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '359.3077';
	var rotationSpeed = 60;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_283_completed(); }

	//TweenMax.to(targetObjectId, 60, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_283_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_283_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_283_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_283_completed() {
	setTimeout(function() {
		window.obj279_onShow_runningActionsCount = window.obj279_onShow_runningActionsCount - 1;

if (window.obj279_onShow_runningActionsCount < 0) {
	window.obj279_onShow_runningActionsCount = 0;
} else if (window.obj279_onShow_runningActionsCount == 0) {
	obj279_onShow_actionGroup1();
}
	}, 1);
}





























};
obj279_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj279_onShow_activeActionGroupIndex = -1;
		$("#obj279").trigger("obj279_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 279) {
				console.warn("de-queueing event obj279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj279_onShow_activeActionGroupIndex = 1;
	











































};
obj297_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj297_onTap_activeActionGroupIndex = -1;
		$("#obj297").trigger("obj297_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 297) {
				console.warn("de-queueing event obj297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj297_onTap_activeActionGroupIndex = 0;
	
















//	action: wait
wait_302();
function wait_302() {
	window.obj297_onTap_runningActionsCount = obj297_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj297_onTap_runningActionsCount = window.obj297_onTap_runningActionsCount - 1;

if (window.obj297_onTap_runningActionsCount < 0) {
	window.obj297_onTap_runningActionsCount = 0;
} else if (window.obj297_onTap_runningActionsCount == 0) {
	obj297_onTap_actionGroup1();
}
	}, 5000);
}


























};
obj297_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj297_onTap_activeActionGroupIndex = -1;
		$("#obj297").trigger("obj297_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 297) {
				console.warn("de-queueing event obj297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj297_onTap_activeActionGroupIndex = 1;
	











































};
obj290_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj290_onTap_activeActionGroupIndex = -1;
		$("#obj290").trigger("obj290_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 290) {
				console.warn("de-queueing event obj290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj290_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj290 
move_293();
function move_293() {
	window.obj290_onTap_runningActionsCount = obj290_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj290");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1";
	var moveY = "+=-958";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj290_onTap_runningActionsCount = window.obj290_onTap_runningActionsCount - 1;

if (window.obj290_onTap_runningActionsCount < 0) {
	window.obj290_onTap_runningActionsCount = 0;
} else if (window.obj290_onTap_runningActionsCount == 0) {
	obj290_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_910();
function playAudioFile_910() {
	window.obj290_onTap_runningActionsCount = obj290_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile910")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile910");
			$("#obj_audio_playSoundFile910").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj290_onTap_runningActionsCount = window.obj290_onTap_runningActionsCount - 1;

if (window.obj290_onTap_runningActionsCount < 0) {
	window.obj290_onTap_runningActionsCount = 0;
} else if (window.obj290_onTap_runningActionsCount == 0) {
	obj290_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj290_onTap_runningActionsCount = window.obj290_onTap_runningActionsCount - 1;

if (window.obj290_onTap_runningActionsCount < 0) {
	window.obj290_onTap_runningActionsCount = 0;
} else if (window.obj290_onTap_runningActionsCount == 0) {
	obj290_onTap_actionGroup1();
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
				window.obj290_onTap_runningActionsCount = window.obj290_onTap_runningActionsCount - 1;

if (window.obj290_onTap_runningActionsCount < 0) {
	window.obj290_onTap_runningActionsCount = 0;
} else if (window.obj290_onTap_runningActionsCount == 0) {
	obj290_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj290_onTap_runningActionsCount = window.obj290_onTap_runningActionsCount - 1;

if (window.obj290_onTap_runningActionsCount < 0) {
	window.obj290_onTap_runningActionsCount = 0;
} else if (window.obj290_onTap_runningActionsCount == 0) {
	obj290_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj290_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj290_onTap_activeActionGroupIndex = -1;
		$("#obj290").trigger("obj290_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 290) {
				console.warn("de-queueing event obj290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj290_onTap_activeActionGroupIndex = 1;
	











































};
obj306_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj306_onShow_activeActionGroupIndex = -1;
		$("#obj306").trigger("obj306_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 306) {
				console.warn("de-queueing event obj306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj306_onShow_activeActionGroupIndex = 0;
	
















//	action: wait
wait_311();
function wait_311() {
	window.obj306_onShow_runningActionsCount = obj306_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj306_onShow_runningActionsCount = window.obj306_onShow_runningActionsCount - 1;

if (window.obj306_onShow_runningActionsCount < 0) {
	window.obj306_onShow_runningActionsCount = 0;
} else if (window.obj306_onShow_runningActionsCount == 0) {
	obj306_onShow_actionGroup1();
}
	}, 30000);
}


























};
obj306_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj306_onShow_activeActionGroupIndex = -1;
		$("#obj306").trigger("obj306_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 306) {
				console.warn("de-queueing event obj306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj306_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj306 
hide_312();
function hide_312() {
	var selector = "#obj306";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj306_onShow_runningActionsCount = obj306_onShow_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 6000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj306_onShow_runningActionsCount = window.obj306_onShow_runningActionsCount - 1;

if (window.obj306_onShow_runningActionsCount < 0) {
	window.obj306_onShow_runningActionsCount = 0;
} else if (window.obj306_onShow_runningActionsCount == 0) {
	obj306_onShow_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_312(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj306_onShow_runningActionsCount = window.obj306_onShow_runningActionsCount - 1;

if (window.obj306_onShow_runningActionsCount < 0) {
	window.obj306_onShow_runningActionsCount = 0;
} else if (window.obj306_onShow_runningActionsCount == 0) {
	obj306_onShow_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj306_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj306_onShow_activeActionGroupIndex = -1;
		$("#obj306").trigger("obj306_onShow_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 306) {
				console.warn("de-queueing event obj306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj306_onShow_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























/*
 *
 *   obj279: Event Show
 *
 */

$("#obj279").bind('SCEventShow', function(event) {
	if (window.obj279_onShow_activeActionGroupIndex != -1) {
	console.warn("action list window.obj279_onShow is still running");
	return;
}
var obj279_onShow_runningActionsCount = 0;
var obj279_onShow_loopCount = 0;
obj279_onShow_actionGroup0();
});















/*
 *
 *   obj297: Event Touch Down
 *
 */

$("#obj297").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj297_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj297_onTap is still running");
	return;
}
var obj297_onTap_runningActionsCount = 0;
var obj297_onTap_loopCount = 0;
obj297_onTap_actionGroup0();
});


















/*
 *
 *   obj290: Event Touch Down
 *
 */

$("#obj290").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj290_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj290_onTap is still running");
	return;
}
var obj290_onTap_runningActionsCount = 0;
var obj290_onTap_loopCount = 0;
obj290_onTap_actionGroup0();
});





















/*
 *
 *   obj306: Event Show
 *
 */

$("#obj306").bind('SCEventShow', function(event) {
	if (window.obj306_onShow_activeActionGroupIndex != -1) {
	console.warn("action list window.obj306_onShow is still running");
	return;
}
var obj306_onShow_runningActionsCount = 0;
var obj306_onShow_loopCount = 0;
obj306_onShow_actionGroup0();
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
	
$("#obj276").trigger('SCEventShow');
$("#obj279").trigger('SCEventShow');
$("#obj297").trigger('SCEventShow');
$("#obj290").trigger('SCEventShow');
$("#obj306").trigger('SCEventShow');
$("#obj1993").trigger('SCEventShow');
	

});