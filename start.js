	
	$(document).on("ready", function(e)
	{	
		BrowserOne.init();
		BrowserOne.SwitchUserAgent("mobile");
		BrowserOne.load("http://google.com");

		BrowserTwo.init();
		BrowserTwo.SwitchUserAgent("mobile");
		BrowserTwo.load("http://google.com");
	});

	$( window ).resize(function() 
	{
		BrowserOne.resize()
		BrowserTwo.resize();
	})