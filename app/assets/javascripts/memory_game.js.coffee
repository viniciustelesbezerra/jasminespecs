$ ->
	$.fn.toogleOpacity = (toogle) -> if toogle is "show" then this.animate({ opacity: '1'}, 'slow', 'linear') else this.animate({ opacity: '0'}, 'slow', 'linear')
	new startGame()