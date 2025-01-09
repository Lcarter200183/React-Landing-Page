export class unorderedList {
    openingTag = "<ul='list-group-numbered>";
    closingTag = "</ul>";
    innerHtml = "";

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}