// Observer which waits when <body> added to document
var observerForBody = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            var addedNode = mutation.addedNodes[i];

            if(addedNode.tagName == "BODY") {

                if(observerForBody)
                    observerForBody.disconnect();

                observer.observe(document.body, {
                    childList: true
                });

            }
        }
    });
});
observerForBody.observe(document.documentElement, {
    childList: true
});

// Observer which waits when content is loaded
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            var addedNode = mutation.addedNodes[i];

            if(addedNode.tagName == "DIV"
                && (addedNode.className == "vY"            // Gmail
                )) {

                removeNotifications();
                if(observer)
                    observer.disconnect();

            }
        }
    });
});

document.onload = function() {
    if(observerForBody)
        observerForBody.disconnect();
    if(observer)
        observer.disconnect();
};

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
        }
    }
}