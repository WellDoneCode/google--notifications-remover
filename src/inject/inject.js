chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        // Because of bug in Chrome match_excludes with CSS files making CSS inline
        $(document.body).append("<style type='text/css'>"
            + "a#gbg1,"
            + "#sb-button-notify.yt-uix-button"
            + "{"
            + "    display: none;"
            + "}"
            + "</style>")
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		$("a#gbg1").css("display", "none");
        $("#sb-button-notify.yt-uix-button").css("display", "none");
		// ----------------------------------------------------------

	}
	}, 10);
});