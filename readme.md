# Nein Tabs

Say nein to too many tabs!

A Chrome, Firefox and Opera extension to help declutter your tabs.
After installing this you can only have up to nine tabs per browser window.
Every tab after that will be opened in a new window.

## Demo

![Nein Tabs Demo](https://github.com/christophgockel/nein-tabs/raw/master/demo.gif)


## Installation

### Chrome

Go to the [Chrome's Web Store](https://chrome.google.com/webstore/category/extensions) and search for "Nein Tabs", or follow this link directly: https://chrome.google.com/webstore/detail/nein-tabs/nlklecllphdnancbininkbkpheafhjmj.


### Firefox

You can search for "Nein Tabs" in [Mozilla's official Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/extensions/), or go directly to: https://addons.mozilla.org/en-US/firefox/addon/nein-tabs/


### Opera

When visiting [Opera's add-on gallery](https://addons.opera.com/en/extensions/) you can search for "Nein Tabs".
Alternatively you can go directly to: https://addons.opera.com/en/extensions/details/nein-tabs


### Edge

Edge's API doesn't support tearing off tabs (see [PR #1](https://github.com/christophgockel/nein-tabs/pull/1) for details).
Until Microsoft catches up in that area Nein Tabs cannot run in Edge.


## Known Issues

When installing the extension in Firefox it will show this notice:

> Reading manifest: Error processing background.persistent: Event pages are not currently supported. This will run as a persistent background page.

This is not a huge problem and should automatically go away in future Firefox versions when it starts to support event pages.
The fallback it provides to run it as a background page is okay as far as the extension is concerned.


## Changelog

See [changelog.md](changelog.md) for details.


## License

This project is licensed under the MIT License - see the [license.md](license.md) file for details.
