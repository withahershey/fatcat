var numTabs = 0;
chrome.tabs.onCreated.addListener(
  count
);
chrome.tabs.onRemoved.addListener(
  uncount
);

function count() {
  numTabs++;
  console.log("Number of tabs: " + numTabs);
}

function uncount() {
  numTabs--;
  console.log("Number of tabs: " + numTabs);
}