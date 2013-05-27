@choose = 0
@done = 0
@current = []
@array = [1,2,3,1,2,3]

@gameOver = -> if confirm("Play again?") then new startGame() else document.location = "http://www.codeschool.com/users/viniciustelesbezerra" 

class @startGame 
	
	constructor: ->
		done = 0
		array.sort -> 0.5 - Math.random()
		@sortCards()
		$("div.numbers").click @selectCards
		
	sortCards: ->
		window.cards = [{val:array}]
		$("div#content").empty()
		#$("#gameTemplate").tmpl(cards).appendTo("div#content")	
	
	selectCards: ->
		choose++
		$(this).children("span").toogleOpacity("show")
			
		if choose < 2 
			current["first_choice"] = $(this).data("value")
			current["first_element"] = $(this)
		else 
			current["second_choice"] = $(this).data("value")
			current["second_element"] = $(this)
				
			if (current["first_choice"] == current["second_choice"])  
				done++
				gameOver() if done == array.length / 2 

			else if(current["first_choice"] && current["second_element"]) 
				current["first_element"].children("span").toogleOpacity("hide")
				current["second_element"].children("span").toogleOpacity("hide")
				
			choose = 0
			current = []