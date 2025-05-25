pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 809;
pubcoder.page.title = pubcoder.page.title || "21";
pubcoder.page.number = pubcoder.page.number || 21;
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
var obj852_onAppear_activeActionGroupIndex = -1;
var obj852_onAppear_runningActionsCount = 0;
var obj852_onAppear_loopCount = 0;
var obj854_onTap_activeActionGroupIndex = -1;
var obj854_onTap_runningActionsCount = 0;
var obj854_onTap_loopCount = 0;
var obj854_onAppear_activeActionGroupIndex = -1;
var obj854_onAppear_runningActionsCount = 0;
var obj854_onAppear_loopCount = 0;
var obj1014_onTap_activeActionGroupIndex = -1;
var obj1014_onTap_runningActionsCount = 0;
var obj1014_onTap_loopCount = 0;

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
		
obj852_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj852_onAppear_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 852) {
				console.warn("de-queueing event obj852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj852_onAppear_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_912();
function playAudioFile_912() {
	window.obj852_onAppear_runningActionsCount = obj852_onAppear_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile912")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile912");
			$("#obj_audio_playSoundFile912").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj852_onAppear_runningActionsCount = window.obj852_onAppear_runningActionsCount - 1;

if (window.obj852_onAppear_runningActionsCount < 0) {
	window.obj852_onAppear_runningActionsCount = 0;
} else if (window.obj852_onAppear_runningActionsCount == 0) {
	obj852_onAppear_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj852_onAppear_runningActionsCount = window.obj852_onAppear_runningActionsCount - 1;

if (window.obj852_onAppear_runningActionsCount < 0) {
	window.obj852_onAppear_runningActionsCount = 0;
} else if (window.obj852_onAppear_runningActionsCount == 0) {
	obj852_onAppear_actionGroup1();
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
				window.obj852_onAppear_runningActionsCount = window.obj852_onAppear_runningActionsCount - 1;

if (window.obj852_onAppear_runningActionsCount < 0) {
	window.obj852_onAppear_runningActionsCount = 0;
} else if (window.obj852_onAppear_runningActionsCount == 0) {
	obj852_onAppear_actionGroup1();
}
			}, false);
		} else {
			window.obj852_onAppear_runningActionsCount = window.obj852_onAppear_runningActionsCount - 1;

if (window.obj852_onAppear_runningActionsCount < 0) {
	window.obj852_onAppear_runningActionsCount = 0;
} else if (window.obj852_onAppear_runningActionsCount == 0) {
	obj852_onAppear_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj852_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj852_onAppear_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 852) {
				console.warn("de-queueing event obj852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj852_onAppear_activeActionGroupIndex = 1;
	











































};
obj854_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj854_onTap_activeActionGroupIndex = -1;
		$("#obj854").trigger("obj854_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 854) {
				console.warn("de-queueing event obj854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj854_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj854 
hide_860();
function hide_860() {
	var selector = "#obj854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj854_onTap_runningActionsCount = obj854_onTap_runningActionsCount + 1;

	
	var animationType = "rotateOutDownLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj854_onTap_runningActionsCount = window.obj854_onTap_runningActionsCount - 1;

if (window.obj854_onTap_runningActionsCount < 0) {
	window.obj854_onTap_runningActionsCount = 0;
} else if (window.obj854_onTap_runningActionsCount == 0) {
	obj854_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_860(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj854_onTap_runningActionsCount = window.obj854_onTap_runningActionsCount - 1;

if (window.obj854_onTap_runningActionsCount < 0) {
	window.obj854_onTap_runningActionsCount = 0;
} else if (window.obj854_onTap_runningActionsCount == 0) {
	obj854_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj854_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj854_onTap_activeActionGroupIndex = -1;
		$("#obj854").trigger("obj854_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 854) {
				console.warn("de-queueing event obj854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj854_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_864();
function goToPage_864() {
	window.obj854_onTap_runningActionsCount = obj854_onTap_runningActionsCount + 1;

	$("#anchor75")[0].click();
	window.obj854_onTap_runningActionsCount = window.obj854_onTap_runningActionsCount - 1;

if (window.obj854_onTap_runningActionsCount < 0) {
	window.obj854_onTap_runningActionsCount = 0;
} else if (window.obj854_onTap_runningActionsCount == 0) {
	obj854_onTap_actionGroup2();
}
}










































};
obj854_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj854_onTap_activeActionGroupIndex = -1;
		$("#obj854").trigger("obj854_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 854) {
				console.warn("de-queueing event obj854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj854_onTap_activeActionGroupIndex = 2;
	











































};
obj854_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj854_onAppear_activeActionGroupIndex = -1;
		$("#obj854").trigger("obj854_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 854) {
				console.warn("de-queueing event obj854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj854_onAppear_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj854 
scale_857();
function scale_857() {
	window.obj854_onAppear_runningActionsCount = obj854_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj854";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj854';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
	var effectDuration = '3';
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
		scale_857_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_857_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_857_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_857_completed() {
	setTimeout(function() {
		window.obj854_onAppear_runningActionsCount = window.obj854_onAppear_runningActionsCount - 1;

if (window.obj854_onAppear_runningActionsCount < 0) {
	window.obj854_onAppear_runningActionsCount = 0;
} else if (window.obj854_onAppear_runningActionsCount == 0) {
	obj854_onAppear_actionGroup1();
}
	}, 1);
}

























};
obj854_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj854_onAppear_activeActionGroupIndex = -1;
		$("#obj854").trigger("obj854_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 854) {
				console.warn("de-queueing event obj854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj854_onAppear_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj854 
scale_858();
function scale_858() {
	window.obj854_onAppear_runningActionsCount = obj854_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj854";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj854';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '3';
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
		scale_858_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_858_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_858_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_858_completed() {
	setTimeout(function() {
		window.obj854_onAppear_runningActionsCount = window.obj854_onAppear_runningActionsCount - 1;

if (window.obj854_onAppear_runningActionsCount < 0) {
	window.obj854_onAppear_runningActionsCount = 0;
} else if (window.obj854_onAppear_runningActionsCount == 0) {
	obj854_onAppear_actionGroup2();
}
	}, 1);
}

























};
obj854_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj854_onAppear_activeActionGroupIndex = -1;
		$("#obj854").trigger("obj854_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 854) {
				console.warn("de-queueing event obj854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj854_onAppear_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj854_onAppear();
function loop_obj854_onAppear() {

	var loopCount = 0;

	window.obj854_onAppear_loopCount = window.obj854_onAppear_loopCount + 1;
	if (loopCount != 0 && window.obj854_onAppear_loopCount > loopCount) {
		window.obj854_onAppear_loopCount = 0
		obj854_onAppear_actionGroup3();
	} else {
		obj854_onAppear_actionGroup0();
	}

}



























};
obj854_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj854_onAppear_activeActionGroupIndex = -1;
		$("#obj854").trigger("obj854_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 854) {
				console.warn("de-queueing event obj854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj854_onAppear_activeActionGroupIndex = 3;
	











































};
obj1014_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1014_onTap_activeActionGroupIndex = -1;
		$("#obj1014").trigger("obj1014_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1014) {
				console.warn("de-queueing event obj1014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1014_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1016();
function goToPage_1016() {
	window.obj1014_onTap_runningActionsCount = obj1014_onTap_runningActionsCount + 1;

	$("#anchor77")[0].click();
	window.obj1014_onTap_runningActionsCount = window.obj1014_onTap_runningActionsCount - 1;

if (window.obj1014_onTap_runningActionsCount < 0) {
	window.obj1014_onTap_runningActionsCount = 0;
} else if (window.obj1014_onTap_runningActionsCount == 0) {
	obj1014_onTap_actionGroup1();
}
}











//	action: playAudioFile
playAudioFile_1031();
function playAudioFile_1031() {
	window.obj1014_onTap_runningActionsCount = obj1014_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1031")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1031");
			$("#obj_audio_playSoundFile1031").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1014_onTap_runningActionsCount = window.obj1014_onTap_runningActionsCount - 1;

if (window.obj1014_onTap_runningActionsCount < 0) {
	window.obj1014_onTap_runningActionsCount = 0;
} else if (window.obj1014_onTap_runningActionsCount == 0) {
	obj1014_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1014_onTap_runningActionsCount = window.obj1014_onTap_runningActionsCount - 1;

if (window.obj1014_onTap_runningActionsCount < 0) {
	window.obj1014_onTap_runningActionsCount = 0;
} else if (window.obj1014_onTap_runningActionsCount == 0) {
	obj1014_onTap_actionGroup1();
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
				window.obj1014_onTap_runningActionsCount = window.obj1014_onTap_runningActionsCount - 1;

if (window.obj1014_onTap_runningActionsCount < 0) {
	window.obj1014_onTap_runningActionsCount = 0;
} else if (window.obj1014_onTap_runningActionsCount == 0) {
	obj1014_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj1014_onTap_runningActionsCount = window.obj1014_onTap_runningActionsCount - 1;

if (window.obj1014_onTap_runningActionsCount < 0) {
	window.obj1014_onTap_runningActionsCount = 0;
} else if (window.obj1014_onTap_runningActionsCount == 0) {
	obj1014_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1014_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1014_onTap_activeActionGroupIndex = -1;
		$("#obj1014").trigger("obj1014_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1014) {
				console.warn("de-queueing event obj1014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1014_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		


















/*
 *
 *   obj852: Event Appear
 *
 */

$("#obj852").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(852, "onDisappear") || 
		pubcoder.isActionListRunning(852, "onAppear")) {
		console.warn("queueing event obj852." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 852, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj852_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj852_onAppear is still running");
	return;
}
var obj852_onAppear_runningActionsCount = 0;
var obj852_onAppear_loopCount = 0;
obj852_onAppear_actionGroup0();
});





/*
 *
 *   obj854: Event Touch Down
 *
 */

$("#obj854").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj854_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj854_onTap is still running");
	return;
}
var obj854_onTap_runningActionsCount = 0;
var obj854_onTap_loopCount = 0;
obj854_onTap_actionGroup0();
});












/*
 *
 *   obj854: Event Appear
 *
 */

$("#obj854").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(854, "onDisappear") || 
		pubcoder.isActionListRunning(854, "onAppear")) {
		console.warn("queueing event obj854." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 854, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj854_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj854_onAppear is still running");
	return;
}
var obj854_onAppear_runningActionsCount = 0;
var obj854_onAppear_loopCount = 0;
obj854_onAppear_actionGroup0();
});
























/*
 *
 *   obj1014: Event Touch Down
 *
 */

$("#obj1014").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1014_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1014_onTap is still running");
	return;
}
var obj1014_onTap_runningActionsCount = 0;
var obj1014_onTap_loopCount = 0;
obj1014_onTap_actionGroup0();
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
	
$("#obj852").trigger('SCEventShow');
$("#obj854").trigger('SCEventShow');
$("#obj870").trigger('SCEventShow');
$("#obj1014").trigger('SCEventShow');
$("#obj2023").trigger('SCEventShow');
	

});