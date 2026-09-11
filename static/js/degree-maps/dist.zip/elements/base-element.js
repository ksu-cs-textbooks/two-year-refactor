export class DegreeElement extends HTMLElement {
    root;
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }
    renderShadow(html) {
        this.root.innerHTML = html;
    }
}
