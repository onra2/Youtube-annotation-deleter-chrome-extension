chrome.runtime.onMessage.addListener(function(request){
    if (request.todo == "deleteAnnotation") {
        $(".ytp-ce-element,.ytp-ce-video").remove();
        $(".ytp-ce-element,.ytp-ce-video").remove();
        $(".ytp-ce-element,.ytp-ce-video").remove();
        $(".ytp-ce-element,.ytp-ce-video").remove();
    }
});

$(document).ready(function(){
    
});