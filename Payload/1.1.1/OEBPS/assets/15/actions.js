pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 431;
pubcoder.page.title = pubcoder.page.title || "15";
pubcoder.page.number = pubcoder.page.number || 15;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj432_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj432_onTap_activeActionGroupIndex = -1;
var obj432_onTap_runningActionsCount = 0;
var obj432_onTap_loopCount = 0;
var obj432_onAppear_activeActionGroupIndex = -1;
var obj432_onAppear_runningActionsCount = 0;
var obj432_onAppear_loopCount = 0;
var obj455_onAppear_activeActionGroupIndex = -1;
var obj455_onAppear_runningActionsCount = 0;
var obj455_onAppear_loopCount = 0;
var obj445_onDrag_activeActionGroupIndex = -1;
var obj445_onDrag_runningActionsCount = 0;
var obj445_onDrag_loopCount = 0;
var obj445_onAppear_activeActionGroupIndex = -1;
var obj445_onAppear_runningActionsCount = 0;
var obj445_onAppear_loopCount = 0;
var obj445_onTouchDown_activeActionGroupIndex = -1;
var obj445_onTouchDown_runningActionsCount = 0;
var obj445_onTouchDown_loopCount = 0;
var obj445_SCActionDragDrop454_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj445_SCActionDragDrop454_droppedOutsideTargetActions_runningActionsCount = 0;
var obj445_SCActionDragDrop454_droppedOutsideTargetActions_loopCount = 0;
var obj445_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj445_droppedInsideTargetActions_runningActionsCount = 0;
var obj445_droppedInsideTargetActions_loopCount = 0;
var obj467_onDrag_activeActionGroupIndex = -1;
var obj467_onDrag_runningActionsCount = 0;
var obj467_onDrag_loopCount = 0;
var obj467_onAppear_activeActionGroupIndex = -1;
var obj467_onAppear_runningActionsCount = 0;
var obj467_onAppear_loopCount = 0;
var obj467_onTouchDown_activeActionGroupIndex = -1;
var obj467_onTouchDown_runningActionsCount = 0;
var obj467_onTouchDown_loopCount = 0;
var obj467_SCActionDragDrop470_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj467_SCActionDragDrop470_droppedOutsideTargetActions_runningActionsCount = 0;
var obj467_SCActionDragDrop470_droppedOutsideTargetActions_loopCount = 0;
var obj467_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj467_droppedInsideTargetActions_runningActionsCount = 0;
var obj467_droppedInsideTargetActions_loopCount = 0;
var obj485_onAppear_activeActionGroupIndex = -1;
var obj485_onAppear_runningActionsCount = 0;
var obj485_onAppear_loopCount = 0;
var obj485_onDrag_activeActionGroupIndex = -1;
var obj485_onDrag_runningActionsCount = 0;
var obj485_onDrag_loopCount = 0;
var obj485_onTouchDown_activeActionGroupIndex = -1;
var obj485_onTouchDown_runningActionsCount = 0;
var obj485_onTouchDown_loopCount = 0;
var obj485_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj485_droppedInsideTargetActions_runningActionsCount = 0;
var obj485_droppedInsideTargetActions_loopCount = 0;
var obj487_onAppear_activeActionGroupIndex = -1;
var obj487_onAppear_runningActionsCount = 0;
var obj487_onAppear_loopCount = 0;
var obj487_onDrag_activeActionGroupIndex = -1;
var obj487_onDrag_runningActionsCount = 0;
var obj487_onDrag_loopCount = 0;
var obj487_onTouchDown_activeActionGroupIndex = -1;
var obj487_onTouchDown_runningActionsCount = 0;
var obj487_onTouchDown_loopCount = 0;
var obj487_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj487_droppedInsideTargetActions_runningActionsCount = 0;
var obj487_droppedInsideTargetActions_loopCount = 0;
var obj520_onAppear_activeActionGroupIndex = -1;
var obj520_onAppear_runningActionsCount = 0;
var obj520_onAppear_loopCount = 0;
var obj520_onDrag_activeActionGroupIndex = -1;
var obj520_onDrag_runningActionsCount = 0;
var obj520_onDrag_loopCount = 0;
var obj520_onTouchDown_activeActionGroupIndex = -1;
var obj520_onTouchDown_runningActionsCount = 0;
var obj520_onTouchDown_loopCount = 0;
var obj520_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj520_droppedInsideTargetActions_runningActionsCount = 0;
var obj520_droppedInsideTargetActions_loopCount = 0;
var obj544_onDrag_activeActionGroupIndex = -1;
var obj544_onDrag_runningActionsCount = 0;
var obj544_onDrag_loopCount = 0;
var obj544_onAppear_activeActionGroupIndex = -1;
var obj544_onAppear_runningActionsCount = 0;
var obj544_onAppear_loopCount = 0;
var obj544_onTouchDown_activeActionGroupIndex = -1;
var obj544_onTouchDown_runningActionsCount = 0;
var obj544_onTouchDown_loopCount = 0;
var obj544_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj544_droppedInsideTargetActions_runningActionsCount = 0;
var obj544_droppedInsideTargetActions_loopCount = 0;

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
	
