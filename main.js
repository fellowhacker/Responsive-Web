$( function() {

		// height of the screen
		var screenHeight = window.innerHeight

		var iframe = document.getElementById('iframe');
		var header = document.getElementById('header');
		var headerHeight = header.offsetHeight;
		//alert(headerHeight)
		iframe.style.height =  (screenHeight - headerHeight- 5) + "px";

		$('#check').click( function() {

			var urlVal = $('#url').val()

			console.log(urlVal)
   			var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		  	if(!pattern.test(urlVal)) {
		     
		  		alert('Enter correct URL')
		     
			} else {

				iframe.src = urlVal;			    

			}

			$('#small').click( function() {

				$('#myModal').modal('hide')
				$('#iframe').css({"width" : "360px", "margin" : "0 auto"})

			});

		})


});