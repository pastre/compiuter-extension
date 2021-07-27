const divs = document.getElementsByTagName("div")
var oldContent;
var divClone;
var ishacked = false;

function toggleHack() {

    ishacked = !ishacked
    if (ishacked) {
        divToReplace.textContent = "HACKED";
    } else {
        divToReplace.textContent = oldContent;
    }
}

function setupDiv() {
    for (const div of divs) {
        if(!div.textContent.includes("General Information About Project Gutenberg")) { continue; }
        divToReplace = div;
        oldContent = div.textContent;
    }
}

setupDiv();

let btn = document.createElement("button");
btn.innerHTML = "Hack";
btn.onclick = toggleHack;
document.body.appendChild(btn);

