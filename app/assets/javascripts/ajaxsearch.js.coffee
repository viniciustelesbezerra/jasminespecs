jQuery ($) ->
	$("a#callajax").click ->
		$.ajax "/application/search",
			type: "post"
			dataType: "json" 
			error: (a,b,c) ->
				console.log(a,b,c)
			success: (a,b,c) ->
				console.log(a,b,c)
				$("#mydiv").text("Happy Face")	
