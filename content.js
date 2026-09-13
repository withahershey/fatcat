var img = document.createElement('div');
var text = document.createElement('div');
// img.style.backgroundImage = "url('" + chrome.runtime.getURL("img/cat1.png") + "')";
// img.style.backgroundColor = 'rgb(255, 0, 0)';
img.style.backgroundRepeat = 'no-repeat';
img.style.backgroundSize = 'contain';
img.style.width = '200px';
img.style.height = '100px';
img.style.position = 'fixed';
img.style.top = 0;
img.style.right = '50px';
img.style.zIndex = 2147483647;
img.style.pointerEvents = 'none';
text.style.right = '50px';
text.style.position = 'fixed';
text.style.top = '100px';


async function updateImage() {
    var storageTabs = await chrome.storage.local.get('numTabs');
    var tabcount = storageTabs.numTabs;
    var stage = 1;
    if (tabcount >= 0 && tabcount <= 5) {
        stage = 1;
    }else if (tabcount >= 6 && tabcount <= 10) {
        stage =2;
    }else if (tabcount >= 11 && tabcount<=15){
        stage = 3;
    }else if (tabcount>=16 && tabcount<=18){
        stage = 4;
    }else if (tabcount>=19 && tabcount<=20){
        stage = 5;
    }else if (tabcount>=21 && tabcount<=25){
        stage = 6;
    }else if (tabcount>=26 && tabcount<=30){
        stage = 7;
    }else if (tabcount>=31 && tabcount<=35){
        stage = 8;
    }else if (tabcount>=36 && tabcount<=45){
        stage = 9;
    }else if (tabcount>=46 && tabcount<=50){
        stage = 11;
    }
    console.log("tabcount:", tabcount, "stage:", stage);
    img.style.backgroundImage = "url('" + chrome.runtime.getURL("img/cat" + stage + ".png") + "')";
    text.textContent = "Number of tabs: " + tabcount;
}

updateImage();
document.body.appendChild(img);
document.body.appendChild(text);

chrome.storage.onChanged.addListener(function() {
  updateImage();
});
