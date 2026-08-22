var storageTabs;

chrome.tabs.onCreated.addListener(
  count
);
chrome.tabs.onRemoved.addListener(
  uncount
);

async function init() {
  var Intialnumber = await chrome.tabs.query({});
  number = Intialnumber.length;
  storageTabs = await chrome.storage.local.get({ numTabs: number });
}
init();

async function count() {
  if (!storageTabs) return;
  storageTabs.numTabs++;
  await chrome.storage.local.set({ numTabs: storageTabs.numTabs });
  console.log("Number of tabs: " + storageTabs.numTabs);
}

async function uncount() {
  if (!storageTabs) return;
  storageTabs.numTabs--;
  await chrome.storage.local.set({ numTabs: storageTabs.numTabs });
  console.log("Number of tabs: " + storageTabs.numTabs);
}