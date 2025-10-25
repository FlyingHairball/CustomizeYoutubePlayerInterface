chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg.type === "getData") {
        chrome.storage.local.get(null, (data) => {
            sendResponse({ data });
        });
        return true;
    }
});
