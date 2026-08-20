var img = document.createElement('div');
img.style.backgroundImage = "url('" + chrome.runtime.getURL("images/cat1.png") + "')";
img.style.backgroundSize = 'cover';
img.style.width = '200px';
img.style.height = '200px';
img.style.position = 'fixed';
img.style.top = 0;
img.style.right = 0;
document.body.appendChild(img);