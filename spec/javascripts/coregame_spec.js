describe("Core Game", function () {
	beforeEach(function() {
		loadFixtures('index.html');
	});

	xit("variables", function() {
		expect(choose).toEqual(0);
		expect(current).toEqual([]);
		expect(array).toContain(1,2,3);
	});

	describe("Function gameOver", function () {
		beforeEach(function() {
			spyOn(window, 'gameOver');
		  	window.gameOver();
		});

		xit("tracks that the spy was called", function() {
		    expect(window.gameOver).toHaveBeenCalled();
		   	expect(window.gameOver.calls.length).toEqual(1);
		   	expect(window.gameOver).toHaveBeenCalledWith();
		});

  	});

	describe("Object startGame.init WITH Spy", function () {
		beforeEach(function() {
		    spyOn(startGame, 'init');
		   	startGame.init();
		});

		xit("tracks that the spy was called", function() {
		    expect(startGame.init).toHaveBeenCalled();
		   	expect(startGame.init.calls.length).toEqual(1);
		   	expect(startGame.init).toHaveBeenCalledWith();
		});
		
 	});

	describe("Object startGame.init WITHOUT Spy", function () {
		beforeEach(function() {
			spyOn(startGame, 'sortCards');
		  	startGame.init();
		});

		xit("variables", function () {
			expect(done).toEqual(0);
			expect(array).toNotEqual([1,2,3,1,2,3]);
		});

		xit("tracks that the spy was called", function() {
		    expect(startGame.sortCards).toHaveBeenCalled();
	    	expect(startGame.sortCards.calls.length).toEqual(1);
	    	expect(startGame.sortCards).toHaveBeenCalledWith();
		});

	  	xit("$('div.numbers').click", function() {
				var spyEvent = spyOnEvent('div.numbers', 'click');
				$("div.numbers").click(); 
				expect('click').toHaveBeenTriggeredOn('div.numbers');
				expect(spyEvent).toHaveBeenTriggered();
	  	});

	  	xit("$('div.numbers').click", function() {
				spyOn(startGame, 'selectCards');
				$("div.numbers").click(startGame.selectCards());
				expect(startGame.selectCards).toHaveBeenCalled();
	  	});
	  	
	});

	describe("Object startGame.sortCards WITH spy", function () {
		beforeEach(function() {
		    spyOn(startGame, 'sortCards');
	    	startGame.sortCards();
		});

		xit("tracks that the spy was called", function() {
		    expect(startGame.sortCards).toHaveBeenCalled();
		   	expect(startGame.sortCards.calls.length).toEqual(1);
		    expect(startGame.sortCards).toHaveBeenCalledWith();
		});

 	});

 	describe("Object startGame.sortCards WITHOUT spy", function () {
		beforeEach(function() {
    		startGame.sortCards();
		});

		xit("variables", function() {
			expect(cards[0].val).toContain(1,2,3);
		});

		xit("$('div#content')", function() {
	    	expect($("div#content").html()).toBe("");
		});

	}); 

	describe("Object startGame.selectCards WITH Spy", function () {
		beforeEach(function() {
		    spyOn(startGame, 'selectCards');
		   	startGame.selectCards();
		});

		xit("tracks that the spy was called", function() {
		    expect(startGame.selectCards).toHaveBeenCalled();
		   	expect(startGame.selectCards.calls.length).toEqual(1);
		   	expect(startGame.selectCards).toHaveBeenCalledWith();
		});
		
 	});

 	describe("Object startGame.selectCards WITHOUT spy", function () {
		beforeEach(function() {
    		startGame.selectCards();
		});

		xit("variables", function() {
			expect(choose).toEqual(1);
			expect(done).toEqual(0);
			expect(current).toBeDefined();
		});

		xit("gameOver call", function() {
			spyOn(window, 'gameOver');
			done = 3;
			expect(done).toBe(3);
			if(done === 3) window.gameOver();
		    expect(window.gameOver).toHaveBeenCalled();
		   	expect(window.gameOver.calls.length).toEqual(1);
		   	expect(window.gameOver).toHaveBeenCalledWith();
		});

	});

});