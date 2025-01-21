

export class ListGroupItems {
    openingTag = "<li='list-group-item>";
    closingTag = "</li>";
    innerHTML = "";

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}