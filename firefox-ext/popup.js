document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("addbutton");
  const removeButton = document.getElementById("removebutton");

  addButton.addEventListener("click", function() {
    browser.tabs.query({ active: true, currentWindow: true })
      .then((tabs) => {
        browser.tabs.executeScript(tabs[0].id, {
          file: "remove-rulers.js"
        });
        browser.tabs.executeScript(tabs[0].id, {
          file: "add-rulers.js"
        });
      })
      .catch((error) => {
        console.error("Error executing script:", error);
      });
  });

  removeButton.addEventListener("click", function() {
    browser.tabs.query({ active: true, currentWindow: true })
      .then((tabs) => {
        browser.tabs.executeScript(tabs[0].id, {
          file: "remove-rulers.js"
        });
      })
      .catch((error) => {
        console.error("Error executing script:", error);
      });
  });
});
