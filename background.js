var storageTabs;
var next = false;
async function init() {
  var number = await chrome.tabs.query({}).length;
  storageTabs = await chrome.storage.local.get({ numTabs: number });
  next = true;
}
init();

if (next) {
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