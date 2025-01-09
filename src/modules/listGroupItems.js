export class listGroupItems {
    openingTag = "<li='list-group-item>";
    closingTag = "</li>";
    innerHtml = "";

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}