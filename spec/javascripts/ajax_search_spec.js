describe("Ajax Search", function () {
	var requestUrl = "http://localhost:8888/spec/javascripts/fixtures/search.json";
  	//success = jasmine.createSpy("onSuccess");

	beforeEach(function() {
		success = spyOn(jQuery, 'ajax');

	    jQuery.ajax({
		    url: requestUrl,
		    type: "get",
		    dataType: "json",
		    //success: success,
		    success: function (a,b,c) {
		    	console.log(a,b,c);
		    }
	    });
	});

    it("should be successful", function() {
	    //jasmine.Ajax.stubRequest("GET", requestUrl).andReturn({body: {received_response: true}});
	    //expect(jasmine.Ajax.getRequest("GET", requestUrl)).toHaveBeenRequested();
	    expect(success).toHaveBeenCalled();

	    //expect(success.mostRecentCall.args[0]).toEqual({received_response: true});
	    //expect(success.mostRecentCall.args[2].status).toEqual(200);
    });

});