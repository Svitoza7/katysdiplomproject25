pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 1075;
pubcoder.page.title = pubcoder.page.title || "18";
pubcoder.page.number = pubcoder.page.number || 18;
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
var obj1084_onTap_activeActionGroupIndex = -1;
var obj1084_onTap_runningActionsCount = 0;
var obj1084_onTap_loopCount = 0;
var obj1087_onTap_activeActionGroupIndex = -1;
var obj1087_onTap_runningActionsCount = 0;
var obj1087_onTap_loopCount = 0;
var obj1090_onTap_activeActionGroupIndex = -1;
var obj1090_onTap_runningActionsCount = 0;
var obj1090_onTap_loopCount = 0;
var obj1093_onTap_activeActionGroupIndex = -1;
var obj1093_onTap_runningActionsCount = 0;
var obj1093_onTap_loopCount = 0;

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
		
obj1084_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1084_onTap_activeActionGroupIndex = -1;
		$("#obj1084").trigger("obj1084_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1084) {
				console.warn("de-queueing event obj1084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1084_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1084 
hide_1099();
function hide_1099() {
	var selector = "#obj1084";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1084_onTap_runningActionsCount = obj1084_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 3000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1084_onTap_runningActionsCount = window.obj1084_onTap_runningActionsCount - 1;

if (window.obj1084_onTap_runningActionsCount < 0) {
	window.obj1084_onTap_runningActionsCount = 0;
} else if (window.obj1084_onTap_runningActionsCount == 0) {
	obj1084_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1099(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1084_onTap_runningActionsCount = window.obj1084_onTap_runningActionsCount - 1;

if (window.obj1084_onTap_runningActionsCount < 0) {
	window.obj1084_onTap_runningActionsCount = 0;
} else if (window.obj1084_onTap_runningActionsCount == 0) {
	obj1084_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1084_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1084_onTap_activeActionGroupIndex = -1;
		$("#obj1084").trigger("obj1084_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1084) {
				console.warn("de-queueing event obj1084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1084_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj1084
(function(){
	window.obj1084_onTap_runningActionsCount = obj1084_onTap_runningActionsCount + 1;


	var selector = "#obj1084";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 3000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1084_onTap_runningActionsCount = window.obj1084_onTap_runningActionsCount - 1;

if (window.obj1084_onTap_runningActionsCount < 0) {
	window.obj1084_onTap_runningActionsCount = 0;
} else if (window.obj1084_onTap_runningActionsCount == 0) {
	obj1084_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj1084_onTap_runningActionsCount = window.obj1084_onTap_runningActionsCount - 1;

if (window.obj1084_onTap_runningActionsCount < 0) {
	window.obj1084_onTap_runningActionsCount = 0;
} else if (window.obj1084_onTap_runningActionsCount == 0) {
	obj1084_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1084_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1084_onTap_activeActionGroupIndex = -1;
		$("#obj1084").trigger("obj1084_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1084) {
				console.warn("de-queueing event obj1084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1084_onTap_activeActionGroupIndex = 2;
	











































};
obj1087_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1087_onTap_activeActionGroupIndex = -1;
		$("#obj1087").trigger("obj1087_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1087) {
				console.warn("de-queueing event obj1087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1087_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1087 
hide_1103();
function hide_1103() {
	var selector = "#obj1087";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1087_onTap_runningActionsCount = obj1087_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 3000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1087_onTap_runningActionsCount = window.obj1087_onTap_runningActionsCount - 1;

if (window.obj1087_onTap_runningActionsCount < 0) {
	window.obj1087_onTap_runningActionsCount = 0;
} else if (window.obj1087_onTap_runningActionsCount == 0) {
	obj1087_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1103(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1087_onTap_runningActionsCount = window.obj1087_onTap_runningActionsCount - 1;

if (window.obj1087_onTap_runningActionsCount < 0) {
	window.obj1087_onTap_runningActionsCount = 0;
} else if (window.obj1087_onTap_runningActionsCount == 0) {
	obj1087_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1087_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1087_onTap_activeActionGroupIndex = -1;
		$("#obj1087").trigger("obj1087_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1087) {
				console.warn("de-queueing event obj1087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1087_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj1087
(function(){
	window.obj1087_onTap_runningActionsCount = obj1087_onTap_runningActionsCount + 1;


	var selector = "#obj1087";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 3000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1087_onTap_runningActionsCount = window.obj1087_onTap_runningActionsCount - 1;

if (window.obj1087_onTap_runningActionsCount < 0) {
	window.obj1087_onTap_runningActionsCount = 0;
} else if (window.obj1087_onTap_runningActionsCount == 0) {
	obj1087_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj1087_onTap_runningActionsCount = window.obj1087_onTap_runningActionsCount - 1;

if (window.obj1087_onTap_runningActionsCount < 0) {
	window.obj1087_onTap_runningActionsCount = 0;
} else if (window.obj1087_onTap_runningActionsCount == 0) {
	obj1087_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1087_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1087_onTap_activeActionGroupIndex = -1;
		$("#obj1087").trigger("obj1087_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1087) {
				console.warn("de-queueing event obj1087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1087_onTap_activeActionGroupIndex = 2;
	











































};
obj1090_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1090_onTap_activeActionGroupIndex = -1;
		$("#obj1090").trigger("obj1090_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1090) {
				console.warn("de-queueing event obj1090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1090_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1090 
hide_1097();
function hide_1097() {
	var selector = "#obj1090";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1090_onTap_runningActionsCount = obj1090_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 3000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1090_onTap_runningActionsCount = window.obj1090_onTap_runningActionsCount - 1;

if (window.obj1090_onTap_runningActionsCount < 0) {
	window.obj1090_onTap_runningActionsCount = 0;
} else if (window.obj1090_onTap_runningActionsCount == 0) {
	obj1090_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1097(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1090_onTap_runningActionsCount = window.obj1090_onTap_runningActionsCount - 1;

if (window.obj1090_onTap_runningActionsCount < 0) {
	window.obj1090_onTap_runningActionsCount = 0;
} else if (window.obj1090_onTap_runningActionsCount == 0) {
	obj1090_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1090_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1090_onTap_activeActionGroupIndex = -1;
		$("#obj1090").trigger("obj1090_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1090) {
				console.warn("de-queueing event obj1090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1090_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj1090
(function(){
	window.obj1090_onTap_runningActionsCount = obj1090_onTap_runningActionsCount + 1;


	var selector = "#obj1090";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 3000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1090_onTap_runningActionsCount = window.obj1090_onTap_runningActionsCount - 1;

if (window.obj1090_onTap_runningActionsCount < 0) {
	window.obj1090_onTap_runningActionsCount = 0;
} else if (window.obj1090_onTap_runningActionsCount == 0) {
	obj1090_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj1090_onTap_runningActionsCount = window.obj1090_onTap_runningActionsCount - 1;

if (window.obj1090_onTap_runningActionsCount < 0) {
	window.obj1090_onTap_runningActionsCount = 0;
} else if (window.obj1090_onTap_runningActionsCount == 0) {
	obj1090_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1090_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1090_onTap_activeActionGroupIndex = -1;
		$("#obj1090").trigger("obj1090_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1090) {
				console.warn("de-queueing event obj1090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1090_onTap_activeActionGroupIndex = 2;
	











































};
obj1093_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1093_onTap_activeActionGroupIndex = -1;
		$("#obj1093").trigger("obj1093_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1093) {
				console.warn("de-queueing event obj1093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1093_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1093 
hide_1101();
function hide_1101() {
	var selector = "#obj1093";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1093_onTap_runningActionsCount = obj1093_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 3000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1093_onTap_runningActionsCount = window.obj1093_onTap_runningActionsCount - 1;

if (window.obj1093_onTap_runningActionsCount < 0) {
	window.obj1093_onTap_runningActionsCount = 0;
} else if (window.obj1093_onTap_runningActionsCount == 0) {
	obj1093_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1101(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1093_onTap_runningActionsCount = window.obj1093_onTap_runningActionsCount - 1;

if (window.obj1093_onTap_runningActionsCount < 0) {
	window.obj1093_onTap_runningActionsCount = 0;
} else if (window.obj1093_onTap_runningActionsCount == 0) {
	obj1093_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1093_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1093_onTap_activeActionGroupIndex = -1;
		$("#obj1093").trigger("obj1093_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1093) {
				console.warn("de-queueing event obj1093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1093_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj1093
(function(){
	window.obj1093_onTap_runningActionsCount = obj1093_onTap_runningActionsCount + 1;


	var selector = "#obj1093";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 3000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1093_onTap_runningActionsCount = window.obj1093_onTap_runningActionsCount - 1;

if (window.obj1093_onTap_runningActionsCount < 0) {
	window.obj1093_onTap_runningActionsCount = 0;
} else if (window.obj1093_onTap_runningActionsCount == 0) {
	obj1093_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj1093_onTap_runningActionsCount = window.obj1093_onTap_runningActionsCount - 1;

if (window.obj1093_onTap_runningActionsCount < 0) {
	window.obj1093_onTap_runningActionsCount = 0;
} else if (window.obj1093_onTap_runningActionsCount == 0) {
	obj1093_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1093_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1093_onTap_activeActionGroupIndex = -1;
		$("#obj1093").trigger("obj1093_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1093) {
				console.warn("de-queueing event obj1093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1093_onTap_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj1084: Event Touch Down
 *
 */

$("#obj1084").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1084_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1084_onTap is still running");
	return;
}
var obj1084_onTap_runningActionsCount = 0;
var obj1084_onTap_loopCount = 0;
obj1084_onTap_actionGroup0();
});


















/*
 *
 *   obj1087: Event Touch Down
 *
 */

$("#obj1087").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1087_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1087_onTap is still running");
	return;
}
var obj1087_onTap_runningActionsCount = 0;
var obj1087_onTap_loopCount = 0;
obj1087_onTap_actionGroup0();
});


















/*
 *
 *   obj1090: Event Touch Down
 *
 */

$("#obj1090").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1090_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1090_onTap is still running");
	return;
}
var obj1090_onTap_runningActionsCount = 0;
var obj1090_onTap_loopCount = 0;
obj1090_onTap_actionGroup0();
});


















/*
 *
 *   obj1093: Event Touch Down
 *
 */

$("#obj1093").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1093_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1093_onTap is still running");
	return;
}
var obj1093_onTap_runningActionsCount = 0;
var obj1093_onTap_loopCount = 0;
obj1093_onTap_actionGroup0();
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
	
$("#obj1076").trigger('SCEventShow');
$("#obj1080").trigger('SCEventShow');
$("#obj1082").trigger('SCEventShow');
$("#obj1084").trigger('SCEventShow');
$("#obj1087").trigger('SCEventShow');
$("#obj1090").trigger('SCEventShow');
$("#obj1093").trigger('SCEventShow');
$("#obj1105").trigger('SCEventShow');
$("#obj2017").trigger('SCEventShow');
	

});