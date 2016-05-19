chrome.extension.onMessage.addListener(function(message, sender) {
    chrome.browserAction.setBadgeText({text: "0", tabId: sender.tab.id});
    chrome.browserAction.setBadgeBackgroundColor({
        color: 'red',
        tabId: sender.tab.id
    });
});