# URLSnap

A lightweight Chrome extension that copies the current tab's URL to your clipboard with a simple keyboard shortcut.

## Features

- 🚀 Instantly copy the current tab's URL with CMD+Shift+C (Mac) or Ctrl+Shift+C (Windows/Linux)
- 🔔 Get a notification confirmation when the URL is copied

## Installation

### Install as Unpacked Extension
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked"
5. Navigate to the directory containing the extension files and select it
6. The extension should now appear in your extensions list

If you need to update the extension:
1. Make or download the changes
2. Go to `chrome://extensions/`
3. Find URLSnap in the list
4. Click the refresh icon

### Setting up the Keyboard Shortcut
1. Go to `chrome://extensions/shortcuts` in Chrome
2. Find "URLSnap" in the list
3. Set the "Copy current tab URL" shortcut:
   - For Mac: CMD+Shift+C
   - For Windows/Linux: Ctrl+Shift+C

Note: If the shortcut conflicts with another Chrome shortcut (like DevTools), you'll need to either:
- Choose a different shortcut for URLSnap
- Or change the conflicting Chrome shortcut first

## Usage

1. Visit any webpage
2. Press CMD+Shift+C (Mac) or Ctrl+Shift+C (Windows/Linux)
3. The URL is now in your clipboard!
4. You'll see a notification confirming the copy action

## Required Permissions

- `tabs`: To access the current tab's URL
- `clipboardWrite`: To copy the URL to your clipboard
- `notifications`: To show a confirmation when the URL is copied
- `scripting`: To execute the clipboard operation

## Version History

- 0.1: Initial release
  - Basic URL copying functionality
  - Notification system
  - Keyboard shortcut support

## Here be dragons

Use at your own risk, AI generated :)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
