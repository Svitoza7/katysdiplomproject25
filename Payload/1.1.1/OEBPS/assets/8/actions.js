pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 191;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
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
var obj1038_onTap_activeActionGroupIndex = -1;
var obj1038_onTap_runningActionsCount = 0;
var obj1038_onTap_loopCount = 0;

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
	
(function (){
	var cwId = "obj223";

	var crosswordConfiguration = {
		appdata: {
			words: ["лев","риби","телець","стрілець","близнюки","рак","терези","скорпіон","овен","водолій","козоріг","діва"],
			clues: ["Який цар звірів став сузір’ям?","Які дві істоти пливуть разом на небі?","Сильна тварина із рогами.","Завжди з луком і стрілою, готовий поцілити в ціль.","Кастор і Поллукс два брати, які сяють у небі.","Який мешканець моря повзе боком поміж зірками та клацає клєшнями?","Єдиний знак зодіаку, який отримав назву неодушевленної істоти, символізує рівновагу та справедливість.","Який маленький, але небезпечно отруйний мешканець пустелі повзає зоряним небом?","Який рогатий зодіакальний знак першим зустрічає весну?","Який знак зодіаку носить глечик із водою?","Який знак зодіаку має роги й уперто піднімається на вершину?","За легендою це богиня, яка розсердилася на людства полишила землю та розправивши крила полетіла на небо."],
			checksum: "2B5EC96B1734FB4F85FBD2E08AB4FBBA",
			assessmentID: "crosswords223",
			assessmentCategory: "",
		},
		options: {
			rows: 23,
			cols: 12
		},
	};

	var controller = new SCCrosswords(cwId,  crosswordConfiguration);

	pubcoder.controllers.SCCrosswords = pubcoder.controllers.SCCrosswords || {};
	pubcoder.controllers.SCCrosswords[cwId] = controller;
	pubcoder.controllers.all[cwId] = controller;
})();

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
		
obj1038_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1038_onTap_activeActionGroupIndex = -1;
		$("#obj1038").trigger("obj1038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1038) {
				console.warn("de-queueing event obj1038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1038_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1040();
function playAudioFile_1040() {
	window.obj1038_onTap_runningActionsCount = obj1038_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1040")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1040");
			$("#obj_audio_playSoundFile1040").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1038_onTap_runningActionsCount = window.obj1038_onTap_runningActionsCount - 1;

if (window.obj1038_onTap_runningActionsCount < 0) {
	window.obj1038_onTap_runningActionsCount = 0;
} else if (window.obj1038_onTap_runningActionsCount == 0) {
	obj1038_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1038_onTap_runningActionsCount = window.obj1038_onTap_runningActionsCount - 1;

if (window.obj1038_onTap_runningActionsCount < 0) {
	window.obj1038_onTap_runningActionsCount = 0;
} else if (window.obj1038_onTap_runningActionsCount == 0) {
	obj1038_onTap_actionGroup1();
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
				window.obj1038_onTap_runningActionsCount = window.obj1038_onTap_runningActionsCount - 1;

if (window.obj1038_onTap_runningActionsCount < 0) {
	window.obj1038_onTap_runningActionsCount = 0;
} else if (window.obj1038_onTap_runningActionsCount == 0) {
	obj1038_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj1038_onTap_runningActionsCount = window.obj1038_onTap_runningActionsCount - 1;

if (window.obj1038_onTap_runningActionsCount < 0) {
	window.obj1038_onTap_runningActionsCount = 0;
} else if (window.obj1038_onTap_runningActionsCount == 0) {
	obj1038_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1038_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1038_onTap_activeActionGroupIndex = -1;
		$("#obj1038").trigger("obj1038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1038) {
				console.warn("de-queueing event obj1038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1038_onTap_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1042();
function runjs_1042() {
	window.obj1038_onTap_runningActionsCount = obj1038_onTap_runningActionsCount + 1;


	pubcoder.controllers.SCCrosswords["obj223"].reset(); 
	
	setTimeout(function() {
		window.obj1038_onTap_runningActionsCount = window.obj1038_onTap_runningActionsCount - 1;

if (window.obj1038_onTap_runningActionsCount < 0) {
	window.obj1038_onTap_runningActionsCount = 0;
} else if (window.obj1038_onTap_runningActionsCount == 0) {
	obj1038_onTap_actionGroup2();
}
	}, 1);
}














};
obj1038_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1038_onTap_activeActionGroupIndex = -1;
		$("#obj1038").trigger("obj1038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1038) {
				console.warn("de-queueing event obj1038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1038_onTap_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj1038: Event Touch Down
 *
 */

$("#obj1038").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1038_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1038_onTap is still running");
	return;
}
var obj1038_onTap_runningActionsCount = 0;
var obj1038_onTap_loopCount = 0;
obj1038_onTap_actionGroup0();
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
	
$("#obj221").trigger('SCEventShow');
$("#obj223").trigger('SCEventShow');
$("#obj1038").trigger('SCEventShow');
	

});