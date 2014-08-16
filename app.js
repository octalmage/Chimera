var gui = require('nw.gui');
var win = gui.Window.get();

//win.showDevTools();


iPhoneUserAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0";

	function Browser(name) 
	{
    	this.name = name;
        this.history = [];
        this.current=0;
    	this.SwitchUserAgent = function(type)
    	{
    		if (type=="mobile")
    		{
    			$("." + this.name).attr("nwUserAgent", iPhoneUserAgent);
    		}
    		else if (type=="desktop")
    		{
    			$("." + this.name).removeAttr("nwUserAgent");
    		}
    	}
    	this.url = function()
    	{
    		return $("." + this.name)[0].contentWindow.location.href;
    	}
    	this.load = function(url)
    	{
    		if (url.indexOf("http")==-1)
    		{
    			url="http://" + url;
    			$("#" + this.name + "Input").val(url);
    		}
    		$("." + this.name).attr("src", url);
            //TODO: When a url is loaded remove all urls from history after the current point. 
            //this.history.splice(this.current, this.history.length-this.current);
            this.history.push(url);
            console.log(this.history);
            this.current++;
    	}
    	this.back = function()
    	{
            //Built in history wasn't stable enough (both iframes shared the same history).
    		//$("#" + this.name)[0].contentWindow.history.back(); 
            if (this.history[this.current-1])
            {
                this.current--;
                this.load(this.history[this.current]);
            }
    	}
    	this.forward = function()
    	{
    		//TODO: Switch to managed history. 
    		$("#" + this.name)[0].contentWindow.history.forward(); 
    	}
    	this.init = function()
    	{
    		$("#" + this.name + "Back").on("click", function()
			{
				name=$(this).attr("id").substring(0, $(this).attr("id").length-4);
				window[name].back();
			});
			$("#" + this.name + "Forward").on("click", function()
			{
				name=$(this).attr("id").substring(0, $(this).attr("id").length-7);
				window[name].forward();
			});
    		$("#" + this.name + "Input").keypress(function (e) 
    		{
 				if (e.which == 13) 
 		 		{
 		 			name=$(this).attr("id").substring(0, $(this).attr("id").length-5);
    				window[name].load($(this).val());
    				$("#" + name + "Input").blur()
  				}
			});
			$("." + this.name).load(function() 
			{
                //TODO: Might need to rethink 
				name=$(this).attr("id");
				$("#" + name + "Input").val(window[name].url());
    		});
			this.resize();
    	}
    	this.resize = function()
    	{
    		$("." + this.name).css("height", window.innerHeight-30);
    		$("#" + this.name + "Input").css("width", (window.innerWidth/2)-parseInt($("#" + this.name + "Group").css("width")));
    	};
	}

	BrowserOne= new Browser('BrowserOne');
	BrowserTwo= new Browser('BrowserTwo');