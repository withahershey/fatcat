var storageTabs;
var numTabs =0;
async function init() {
  var Intialnumber = await chrome.tabs.query({});
  number = Intialnumber.length;
  storageTabs = await chrome.storage.local.get({ numTabs: number });
  chrome.tabs.onCreated.addListener(
    count
  );
  chrome.tabs.onRemoved.addListener(
    uncount
  );
}
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
chrome.storage.local.clear()
init();