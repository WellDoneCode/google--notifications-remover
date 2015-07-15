var css =
    ".yt-uix-clickcard #sb-button-notify," // YouTube
    + "a[href*='plus.google.com/u/0/notifications'],"
    + "a[href*='plus.google.com/u/1/notifications'],"
    + "a[aria-label$='Unread notifications'],"
    + "a[aria-label*='Непрочитанных оповещений'],"
    + "a[aria-label*='Google Notifications'],"
    + "a[aria-label*='Оповещения Google']"
    + "{"
    + "    display: none !important;"
    + "}";

// Because of bug in Chrome match_excludes with CSS files making CSS inline
var injectCSS = function() {
    var style = document.createElement("style");
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    if(document.body.childNodes.length > 0)
        document.body.insertBefore(style, document.body.childNodes[0]);
    else
        document.body.appendChild(style);
}

if(document.body) {
    injectCSS();
}
else {
    // Observer which waits when <body> added to document
    var observerForBody = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                var addedNode = mutation.addedNodes[i];

                if(addedNode.tagName == "BODY") {

                    if(observerForBody)
                        observerForBody.disconnect();

                    injectCSS();
                }
            }
        });
    });
    observerForBody.observe(document.documentElement, {
        childList: true
    });
}