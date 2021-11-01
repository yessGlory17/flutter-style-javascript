class _Button {
    constructor({ width, height, text, onClick, style }) {
        console.log("Button oluşturuldu");
        this.text = text;
        console.log(style);
        this.id = "test-button";
        this.render(this.text, style);
        this.addEvent(onClick);
    }
    addEvent(click) {
        this.element.addEventListener("click", click);
    }
    render(text, style) {
        let element = document.createElement("button");
        this.element = element;
        style.load(this.element);
        this.element.appendChild(text.element);
        document.getElementById("app").appendChild(element);
    }
}
export default _Button;
export const Button = ({ width, height, text, onClick, style, }) => new _Button({ width, height, text, onClick, style });
