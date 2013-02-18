jQuery(function($) {
		
	$("a#callajax").click( function() {
		
		$.ajax({
			type: "post",
	  		url: "/application/search",
            dataType: "json",
	  		
	  		error: function (a,b,c) {
	  			console.log(a,b,c);
	  		},

	  		beforeSend: function () {
	  		},

	  		success: function (a,b,c) {
	  			console.log(a,b,c);
	  			$('#mydiv').text("Happy Face");
	  		}

		});

	});
	
});
