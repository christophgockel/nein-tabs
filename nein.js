chrome.tabs.onCreated.addListener(function(tab) {
  chrome.windows.get(tab.windowId, { populate: true }, function(currentWindow) {
    if (currentWindow.tabs.length > 9) {
      chrome.windows.get(tab.windowId, function(currentWindow) {
        var createOptions = {
          tabId: tab.id,
          incognito: tab.incognito,
          state: currentWindow.state
        };

        chrome.windows.create(createOptions);
      });
    }
  });
});

