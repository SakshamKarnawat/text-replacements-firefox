<h1 align="center">
    <img src="icons/logo-48.png" alt="Logo" width="80" height="80">
    <br>
    Text Replacements
</h1>

<p align="center">
<a href="https://addons.mozilla.org/addon/ublock-origin/"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get Text Replacements for Firefox"></a>
</p>

Text Replacements is an extension that brings the Text Replacements feature from MacOS/iOS to Firefox. This is an issue that has been open for a long time ([#1149826](https://bugzilla.mozilla.org/show_bug.cgi?id=1149826)) and there's no timeline provided for its implementation. This extension is a workaround for that.

## Required Permissions
- `activeTab` - Required to be able to read the current URL and to be able to inject the script into the current tab
- `storage` - Required to be able to store the text replacements

## How to use
1. Install the extension
2. Open the extension using the icon in the toolbar
3. Add your text replacements
4. Refresh the page
5. Done!

## Issues
If you find any issues, please open an issue on the [Issues Tab](https://github.com/SakshamKarnawat/text-replacements-firefox/issues).

## Known issues
- The extension does not work on some websites like Gmail Message Body, WhatsApp Web, LinkedIn, etc. This is because these websites use a different way to render the text and the extension does not support that yet.

## Credits
- Logo made by [berkahicon] from [www.freepik.com](https://www.freepik.com/icon/typography_13777755#fromView=search&term=text&track=ais&page=1&position=30&uuid=cc4043cc-3565-4552-9276-4859fe6bf90c)