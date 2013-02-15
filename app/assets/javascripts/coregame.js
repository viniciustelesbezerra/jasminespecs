var choose = 0;
var done;
var current = [];
array = [1,2,3,1,2,3];

function gameOver() { 
	(confirm("Play again?")) ? 
	startGame.init() : 
	document.location = "http://www.codeschool.com/users/viniciustelesbezerra" 
}

startGame = {
		init : function() {
			done = 0;
			array.sort(function() { return 0.5 - Math.random() });
			this.sortCards();
			$("div.numbers").click(this.selectCards);
		},
		sortCards : function() {
			var cards = [{val:array}];
			$("div#content").empty();
			//$("#gameTemplate").tmpl(cards).appendTo("div#content");
		},
		selectCards : function() {
			$(this).children("span").toogleOpacity("show");
			choose++;
			if(choose < 2) {
				current["first_choice"] = $(this).data("value");
				current["first_element"] = $(this);
 			}
			else {
				current["second_choice"] = $(this).data("value");
				current["second_element"] = $(this);
				if(current["first_choice"] == current["second_choice"]) { 
					done++;
					done == array.length / 2 ? gameOver() : ''
				}
				else if(current["first_choice"] && current["second_element"]) {
					current["first_element"].children("span").toogleOpacity("hide");
					current["second_element"].children("span").toogleOpacity("hide");
				} 
				choose = 0;
				current = [];
 			}	
		},
	};
