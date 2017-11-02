chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.index === 0) {
    return;
  }

  if (tab.index >= 9) {
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

