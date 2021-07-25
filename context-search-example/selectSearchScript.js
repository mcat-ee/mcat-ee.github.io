
var searchStub = "/"
var queryKey = "search";

var height = 30;
var width = 30;
var sideMargins = 15;
var yAxisMargins = 10;

document.addEventListener('selectionchange', () => {
    var selectionObject = document.getSelection();
    let selectedText = selectionObject.toString();
    if(selectedText.length == 0) {
        if(window.searchPromptElement != undefined) {
            window.searchPromptElement.remove();
        }
        return;
    }
    window.selectedText = selectedText;

    var parentElement = selectionObject.anchorNode.parentElement;
    // var range = window.getSelection().getRangeAt(0);
    var r=window.getSelection().getRangeAt(0).getBoundingClientRect();
    var x = r.left, y = r.top;

    var searchPromptElement = document.createElement("div");
    searchPromptElement.style.position = "absolute";
    searchPromptElement.style.display = "flex";
    searchPromptElement.style.flexDirection = "row";
    searchPromptElement.style.top = y+height;
    searchPromptElement.style.left = x;
    searchPromptElement.style.backgroundColor = "grey";
    
    var textDisplayElement = document.createElement("div");
    textDisplayElement.style.minWidth = width+"px";
    textDisplayElement.style.minHeight = height + "px";
    textDisplayElement.style.paddingLeft = sideMargins + "px";
    textDisplayElement.style.paddingRight = sideMargins + "px";
    textDisplayElement.style.paddingTop = yAxisMargins + "px";
    textDisplayElement.innerHTML = selectedText;
    searchPromptElement.appendChild(textDisplayElement);

    var goButtonElement  = document.createElement("a");
    goButtonElement.href = searchStub + `?${queryKey}=${selectedText}`
    goButtonElement.style.border = "2px solid black";
    goButtonElement.style.display = "flex";
    goButtonElement.style.justifyContent = "center";
    goButtonElement.style.alignItems = "center";
    goButtonElement.style.paddingLeft = sideMargins + "px";
    goButtonElement.style.paddingRight = sideMargins + "px";
    goButtonElement.innerHTML = "Go";
    searchPromptElement.appendChild(goButtonElement);

    if(window.searchPromptElement != undefined) {
        window.searchPromptElement.remove();
    }

    parentElement.appendChild(searchPromptElement);
    window.searchPromptElement = searchPromptElement;
});
