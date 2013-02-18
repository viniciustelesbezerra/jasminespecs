describe("Ajax Search", function () {
	var requestUrl = "http://google.com",
  	success = jasmine.createSpy("onSuccess");

	beforeEach(function() {
	    jQuery.ajax({
	      url: requestUrl,
	      type: "GET",
	      success: success
	    });
	});

    it("should be successful", function() {
	    jasmine.Ajax.stubRequest("GET", requestUrl).andReturn({body: {received_response: true}});
	    expect(jasmine.Ajax.getRequest("GET", requestUrl)).toHaveBeenRequested();
	    expect(success).toHaveBeenCalled();

	    expect(success.mostRecentCall.args[0]).toEqual({received_response: true});
	    expect(success.mostRecentCall.args[2].status).toEqual(200);
    });

});