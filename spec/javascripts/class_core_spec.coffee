#//= require class_core_coffee

describe "Core Game", ->
	beforeEach ->
		@sg = null
		@sg = new startGame
		loadFixtures('index.html')

	it "variables", ->
		expect(choose).toEqual(0)
		expect(current).toEqual([])
		expect(array).toContain(1,2,3)
		

	describe "Function gameOver", ->
		beforeEach ->
			spyOn(window, 'gameOver')
			window.gameOver()
				
		it "tracks that the spy was called", ->
			expect(window.gameOver).toHaveBeenCalled()
			expect(window.gameOver.calls.length).toEqual(1)
			expect(window.gameOver).toHaveBeenCalledWith()
	
	
	describe "Object startGame.init WITH Spy", ->
		beforeEach ->
			spyOn(window, 'startGame')
			new startGame

		it "tracks that the spy was called", ->
			expect(startGame).toHaveBeenCalled()
			expect(startGame.calls.length).toEqual(1)
			expect(startGame).toHaveBeenCalledWith()
	
	describe "Object startGame.sortCards WITHOUT Spy", ->
		it "variables", ->
			expect(done).toEqual(0)
			expect(array).toNotEqual([1,2,3,1,2,3])
		
		xit "tracks that the spy was called", ->
			spyOn(@sg, 'sortCards')
			@sg.sortCards
			expect(@sg.sortCards()).toHaveBeenCalled()
			expect(@sg.sortCards.calls.length).toEqual(1)
			expect(@sg.sortCards).toHaveBeenCalledWith()
			
		xit "$('div.numbers').click", ->
			spyEvent = spyOnEvent('div.numbers', 'click')
			$("div.numbers").click
			expect('click').toHaveBeenTriggeredOn('div.numbers')
			expect(spyEvent).toHaveBeenTriggered()
			
		it "$('div.numbers').click", ->
			spyOn(@sg, 'selectCards')
			$("div.numbers").click(@sg.selectCards)
			#expect(sg.selectCards).toHaveBeenCalled()
		
  
	describe "Object startGame.sortCards WITH spy", ->
		beforeEach -> 
			spyOn(@sg, 'sortCards')
			@sg.sortCards
		
		xit "tracks that the spy was called", ->
			expect(@sg.sortCards).toHaveBeenCalled()
			expect(@sg.sortCards.calls.length).toEqual(1)
			expect(@sg.sortCards).toHaveBeenCalledWith()
		
	describe "Object startGame.sortCards WITHOUT spy", ->
		beforeEach -> 
			@sg.sortCards
		
		it "variables", ->
			expect(cards[0].val).toContain(1,2,3)
			
		xit "$('div#content')", ->
			expect($("div#content").html()).toBe("")
		
	
	describe "Object startGame.selectCards WITH Spy", ->
		beforeEach ->
			spyOn(@sg, 'selectCards')
			@sg.selectCards
	
		xit "tracks that the spy was called", ->
			expect(@sg.selectCards).toHaveBeenCalled()
			expect(@sg.selectCards.calls.length).toEqual(1)
			expect(@sg.selectCards).toHaveBeenCalledWith()
  
	
	describe "Object startGame.selectCards WITHOUT spy", ->
		beforeEach ->
			@sg.selectCards
			
		it "variables", ->
			expect(choose).toEqual(0)
			expect(done).toEqual(0)
			expect(current).toBeDefined()
			
		it "gameOver call", ->
			spyOn(window, 'gameOver')
			done = 3
			expect(done).toBe(3)
			window.gameOver() if done == 3
			#expect(window.gameOver).toHaveBeenCalled()
			#expect(window.gameOver.calls.length).toEqual(1)
			#expect(window.gameOver).toHaveBeenCalledWith()