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
            + "#sb-button-notify.yt-uix-button"
            + "{"
            + "    display: none;"
            + "}"
            + "</style>";
        appendHtml(document.body, element);
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// ----------------------------------------------------------

	}
	}, 10);
});