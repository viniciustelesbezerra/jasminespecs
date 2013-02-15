jQuery(function($) {

	$.fn.toogleOpacity = function(toogle) { 
		toogle == "show" ? 
		this.animate({ opacity: '1'}, 'slow', 'linear') : 
		this.animate({ opacity: '0'}, 'slow', 'linear') 
	};

	startGame.init();

});
