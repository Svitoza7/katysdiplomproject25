pubcoder.projectID = pubcoder.projectID || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.id = pubcoder.project.id || "2DBE48463DD557418E03046A283E1790";
pubcoder.project.title = pubcoder.project.title || "Maksymchuk_Kateryna_diploma";
pubcoder.page.id = pubcoder.page.id || 704;
pubcoder.page.title = pubcoder.page.title || "23";
pubcoder.page.number = pubcoder.page.number || 23;
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
	
(function (){
	const objId = "obj709";

	const config = {
		appdata: {
			statements: [
    {
        "index": "0",
        "text": "Чи правда, що ми маємо 12 знаків зодіаку",
        "isTrue": true
    },
    {
        "index": "1",
        "text": "Чи правда, що деякі планети, екзопланети, наприклад, обертаються навколо інших зірок, а не Сонця?",
        "isTrue": true
    },
    {
        "index": "2",
        "text": "Чи правда, що всі зірки однакового розміру?",
        "isTrue": false
    },
    {
        "index": "3",
        "text": "Чи правда, що зірки живуть вічно? ",
        "isTrue": false
    },
    {
        "index": "4",
        "text": "Чи правда, що навколо Землі обертається ціле космічне кільце зі сміття?",
        "isTrue": true
    },
    {
        "index": "5",
        "text": "Чи правда, що чорна діра настільки сильна, що затягує в себе навіть світло?",
        "isTrue": true
    }
]
,
			checksum: "77F6467203554CB5B82E3CEB0F74B5A8",
			assessmentID: "truefalse709",
			assessmentCategory: ""
		},
		options: {
			randomStatementsToDisplay: 0,
			labelTrue: "Так",
			labelFalse: "Ні",
            revealCorrectAnswers: true,
		}
	};
	
	var controller = new SCTrueFalse(objId, config);
	pubcoder.controllers.SCTrueFalse = pubcoder.controllers.SCTrueFalse || {};
	pubcoder.controllers.SCTrueFalse[objId] = controller;
	pubcoder.controllers.all[objId] = controller;
})();
	
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
		
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
































































































		
		
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
	
$("#obj707").trigger('SCEventShow');
$("#obj709").trigger('SCEventShow');
$("#obj1068").trigger('SCEventShow');
$("#obj717").trigger('SCEventShow');
$("#obj2029").trigger('SCEventShow');
	

});