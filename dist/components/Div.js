class _Div {
    constructor({ childs, style }) {
        this.childs = childs;
        this.style = style;
        this.render(childs, style);
    }
    render(childs, style) {
        let element = document.createElement("div");
        this.element = element;
        style.load(this.element);
        for (let i = 0; i < childs.length; i++) {
            this.element.appendChild(childs[i].element);
        }
        document.getElementById("app").appendChild(this.element);
    }
}
export default _Div;
export const Div = ({ childs, style }) => new _Div({ childs, style });
