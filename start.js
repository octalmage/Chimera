	
	$(document).on("ready", function(e)
	{	
		BrowserOne.init();
		BrowserTwo.init();

		BrowserOne.SwitchUserAgent("mobile");

		BrowserOne.switchMode("mobilewidth");
		BrowserTwo.switchMode("mobilewidth");

		BrowserOne.load("http://google.com");
		BrowserTwo.load("http://google.com");


	});

	$( window ).resize(function() 
	{
		BrowserOne.resize()
		BrowserTwo.resize();
	})
