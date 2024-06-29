chrome.commands.onCommand.addListener(function (command) {
    if (command === "open-gmail") {
        chrome.tabs.create({ url: "https://www.gmail.com" });
      }
    if (command === "open-youtube") {
      chrome.tabs.create({ url: "https://www.youtube.com" });
    }
    if (command === "open-chatgpt") {
        chrome.tabs.create({ url: "https://chat.openai.com/" });
      }
  });
  