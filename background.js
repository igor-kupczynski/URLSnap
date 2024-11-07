console.log('Background script loaded!');

async function copyTextToClipboard(text) {
    // Create a function to run in the context of the tab
    const copyFunction = (textToCopy) => {
        const textarea = document.createElement('textarea');
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        textarea.style.top = '-999999px';
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    };

    // Get the current active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Execute the copy function in the context of the tab
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: copyFunction,
        args: [text]
    });
}

chrome.commands.onCommand.addListener(async (command) => {
    console.log('Command received:', command);

    if (command === "copy-url") {
        try {
            const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
            console.log('Active tabs:', tabs);

            if (tabs[0]) {
                const url = tabs[0].url;
                console.log('URL to copy:', url);

                await copyTextToClipboard(url);
                console.log('URL copied successfully');

                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icon48.png',
                    title: 'URLSnap',
                    message: 'URL copied to clipboard!'
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed!');
});
