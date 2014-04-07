chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// ----------------------------------------------------------
        var jobDone = false;
        var checkCounter = 0;

        function removeNotifications()
        {
            var potentialElems = document.querySelectorAll(".gb_n, .gb_q, .gb_r, .gb_s");
            for(var i=0;i<potentialElems.length;i++)
            {
                var elem = potentialElems[i];
                if(elem.href && (elem.href.indexOf("plus.google.com/u/0/notifications") != -1
                    || elem.href.indexOf("plus.google.com/u/1/notifications") != -1))
                {
                    elem.style.display = "none";
                    jobDone = true;
                }
            }
        }

        removeNotifications();
        var timer = setInterval(function() {
            if(!jobDone && checkCounter < 10)
            {
                checkCounter++;
                removeNotifications();
            }
            else
            {
                clearInterval(timer);
            }
        }, 500);
	}
	}, 10);
});