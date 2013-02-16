describe("Memory Game", function () {
	beforeEach(function() {
	  loadFixtures('index.html');
	});

	it("variables", function() {
	  expect(choose).toEqual(0);
	  expect(done).toBeDefined();
	  expect(current).toEqual([]);
	  expect(array).toContain(1,2,3);
	});

	describe("Function gameOver", function () {
		beforeEach(function() {
		  spyOn(window, 'gameOver');
		  window.gameOver();
		});

		it("tracks that the spy was called", function() {
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

		it("tracks that the spy was called", function() {
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

		it("variables", function () {
			expect(done).toEqual(0);
			expect(array).toNotEqual([1,2,3,1,2,3]);
		});

		it("tracks that the spy was called", function() {
	    expect(startGame.sortCards).toHaveBeenCalled();
    	expect(startGame.sortCards.calls.length).toEqual(1);
    	expect(startGame.sortCards).toHaveBeenCalledWith();
		});

  	it("$('div.numbers').click", function() {
			var spyEvent = spyOnEvent('div.numbers', 'click');
			$("div.numbers").click(); 
			expect('click').toHaveBeenTriggeredOn('div.numbers');
			expect(spyEvent).toHaveBeenTriggered();
  	});

  	it("$('div.numbers').click", function() {
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

		it("tracks that the spy was called", function() {
	    expect(startGame.sortCards).toHaveBeenCalled();
	   	expect(startGame.sortCards.calls.length).toEqual(1);
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