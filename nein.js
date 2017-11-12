var browser = (function() {
  return window.browser || window.chrome;
})();

browser.tabs.onCreated.addListener(function(tab) {
  browser.windows.get(tab.windowId, { populate: true }, function(currentWindow) {
    if (currentWindow.tabs.length > 9) {
      browser.windows.get(tab.windowId, function(currentWindow) {
        browser.windows.create(optionsForNewWindow(tab, currentWindow));
      });
    }
  });
});

function optionsForNewWindow(tab, oldWindow) {
  var options = {
    tabId: tab.id,
    state: oldWindow.state
  };

  if (tab.hasOwnProperty("incognito")) {
    options.incognito = tab.incognito;
  } else {
    options.inPrivate = tab.inPrivate;
  }

  return options;
}

