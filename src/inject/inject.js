chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        function appendHtml(el, str) {
            var div = document.createElement('div');
            div.innerHTML = str;
            while (div.children.length > 0) {
                el.appendChild(div.children[0]);
            }
        }

        // Because of bug in Chrome match_excludes with CSS files making CSS inline
        var element = "<style type='text/css'>"
            //+ "a.gb_n:not(.gb_c)"
            + ".gb_qa .gb_n,"
            + ".gb_ra .gb_n,"
            + ".gb_qa .gb_q,"
            + ".gb_ra .gb_q,"
            + "#gbg1,"
            + "#sb-button-notify.yt-uix-button"
            + "{"
            + "    display: none;"
            + "}"
            + "</style>";
        appendHtml(document.body, element);
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// ----------------------------------------------------------
        var potentialElems = document.querySelectorAll(".gb_n, .gb_q");
        for(var i=0;i<potentialElems.length;i++)
        {
            var elem = potentialElems[i];
            if(elem.href && (elem.href.indexOf("plus.google.com/u/0/notifications") != -1
                || elem.href.indexOf("https://plus.google.com/u/1/notifications") != -1))
                elem.style.display = "none";
        }
	}
	}, 10);
});