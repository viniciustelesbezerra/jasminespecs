describe("Memory Game", function () {
	beforeEach(function() {
	    spyOn(window, 'gameOver');
	    window.gameOver();
	});

	//loadFixtures("index.html");

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

	it("gameOver function", function() {
	    expect(window.gameOver).toHaveBeenCalled();
	});

});