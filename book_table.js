const filesTable = document.getElementsByClassName("files")[0];
const tbody = filesTable.getElementsByTagName("tbody")[0];

while(tbody.childNodes.length - 1 > 2) {
    tbody.removeChild(tbody.lastChild);
}
