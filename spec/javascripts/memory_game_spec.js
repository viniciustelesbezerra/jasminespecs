describe("Memory Game", function () {
	beforeEach(function() {
		loadFixtures('index.html');
	});

	describe("toogleOpacity Plugin", function () {
		it("toogle show/hide", function() {
			var element = $("span.numbervalue");

			element.toogleOpacity("show");
			expect(element.attr("style")).toEqual("opacity: 1;");

			element.toogleOpacity("hide");
			expect(element.attr("style")).toEqual("opacity: 0;");
		});

	});

});
