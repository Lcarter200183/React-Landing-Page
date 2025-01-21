

export class UnorderedList {
    openingTag = "<ul='list-group-numbered>";
    closingTag = "</ul>";
    innerHTML = "";

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}