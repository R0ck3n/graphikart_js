let draggedElement = null;
let items = null;
let startOrder = null;
let endOrder = null;

function handleDragStart(e) {
    this.style.opacity = "0.4";
    draggedElement = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("item", this.innerHTML);
    startOrder = this.getAttribute("data-position");
}

function handleDragOver(e) {
    if (e.preventDefault) e.preventDefault();

    e.dataTransfer.dropEffect = "move";
    return false;
}

function handleDragEnter(e) {
    this.classList.add("dragover");
}

function handleDragLeave(e) {
    this.classList.remove("dragover");
}

function handleDrop(e) {
    if (e.stopPropagation) e.stopPropagation();

    if (draggedElement != this) {
        draggedElement.innerHTML = this.innerHTML;
        draggedElement.setAttribute("data-innerHtml", this.innerHTML);
        let replacedItem = e.dataTransfer.getData("item");
        this.innerHTML = replacedItem;
        this.setAttribute("data-innerHtml", replacedItem);
        endOrder = this.getAttribute("data-position");

        console.log("start:", startOrder, "\n", "end", endOrder);
    }

    return false;
}

function handleDragEnd(e) {
    this.style.opacity = "1";

    items.forEach(function (item) {
        item.classList.remove("dragover");
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    items = document.querySelectorAll(".card");

    items.forEach(function (item) {
        item.addEventListener("dragstart", handleDragStart);
        item.addEventListener("dragenter", handleDragEnter);
        item.addEventListener("dragover", handleDragOver);
        item.addEventListener("dragleave", handleDragLeave);
        item.addEventListener("drop", handleDrop);
        item.addEventListener("dragend", handleDragEnd);
    });
});
