chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"js/jquery.js"});
    chrome.tabs.executeScript(null,{file:"js/content.js"});
});