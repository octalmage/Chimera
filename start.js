	
	$(document).on("ready", function(e)
	{	
		

		BrowserOne.SwitchUserAgent("mobile");

		BrowserOne.switchMode("mobilewidth");
		BrowserTwo.switchMode("mobilewidth");

		BrowserOne.init();
		BrowserTwo.init();

		BrowserOne.load("http://google.com");
		BrowserTwo.load("http://google.com");


	});

	$( window ).resize(function() 
	{
		BrowserOne.resize();
		BrowserTwo.resize();
	})
