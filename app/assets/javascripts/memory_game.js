jQuery(function($) {

	$.fn.toogleOpacity = function(toogle) { 
		//toogle == "show" ? this.animate({ opacity: '1'}, 'slow', 'linear') : this.animate({ opacity: '0'}, 'slow', 'linear') 
		toogle == "show" ? 
		this.attr("style", "opacity: 1;") :
		this.attr("style", "opacity: 0;")
	};

	startGame.init();

});
