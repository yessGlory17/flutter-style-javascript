import InputTypes from "../constant/InputTypes";
class _Input {
    constructor({ type, style, placeholder, onChange }) {
        this.type = type;
        this.style = style;
        this.placeholder = placeholder;
        this.render();
        this.event(onChange);
    }
    event(change) {
        switch (this.type) {
            case InputTypes.Text:
                this.element.addEventListener('keyup', change);
                break;
            case InputTypes.Password:
                this.element.addEventListener('keyup', change);
                break;
            default:
                this.element.addEventListener('change', change);
        }
    }
    render() {
        let element = document.createElement('input');
        element.type = this.type;
        element.placeholder = this.placeholder;
        this.element = element;
        this.style.load(this.element);
    }
}
export default _Input;
export const Input = ({ type, style, placeholder, onChange }) => new _Input({ type, style, placeholder, onChange });
