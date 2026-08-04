var storageTabs;

async function init() {
    // var numTabs = 0;
    storageTabs = await chrome.storage.local.get({ numTabs: 0 });
}
init();
chrome.tabs.onCreated.addListener(
  count
);
chrome.tabs.onRemoved.addListener(
  uncount
);

async function count() {
  storageTabs.numTabs++;
  await chrome.storage.local.set({ numTabs: storageTabs.numTabs });
  console.log("Number of tabs: " + storageTabs.numTabs);
}

async function uncount() {
    storageTabs.numTabs--;
  await chrome.storage.local.set({ numTabs: storageTabs.numTabs });
  console.log("Number of tabs: " + storageTabs.numTabs);
}