document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addbutton");
  const removeButton = document.getElementById("removebutton");
  addButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["remove-rulers.js", "add-rulers.js"],
      });
    });
  });

  removeButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["remove-rulers.js"],
      });
    });
  });
});
