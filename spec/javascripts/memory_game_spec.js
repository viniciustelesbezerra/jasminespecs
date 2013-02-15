describe("Memory Game", function () {
	beforeEach(function() {
	    loadFixtures('index.html');
	});

	it("var choose", function() {
	    expect(choose).toEqual(0);
	});

	it("var done", function() {
	    expect(done).toBeDefined();
	});

	it("array current", function() {
	    expect(current).toEqual([]);
	});

	it("array array", function() {
	    expect(array).toContain(1,2,3);
	});

	describe("Function gameOver", function () {
		beforeEach(function() {
		    spyOn(window, 'gameOver');
		    window.gameOver();
		});

		it("tracks that the spy was called", function() {
		    expect(window.gameOver).toHaveBeenCalled();
		});

		it("tracks its number of calls", function() {
	    	expect(window.gameOver.calls.length).toEqual(1);
	  	});

	  	it("tracks all the arguments of its calls", function() {
	    	expect(window.gameOver).toHaveBeenCalledWith();
	  	});

  	});

	describe("Object startGame.init WITH Spy", function () {
		beforeEach(function() {
		    spyOn(startGame, 'init');
	    	startGame.init();
		});

		it("tracks that the spy was called", function() {
		    expect(startGame.init).toHaveBeenCalled();
		});

		it("tracks its number of calls", function() {
	    	expect(startGame.init.calls.length).toEqual(1);
	  	});

	  	it("tracks all the arguments of its calls", function() {
	    	expect(startGame.init).toHaveBeenCalledWith();
	  	});
		
  	});

	describe("Object startGame.init WITHOUT Spy", function () {
		beforeEach(function() {
		    spyOn(startGame, 'sortCards');
		    startGame.init();
		});

		it("var done", function () {
			expect(done).toEqual(0);
		});

		it("array array not Equal origin", function () {
			expect(array).toNotEqual([1,2,3,1,2,3]);
		});

		it("tracks that the spy was called", function() {
		    expect(startGame.sortCards).toHaveBeenCalled();
		});

		it("tracks its number of calls", function() {
	    	expect(startGame.sortCards.calls.length).toEqual(1);
	  	});

	  	it("tracks all the arguments of its calls", function() {
	    	expect(startGame.sortCards).toHaveBeenCalledWith();
	  	});

	  	//$("div.numbers").click
	  	
	});

	describe("Object startGame.sortCards WITH spy", function () {
		beforeEach(function() {
		    spyOn(startGame, 'sortCards');
	    	startGame.sortCards();
		});

		it("tracks that the spy was called", function() {
		    expect(startGame.sortCards).toHaveBeenCalled();
		});

		it("tracks its number of calls", function() {
	    	expect(startGame.sortCards.calls.length).toEqual(1);
	  	});

	  	it("tracks all the arguments of its calls", function() {
	    	expect(startGame.sortCards).toHaveBeenCalledWith();
	  	});

  	});

  	describe("Object startGame.sortCards WITHOUT spy", function () {
		beforeEach(function() {
	    	startGame.sortCards();
		});

		it("$('div#content')", function() {
		    expect($("div#content").html()).toBe("");
		});

	});
	  
});