initAnimation_432();
function initAnimation_432()
{
    var targetObjectId = 432;
    var widthSCAnimationObject = 767;
    var heightSCAnimationObject = 1024;
    var framesPerSecond = 5;
    var howManyLoops = 1;
    var backToFirstFrame = false;
    var isAnimationInfinite = false;
    window.audio_animation_obj432 = $("#")[0];
    window.hasAudioTrack_obj432 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj432_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
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
		
obj432_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj432_onTap_activeActionGroupIndex = -1;
		$("#obj432").trigger("obj432_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 432) {
				console.warn("de-queueing event obj432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj432_onTap_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj432 
playAnimation_466();
function playAnimation_466() {
	var targetObjectId = "#obj432";
	var targetObject = $(targetObjectId)[0];
	window.obj432_onTap_runningActionsCount = obj432_onTap_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj432_onTap_runningActionsCount = window.obj432_onTap_runningActionsCount - 1;

if (window.obj432_onTap_runningActionsCount < 0) {
	window.obj432_onTap_runningActionsCount = 0;
} else if (window.obj432_onTap_runningActionsCount == 0) {
	obj432_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj432 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj432;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj432;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);

	if (!isAnimationInfinite) {
		$("#obj432").one("obj432_animation_ended",function(event) {
		    window.obj432_onTap_runningActionsCount = window.obj432_onTap_runningActionsCount - 1;

if (window.obj432_onTap_runningActionsCount < 0) {
	window.obj432_onTap_runningActionsCount = 0;
} else if (window.obj432_onTap_runningActionsCount == 0) {
	obj432_onTap_actionGroup1();
}
		});
	}
 }






































};
obj432_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj432_onTap_activeActionGroupIndex = -1;
		$("#obj432").trigger("obj432_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 432) {
				console.warn("de-queueing event obj432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj432_onTap_activeActionGroupIndex = 1;
	











































};
obj432_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj432_onAppear_activeActionGroupIndex = -1;
		$("#obj432").trigger("obj432_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 432) {
				console.warn("de-queueing event obj432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj432_onAppear_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_904();
function playAudioFile_904() {
	window.obj432_onAppear_runningActionsCount = obj432_onAppear_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile904")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile904");
			$("#obj_audio_playSoundFile904").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj432_onAppear_runningActionsCount = window.obj432_onAppear_runningActionsCount - 1;

if (window.obj432_onAppear_runningActionsCount < 0) {
	window.obj432_onAppear_runningActionsCount = 0;
} else if (window.obj432_onAppear_runningActionsCount == 0) {
	obj432_onAppear_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj432_onAppear_runningActionsCount = window.obj432_onAppear_runningActionsCount - 1;

if (window.obj432_onAppear_runningActionsCount < 0) {
	window.obj432_onAppear_runningActionsCount = 0;
} else if (window.obj432_onAppear_runningActionsCount == 0) {
	obj432_onAppear_actionGroup1();
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
				window.obj432_onAppear_runningActionsCount = window.obj432_onAppear_runningActionsCount - 1;

if (window.obj432_onAppear_runningActionsCount < 0) {
	window.obj432_onAppear_runningActionsCount = 0;
} else if (window.obj432_onAppear_runningActionsCount == 0) {
	obj432_onAppear_actionGroup1();
}
			}, false);
		} else {
			window.obj432_onAppear_runningActionsCount = window.obj432_onAppear_runningActionsCount - 1;

if (window.obj432_onAppear_runningActionsCount < 0) {
	window.obj432_onAppear_runningActionsCount = 0;
} else if (window.obj432_onAppear_runningActionsCount == 0) {
	obj432_onAppear_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj432_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj432_onAppear_activeActionGroupIndex = -1;
		$("#obj432").trigger("obj432_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 432) {
				console.warn("de-queueing event obj432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj432_onAppear_activeActionGroupIndex = 1;
	











































};
obj455_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj455_onAppear_activeActionGroupIndex = -1;
		$("#obj455").trigger("obj455_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 455) {
				console.warn("de-queueing event obj455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj455_onAppear_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj455 
scale_553();
function scale_553() {
	window.obj455_onAppear_runningActionsCount = obj455_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj455";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj455';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.3';
	var scaleYValue = '1.3';
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
		scale_553_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_553_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_553_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_553_completed() {
	setTimeout(function() {
		window.obj455_onAppear_runningActionsCount = window.obj455_onAppear_runningActionsCount - 1;

if (window.obj455_onAppear_runningActionsCount < 0) {
	window.obj455_onAppear_runningActionsCount = 0;
} else if (window.obj455_onAppear_runningActionsCount == 0) {
	obj455_onAppear_actionGroup1();
}
	}, 1);
}

























};
obj455_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj455_onAppear_activeActionGroupIndex = -1;
		$("#obj455").trigger("obj455_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 455) {
				console.warn("de-queueing event obj455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj455_onAppear_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj455 
scale_560();
function scale_560() {
	window.obj455_onAppear_runningActionsCount = obj455_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj455";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj455';
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
		scale_560_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_560_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_560_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_560_completed() {
	setTimeout(function() {
		window.obj455_onAppear_runningActionsCount = window.obj455_onAppear_runningActionsCount - 1;

if (window.obj455_onAppear_runningActionsCount < 0) {
	window.obj455_onAppear_runningActionsCount = 0;
} else if (window.obj455_onAppear_runningActionsCount == 0) {
	obj455_onAppear_actionGroup2();
}
	}, 1);
}

























};
obj455_onAppear_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj455_onAppear_activeActionGroupIndex = -1;
		$("#obj455").trigger("obj455_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 455) {
				console.warn("de-queueing event obj455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj455_onAppear_activeActionGroupIndex = 2;
	











































};
obj445_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj445_onAppear_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_onAppear_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj445 
rotate_515();
function rotate_515() {
	window.obj445_onAppear_runningActionsCount = obj445_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj445";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj445';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '56.95162';
	var rotationSpeed = 20;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_515_completed(); }

	//TweenMax.to(targetObjectId, 20, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_515_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_515_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_515_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_515_completed() {
	setTimeout(function() {
		window.obj445_onAppear_runningActionsCount = window.obj445_onAppear_runningActionsCount - 1;

if (window.obj445_onAppear_runningActionsCount < 0) {
	window.obj445_onAppear_runningActionsCount = 0;
} else if (window.obj445_onAppear_runningActionsCount == 0) {
	obj445_onAppear_actionGroup1();
}
	}, 1);
}





























};
obj445_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj445_onAppear_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_onAppear_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj445 
rotate_516();
function rotate_516() {
	window.obj445_onAppear_runningActionsCount = obj445_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj445";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj445';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-62.85394';
	var rotationSpeed = 20;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_516_completed(); }

	//TweenMax.to(targetObjectId, 20, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_516_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_516_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_516_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_516_completed() {
	setTimeout(function() {
		window.obj445_onAppear_runningActionsCount = window.obj445_onAppear_runningActionsCount - 1;

if (window.obj445_onAppear_runningActionsCount < 0) {
	window.obj445_onAppear_runningActionsCount = 0;
} else if (window.obj445_onAppear_runningActionsCount == 0) {
	obj445_onAppear_actionGroup2();
}
	}, 1);
}





























};
obj445_onAppear_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj445_onAppear_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_onAppear_activeActionGroupIndex = 2;
	











































};
obj445_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj445_onTouchDown_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj445");

//	action: dragDrop
//	target: obj445 
dragDrop_454();
function dragDrop_454() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj445_onTouchDown_runningActionsCount = obj445_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj445');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj432');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj445_onTouchDown_runningActionsCount = window.obj445_onTouchDown_runningActionsCount - 1;

if (window.obj445_onTouchDown_runningActionsCount < 0) {
	window.obj445_onTouchDown_runningActionsCount = 0;
} else if (window.obj445_onTouchDown_runningActionsCount == 0) {
	obj445_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj455");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_454 = false;
    	var dropped_id_454;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_454 = true;
					dropped_id_454 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_454) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj445").trigger('SCActionDragDrop454_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj445_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj445_onTouchDown_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj445_SCActionDragDrop454_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj445_SCActionDragDrop454_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_SCActionDragDrop454_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_SCActionDragDrop454_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj445_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj445_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj445 
scale_459();
function scale_459() {
	window.obj445_droppedInsideTargetActions_runningActionsCount = obj445_droppedInsideTargetActions_runningActionsCount + 1;

	
	var targetObjectId = "#obj445";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj445';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.3';
	var scaleYValue = '1.3';
	var effectDuration = '0.3';
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
		scale_459_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_459_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_459_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_459_completed() {
	setTimeout(function() {
		window.obj445_droppedInsideTargetActions_runningActionsCount = window.obj445_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj445_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj445_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj445_droppedInsideTargetActions_runningActionsCount == 0) {
	obj445_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

























};
obj445_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj445_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj445 
scale_460();
function scale_460() {
	window.obj445_droppedInsideTargetActions_runningActionsCount = obj445_droppedInsideTargetActions_runningActionsCount + 1;

	
	var targetObjectId = "#obj445";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj445';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
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
		scale_460_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_460_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_460_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_460_completed() {
	setTimeout(function() {
		window.obj445_droppedInsideTargetActions_runningActionsCount = window.obj445_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj445_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj445_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj445_droppedInsideTargetActions_runningActionsCount == 0) {
	obj445_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}

























};
obj445_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj445_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj445 
hide_461();
function hide_461() {
	var selector = "#obj445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj445_droppedInsideTargetActions_runningActionsCount = obj445_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj445_droppedInsideTargetActions_runningActionsCount = window.obj445_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj445_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj445_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj445_droppedInsideTargetActions_runningActionsCount == 0) {
	obj445_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_461(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj445_droppedInsideTargetActions_runningActionsCount = window.obj445_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj445_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj445_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj445_droppedInsideTargetActions_runningActionsCount == 0) {
	obj445_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj445_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj445_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj445").trigger("obj445_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 445) {
				console.warn("de-queueing event obj445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj445_droppedInsideTargetActions_activeActionGroupIndex = 3;
	











































};
obj467_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj467_onAppear_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_onAppear_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj467 
rotate_512();
function rotate_512() {
	window.obj467_onAppear_runningActionsCount = obj467_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj467";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj467';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '21.60759';
	var rotationSpeed = 20;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_512_completed(); }

	//TweenMax.to(targetObjectId, 20, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_512_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_512_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_512_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_512_completed() {
	setTimeout(function() {
		window.obj467_onAppear_runningActionsCount = window.obj467_onAppear_runningActionsCount - 1;

if (window.obj467_onAppear_runningActionsCount < 0) {
	window.obj467_onAppear_runningActionsCount = 0;
} else if (window.obj467_onAppear_runningActionsCount == 0) {
	obj467_onAppear_actionGroup1();
}
	}, 1);
}





























};
obj467_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj467_onAppear_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_onAppear_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj467 
rotate_513();
function rotate_513() {
	window.obj467_onAppear_runningActionsCount = obj467_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj467";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj467';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-56.17595';
	var rotationSpeed = 20;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_513_completed(); }

	//TweenMax.to(targetObjectId, 20, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_513_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_513_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_513_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_513_completed() {
	setTimeout(function() {
		window.obj467_onAppear_runningActionsCount = window.obj467_onAppear_runningActionsCount - 1;

if (window.obj467_onAppear_runningActionsCount < 0) {
	window.obj467_onAppear_runningActionsCount = 0;
} else if (window.obj467_onAppear_runningActionsCount == 0) {
	obj467_onAppear_actionGroup2();
}
	}, 1);
}





























};
obj467_onAppear_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj467_onAppear_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_onAppear_activeActionGroupIndex = 2;
	











































};
obj467_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj467_onTouchDown_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj467");

//	action: dragDrop
//	target: obj467 
dragDrop_470();
function dragDrop_470() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj467_onTouchDown_runningActionsCount = obj467_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj467');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj432');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj467_onTouchDown_runningActionsCount = window.obj467_onTouchDown_runningActionsCount - 1;

if (window.obj467_onTouchDown_runningActionsCount < 0) {
	window.obj467_onTouchDown_runningActionsCount = 0;
} else if (window.obj467_onTouchDown_runningActionsCount == 0) {
	obj467_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj455");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_470 = false;
    	var dropped_id_470;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_470 = true;
					dropped_id_470 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_470) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj467").trigger('SCActionDragDrop470_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj467_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj467_onTouchDown_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj467_SCActionDragDrop470_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj467_SCActionDragDrop470_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_SCActionDragDrop470_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_SCActionDragDrop470_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj467_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj467_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj467 
scale_481();
function scale_481() {
	window.obj467_droppedInsideTargetActions_runningActionsCount = obj467_droppedInsideTargetActions_runningActionsCount + 1;

	
	var targetObjectId = "#obj467";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj467';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.3';
	var scaleYValue = '1.3';
	var effectDuration = '0.3';
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
		scale_481_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_481_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_481_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_481_completed() {
	setTimeout(function() {
		window.obj467_droppedInsideTargetActions_runningActionsCount = window.obj467_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj467_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj467_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj467_droppedInsideTargetActions_runningActionsCount == 0) {
	obj467_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

























};
obj467_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj467_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj467 
scale_482();
function scale_482() {
	window.obj467_droppedInsideTargetActions_runningActionsCount = obj467_droppedInsideTargetActions_runningActionsCount + 1;

	
	var targetObjectId = "#obj467";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj467';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
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
		scale_482_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_482_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_482_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_482_completed() {
	setTimeout(function() {
		window.obj467_droppedInsideTargetActions_runningActionsCount = window.obj467_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj467_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj467_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj467_droppedInsideTargetActions_runningActionsCount == 0) {
	obj467_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}

























};
obj467_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj467_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj467 
hide_483();
function hide_483() {
	var selector = "#obj467";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj467_droppedInsideTargetActions_runningActionsCount = obj467_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj467_droppedInsideTargetActions_runningActionsCount = window.obj467_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj467_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj467_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj467_droppedInsideTargetActions_runningActionsCount == 0) {
	obj467_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_483(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj467_droppedInsideTargetActions_runningActionsCount = window.obj467_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj467_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj467_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj467_droppedInsideTargetActions_runningActionsCount == 0) {
	obj467_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj467_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj467_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj467").trigger("obj467_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 467) {
				console.warn("de-queueing event obj467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj467_droppedInsideTargetActions_activeActionGroupIndex = 3;
	











































};
obj485_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj485_onAppear_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_onAppear_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj485 
rotate_490();
function rotate_490() {
	window.obj485_onAppear_runningActionsCount = obj485_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj485";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj485';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '358.5591';
	var rotationSpeed = 30;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_490_completed(); }

	//TweenMax.to(targetObjectId, 30, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_490_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_490_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_490_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_490_completed() {
	setTimeout(function() {
		window.obj485_onAppear_runningActionsCount = window.obj485_onAppear_runningActionsCount - 1;

if (window.obj485_onAppear_runningActionsCount < 0) {
	window.obj485_onAppear_runningActionsCount = 0;
} else if (window.obj485_onAppear_runningActionsCount == 0) {
	obj485_onAppear_actionGroup1();
}
	}, 1);
}





























};
obj485_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj485_onAppear_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_onAppear_activeActionGroupIndex = 1;
	











































};
obj485_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj485_onTouchDown_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj485");

//	action: dragDrop
//	target: obj485 
dragDrop_495();
function dragDrop_495() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj485_onTouchDown_runningActionsCount = obj485_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj485');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj432');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj485_onTouchDown_runningActionsCount = window.obj485_onTouchDown_runningActionsCount - 1;

if (window.obj485_onTouchDown_runningActionsCount < 0) {
	window.obj485_onTouchDown_runningActionsCount = 0;
} else if (window.obj485_onTouchDown_runningActionsCount == 0) {
	obj485_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj455");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_495 = false;
    	var dropped_id_495;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_495 = true;
					dropped_id_495 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_495) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj485_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj485_onTouchDown_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj485_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj485 
hide_497();
function hide_497() {
	var selector = "#obj485";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj485_droppedInsideTargetActions_runningActionsCount = obj485_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj485_droppedInsideTargetActions_runningActionsCount = window.obj485_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj485_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_497(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj485_droppedInsideTargetActions_runningActionsCount = window.obj485_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj485_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj485_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj487_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj487_onAppear_activeActionGroupIndex = -1;
		$("#obj487").trigger("obj487_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 487) {
				console.warn("de-queueing event obj487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj487_onAppear_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj487 
rotate_493();
function rotate_493() {
	window.obj487_onAppear_runningActionsCount = obj487_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj487";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj487';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '357.7387';
	var rotationSpeed = 30;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_493_completed(); }

	//TweenMax.to(targetObjectId, 30, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_493_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_493_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_493_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_493_completed() {
	setTimeout(function() {
		window.obj487_onAppear_runningActionsCount = window.obj487_onAppear_runningActionsCount - 1;

if (window.obj487_onAppear_runningActionsCount < 0) {
	window.obj487_onAppear_runningActionsCount = 0;
} else if (window.obj487_onAppear_runningActionsCount == 0) {
	obj487_onAppear_actionGroup1();
}
	}, 1);
}





























};
obj487_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj487_onAppear_activeActionGroupIndex = -1;
		$("#obj487").trigger("obj487_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 487) {
				console.warn("de-queueing event obj487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj487_onAppear_activeActionGroupIndex = 1;
	











































};
obj487_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj487_onTouchDown_activeActionGroupIndex = -1;
		$("#obj487").trigger("obj487_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 487) {
				console.warn("de-queueing event obj487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj487_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj487");

//	action: dragDrop
//	target: obj487 
dragDrop_499();
function dragDrop_499() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj487_onTouchDown_runningActionsCount = obj487_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj487');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj432');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj487_onTouchDown_runningActionsCount = window.obj487_onTouchDown_runningActionsCount - 1;

if (window.obj487_onTouchDown_runningActionsCount < 0) {
	window.obj487_onTouchDown_runningActionsCount = 0;
} else if (window.obj487_onTouchDown_runningActionsCount == 0) {
	obj487_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj455");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_499 = false;
    	var dropped_id_499;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_499 = true;
					dropped_id_499 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_499) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj487_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj487_onTouchDown_activeActionGroupIndex = -1;
		$("#obj487").trigger("obj487_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 487) {
				console.warn("de-queueing event obj487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj487_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj487_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj487_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj487").trigger("obj487_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 487) {
				console.warn("de-queueing event obj487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj487_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj487 
hide_501();
function hide_501() {
	var selector = "#obj487";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj487_droppedInsideTargetActions_runningActionsCount = obj487_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj487_droppedInsideTargetActions_runningActionsCount = window.obj487_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj487_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_501(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj487_droppedInsideTargetActions_runningActionsCount = window.obj487_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj487_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj487_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj487_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj487").trigger("obj487_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 487) {
				console.warn("de-queueing event obj487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj487_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj520_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj520_onAppear_activeActionGroupIndex = -1;
		$("#obj520").trigger("obj520_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 520) {
				console.warn("de-queueing event obj520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj520_onAppear_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj520 
rotate_539();
function rotate_539() {
	window.obj520_onAppear_runningActionsCount = obj520_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj520";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj520';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '356.5552';
	var rotationSpeed = 40;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_539_completed(); }

	//TweenMax.to(targetObjectId, 40, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_539_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_539_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_539_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_539_completed() {
	setTimeout(function() {
		window.obj520_onAppear_runningActionsCount = window.obj520_onAppear_runningActionsCount - 1;

if (window.obj520_onAppear_runningActionsCount < 0) {
	window.obj520_onAppear_runningActionsCount = 0;
} else if (window.obj520_onAppear_runningActionsCount == 0) {
	obj520_onAppear_actionGroup1();
}
	}, 1);
}





























};
obj520_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj520_onAppear_activeActionGroupIndex = -1;
		$("#obj520").trigger("obj520_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 520) {
				console.warn("de-queueing event obj520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj520_onAppear_activeActionGroupIndex = 1;
	











































};
obj520_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj520_onTouchDown_activeActionGroupIndex = -1;
		$("#obj520").trigger("obj520_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 520) {
				console.warn("de-queueing event obj520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj520_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj520");

//	action: dragDrop
//	target: obj520 
dragDrop_526();
function dragDrop_526() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj520_onTouchDown_runningActionsCount = obj520_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj520');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj432');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj520_onTouchDown_runningActionsCount = window.obj520_onTouchDown_runningActionsCount - 1;

if (window.obj520_onTouchDown_runningActionsCount < 0) {
	window.obj520_onTouchDown_runningActionsCount = 0;
} else if (window.obj520_onTouchDown_runningActionsCount == 0) {
	obj520_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj455");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_526 = false;
    	var dropped_id_526;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_526 = true;
					dropped_id_526 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_526) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj520_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj520_onTouchDown_activeActionGroupIndex = -1;
		$("#obj520").trigger("obj520_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 520) {
				console.warn("de-queueing event obj520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj520_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj520_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj520").trigger("obj520_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 520) {
				console.warn("de-queueing event obj520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj520_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj520 
scale_528();
function scale_528() {
	window.obj520_droppedInsideTargetActions_runningActionsCount = obj520_droppedInsideTargetActions_runningActionsCount + 1;

	
	var targetObjectId = "#obj520";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj520';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.3';
	var scaleYValue = '1.3';
	var effectDuration = '0.3';
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
		scale_528_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_528_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_528_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_528_completed() {
	setTimeout(function() {
		window.obj520_droppedInsideTargetActions_runningActionsCount = window.obj520_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj520_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

























};
obj520_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj520").trigger("obj520_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 520) {
				console.warn("de-queueing event obj520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj520_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj520 
scale_529();
function scale_529() {
	window.obj520_droppedInsideTargetActions_runningActionsCount = obj520_droppedInsideTargetActions_runningActionsCount + 1;

	
	var targetObjectId = "#obj520";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj520';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
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
		scale_529_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_529_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_529_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_529_completed() {
	setTimeout(function() {
		window.obj520_droppedInsideTargetActions_runningActionsCount = window.obj520_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj520_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}

























};
obj520_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj520").trigger("obj520_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 520) {
				console.warn("de-queueing event obj520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj520_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj520 
hide_530();
function hide_530() {
	var selector = "#obj520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj520_droppedInsideTargetActions_runningActionsCount = obj520_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj520_droppedInsideTargetActions_runningActionsCount = window.obj520_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj520_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_530(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj520_droppedInsideTargetActions_runningActionsCount = window.obj520_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj520_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj520_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj520").trigger("obj520_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 520) {
				console.warn("de-queueing event obj520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj520_droppedInsideTargetActions_activeActionGroupIndex = 3;
	











































};
obj544_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj544_onAppear_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_onAppear_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj544 
rotate_567();
function rotate_567() {
	window.obj544_onAppear_runningActionsCount = obj544_onAppear_runningActionsCount + 1;

	
	var targetObjectId = "#obj544";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj544';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '356.0244';
	var rotationSpeed = 30;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = true;
	if (isInfinite) { rotate_567_completed(); }

	//TweenMax.to(targetObjectId, 30, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_567_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_567_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_567_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_567_completed() {
	setTimeout(function() {
		window.obj544_onAppear_runningActionsCount = window.obj544_onAppear_runningActionsCount - 1;

if (window.obj544_onAppear_runningActionsCount < 0) {
	window.obj544_onAppear_runningActionsCount = 0;
} else if (window.obj544_onAppear_runningActionsCount == 0) {
	obj544_onAppear_actionGroup1();
}
	}, 1);
}





























};
obj544_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj544_onAppear_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_onAppear_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_onAppear_activeActionGroupIndex = 1;
	











































};
obj544_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj544_onTouchDown_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj544");

//	action: dragDrop
//	target: obj544 
dragDrop_547();
function dragDrop_547() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj544_onTouchDown_runningActionsCount = obj544_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj544');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj432');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj544_onTouchDown_runningActionsCount = window.obj544_onTouchDown_runningActionsCount - 1;

if (window.obj544_onTouchDown_runningActionsCount < 0) {
	window.obj544_onTouchDown_runningActionsCount = 0;
} else if (window.obj544_onTouchDown_runningActionsCount == 0) {
	obj544_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj455");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_547 = false;
    	var dropped_id_547;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_547 = true;
					dropped_id_547 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_547) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj544_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj544_onTouchDown_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj544_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj544_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj544 
scale_549();
function scale_549() {
	window.obj544_droppedInsideTargetActions_runningActionsCount = obj544_droppedInsideTargetActions_runningActionsCount + 1;

	
	var targetObjectId = "#obj544";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj544';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.3';
	var scaleYValue = '1.3';
	var effectDuration = '0.3';
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
		scale_549_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_549_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_549_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_549_completed() {
	setTimeout(function() {
		window.obj544_droppedInsideTargetActions_runningActionsCount = window.obj544_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj544_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj544_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj544_droppedInsideTargetActions_runningActionsCount == 0) {
	obj544_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

























};
obj544_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj544_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj544 
scale_550();
function scale_550() {
	window.obj544_droppedInsideTargetActions_runningActionsCount = obj544_droppedInsideTargetActions_runningActionsCount + 1;

	
	var targetObjectId = "#obj544";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj544';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
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
		scale_550_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_550_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_550_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_550_completed() {
	setTimeout(function() {
		window.obj544_droppedInsideTargetActions_runningActionsCount = window.obj544_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj544_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj544_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj544_droppedInsideTargetActions_runningActionsCount == 0) {
	obj544_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}

























};
obj544_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj544_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj544 
hide_551();
function hide_551() {
	var selector = "#obj544";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj544_droppedInsideTargetActions_runningActionsCount = obj544_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj544_droppedInsideTargetActions_runningActionsCount = window.obj544_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj544_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj544_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj544_droppedInsideTargetActions_runningActionsCount == 0) {
	obj544_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_551(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj544_droppedInsideTargetActions_runningActionsCount = window.obj544_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj544_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj544_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj544_droppedInsideTargetActions_runningActionsCount == 0) {
	obj544_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj544_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj544_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_droppedInsideTargetActions_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj432: Event Touch Down
 *
 */

$("#obj432").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj432_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj432_onTap is still running");
	return;
}
var obj432_onTap_runningActionsCount = 0;
var obj432_onTap_loopCount = 0;
obj432_onTap_actionGroup0();
});












/*
 *
 *   obj432: Event Appear
 *
 */

$("#obj432").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(432, "onDisappear") || 
		pubcoder.isActionListRunning(432, "onAppear")) {
		console.warn("queueing event obj432." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 432, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj432_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj432_onAppear is still running");
	return;
}
var obj432_onAppear_runningActionsCount = 0;
var obj432_onAppear_loopCount = 0;
obj432_onAppear_actionGroup0();
});


















/*
 *
 *   obj455: Event Appear
 *
 */

$("#obj455").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(455, "onDisappear") || 
		pubcoder.isActionListRunning(455, "onAppear")) {
		console.warn("queueing event obj455." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 455, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj455_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj455_onAppear is still running");
	return;
}
var obj455_onAppear_runningActionsCount = 0;
var obj455_onAppear_loopCount = 0;
obj455_onAppear_actionGroup0();
});







/*
 *
 *   obj445: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj445");
	var winTarget = document.getElementById("obj445");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj445").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj445_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj445_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj445_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj445_onTouchDown is still running");
	return;
}
var obj445_onTouchDown_runningActionsCount = 0;
var obj445_onTouchDown_loopCount = 0;
obj445_onTouchDown_actionGroup0();
});






/*
 *
 *   obj445: Event SCActionDragDrop454_droppedOutsideTargetActions
 *
 */

$("#obj445").bind("SCActionDragDrop454_droppedOutsideTargetActions", function(event) {
	if (window.obj445_SCActionDragDrop454_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj445_SCActionDragDrop454_droppedOutsideTargetActions is still running");
	return;
}
var obj445_SCActionDragDrop454_droppedOutsideTargetActions_runningActionsCount = 0;
var obj445_SCActionDragDrop454_droppedOutsideTargetActions_loopCount = 0;
obj445_SCActionDragDrop454_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj445: Event droppedInsideTargetActions
 *
 */

$("#obj445").bind("droppedInsideTargetActions", function(event) {
	if (window.obj445_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj445_droppedInsideTargetActions is still running");
	return;
}
var obj445_droppedInsideTargetActions_runningActionsCount = 0;
var obj445_droppedInsideTargetActions_loopCount = 0;
obj445_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj445: Event Appear
 *
 */

$("#obj445").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(445, "onDisappear") || 
		pubcoder.isActionListRunning(445, "onAppear")) {
		console.warn("queueing event obj445." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 445, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj445_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj445_onAppear is still running");
	return;
}
var obj445_onAppear_runningActionsCount = 0;
var obj445_onAppear_loopCount = 0;
obj445_onAppear_actionGroup0();
});







/*
 *
 *   obj467: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj467");
	var winTarget = document.getElementById("obj467");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj467").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj467_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj467_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj467_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj467_onTouchDown is still running");
	return;
}
var obj467_onTouchDown_runningActionsCount = 0;
var obj467_onTouchDown_loopCount = 0;
obj467_onTouchDown_actionGroup0();
});






/*
 *
 *   obj467: Event SCActionDragDrop470_droppedOutsideTargetActions
 *
 */

$("#obj467").bind("SCActionDragDrop470_droppedOutsideTargetActions", function(event) {
	if (window.obj467_SCActionDragDrop470_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj467_SCActionDragDrop470_droppedOutsideTargetActions is still running");
	return;
}
var obj467_SCActionDragDrop470_droppedOutsideTargetActions_runningActionsCount = 0;
var obj467_SCActionDragDrop470_droppedOutsideTargetActions_loopCount = 0;
obj467_SCActionDragDrop470_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj467: Event droppedInsideTargetActions
 *
 */

$("#obj467").bind("droppedInsideTargetActions", function(event) {
	if (window.obj467_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj467_droppedInsideTargetActions is still running");
	return;
}
var obj467_droppedInsideTargetActions_runningActionsCount = 0;
var obj467_droppedInsideTargetActions_loopCount = 0;
obj467_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj467: Event Appear
 *
 */

$("#obj467").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(467, "onDisappear") || 
		pubcoder.isActionListRunning(467, "onAppear")) {
		console.warn("queueing event obj467." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 467, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj467_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj467_onAppear is still running");
	return;
}
var obj467_onAppear_runningActionsCount = 0;
var obj467_onAppear_loopCount = 0;
obj467_onAppear_actionGroup0();
});







/*
 *
 *   obj485: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj485");
	var winTarget = document.getElementById("obj485");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj485").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj485_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj485_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj485_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj485_onTouchDown is still running");
	return;
}
var obj485_onTouchDown_runningActionsCount = 0;
var obj485_onTouchDown_loopCount = 0;
obj485_onTouchDown_actionGroup0();
});






/*
 *
 *   obj485: Event droppedInsideTargetActions
 *
 */

$("#obj485").bind("droppedInsideTargetActions", function(event) {
	if (window.obj485_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj485_droppedInsideTargetActions is still running");
	return;
}
var obj485_droppedInsideTargetActions_runningActionsCount = 0;
var obj485_droppedInsideTargetActions_loopCount = 0;
obj485_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj485: Event Appear
 *
 */

$("#obj485").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(485, "onDisappear") || 
		pubcoder.isActionListRunning(485, "onAppear")) {
		console.warn("queueing event obj485." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 485, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj485_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj485_onAppear is still running");
	return;
}
var obj485_onAppear_runningActionsCount = 0;
var obj485_onAppear_loopCount = 0;
obj485_onAppear_actionGroup0();
});







/*
 *
 *   obj487: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj487");
	var winTarget = document.getElementById("obj487");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj487").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj487_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj487_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj487_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj487_onTouchDown is still running");
	return;
}
var obj487_onTouchDown_runningActionsCount = 0;
var obj487_onTouchDown_loopCount = 0;
obj487_onTouchDown_actionGroup0();
});






/*
 *
 *   obj487: Event droppedInsideTargetActions
 *
 */

$("#obj487").bind("droppedInsideTargetActions", function(event) {
	if (window.obj487_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj487_droppedInsideTargetActions is still running");
	return;
}
var obj487_droppedInsideTargetActions_runningActionsCount = 0;
var obj487_droppedInsideTargetActions_loopCount = 0;
obj487_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj487: Event Appear
 *
 */

$("#obj487").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(487, "onDisappear") || 
		pubcoder.isActionListRunning(487, "onAppear")) {
		console.warn("queueing event obj487." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 487, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj487_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj487_onAppear is still running");
	return;
}
var obj487_onAppear_runningActionsCount = 0;
var obj487_onAppear_loopCount = 0;
obj487_onAppear_actionGroup0();
});







/*
 *
 *   obj520: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj520");
	var winTarget = document.getElementById("obj520");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj520").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj520_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj520_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj520_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj520_onTouchDown is still running");
	return;
}
var obj520_onTouchDown_runningActionsCount = 0;
var obj520_onTouchDown_loopCount = 0;
obj520_onTouchDown_actionGroup0();
});






/*
 *
 *   obj520: Event droppedInsideTargetActions
 *
 */

$("#obj520").bind("droppedInsideTargetActions", function(event) {
	if (window.obj520_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj520_droppedInsideTargetActions is still running");
	return;
}
var obj520_droppedInsideTargetActions_runningActionsCount = 0;
var obj520_droppedInsideTargetActions_loopCount = 0;
obj520_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj520: Event Appear
 *
 */

$("#obj520").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(520, "onDisappear") || 
		pubcoder.isActionListRunning(520, "onAppear")) {
		console.warn("queueing event obj520." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 520, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj520_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj520_onAppear is still running");
	return;
}
var obj520_onAppear_runningActionsCount = 0;
var obj520_onAppear_loopCount = 0;
obj520_onAppear_actionGroup0();
});







/*
 *
 *   obj544: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj544");
	var winTarget = document.getElementById("obj544");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj544").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj544_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj544_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj544_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj544_onTouchDown is still running");
	return;
}
var obj544_onTouchDown_runningActionsCount = 0;
var obj544_onTouchDown_loopCount = 0;
obj544_onTouchDown_actionGroup0();
});






/*
 *
 *   obj544: Event droppedInsideTargetActions
 *
 */

$("#obj544").bind("droppedInsideTargetActions", function(event) {
	if (window.obj544_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj544_droppedInsideTargetActions is still running");
	return;
}
var obj544_droppedInsideTargetActions_runningActionsCount = 0;
var obj544_droppedInsideTargetActions_loopCount = 0;
obj544_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj544: Event Appear
 *
 */

$("#obj544").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(544, "onDisappear") || 
		pubcoder.isActionListRunning(544, "onAppear")) {
		console.warn("queueing event obj544." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 544, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj544_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj544_onAppear is still running");
	return;
}
var obj544_onAppear_runningActionsCount = 0;
var obj544_onAppear_loopCount = 0;
obj544_onAppear_actionGroup0();
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
	
$("#obj432").trigger('SCEventShow');
$("#obj455").trigger('SCEventShow');
$("#obj445").trigger('SCEventShow');
$("#obj467").trigger('SCEventShow');
$("#obj485").trigger('SCEventShow');
$("#obj487").trigger('SCEventShow');
$("#obj520").trigger('SCEventShow');
$("#obj544").trigger('SCEventShow');
$("#obj573").trigger('SCEventShow');
$("#obj2008").trigger('SCEventShow');
	

});