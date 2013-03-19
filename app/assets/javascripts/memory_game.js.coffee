$ ->
	$.fn.toogleOpacity = (toogle) -> if toogle == "show" then $(this).attr("style", "opacity: 1;") else $(this).attr("style", "opacity: 0;")
	new startGame()