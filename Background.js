chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg.type === "getData") {
        (async () => {
            const data = await chrome.storage.local.get(null);
            sendResponse({ data });
        })();
        return true;
    }
});
